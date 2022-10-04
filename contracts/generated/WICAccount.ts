
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type WICOnDeployInput = {
    keep_evers: string | number | bigint /* uint128 */,
    old_wrappers_cfg?: string /* optional(address) */,
    old_wrapper?: string /* optional(address) */,
    keep_wrapper: boolean /* bool */,
    deployer: string /* address */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type WICSetNextInput = {
    old_wrappers_cfg?: string /* optional(address) */,
    next_symbol?: string /* optional(string) */,
    next: string /* address */,
};

export type WICCloneUpgradeInput = {
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    first_clone?: string /* optional(address) */,
    last_clone?: string /* optional(address) */,
    prev_symbol?: string /* optional(string) */,
    wic_count: number /* uint32 */,
    token_version: number /* uint32 */,
    new_wrappers_cfg: string /* address */,
    wrapper_deployers: string[] /* address[] */,
};

export type WICGetDetailsOutput = {
    symbol: string /* string */,
    workchain_id: number /* int8 */,
    deployer?: string /* optional(address) */,
    wrapper?: string /* optional(address) */,
    type?: number /* optional(uint8) */,
    init_args?: string /* optional(cell) */,
    next?: string /* optional(address) */,
    unlisted: boolean /* bool */,
};


export class WICAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"keep_evers","type":"uint128"},{"name":"old_wrappers_cfg","type":"optional(address)"},{"name":"old_wrapper","type":"optional(address)"},{"name":"keep_wrapper","type":"bool"},{"name":"deployer","type":"address"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"setNext","inputs":[{"name":"old_wrappers_cfg","type":"optional(address)"},{"name":"next_symbol","type":"optional(string)"},{"name":"next","type":"address"}],"outputs":[],"id":"0xb"},{"name":"cloneUpgrade","inputs":[{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"first_clone","type":"optional(address)"},{"name":"last_clone","type":"optional(address)"},{"name":"prev_symbol","type":"optional(string)"},{"name":"wic_count","type":"uint32"},{"name":"token_version","type":"uint32"},{"name":"new_wrappers_cfg","type":"address"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[],"id":"0xc"},{"name":"unlist","inputs":[],"outputs":[],"id":"0xd"},{"name":"getDetails","inputs":[],"outputs":[{"name":"symbol","type":"string"},{"name":"workchain_id","type":"int8"},{"name":"deployer","type":"optional(address)"},{"name":"wrapper","type":"optional(address)"},{"name":"type","type":"optional(uint8)"},{"name":"init_args","type":"optional(cell)"},{"name":"next","type":"optional(address)"},{"name":"unlisted","type":"bool"}],"id":"0xe"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"symbol_","type":"string"},{"name":"workchain_id_","type":"int8"},{"name":"deployer_","type":"optional(address)"},{"name":"wrapper_","type":"optional(address)"},{"name":"type_","type":"optional(uint8)"},{"name":"init_args_","type":"optional(cell)"},{"name":"next_","type":"optional(address)"},{"name":"unlisted_","type":"bool"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "1e3604e66b36f97d6f286afdbfc5a064abc82bc90d705509e9f34707592f6066",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WICAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: WICOnDeployInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "onDeploy", input, options);
    }

    async onDeploy(input: WICOnDeployInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runSetNext(input: WICSetNextInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setNext", input, options);
    }

    async setNext(input: WICSetNextInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setNext", input);
    }

    async runCloneUpgrade(input: WICCloneUpgradeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "cloneUpgrade", input, options);
    }

    async cloneUpgrade(input: WICCloneUpgradeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "cloneUpgrade", input);
    }

    async runUnlist(options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlist", {}, options);
    }

    async unlist(): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlist", {});
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<WICGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<WICGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

