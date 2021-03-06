import { Account, AccountOptions } from "@eversdk/appkit";
import { ResultOfQueryTransactionTree } from "@eversdk/core";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperDeployerEverSetWrapperEverCodeInput = {
    code: string;
};
export declare type WrapperDeployerEverSetExtWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerEverSetFlexWalletCodeInput = {
    code: string;
};
export declare type WrapperDeployerEverDeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export declare type WrapperDeployerEverDeployOutput = {
    first: string;
    second: string;
};
export declare class WrapperDeployerEverAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setWrapperEverCode(input: WrapperDeployerEverSetWrapperEverCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetExtWalletCode(input: WrapperDeployerEverSetExtWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setExtWalletCode(input: WrapperDeployerEverSetExtWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runSetFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
    }>;
    setFlexWalletCode(input: WrapperDeployerEverSetFlexWalletCodeInput): Promise<{
        transaction: Transaction;
    }>;
    runDeploy(input: WrapperDeployerEverDeployInput): Promise<{
        transaction: Transaction;
        transactionTree: ResultOfQueryTransactionTree;
        output: WrapperDeployerEverDeployOutput;
    }>;
    deploy_(input: WrapperDeployerEverDeployInput): Promise<{
        transaction: Transaction;
        output: WrapperDeployerEverDeployOutput;
    }>;
}
//# sourceMappingURL=WrapperDeployerEverAccount.d.ts.map