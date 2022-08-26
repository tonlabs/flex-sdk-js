
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
export type TONTokenWalletTransferInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletTransferToRecipientInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    deploy: boolean /* bool */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletBalanceInput = {
    _answer_id: number /* uint32 */,
};

export type TONTokenWalletBalanceOutput = {
    value0: string /* uint128 */,
};

export type TONTokenWalletAcceptMintInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type TONTokenWalletAcceptTransferInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    payload?: string /* optional(cell) */,
};

export type TONTokenWalletDestroyInput = {
    dest: string /* address */,
};

export type TONTokenWalletDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type TONTokenWalletDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type TONTokenWalletGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type TONTokenWalletGetBalanceOutput = {
    value0: string /* uint128 */,
};


export class TONTokenWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"destroy","inputs":[{"name":"dest","type":"address"}],"outputs":[],"id":"0xd"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "e0f8022242367f4e34c8d22ce60e1c50cd42e592b99eb45dd296ea51da623a0e",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(TONTokenWalletAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: TONTokenWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async transferToRecipient(input: TONTokenWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletBalanceOutput,
    }> {
        return await runHelper(this, "balance", input);
    }

    async balance(input: TONTokenWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: TONTokenWalletBalanceOutput,
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async acceptMint(input: TONTokenWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async acceptTransfer(input: TONTokenWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runDestroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "destroy", input);
    }

    async destroy(input: TONTokenWalletDestroyInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroy", input);
    }

    async runDetails(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletDetailsOutput,
    }> {
        return await runHelper(this, "details", input);
    }

    async details(input: TONTokenWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: TONTokenWalletDetailsOutput,
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: TONTokenWalletGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: TONTokenWalletGetBalanceOutput,
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async getBalance_(): Promise<{
        transaction: Transaction,
        output: TONTokenWalletGetBalanceOutput,
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

