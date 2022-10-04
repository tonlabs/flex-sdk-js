
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
export type FlexWalletTransferInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletTransferToRecipientInput = {
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

export type FlexWalletBalanceInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletBalanceOutput = {
    value0: string /* uint128 */,
};

export type FlexWalletAcceptMintInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletAcceptTransferInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    payload?: string /* optional(cell) */,
};

export type FlexWalletBurnInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    notify?: string /* optional(cell) */,
};

export type FlexWalletUnwrapInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
    notify?: string /* optional(cell) */,
};

export type FlexWalletMakeOrderInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    lend_balance: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    price_num: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    salt: string /* cell */,
    args: {
        sell: boolean /* bool */,
        immediate_client: boolean /* bool */,
        post_order: boolean /* bool */,
        amount: string | number | bigint /* uint128 */,
        client_addr: string /* address */,
        user_id: string | number | bigint /* uint256 */,
        order_id: string | number | bigint /* uint256 */,
    } /* tuple */,
};

export type FlexWalletCancelOrderInput = {
    evers: string | number | bigint /* uint128 */,
    price: string /* address */,
    sell: boolean /* bool */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletReturnOwnershipInput = {
    tokens: string | number | bigint /* uint128 */,
};

export type FlexWalletBindInput = {
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletDetailsOutput = {
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

export type FlexWalletGetDetailsOutput = {
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

export type FlexWalletGetBalanceOutput = {
    value0: string /* uint128 */,
};


export class FlexWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"burn","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xe"},{"name":"unwrap","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"tokens","type":"uint128"},{"name":"notify","type":"optional(cell)"}],"outputs":[],"id":"0xf"},{"name":"makeOrder","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"price_num","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"salt","type":"cell"},{"components":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"amount","type":"uint128"},{"name":"client_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"name":"args","type":"tuple"}],"outputs":[],"id":"0x10"},{"name":"cancelOrder","inputs":[{"name":"evers","type":"uint128"},{"name":"price","type":"address"},{"name":"sell","type":"bool"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0x11"},{"name":"returnOwnership","inputs":[{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x12"},{"name":"bind","inputs":[{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x13"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"lend_pubkey_","type":"optional(uint256)"},{"name":"lend_owners_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "c92f6b5f73737074a60106e0a62a27b6e0b8aad8ae66a246a8ab5fd4227bcebc",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexWalletAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: FlexWalletTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: FlexWalletTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: FlexWalletTransferToRecipientInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferToRecipient", input, options);
    }

    async transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: FlexWalletBalanceInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletBalanceOutput>> {
        return await runHelper(this, "balance", input, options);
    }

    async balance(input: FlexWalletBalanceInput): Promise<RunLocalHelperResult<FlexWalletBalanceOutput>> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: FlexWalletAcceptMintInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptMint", input, options);
    }

    async acceptMint(input: FlexWalletAcceptMintInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: FlexWalletAcceptTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "acceptTransfer", input, options);
    }

    async acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runBurn(input: FlexWalletBurnInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "burn", input, options);
    }

    async burn(input: FlexWalletBurnInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "burn", input);
    }

    async runUnwrap(input: FlexWalletUnwrapInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unwrap", input, options);
    }

    async unwrap(input: FlexWalletUnwrapInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unwrap", input);
    }

    async runMakeOrder(input: FlexWalletMakeOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "makeOrder", input, options);
    }

    async makeOrder(input: FlexWalletMakeOrderInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "makeOrder", input);
    }

    async runCancelOrder(input: FlexWalletCancelOrderInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "cancelOrder", input, options);
    }

    async cancelOrder(input: FlexWalletCancelOrderInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "cancelOrder", input);
    }

    async runReturnOwnership(input: FlexWalletReturnOwnershipInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "returnOwnership", input, options);
    }

    async returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runBind(input: FlexWalletBindInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "bind", input, options);
    }

    async bind(input: FlexWalletBindInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "bind", input);
    }

    async runDetails(input: FlexWalletDetailsInput, options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletDetailsOutput>> {
        return await runHelper(this, "details", input, options);
    }

    async details(input: FlexWalletDetailsInput): Promise<RunLocalHelperResult<FlexWalletDetailsOutput>> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<FlexWalletGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(options?: RunHelperOptions): Promise<RunHelperResult<FlexWalletGetBalanceOutput>> {
        return await runHelper(this, "getBalance", {}, options);
    }

    async getBalance_(): Promise<RunLocalHelperResult<FlexWalletGetBalanceOutput>> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

