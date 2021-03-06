
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
    ResultOfQueryTransactionTree,
} from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type UserDataConfigOnDeployInput = {
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigDeployFlexClientInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    deploy_evers: string | number | bigint /* uint128 */,
};

export type UserDataConfigDeployFlexClientOutput = {
    value0: string /* address */,
};

export type UserDataConfigRequestDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type UserDataConfigRequestDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetFlexClientAddrInput = {
    pubkey: string | number | bigint /* uint256 */,
};

export type UserDataConfigGetFlexClientAddrOutput = {
    value0: string /* address */,
};

export type UserDataConfigGetDetailsOutput = {
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    binding: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* tuple */,
    flex_client_stub: string /* cell */,
    flex_client_code: string /* cell */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};

export type UserDataConfigGetConfigOutput = {
    super_root: string /* address */,
};


export class UserDataConfigAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"outputs":[]},{"name":"deployFlexClient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"deploy_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"requestDetails","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getFlexClientAddr","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"getDetails","inputs":[],"outputs":[{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"tuple"},{"name":"flex_client_stub","type":"cell"},{"name":"flex_client_code","type":"cell"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}]},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "te6ccgECLgEADAMAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBEEA6b/AdBtIG0jISBVAyHbPIAfZQLytDAJCAZVCFUMVQxVDFUMVQxVC1UMVQdVDFUMVQxVDFUMVQ3bPIAfZQLytI6AAtMAl4sIcQEwI9kBMCEB4XAj2SsfBQE8joAgWQFVAeBxlfK0MCDZcRS6k3Aj2eGLCNEicFnZBgEuXwVVD9MAjoAiIeGBAgAS1xgBMCFVAdkHAShxFLAB0wCOgCIh4QHT/wEwIVUB2QgC/u1ABMMAAtM/0x/TH5UB7VDbMIIQToyfoyMBuY6A4YIQRzOJloIQRzOJlhS68qkG8nntRNDTADDyf3D4ZPgq0CDXSsAD8uBFgBlh0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzgL6QDBQAs5xzwthghDHM4mWEs8LHwLU1NX6QDAKCQAsUAXOyVADzMlw+wBVJFUIVfqAGGUB2QKGghBnudqhIwG5joDhghBOjJ+jE7ryqTAE8nntRNDTAAHyf9Mf0x/TH46AAdMAm3BwcSVVIV4QVRLZIgHh+kDT/3Al2Q0LAfQB9AT0BPQEcPhkBKME9AQwBPLQZSJu8tBlIW7y0GUgbvLQZSNu8tBlgCFh0wEBwALIAfKwcyEBzwsBcCIBzwsBydABzoIQzoyfoxLPCx8dyx8B+kAwUAzOUKvLHxjLHxTOcRnPC2FQKMv/EswUzBTMEszJUAPMyXD7AAwAIoIQToyfo1VAVQZV+IAWZQHZAWSCEGe52qETuvKpBfJ57UTQ0wAB8n/TH9Mf0x+OgAHTAJdxI3BwVSHZIgHh+kDT/3Al2Q4BrHD4ZAH0BPQE9ARVD9XT/9EGowL0BDAC8tBlMCNu8tBlAm7y0GVu8tBlbvLQZfgo0wEhwQOYMMAD8tBj8jThAcAC8rTTAI6AIiHhAdMEAdcYATAhVQHZDwH8yHAhAc8LAIAkYdMBAcAC8rBzIwHPCwFwJAHPCwHJ0AHOcCMBzwtfAvpAMAHOcSMBzwsBViZVAvQAGcv/cM8Lv1YlAfQAgCVhAfQAUHjMdCMBzwsCBdIHcRnPC2GCEOe52qEVzwsfBsoHcRLPCwACyVAIzMkBzHDPCwDJ+QAWEABIzwv/ydBQAs7JUATMyXD7AIIQZ7naoVWQVTuAD4ARY4AdZQHZAUrfAdAg0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4XABVTJfBQHZEgOibSBtVQYhIFUDIds8gB9lAvK0MAkIBlUIVQxVDFUMVQxVDFULVQxVB1UMVQxVDFUMVQxVDds8gB9lAvK0joAC0wCXiwhxATAj2QEwIQHhcCPZKx8TATxxFrCOgCYh4HGV8rQwINlxFbqTcCTZ4YsI0SNwWdkUAUYwVhjHAQHDAI6AIiHhVhrHAiHhMPJ5cIAVYnOAF2OAGGUB2RUC/DBWGdcNH2+jnXCAGGJzgBpjgBtlAdnhMFYa10nysJ/yeXCAFWJzgBdjgBhlAdnhgBlh0x+OEV8E8nlwgBVicoAXY4AXZQHZghBPHjDIIwG5joDhghAnZKfEE7oicHCAHWFygBxjAYATemNygBZjcoAbY4AdYYAeYXOAHGPhBBkWAVbyee1E0NMAAfJ/0x/TH9MfjoAB0wCbcHBxJVUhXhBVEtkiAeH6QNP/cCXZFwH+AfQEDdMfMA30BPQEcPhkBKME9AQwBPLQZSJu8tBlIW7y0GUgbvLQZSNu8tBlyHYhAc8LA3AiAc8LAcnQAc4N0wDTANMA+kAwVQ/OgBJhVQTLHy8Byx8uAcsfcBL6AlEdzwsfVQ9VAfQAcPoCcPoCcc8LYVKizikBy/8nAcwmARgAiswlAcwoAczJAczJgED7AMhwzwsAHssfHMsfGssfcc8LABbOFMv/9AAS9AAS9AD0AMntVIIQJ2SnxIAbYnKAHWOAHWUB2QH+ghBcKX7QIwG5jmWCEFwpftATuiJwcFUh4e1E0NMAAfJ/cPhkyHDPCwAB0x8Cyx8B0x8Cyx8C+kAC0x8wUAPLHwHT/9TU1NRxF88LABfOFMv/EvQA9AD0ABL0AMntVIIQXCl+0IAaYnKAHGOAHGUB2eGCEE8eMMgTuiJwcIAdYRoBkHKAHGMBgBN6Y3KAFmNygBtjgB1hgB5hc4AcY+EE8nntRNDTAAHyf9Mf0x/TH46AAdMAm3BwcSVVIV4QVRLZIgHh+kDT/3Al2RsBtAH0BA3TH9P/cPhkBKME038wD/QE9AT0BDAG8tBlJG7y0GUhbvLQZSBu8tBlJW7y0GX4KNMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2RwB/shwIQHPCwBxIQHPCwHtR28QgBRh0wACUtTMcCUBzwtfBG8XdBfPCwII0gcwBgPTANMA+kD6QFYbVQj0AAH6ADAIbxBxF88LAFCsygdQV6Fy+wJQ18v/cM8Lv1YXAfQAVhcB9AAFyVAFzMnIcCEBzwsAdiEBzwsCcCMBzwsBydAdAf4BzlI7zHDPCwDJ+QAWzwv/ydBSCs5xFs8LAVUEgBph+gJS8sxWGFUB9ABxEs8LAHAS+gJQM8xwE/oCcBPPCwBzE88LYQLJehLPCx9WFgHLH1YVAcsfVhQByx9WEQHOVhABy/8rAcwCzFKSzHESzwsAUuLMyQHMyXD7AMhRu8sfHgDYFs52KwHPCwNwHM8LAcnQAckLzhPOcPoCgBNhAfQAcPoCcPoCcc8LYRnMyYEAgPsAyHDPCwCAEWEByx9VDwHLHx/LH3HPCwAbzhnL/xb0ABL0APQAFPQAye1UghBPHjDIgB5icoAgY4AgZQHZAbztQI5WgBlh7VALgBFhgBNhgBRhcF/wcF8wgBNhgDBhgCJhcoAvY4AkYYAwYXeAH2OAIGGAJWGAIWGAJmF0gC1jcoAnYwGAMGGAKmF1gCxjgBCAIGOAMGGAMGFVD9MAIAP+jiVxcF/AVQ4wVQtVGVUJVQ+ADoARY4AbYYAbYXeAFWNzgBxjXhDZIgHhINMAji9xcF/AVR2AEWFfA1ULVRlVCVUPgA6AEWOAG2GAG2F1gBdjgBxhcoAbY3KAHWMB2XEjAbmOgOBxE7oi4dWOgAHTAJlwcCRVEQFVEdkiAeHTBCQiIQAGcSTZAfyOeY5njlWOQwLRcV8gVQRVF1UbVQ6AEmGAFGFygBZjc4AZY18NVQxVGlUKVQ+ADoARY4AcYYAcYXOAGmNygBtjAXOAGmNygB1jAdkD0wCUcHAm2SIB4dQBcSbZA9MAlHBwJtkiAeHUAXEm2QLTAJRwcCXZIgHh1AFxJdkC0wAjACybcF8gJlURVQNVEtkiAeHTANMAcSbZARaOgCFVIV4QVRIB4iUBLo6AAdMAmXBwJFURAVUR2SIB4dMEcSTZJgE2joAC0wCbcF8gJlURVQNVEtkiAeHTANMAcSbZJwEkjoAC0wCUcHAl2SIB4dQBcSXZKAEkjoAD0wCUcHAm2SIB4dQBcSbZKQH8AtMAjkVxcF8gcVUFVQhVG1UOgBJhgBRhdYAWY18MVQ1VG1ULVQ+ADoARY4AdYYAdYYAdYXKAHGMBc4AZY4AcYYAcYYAdYYAeYdkiAeHUAXBxXyBVBVUIVRtVDoASYYAUYXWAFmNfDFUNVRtVC1UPgA6AEWOAHWGAHWGAHWFyKgAugBxjAYAcYXKAG2MBcoAbY4AdYYAeYdkB7O1AjjqAEmHtUA4PVQ+AEWFwX/BwX8CAHGGADYAgY4ApYYAtYXSAJ2NygCtjAYAsYYAtYYAVgBljgC5hgC5hJtMAjizTANMA0wD6QPpA+gD0BPoA+gDTP9MfcXBVDYAVYVtVDlU/VadVL14QgBNh2SIB4Vsm0wEsAf6OKm1tcnBfICVwX1BVHFtVDVU+VSuAEWFVHYARYVU8gBFhgBFhgBNhgBNh2SLBA444AsADIuH6QAEB+kABAdM/0x8BbW1xcnBfQFUNgBVhW1UOVT9VL1UfVQ2AEWFVO1UfAYASYYATYdnhAsACIuH6QAEB+kABAfoAbW1xcCNwLQBOXzBxVQ2AFWFbVQ5VP1UvgBFhVR0BgBFhVTyAEWGAEWGAEmGAE2HZ",
        codeHash: "8d0892b9dff38a58af7fc3e8941507b40c8271c21e14b909d698bcc870edb7f5",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(UserDataConfigAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: UserDataConfigOnDeployInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: UserDataConfigOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runDeployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserDataConfigDeployFlexClientOutput,
    }> {
        return await runHelper(this, "deployFlexClient", input);
    }

    async deployFlexClient(input: UserDataConfigDeployFlexClientInput): Promise<{
        transaction: Transaction,
        output: UserDataConfigDeployFlexClientOutput,
    }> {
        return await runLocalHelper(this, "deployFlexClient", input);
    }

    async runRequestDetails(input: UserDataConfigRequestDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserDataConfigRequestDetailsOutput,
    }> {
        return await runHelper(this, "requestDetails", input);
    }

    async requestDetails(input: UserDataConfigRequestDetailsInput): Promise<{
        transaction: Transaction,
        output: UserDataConfigRequestDetailsOutput,
    }> {
        return await runLocalHelper(this, "requestDetails", input);
    }

    async runGetFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserDataConfigGetFlexClientAddrOutput,
    }> {
        return await runHelper(this, "getFlexClientAddr", input);
    }

    async getFlexClientAddr(input: UserDataConfigGetFlexClientAddrInput): Promise<{
        transaction: Transaction,
        output: UserDataConfigGetFlexClientAddrOutput,
    }> {
        return await runLocalHelper(this, "getFlexClientAddr", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserDataConfigGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: UserDataConfigGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: UserDataConfigGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: UserDataConfigGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

}

