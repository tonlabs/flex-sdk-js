import {
    AbiContract,
    AbiFunction,
    AbiParam,
    TonClient,
} from "@eversdk/core";

export function contractCodeHeader(options: { hasDeploy: boolean }): string {
    return `
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    ${options.hasDeploy ? "deployHelper," : ""}
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
`;
}

export async function genContractCode(web3: TonClient, options: {
    name: string,
    abi: AbiContract,
    tvc: string,
}): Promise<{
    code: string,
    hasDeploy: boolean,
}> {
    const {
        name,
        abi,
        tvc,
    } = options;
    const contractCode = (await web3.boc.decode_tvc({ tvc })).code ?? "";
    const contractCodeHash = (await web3.boc.get_boc_hash({ boc: contractCode })).hash;
    let code = "";
    for (const fn of abi.functions || []) {
        if (fn.name !== "constructor") {
            code += fnTypesCode(name, fn);
        }
    }
    code +=
        `
export class ${name}Account extends Account {
    static package: ContractPackageEx = {
        abi: ${JSON.stringify(abi)} as unknown as AbiContract,
        tvc: "${tvc}",
        code: "${contractCode}",
        codeHash: "${contractCodeHash}",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(${name}Account.package, options);
        this.log = options.log ?? Log.default;
    }
`;
    code += deployFnCode(abi);
    for (const fn of abi.functions || []) {
        if (fn.name !== "constructor") {
            code += fnCode(name, fn);
        }
    }

    code += `}\n\n`;

    return {
        code,
        hasDeploy: true,
    };
}

const RESERVED_FN_NAMES = new Set([
    "contract",
    "client",
    "abi",
    "signer",
    "initData",
    "useCachedState",
    "address",
    "syncLastTransLt",
    "cachedBoc",
    "subscriptions",
    "getAddress",
    "getParamsOfDeployMessage",
    "calcDeployFees",
    "deploy",
    "deployLocal",
    "calcRunFees",
    "run",
    "runLocal",
    "boc",
    "refresh",
    "getAccount",
    "subscribeAccount",
    "subscribeTransactions",
    "subscribeMessages",
    "decodeMessage",
    "decodeMessageBody",
    "getBalance",
    "subscribe",
    "free",
]);

function fnName(fn: AbiFunction, prefix: string, suffix: string = ""): string {
    const middle = prefix !== "" ? `${fn.name[0].toUpperCase()}${fn.name.slice(1)}` : fn.name;
    const name = `${prefix}${middle}${suffix || ""}`;
    return RESERVED_FN_NAMES.has(name) ? `${name}_` : name;
}

function fnTypeDecl(contractName: string, fn: AbiFunction, isInput: boolean): string {
    const params = isInput ? fn.inputs : fn.outputs;
    if (params.length === 0) {
        return "";
    }
    const typeName = fnName(fn, contractName, isInput ? "Input" : "Output");
    const decl = paramsDecl(
        params,
        "",
        isInput,
    );
    return `export type ${typeName} = ${decl};\n\n`;
}

function fnTypesCode(contractName: string, fn: AbiFunction): string {
    return fnTypeDecl(contractName, fn, true) + fnTypeDecl(contractName, fn, false);
}


function fnHeader(contractName: string, fn: AbiFunction, isRun: boolean): string {
    const name = fnName(fn, isRun ? "run" : "");
    let header = `    async ${name}(`;
    if (fn.inputs.length > 0) {
        header += `input: ${fnName(fn, contractName, "Input")}`;
    }
    if (isRun) {
        if (fn.inputs.length > 0) {
            header += ", ";
        }
        header += `options?: RunHelperOptions`;
    }
    const returnType = `${isRun ? "RunHelperResult" : "RunLocalHelperResult"}`;
    const outputType = fn.outputs.length > 0 ? fnName(fn, contractName, "Output") : "void";
    return header + `): Promise<${returnType}<${outputType}>> {\n`;
}

function fnCode(contractName: string, fn: AbiFunction): string {
    const input = fn.inputs.length > 0 ? "input" : "{}";
    let code = fnHeader(contractName, fn, true);
    code += `        return await runHelper(this, "${fn.name}", ${input}, options);\n`;
    code += `    }\n\n`;

    code += fnHeader(contractName, fn, false);
    code += `        return await runLocalHelper(this, "${fn.name}", ${input});\n`;
    code += `    }\n\n`;
    return code;
}


function deployFnCode(abi: AbiContract): string {
    const ctor = abi.functions?.find(x => x.name === "constructor") ?? {
        name: "",
        inputs: [],
        outputs: [],
    };
    let code = `    async deployContract(`;
    if (ctor.inputs.length > 0) {
        code += `input: ${paramsDecl(ctor.inputs, "    ", true)}`;
    }
    code += "): Promise<{\n";
    code += "        transaction: Transaction,\n";
    code += "    }> {\n";

    const input = ctor.inputs.length > 0 ? "input" : "{}";
    code += `        return await deployHelper(this, "${ctor.name}", ${input});\n`;
    code += `    }\n\n`;
    return code;
}

function paramsDecl(params: AbiParam[], indent: string, isInput: boolean): string {
    let decl = `{\n`;
    for (const p of params) {
        decl += `${indent}    ${paramDecl(p, indent + "    ", isInput)},\n`;
    }
    decl += `${indent}}`;
    return decl;
}

function paramTypeDecl(
    type: TypeInfo,
    indent: string,
    isInput: boolean,
    components?: AbiParam[],
): string {
    let decl = "";
    switch (type.name) {
    case "uint128":
    case "uint256":
    case "uint64":
        decl += isInput ? "string | number | bigint" : "string";
        break;
    case "int8":
    case "uint8":
    case "uint16":
    case "uint32":
        decl += "number";
        break;
    case "bool":
        decl += "boolean";
        break;
    case "string":
    case "address":
    case "cell":
    case "bytes":
        decl += "string";
        break;
    case "tuple":
        decl += "{\n";
        for (const field of components ?? []) {
            decl += `${indent}    ${paramDecl(field, indent + "    ", isInput)},\n`;
        }
        decl += `${indent}}`;
        break;
    case "map":

        break;
    default:
        if (type.name.startsWith("map")) {
            const mapTypes = type.name.slice(4, -1).split(",");
            const keyType = parseType(mapTypes[0]);
            const valueType = parseType(mapTypes.slice(1).join(","));
            decl += "{\n";
            decl += `${indent}[key: ${paramTypeDecl(keyType, indent, isInput)}]: ${paramTypeDecl(
                valueType,
                indent + "    ",
                isInput,
                components,
            )}`;
            decl += `${indent}}`;
        } else {
            throw "Unknown ABI type";
        }
        break;
    }
    if (type.array) {
        decl += "[]";
    }
    return decl;
}

function paramDecl(param: AbiParam, indent: string, isInput: boolean): string {
    const type = parseType(param.type);
    let decl = `${param.name}${type.optional ? "?" : ""}: `;
    decl += paramTypeDecl(type, indent, isInput, param.components);
    decl += ` /* ${param.type} */`;
    return decl;
}

type TypeInfo = {
    name: string,
    optional: boolean,
    array: boolean,
}

function parseType(source: string): TypeInfo {
    const type: TypeInfo = {
        name: source,
        array: source.endsWith("[]"),
        optional: source.startsWith("optional("),
    };
    if (type.array) {
        type.name = type.name.slice(0, -2);
    }
    if (type.optional) {
        type.name = type.name.slice(9, -1);
    }
    return type;
}
