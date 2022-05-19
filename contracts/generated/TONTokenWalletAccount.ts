
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

export class TONTokenWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"destroy","inputs":[{"name":"dest","type":"address"}],"outputs":[],"id":"0xd"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "b537ff04d96a57c32cde1b121389cc1115baedc2fdd94d6d14e4afe56315fa54",
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

    async runTransfer(input: {
        _answer_id: number /* uint32 */,
        answer_addr?: string /* optional(address) */,
        to: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        return_ownership: string | number | bigint /* uint128 */,
        notify_payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async runLocalTransfer(input: {
        _answer_id: number /* uint32 */,
        answer_addr?: string /* optional(address) */,
        to: string /* address */,
        tokens: string | number | bigint /* uint128 */,
        evers: string | number | bigint /* uint128 */,
        return_ownership: string | number | bigint /* uint128 */,
        notify_payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: {
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
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async runLocalTransferToRecipient(input: {
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
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "balance", input);
    }

    async runLocalBalance(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: {
        _value: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        keep_evers: string | number | bigint /* uint128 */,
        notify_payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async runLocalAcceptMint(input: {
        _value: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        keep_evers: string | number | bigint /* uint128 */,
        notify_payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: {
        _value: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        keep_evers: string | number | bigint /* uint128 */,
        sender_pubkey: string | number | bigint /* uint256 */,
        sender_owner?: string /* optional(address) */,
        payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async runLocalAcceptTransfer(input: {
        _value: string | number | bigint /* uint128 */,
        answer_addr: string /* address */,
        keep_evers: string | number | bigint /* uint128 */,
        sender_pubkey: string | number | bigint /* uint256 */,
        sender_owner?: string /* optional(address) */,
        payload?: string /* optional(cell) */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runDestroy(input: {
        dest: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "destroy", input);
    }

    async runLocalDestroy(input: {
        dest: string /* address */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroy", input);
    }

    async runDetails(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
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
        }
    }> {
        return await runHelper(this, "details", input);
    }

    async runLocalDetails(input: {
        _answer_id: number /* uint32 */,
    }): Promise<{
        transaction: Transaction,
        output: {
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
        }
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
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
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
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
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async runLocalGetBalance(): Promise<{
        transaction: Transaction,
        output: {
            value0: string /* uint128 */,
        }
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}
