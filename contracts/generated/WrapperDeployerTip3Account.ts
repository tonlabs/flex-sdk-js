
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";

export class WrapperDeployerTip3Account extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"},{"name":"wrapper_pubkey","type":"uint256"},{"name":"super_root","type":"address"},{"name":"ext_wallet_value","type":"uint128"},{"name":"wrapper_deploy_value","type":"uint128"},{"name":"wrapper_keep_balance","type":"uint128"},{"name":"reserve_wallet_value","type":"uint128"}],"outputs":[],"id":"0xa"},{"name":"setWrapperCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"setExtWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xc"},{"name":"setFlexWalletCode","inputs":[{"name":"code","type":"cell"}],"outputs":[],"id":"0xd"},{"name":"deploy","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"init_args","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x1111"},{"name":"getArgs","inputs":[{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"}],"outputs":[{"name":"value0","type":"cell"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"pubkey_","type":"uint256"},{"name":"wrapper_pubkey_","type":"uint256"},{"name":"ext_wallet_value_","type":"uint128"},{"name":"wrapper_deploy_value_","type":"uint128"},{"name":"wrapper_keep_balance_","type":"uint128"},{"name":"reserve_wallet_value_","type":"uint128"},{"name":"super_root_","type":"address"},{"name":"wrapper_code_","type":"optional(cell)"},{"name":"ext_wallet_code_","type":"optional(cell)"},{"name":"flex_wallet_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "deadd509837dd22c577d80e43c4d05afba0345ae0247b4b5ddf12bd2b60b506d",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperDeployerTip3Account.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
        wrapper_pubkey: string | number | bigint /* uint256 */,
        super_root: string /* address */,
        ext_wallet_value: string | number | bigint /* uint128 */,
        wrapper_deploy_value: string | number | bigint /* uint128 */,
        wrapper_keep_balance: string | number | bigint /* uint128 */,
        reserve_wallet_value: string | number | bigint /* uint128 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetWrapperCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setWrapperCode", input);
    }

    async runLocalSetWrapperCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setWrapperCode", input);
    }

    async runSetExtWalletCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setExtWalletCode", input);
    }

    async runLocalSetExtWalletCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setExtWalletCode", input);
    }

    async runSetFlexWalletCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "setFlexWalletCode", input);
    }

    async runLocalSetFlexWalletCode(input: {
        code: string /* cell */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setFlexWalletCode", input);
    }

    async runDeploy(input: {
        _answer_id: number /* uint32 */,
        init_args: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runHelper(this, "deploy", input);
    }

    async runLocalDeploy(input: {
        _answer_id: number /* uint32 */,
        init_args: string /* cell */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* address */,
        }
    }> {
        return await runLocalHelper(this, "deploy", input);
    }

    async runGetArgs(input: {
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runHelper(this, "getArgs", input);
    }

    async runLocalGetArgs(input: {
        tip3cfg: {
            name: string /* string */,
            symbol: string /* string */,
            decimals: number /* uint8 */,
            root_pubkey: string | number | bigint /* uint256 */,
            root_address: string /* address */,
        } /* tuple */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* cell */,
        }
    }> {
        return await runLocalHelper(this, "getArgs", input);
    }

}

