
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
export type WrapperInitInput = {
    external_wallet: string /* address */,
    reserve_wallet_evers: string | number | bigint /* uint128 */,
    internal_wallet_code: string /* cell */,
};

export type WrapperDeployEmptyWalletInput = {
    _answer_id: number /* uint32 */,
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
};

export type WrapperDeployEmptyWalletOutput = {
    value0: string /* address */,
};

export type WrapperOnTip3TransferInput = {
    _answer_id: number /* uint32 */,
    balance: string | number | bigint /* uint128 */,
    new_tokens: string | number | bigint /* uint128 */,
    evers_balance: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    sender?: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* optional(tuple) */,
    receiver: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    payload: string /* cell */,
    answer_addr: string /* address */,
};

export type WrapperOnTip3TransferOutput = {
    err_code: number /* uint32 */,
    flex_wallet: string /* address */,
};

export type WrapperBurnInput = {
    tokens: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    notify?: string /* optional(cell) */,
};

export type WrapperTransferFromReserveWalletInput = {
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type WrapperRequestTotalGrantedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperRequestTotalGrantedOutput = {
    value0: string /* uint128 */,
};

export type WrapperClonedInput = {
    _answer_id: number /* uint32 */,
};

export type WrapperClonedOutput = {
    first?: string /* optional(address) */,
    second: string /* uint256 */,
};

export type WrapperSetClonedInput = {
    cloned?: string /* optional(address) */,
    cloned_pubkey: string | number | bigint /* uint256 */,
    wrappers_cfg: string /* address */,
    wrappers_cfg_code_hash: string | number | bigint /* uint256 */,
    wrappers_cfg_code_depth: number /* uint16 */,
};

export type WrapperGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    total_granted: string /* uint128 */,
    wallet_code: string /* cell */,
    external_wallet?: string /* optional(address) */,
    reserve_wallet: string /* address */,
    super_root: string /* address */,
    cloned?: string /* optional(address) */,
    type_id: number /* uint8 */,
};

export type WrapperGetTip3ConfigOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
};

export type WrapperHasInternalWalletCodeOutput = {
    value0: boolean /* bool */,
};

export type WrapperGetWalletAddressInput = {
    pubkey: string | number | bigint /* uint256 */,
    owner?: string /* optional(address) */,
};

export type WrapperGetWalletAddressOutput = {
    value0: string /* address */,
};

export type WrapperGetReserveWalletOutput = {
    value0: string /* address */,
};


export class WrapperAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"init","inputs":[{"name":"external_wallet","type":"address"},{"name":"reserve_wallet_evers","type":"uint128"},{"name":"internal_wallet_code","type":"cell"}],"outputs":[],"id":"0xa"},{"name":"deployEmptyWallet","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"},{"name":"evers","type":"uint128"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xb"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[{"name":"err_code","type":"uint32"},{"name":"flex_wallet","type":"address"}],"id":"0xca"},{"name":"burn","inputs":[{"name":"tokens","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xc"},{"name":"transferFromReserveWallet","inputs":[{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"requestTotalGranted","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xe"},{"name":"cloned","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first","type":"optional(address)"},{"name":"second","type":"uint256"}],"id":"0x400"},{"name":"setCloned","inputs":[{"name":"cloned","type":"optional(address)"},{"name":"cloned_pubkey","type":"uint256"},{"name":"wrappers_cfg","type":"address"},{"name":"wrappers_cfg_code_hash","type":"uint256"},{"name":"wrappers_cfg_code_depth","type":"uint16"}],"outputs":[],"id":"0x500"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"total_granted","type":"uint128"},{"name":"wallet_code","type":"cell"},{"name":"external_wallet","type":"optional(address)"},{"name":"reserve_wallet","type":"address"},{"name":"super_root","type":"address"},{"name":"cloned","type":"optional(address)"},{"name":"type_id","type":"uint8"}],"id":"0x100"},{"name":"getTip3Config","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"id":"0x200"},{"name":"hasInternalWalletCode","inputs":[],"outputs":[{"name":"value0","type":"bool"}],"id":"0x10"},{"name":"getWalletAddress","inputs":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x300"},{"name":"getReserveWallet","inputs":[],"outputs":[{"name":"value0","type":"address"}],"id":"0x12"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"wic_unsalted_code_","type":"cell"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"workchain_id_","type":"int8"},{"name":"root_pubkey_","type":"uint256"},{"name":"total_granted_","type":"uint128"},{"name":"internal_wallet_code_","type":"optional(cell)"},{"name":"start_balance_","type":"varuint16"},{"name":"super_root_","type":"optional(address)"},{"name":"wallet_","type":"optional(address)"},{"name":"cloned_","type":"optional(address)"},{"name":"cloned_pubkey_","type":"uint256"},{"name":"type_id_","type":"uint8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "016dd15c03ca5a57f8017ea80f4bad29c9fe45d957d9584efd81eaf95ade4cef",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(WrapperAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runInit(input: WrapperInitInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "init", input);
    }

    async init(input: WrapperInitInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "init", input);
    }

    async runDeployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyWallet", input);
    }

    async deployEmptyWallet(input: WrapperDeployEmptyWalletInput): Promise<{
        transaction: Transaction,
        output: WrapperDeployEmptyWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyWallet", input);
    }

    async runOnTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: WrapperOnTip3TransferInput): Promise<{
        transaction: Transaction,
        output: WrapperOnTip3TransferOutput,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runBurn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: WrapperBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runTransferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferFromReserveWallet", input);
    }

    async transferFromReserveWallet(input: WrapperTransferFromReserveWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferFromReserveWallet", input);
    }

    async runRequestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runHelper(this, "requestTotalGranted", input);
    }

    async requestTotalGranted(input: WrapperRequestTotalGrantedInput): Promise<{
        transaction: Transaction,
        output: WrapperRequestTotalGrantedOutput,
    }> {
        return await runLocalHelper(this, "requestTotalGranted", input);
    }

    async runCloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperClonedOutput,
    }> {
        return await runHelper(this, "cloned", input);
    }

    async cloned(input: WrapperClonedInput): Promise<{
        transaction: Transaction,
        output: WrapperClonedOutput,
    }> {
        return await runLocalHelper(this, "cloned", input);
    }

    async runSetCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "setCloned", input);
    }

    async setCloned(input: WrapperSetClonedInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "setCloned", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: WrapperGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetTip3Config(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runHelper(this, "getTip3Config", {});
    }

    async getTip3Config(): Promise<{
        transaction: Transaction,
        output: WrapperGetTip3ConfigOutput,
    }> {
        return await runLocalHelper(this, "getTip3Config", {});
    }

    async runHasInternalWalletCode(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runHelper(this, "hasInternalWalletCode", {});
    }

    async hasInternalWalletCode(): Promise<{
        transaction: Transaction,
        output: WrapperHasInternalWalletCodeOutput,
    }> {
        return await runLocalHelper(this, "hasInternalWalletCode", {});
    }

    async runGetWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runHelper(this, "getWalletAddress", input);
    }

    async getWalletAddress(input: WrapperGetWalletAddressInput): Promise<{
        transaction: Transaction,
        output: WrapperGetWalletAddressOutput,
    }> {
        return await runLocalHelper(this, "getWalletAddress", input);
    }

    async runGetReserveWallet(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runHelper(this, "getReserveWallet", {});
    }

    async getReserveWallet(): Promise<{
        transaction: Transaction,
        output: WrapperGetReserveWalletOutput,
    }> {
        return await runLocalHelper(this, "getReserveWallet", {});
    }

}

