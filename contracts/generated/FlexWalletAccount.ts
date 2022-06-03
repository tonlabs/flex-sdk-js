
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
        tvc: "te6ccgEC4QEAOi8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIDQHATb/joAB0wCZcHAkAVURVQLZIgHhgQIA1xhxJNkIAS6OgCLTAJlwcCRVEQFVEdkiAeHT/3Ek2QkDzG3tQAfDAAPTP9Mf0x+VAe1Q2zAiwRaOgOEiwRGOgOECwBDyqQbyqASj8uBEMAj5AVQQlPkQ8qjtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SYcCgEujoAC0wCZcHAlVREBVRHZIgHh0/9xJdkLAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdkMAagB1dP/0w/SB9FWHVYlvoAeYcMABdEUsAnRgBNh0QjyfPgjgQPoIaiCCBt3QKBWIgG5IPK8cPhkgB1h0x/VjoAB0wCZcHEkVREBVRHZIgHh+kBwJNkNBP5wVQeAKWFVAeMEAtN/039WJlYeuoAZYcAAAtMf03/U1IIQCPDRgCmgjoBReLAC0wDTANMA1dN/+kDT/9XT/9EB0QTRjoApAeFWIds8VhKgVjEBufLQZe1HbxBvF28QGrzy0G34AMhwIQHPCwBWFSHLP1Y1AcxWLyPOgDhhAcv/ExCxDgH4VjVVAcxWIMAAAVY1zwsHVjQBy39WMwHL/45hgCphAcsfgClhAfQAjjMwViFVBsv/VigByw9WIgHKB8lQBszJUAXMyVADzMlQAszJ7VT4D1suVQFVUlUHVQhVCNkkIeBxKAHPCwBWJwHOViYBy/9VAjAhAVUjVQZVFVUG2Q8ANJhwJQHPCwAh2VYrAeFxJQHPCwBWLAHL/yHZAchWJFY0ulYkwwCw8uBk7UdvEG8XbxAYvPLQbfgAyHAhAc8LAFYTIcs/VjMBzFYtI85WLQHL/1YzVQHMVh7AAAFWM88LB1YyAct/VjEBy/+OgJMkIdlWFAHgcSYBzwsAVi0BziHZEQFucc8LAIA5YQHL/4AoYQHLH1YnAfQAjoAkIeBxKAHPCwBWJQHOViQBy/9VAjAhAVUjVQZVFVUG2RIBcDBWH1UGy/9WJgHLD1YgAcoHyVAGzMlQBczJUAPMyVACzMntVPgPW4AgYds8VhGgVi4BufLQZS7ZsQH6gBlhLrny4GxWEPLgcoAbYfLgdirQ+kAwVh3HBfLgdyv5AFYcuvLgeAvQINdKwALy4EXIcCEBzwsAU+DLf3ESzwsBXc4uAczJAcxwEs8L/3DPCx9WNgH0AHQjAc8LAnETzwsAVh5VAsoHcBPPCx8lwTKAOGFVAfQAyVACzHAUAbjPCwDJ+QBRIs8L/8nQjoAiIeAh0wEhwQOYMMAD8tBj8jThAcAC8rTTAI4iMNIHB8oHBtP/MFAGy//J0IEBCAFWElUB9ApvofLgcTAg2SIh4QHTBAHXGAEwIVUB2RUBhDAKwwALwwAJwwBWK1UMuvLgc4ASYfLQdCZWJ8cF8uB0gBRho46AIFkBVQHh+ChVAjAhAYATdGOAF2FygBZjgBdh2RYBaHEbsHEdsHESsCvTASHBA5gwwAPy0GPyNOEBwALytI6AAdMAlSAjcFnZIgHhINMEAdcYJNkXAYYDwAAD0gfIEsoHAdP/MAHL/8nQjoCBAQhVAVYWVQH0Cm+hmzBWGFYXIlkBVQHZ4dN/0x8wIFYZvAFWGeMEAVYaoCLZGAEsjoAmIeAF0wQB1xgBMCUBVTFVBVUF2RkB/shRIst/BtIHA8oHAtP/MFACy//J0FAlyx9wzwv/ydCBAQgBVQSAF2FVAvQab6GAE2GAIWH4ZPhEghCAAAAAIbGCEP////8SvHBY4wTIMFYjVQ2AHWGAEWGAGWGAGmFVBYAdYYAcYVYxVi+AHWGAFmGAFmGAG2GAG2EmgB1hgCIaApZh2zxw+wD4YsAAGqHIcCEBzwsAH8s/cS8BzwsAgB5hIc6AKGFVAsyAImFWEc6AImEBy/+AJmFVAcyAJWEByweAJGEBy3+AI2EBy/+MGwDojkqAGWFVBM6AGGEBy/+AFmGAE2HL/4AZYQHLD4AWYQHKB8kBzMkFzwsfFfQAE8zJUALMyVACzMntVIAQgBdicoAZY3OAHGOAHGUB2Y4VcBTPCwBVBjAjgBV4Y4AdYXiAFmPZVh4B4XEUzwsAgB5hAcv/I9kBjgLAEfKpBvKoBKPy4EQwCPkBVBCU+RDyqO1E0NMAAfJ/0z/U1NMH03/T/9X6QNP/1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZHQEujoAC0wCZcHAlVREBVRHZIgHh0/9xJdkeAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdkfAeYB1dP/0w/SB9FWHVYlvoAeYcMABdEUsAnRgBNh0QjyfPgjgQPoqIIIG3dAoFYhAblwcCKAJGFVAeMEAvK8gB1h1dN/+kDTAHD4ZI6AAdMAA8MAjhZxI3BVCFUEVRdVBlUHVQVVCVUJVRjZIgHhA9P/cCTZIAL8AdFxFbCAF2Hy4HWAFWFWJLqAFWHDALDy4GTtR28QbxdvECcBvPLQbfgAyHEhAc8LAFYYIc5xzwsAVh0jzgFWJs8L/3AkAc8LAFPgyz+AGWFVAssfVh5VA8v/VhhVAfQAViVVAsxWJAHMViMBywdWIgHLf1YhAcv/joBWEyHhIiEAIlYVVQXOVhQBy/8hAVUxVQTZA/4wgBJhwABWEVUGy/9WFwHLD1YSAcoHyVAFzMlQAszJUALMyQHMye1U+A+AE2HbPFYfAbny0GXIcCEBzwsAdiEBzwsCcCMBzwsBydABziwBzoEAzSMBzwsfKAHLAFYbAc5RHvoCAVYezwv/DKOAK2FVAfQAcPoCcPoCcc8LYY6AsSQjADxVBzAiIVUCVVNVJuBxFM8LABnL/yJwVRFVEQFVA9kCxlvJVQpVC1UHVhlWHVUE2zxw+wDIgBphIc5xIgHPCwBwIwHPCwBR/8s/gBlhIs6AHGFVA8v/cRLPCwCAI2EBy/8Xyx8V9ACAH2FVBMyAHmEBzIAdYQHLB4AcYQHLf4AbYQHL/5glAMyOMjBQ88v/gBRhAcsPH8oHyVAMzMlQDMzJAczJUAnMye1UgBGAE2JygBVjc4AYY4AYZQHZJyHggBNhVQPOgBJhAcv/IXBwcoARY3KAE2NVBlVtcoATYwFVDoAUYVUPc4ASY4AUYdkCbIEBACMBuY6A4QLAFvKp7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//V0wCOgCIh4QH6QAEwIVUB2SknAf4w0wCOczDTH/QE1dMAjlsw1dP/0w/SB9FfA4AgYdDTAQLRwAID0QfRcPhkyALysHMiAc8LAXAjAc8LAcnQAc4H+kAwUAfOcc8LYYAWgBYTzwsfHMt/yVALzMlw+wBVSVV/dIAZY4AaZQHZIiHhAfpA0/9ZWyFVAdkiIeEB0/8BKAAKMCFVAdkBbIEBABO68qntRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2SoBLo6AAtMAmXBwJVURAVUR2SIB4dP/cSXZKwFCAdMf9ATVjoAB0wCbcHBwJVUhXhBVEtkiAeH6QNP/cSXZLAJWAdXT/9MP0gfRKgTRjoAEbnAL0YAVYdFw+GSOgOFwJHBfQFUhVQVVE1UF2TAtAUaBAQgrAfSCb6FvoZ5wJnBfIFUBVQNVEVUD2eH4I3COgHAh2S4B/iTSBwfTf9MfjkSBAQhVCVYWVQH0dG+hb6GOFw8jVQWAEWFVh1UMgBFhgBFhVR8BVR/ZVURVDF8GK4ASYVUFVYmAE2GAE2FygBJjAVVO4lOCuZMFJdnhyBXKBwrT/zBSOKBQesv/Est/yx/JIqQB0IAgAVUDgCthVQL0FiJwXzAvAEBVBIAhgA1jgCphcoArY4AtYXKALGN0gChjgC1hgC1h2QL+W4AwYdDTAQHAAoASYcAAyALysHMiAc8LAXAjAc8LAcnQAc6BAQAjAc8LHwT6QDABzoAiYVUDzIAhYQHMgCBhAcsHcRLPC2GAG2Eky/+AH2FVAst/gB5hAcv/gBxhAc6OgI4RcBPPCwBVBjAiVeeAF2FVf9lWGQHhcRPPCwCAGjIxAAphAc4i2QH6DsAAjniAFWEByx+AImEB9AAYy3+ONVD4y/8dyw8bygfJUAXMyVAKzMlQDMzJUALMyVAKzMlw+wCBAQCAFWJ3gBdjdIAfY4AgZQHZjhpwKAHPCwBVAlUEWyFVtIASYYARYYASYVU+2SMB4HEoAc8LAIATYQHOgBJhAcv/IdkzAFKOFnAnAc8LAFUDMCGAEXVjgBZhdYASY9kmAeBxJwHPCwCAGGEBy/8h2QK23wHQ0wAB8nAg1gGW7UDtUNswAdMAjoABMCEB4TAD0h8BwP/4APLgaO1E0NMAAtMfAvJ/AtM/1NTTB9N/0//V+kDT/9WOgAHTAJlwcCQBVRFVAtkiAeH6QHEk2UE1AS6OgALTAJlwcCVVEQFVEdkiAeHT/3El2TYBQgHTH/QE1Y6AAdMAm3BwcCVVIV4QVRLZIgHh+kDT/3El2TcCZgHV0//TD9IH0QPRCNGAEmHRjoCBAMlWHgG5joDhgB1hwAzy4GiAHGHTfzCAGGGgIXBZ2T44AeSCEGeguV9WHgG5jhyCEGeguV+AHmEBuvLgaIAcYdMf038wgBlhoCLZ4YEAyYAeYQG68uBogBxh0x/TfzCAH2HTANMA0wD6QDDTASHBA5gwwAPy0GPyNOEBwALytI6AAdMAlSAjcFnZIgHhINMEAdcYJNk5AmwDwAAD0gfIEsoHAdP/MAHL/8nQgQEIAVYUVQH0Cm+h8uBA03/TH1MqvAHT/46AATAiAeFQO6E8OgH+jnvIUSLLfwbSBwPKBwLT/zBQAsv/ydBQJcsfGsv/ydCBAQgBVQOAFWFVAvQab6HAAIAVYQGhAVViXwgkgBhhdIAbY4AdYYAbYXKAHGOAHWFygBxjAXKAHGMBgBphcoAcY3KAEmMBgB1hgB1hgBdhdoAYY4AdYYAeYYAeYdkmITsAJOAF0wQB1xgBMCUBVTFVBVUF2QH+jmtfBdIHyBLKBwHT/zABy//J0IEBCAGAEmFVAfRZwwBxsIASYQGhVUFfBSSAGGF0gBtjgB1hgBthcoAcY4AdYXKAHGMBcoAcYwGAGmFygBxjcoASYwGAHWGAHWGAF2F2gBhjgB1hgB5hgB5h2QEwJiHgBdMEAdcYATAlVVBeQD0ABlUF2QGwyHAhAc8LAIAeYSHLP4AeYQHMgB1hAcyAGWEjzoAZYQHL/wGAG2HPCwcUy39VD8AAAYAZYc8L/46AnSNVBjAhVbeAFGFVfNlWFQHhcSUBzwsAgBdhAc4h2T8B/gvAAI5jgBNhAcsfgBJhAfQAjikwUKbL/1UPAcsPGsoHyVADzMlQA8zJUAPMyVACzMntVHCAEmKAEmUB2SIh4HEoAc8LAFUPAc4fy/8ucFUOVRtVHVUbVR1VClUdAVUOVQxVDlUPVQ/ZjhVwHc8LAFUBMCuAEXNjgBRhc4ASY9lAACAlAeBxHc8LAIAUYQHL/yzZATIwI8cBjoAgWQFVAeEkxwIh4XABVSJfBAHZQgTsMCPXDR9vo5hwWVUjXwUB2eEwJNdJ8rCXcFUhXwMB2eFtBNMfmHBZVSNfBQHZIsERjoDhIsEOjoDhIsELjoDhAsAKIuHtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJtwcHAlVQFVElUS2SIB4fpAIXEl2Y5lTkMBLo6AA9MAmXBwJlURAVUR2SIB4dP/cSbZRAFCAdMf9ATVjoAB0wCbcHBwJVUhXhBVEtkiAeH6QNP/cSXZRQF8AdXT/9MP0gfRgB9h0x+OgAHTAAfRcA3RgBhh0XD4ZI4WcCFwVRtVAVUqVQdVOFULVQxVDVUN2eEF+kBxJ9lGAUAB1fpA03/Tf9N/joAB0wCZcHEkVREBVRHZIgHh1HAk2UcC4AHRgC1h0wDTANMA+kBVD/hk+kBWIMMAcXFwVQFVAVUBVhBVD1UPVi8qgChhVQiAI2HbPAL6AIIQCPDRfyIBvIARYcAAAfLgbS/TASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdmtSAL+MNIH0/8w8uBu7UdvEG8X+ABvEFUCVQiAFGHjBAWhcvsCyHYhAc8LA3AiAc8LAcnQAc6AEWEBzoIQZ6C5XyIBzwsfVhEBy38WznDPC39wFvoCgDFhAfQAAVYlzwv/cBL6AnD6AnHPC2GOgJdwE88LACLZViIB4XETzwsAViMBzkpJAAQi2QFQgCFhwACOgA+jmXESzwsAH8wt2eFwEs8LAFUCMC1VAVWjVQ5VDlUd2UsB4slQBszJUAXMyYAcYcAAgQCAEvsAgCZhVQ+hyHAhAc8LAIArYSHLP4ArYQHMgCphAcyAKWEBywcTy3+AJ2EBy/+AJWEizoAlYQHL/46AjhEkVQYwIYAaeGOAImF4gBtj2VYSAeBxJAHPCwCAJGEBziHZTAHqgBphwACObh3LHx30AI4xMIAYYVUEy/+AF2EByw+AFmEBygfJUAXMyVAEzMkBzMkBzMntVHqAHmKAIGGAH2UB2Swh4HEmAc8LAIAdYQHOgBxhAcv/IXBygBhjc4AaY1XtgBlhgBdhc4AaY4AZYXKAG2OAHGHZTQBOjhVwE88LAFUCMCKAGnRjgB5hdIAbY9kpAeBxE88LAIAiYQHL/yLZAnAiwQyOgOHtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJtwcHAlVQFVElUS2SIB4fpAIXEl2V5PAS6OgAPTAJlwcCZVEQFVEdkiAeHT/3Em2VABQgHTH/QE1Y6AAdMAm3BwcCVVIV4QVRLZIgHh+kDT/3El2VEBfAHV0//TD9IH0YAgYdMfjoAB0wAH0XAN0YAYYdFw+GSOFnAhcFUbVQFVKlUHVThVC1UMVQ1VDdnhBfpAcSfZUgE2AdP/1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZUwFEAdN/03/Tf9MA1dN/joAB0wCZcHAkAVURVQLZIgHh1HEk2VQC/gfAAAHRBdGANGHTANMA0wCAFWH4ZFYkwwAB+kBxcXBVAVUBVQFWEYARYVUNVjQogC1hVQqAKGHbPAL6QPoAghAI8NF/IgG88uBt7UdvEG8X+Cr4AAFvEBOicvsCyHAhAc8LAHAhAc8LP1YvI86AGWEBy/9WNVUBzFY0AcxWMwGtVQFYywdwzwt/VjEBy/+OgJ0jVQUwIVXmgBZhVW/ZVhYB4XElAc8LAIAXYQHOIdlWAf6AGmGAG2FVDOMEVhwny/9WHAHLD1YbAcoHcCgBzwsBAclxKAHPCwFRGMxwFc8LIALJdhnPCwII0FY9VQL0AATJULLMdCkBzwsCgCthwABQyc5WHVULygdxE88LAFA1zMlQB8zJUAXMyVACzHDPCwDJIPkAFc8L/8nQUAPOcPoCVwIkgDdhAfQAcPoCcPoCcM8LX46AW1gB/I58Visny/9xE88LAYIQZ6C5XxjPCx9WFQHLfxTOgBNhAct/jkOOFclQAszJUAfMyYEAgPsAWyBZAVUB2YAUYaOXcBLPCwAh2eFxEs8LAFUPAcwhcFULVRxVDVULVRxVHAFVDVUJVTrZl3ATzwsAItknAeBxE88LAFYoAc4i2VkB/FYSAeBzEs8LARTMViomy/9xEs8LAIIQZ6C5XxfPCx9WFAHLfxPOgBJhAct/jkCOEclQAszJUAbMyYEAgPsAMCHZgBNho5dwEs8LACHZ4XESzwsAH8wucFUsVQxVHVUOVQtVLFUOVQtVDlUPVR7Zl3AUzwsAI9kmAeBxFM8LAFoADFYnAc4j2QHIyHAhAc8LAIAwYSHLP4AqYSPOgC1hgBRhoYAvYVUCzIAuYQHMgC1hAcsHy38BgClhzwv/gCJhwACAKmFVAsv/joCOESRVBjAhgB54Y4AmYXiAH2PZKQHgcSYBzwsAgChhAc4h2VwBXIAeYcAAjoCOFXATzwsAVQIwIoAedGOAImF0gB9j2SYB4HETzwsAgCZhAcv/ItldAPwfyx8f9ACONDCAHGFVBsv/gBthAcsPgBphAcoHyVAGzMlQBczJUAPMyVACzMntVIALgCNigCVhgCRlAdkuIeBxKAHPCwCAIWEBzoAgYQHL/yFwcoAcY3OAHmOAEYAQY4AfYYAeYYAgYYAbYYAgYXKAH2MBgB1hcoAfY4AgYdkBaALADCLh7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//VjoAB0wCZcHAkAVURVQLZIgHh+kBxJNlfAS6OgALTAJlwcCVVEQFVEdkiAeHT/3El2WABQgHTH/QE1Y6AAdMAm3BwcSVVIV4QVRLZIgHh+kDT/3Al2WEB/AHV0//TD9IH0YAiYdMA0wAPwAAP0wAH0V8DgB5h0x8wBPpAMArRgBRh0XD4ZMh2IQHPCwNwIgHPCwHJ0AHOG85w+gKAIWEB9ABQSssfcBr6AlYYVQnLf3AS+gIByXESzwthzMmAQPsAyHAhAc8LAIAcYSHLP4AWYSPOgBZhAWIBPsv/gBthVQHMgBphAcyAGWEByweAGGEBy3+AF2EBy/9jAfqOe45VVQ8Byx8f9AAJo44mW1BTy/8Tyw8UygfJAczJUAPMyVACzMkBzMntVIAMVcBVDl8OAdkgWQFVAeBxJgHPCwAczhrL/ypwVQpVBVVGVQhVGVUZAVUL2Y4RcBLPCwBVATAhVdKAEWFVLtlWEgHgcRLPCwCAEmEBy/8h2WQAPp0jVQswIVVMgBJhVcXZVhMB4XElAc8LAIAVYQHOIdkCcjAhwQ+OgOHtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJtwcHAlVQFVElUS2SIB4fpAIXEl2XJmAS6OgAPTAJlwcCZVEQFVEdkiAeHT/3Em2WcBQgHTH/QE1Y6AAdMAm3BwcCVVIV4QVRLZIgHh+kDT/3El2WgBiAHV0//TD9IH0YAfYdMf0/+OgAHTAAjRcA7RgBlh0XD4ZI4acCFwVRxVBlUrVQhVKlUJVQxVDFUNVQ5VDtnhBvpAcSjZaQEsjoAC0wCZcHElVREBVRHZIgHh1HAl2WoD/oAqYdMAVhrDAAHTANMA+kBwX1BVBFUEVQRVBFUEVQRWLiiAJ2FVDIAiYds8C8AA+ADIcCEBzwsAdiEBzwsCcCMBzwsBydABzlYnAc5w+gKAMmEB9ACADCMBzwsfcBL6AgFWK88LfycBznAS+gJxzwthAVYnzwv/joCTIyHZViStbGsAHAHhcSUBzwsAViYBziHZAZaAFGEBy/+OgCch4HEXzwsAgBRhAc4mcHKAE2MBcoATYwFygBNjAXKAE2NygBNjAXKAE2MBcoASY1UPcoASY4ARYYATYYAUYYAUYdltAU4wgCNhwACOgA+jm3EWzwsAVQ8BzC7Z4XAWzwsAVQEwLVWyVQ5VLNluAujJAczJVieAK2FVClYoVQPbPIAeYcAAgQChEvsAyHAhAc8LAIAtYSHLP4AoYSPOgChhAcv/gCxhVQHMgCthAcyAKmEBywdwzwt/gClhAcv/joCOESNVBjAhgB14Y4AlYXiAHmPZKgHgcSUBzwsAgCdhAc4h2X5vAQqAHWHAAHAB/I58H8sfgBZhAfQAjjMwgBthVQbL/4AaYQHLD4AZYQHKB8lQBszJUAXMyVADzMkBzMntVIAOgCFigCNhgCJlAdkvIeBxKAHPCwCAIGEBzoAfYQHL/yFwcoAbY3OAHWNV/4AeYYAcYYAfYYAaYXKAHmOAH2GAHGFygB5jgB9h2XEATo4VcBPPCwBVAjAigB10Y4AhYXSAHmPZKQHgcRPPCwCAJWEBy/8i2QJwAcEQjoDh7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//VjoAB0wCbcHBwJVUBVRJVEtkiAeH6QCFxJdl/cwEujoAD0wCZcHAmVREBVRHZIgHh0/9xJtl0AUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdl1AYgB1dP/0w/SB9GAH2HTH9P/joAB0wAI0XAO0YAZYdFw+GSOGnAhcFUcVQZVK1UIVSpVCVUMVQxVDVUOVQ7Z4Qb6QHEo2XYBNAHV03+OgAHTAJlwcSRVEQFVEdkiAeHUcCTZdwL+gCth0wDTAO1HbxBvFwHTAPpAB9EG+kADViDDAHFwXzBVA1UDVQNWEVUEVQRWMS+AKmFVCIAlYds8D8AABfoAMAJvEBKi+ABy+wLIcCEBzwsAdiEBzwsCcCMBzwsBydABzlYoAc5w+gKAMmEB9ACADCMBzwsfcBL6AlEfzwt/K614AUwBznAS+gJxzwthAVYozwv/joCTIyHZViUB4XElAc8LAFYnAc4h2XkBmIAVYQHL/46AKiHgcRfPCwCAFWEBziZwcoAVYwFygBVjAYAWYYATYXOAFGN0gBNjgBRhgBZhgBVhgBJhcoAUY4ATYYAVYYAWYYAWYdl6AU4wgCRhwACOgA6jmXEWzwsAH8ws2eFwFs8LAFUBMCxVAVWyVQ5VHdl7AvDJUA7MyVYoVhFVDVYpVQPbPIEAgPsAW4AcYcAAgCdhVQ2hyHAhAc8LAIAsYSHLP4AsYQHMgCthAcyAKmEBywcTy3+AKGEBy/+AJmEizoAmYQHL/46AjhEkVQYwIYAbeGOAI2F4gBxj2ScB4HEkAc8LAIAlYQHOIdl+fAH8gBthwACOdxvLH4AVYQH0AI40MIAZYVUFy/+AGGEByw+AF2EBygfJUAbMyVAFzMlQAszJUALMye1UgA+AHmKAIGGAH2UB2Ssh4HEnAc8LAIAeYQHOgB1hAcv/IXBygBljc4AbY1XugBphgBdhc4AbY4AdYYAaYXKAHGOAHWHZfQBOjhVwE88LAFUCMCKAG3RjgB9hdIAcY9kpAeBxE88LAIAjYQHL/yLZAFrIgBghAc8LBRbOcPoCbQH0AHD6AnD6AnHPC2GADBbPCx8Uy38Szsv/zMkBzMkBZO1E0NMAAfJ/0z/U1NMH03/T/9X6QNP/1Y6AAdMAm3BwcCVVAVUSVRLZIgHh+kAhcSXZgAEujoAD0wCZcHAmVREBVRHZIgHh0/9xJtmBAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdmCAWwB1dP/0w/SB9GAH2HTH46AAdMAB9EM0YAXYdFw+GSecHEiVQJVM1UGVQdVFtksAeEF+kBwJ9mDAv4B03/Tf9Mf1YAoYdMA0wDTAPpA+kAG03/4IwHUghAI8NGAHqAJ+gAwViDDAFE8uQ7U0wDTANMA03/6QNXT/9P/0QLRcXBwVQFVAVYWVhiAFmFVBFY3VhSAMGGAE2GAK2HbPIAVYfLgbFYU8uBygBxh8uB2KdD6QDBWHscF8uB3rYQC/iv5AFYduvLgeAvQINdKwALy4EXIcCEBzwsAU+DLf3ESzwsBXc4tAczJAcxwEs8L/3DPCx9WOAH0AHQjAc8LAnETzwsAVhxVAsoHcBPPCx8lwTKAOmFVAfQAyVACzHDPCwDJ+QBRIs8L/8nQjoAiIeAh0wEhwQOYMMAD8tBj8jSGhQB24QHAAvK00wCOIjDSBwfKBwbT/zBQBsv/ydCBAQgBVhJVAfQKb6Hy4HEwINkiIeEB0wQB1xgBMCFVAdkBvDALwwAMwwBxsHEdsArDAHGwVi5VBrry4HOAKGHy4HQnVirHBfLgdIAYYaOAEmGAGWHjBCvTASHBA5gwwAPy0GPyNOEBwALytI6AAdMAlSAjcFnZIgHhINMEAdcYJNmHAYYDwAAD0gfIEsoHAdP/MAHL/8nQjoCBAQhVAVYWVQH0Cm+hmzBWHFYcIlkBVQHZ4dN/0x8wIFYevAFWHuMEAVYeoCLZiAEsjoAmIeAF0wQB1xgBMCUBVTFVBVUF2YkB/MhRIst/E8sfcM8L/wXSBwbJAsoHBdP/MFAFy//J7UcB0AXQAW8QbxeBAQhVAVUFgBhhVQL0Gm+hA28QgBRhAYAXYaFy+wKAHmH4ZAPAAPhEghCAAAAAIbGCEP////8SvIARYVUCoXBQA+MEyHBWIFUPVQGAEmGAGGGAGWFVBooC2IAgYYAgYVYyVjCAHWGAHWGAGGGAHWGAHWEmgB5hgBxh2zyBAID7ADAD+GLIcCEBzwsAgCphAcs/cSIBzwsAgCBhIc6AKmFVAsyAJGEkzoAkYQHL/4AoYVUBzIAnYQHLB4AmYQHLf4AlYQHL/4yLANyORIAaYVUEzoAZYQHL/4AXYVUFy/+AFmEByw+AFWEBygfJAczJB88LHxX0ABXMyVAEzMlQAszJ7VSAEIAZYoAbYYAaZQHZjhVwFM8LAFUFMCOAFHdjgBthd4AVY9lWIAHhcRTPCwCAIGEBy/8j2QH8yFUPIc5SGs8LABjLABbLAFDnzIEAySYBzwsfgQDEJwHPCwhR98v/gBJhVQ/LB1Diyx9xKAHPCwIDyVBpy39RZ85QRs4Sy/9QZsxQkst/UMjL/wjJcCMBzwsAGst/cM8L/1CTzFB5+gJQRcsfBslxFs8LAHEZzwsAcBTPCx9tjQB2UgL0AHDPCx8hAfQAyVAEzHDPCwDJUDT0AHD6AnD6AnPPC2ETzHHPCwAFyQbOFczMyQPPC/8SzMkBzMkDfiLBFI6A4TAhwRKOgOHtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJtwcHAlVQFVElUS2SIB4fpAIXEl2bWZjwEujoAD0wCZcHAmVREBVRHZIgHh0/9xJtmQAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdmRAYYB1dP/0w/SB9GAH2HTf/pA0wABwwAH0XAN0YAYYdFw+GSOgAHTAI4TcSNwVR5VBVWWVQ+AEWFVDlUf2SIB4dP/cCTZkgL+gBZh8uB1gCdh0wDTANMA+kDtR28QbxcB+kBxcF8wcVUEVQRVBFUEgBNhVQVWLFUKgCRhVQiAIGHbPHGAEmEBsAP6ADAFbxAJo1CVoXL7AshwIQHPCwB2IQHPCwJwIwHPCwHJ0AHOLwHOgQDNIwHPCx8lAcsAVh8BzlYiAcv/cK2TAVoS+gKALmEB9ABw+gJw+gJxzwthjoBVATAnIeBxFM8LAB3L/yJwVRFVEQFVA9mUA/5byXBVDgFVBFYeViJVBNs8gQCA+wDIgB9hIc5wIgHPCwBxIwHPCwCAE2HAAIAeYSLOgChhJMs/gCJhVQXL/4AnYVUBzIAmYQHMgCVhAcsHgCRhAct/gCNhAcv/joCOE3AUzwsAVQcwI1X4gBlheYARY9lWHgHhcRTPCwCAHmEBmJaVAAjL/yPZAf4Zyx8e9ACONDCAFGFVBcv/gBNhAcsPgBJhAcoHyVAFzMlQBMzJUAvMyVAEzMntVIARgBpigBxhgBtlAdkjIeCAF2FVBM6AFmEBy/8hcHBygBRjc4AWY3KAF2NygBZjgBhhc4AWY4AXYYAWYYAYYYAXYYAYYYAVYYAYYXKAFGNylwAOgBdjgBhh2QBcyIAYIQHPCwUXzlAF+gJtAfQAcPoCcPoCcc8LYYEAzRbPCx8TywDOy//MyQHMyQJwAcETjoDh7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//VjoAB0wCbcHBwJVUBVRJVEtkiAeH6QCFxJdmjmgEujoAD0wCZcHAmVREBVRHZIgHh0/9xJtmbAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdmcAuwB1dP/0w/SB9GAImHTAIAhYdN/MAHTANMA+kAwINMBCtFWFcMAVQ/RgBth0XD4ZHBxcF8wVQRVBFUEVQRVBFUEViVVCIAdYVUIgBhh2zwiwQOYW8AD8tBj8jThAsAC8rSOgArTAJUgLHBZ2SIB4SDTBAHXGC3ZrZ0C/tIHyBLKBwHT/zABy//J0IEBCEFg9GJvofLgbySlAdN/0x9TK7wB0/+OgAEwIiHhCMAAUE2hjkHIUSLLfwjSBwPKBwLT/zBQAsv/ydBQN8sfE8v/ydCBAQgBVQVVBVUC9BpvoUBX4wQkcF8wVSVVCVUIVTRVCVUJ2S0h4AfTBAGfngAa1xgBMCcBVVFVB1UH2QHCyHAhAc8LAIArYSHLP4ArYQHMgCphAcyAJWEjzoAlYQHL/wGAKGHPCweAJ2EBy3+AHWHAAAGAJmHPC/+OgI4RJFUGMCGAGXhjgCFheIAaY9lWIgHhcSYBzwsAgCRhAc4h2aABCoAaYcAAoQH8jnweyx8e9ACONTCAGGFVBsv/gBdhAcsPgBZhAcoHyVAGzMlQBczJUAPMyVACzMntVIASgB1icoAfY4AfZQHZLSHgcSgBzwsAgB1hAc6AHGEBy/8hcHKAGGNzgBpjVc+AG2GAGmGAHGGAF2GAHGFygBtjAYAZYXKAG2OAHGHZogBOjhVwE88LAFUCMCKAGnRjgB5hdIAbY9kmAeBxE88LAIAhYQHL/yLZAWTtRNDTAAHyf9M/1NTTB9N/0//V+kDT/9WOgAHTAJtwcHAlVQFVElUS2SIB4fpAIXEl2aQBLo6AA9MAmXBwJlURAVUR2SIB4dP/cSbZpQFCAdMf9ATVjoAB0wCbcHBwJVUhXhBVEtkiAeH6QNP/cSXZpgGCAdXT/9MP0gfRgB9h0wCOgAHTAAfRcA3RgBhh0XD4ZI4XcHAicFUcVQFVK1UIVTlVDFUOVQ5VHdnhBfpA0/9xKNmnAUQEwAAB0wABwAAB1Y6AAdMAmXBwJFURAVUR2SIB4dP/cSTZqAP0gCth0wDTANMABdFfAydVD1UL4wRWGcMAA/pAcXBfQFUEVQRVBFUEVQRVBFYrVQeAI2FVC4AeYds8KYAYYVUF4wTAAMhwIQHPCwCAKGEhyz+AImEjzoAiYQHL/4AnYVUBzIAmYQHMgCVhAcsHgCRhAct/gCNhAcv/joCtqqkASI4RI1UIMCGAFHpjgB5heoAVY9lWHwHhcSUBzwsAgCFhAc4h2QEGCsAAqwH+jn0Zyx8X9ACOMjCAEmFVBMv/gBFhAcsPVQ8BygfJUATMyVADzMkBzMkBzMntVIATgBhicoAaY4AaZQHZKCHgLoAXYYASYeMEVQ6AFWGAEWHjBHEoAc8LABLOy/8hcF8wcoASY3OAFGN2gBFjgBVhVTuAFmGAEmF0gBNjgBZh2awAgI4ocBzPCwBVAVUGVQlfAyhVu3KAFWMBcoAVY4AYYXSAFGOAGGFzgBZj2SgB4FUPgB5hVQ3jBHEdzwsAHMv/K9kCtnESsJftQO1QAdswAaMC2zyOgCUh4Q6zIcMAsHGwoy5wVQZVd1UIVTtVD1Ue4AYnxwUmcFUGAVUzVQdVFuEwUAqgFrny0GXtR28QbxdvEBe88tBtVQNVJl8HAdmxrgFwcR6wo/LgZDAgbvLQZAXTASHBA5gwwAPy0GPyNOEBwALytI6AAdMAlSAjcFnZIgHhINMEAdcYJNmvAa7SB8gSygcB0/8wAcv/ydCBAQhBoPRib6Hy4GTTf1MbuVQgLeMEJqUM0x9VAVYQuQHT/zAB8tBlIYARYbzy4HBQ36BcvJxbCVUwVSVVSV8MAdnhBMAABKGwAJyOOMhRIst/BNIHA8oHAtP/MFACy//J0FDDyx8dy//J0IEBCAFVAVUMVQL0Gm+hQKXjBFlVdF8KVQHZJCHgA9MEAdcYATAjAVURVQNVA9kBTCCbXwQE7VBVI18EXhABbu1AjoAiAeFtcHAlcF9AVQNVBVUxVQXZsgFMgQEIJAH0gm+hb6FtjhJwcChwcFUTVQdVBVUWVRVVB9kiAeH4I3CzAfyOawHTf9MfUxe8JNIHjhOBAQgYKgH0dG+hb6FVYl8HIyziIyHhyFNwy38EzwoHAtP/MFACy//J0FBSyx8D0/8wUAPL/8nQgQEIAVUCVQtVAvQab6FQWaAIwAAaoSJwXzBVBFVXVQtVN1UMVQzZcCFVGQFVB1UKVQhVBVUXVQu0AA5VCVUaVQvZAoCCEEOE8pgjAbmOgOECwBQi4e1E0NMAAfJ/0z/U1NMH03/T/9X6QNP/1Y6AAdMAmXBwJAFVEVUC2SIB4fpAcSTZxLYBLo6AAtMAmXBwJVURAVUR2SIB4dP/cSXZtwFCAdMf9ATVjoAB0wCbcHBwJVUhXhBVEtkiAeH6QNP/cSXZuAJmAdXT/9MP0gfRgB5h0x8wKwXRjoAFbnAM0YAWYdFw+GSOgOFWInAmcF8wVRFVBFUSVQTZvLkBUoEBCCwB9IJvoW+hjhFbViJwJnBfMFURVQRVElUE2eH4I3COgFYncCLZugH8JdIHCNN/0x+OPoEBCFUKVhhVAfR0b6FvoY4SVQ8kcFV4VRpVDlUdAVUPVR7ZVURVDYAXYV8HLVUEVZlVD4ATYXKAEmMBVU7iU5K5kwUl2eHIFcoHC9P/MFI5oFCLy/8Sy3/LH8kipAHQgCABVQNVBFUC9BYicF8wVQhVGVULuwAQVQtVVFUaAdkC/shwIQHPCwB2IQHPCwJwIwHPCwHJ0AHOgCph0wBRtMsfC9MA0wD6QDBQBM5WISbL/1YpVQ3MgBphwABwFPoCVihVAcyALmFVAfQAcPoCcPoCcc8LYQFWJ88LB1YmAct/ViUBy/9WIwHOjoCXcBTPCwAj2VYfAeFxFM8LAFYgAc6+vQAEI9kBNoAUYcAAjoCTKiHZJwHgcSwBzwsAVh4By/8h2b8BdoAgYcAAAYAcYc8LH4ATYQH0AFUPAct/joAkIeBxLwHPCwBWGQHOVhgBy/9VAzAhAVUrVVdVDVUrVQ3ZwAL+MFYUVQ3L/1YTAcsPVhIBygfJUA3MyVAMzMlQA8zJUAPMyVADzMmAQPsAyHAhAc8LAIAmYSHLP4AgYSPOgCBhAcv/gCVhVQHMgCRhAcyAI2EByweAImEBy3+AIWEBy/+OgI4RI1UGMCGAFXhjgB1heIAWY9ktAeBxJQHPCwCAH8LBAAphAc4h2QFSjoCOFXASzwsAVQEwIYAac2OAHWFzgBtj2SsB4HESzwsAgB1hAcv/IdnDAP6AHGEByx+AG2EB9ACOMzCAFWFVBsv/gBRhAcsPgBNhAcoHyVAGzMlQBczJUAPMyQHMye1UgBSAGWKAG2GAGmUB2Sgh4HEoAc8LAIAaYQHOgBlhAcv/IXBygBVjc4AXY1WfgBhhgBZhgBlhgBRhcoAYY4AZYYAWYXKAGGOAGWHZAoqCEGeguV8jAbmOgOGCEEOE8pgTuiLh7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//VjoAB0wCZcHAkAVURVQLZIgHh+kBxJNnQxQEujoAC0wCZcHAlVREBVRHZIgHh0/9xJdnGAUIB0x/0BNWOgAHTAJtwcHAlVSFeEFUS2SIB4fpA0/9xJdnHAWYB1dP/0w/SB9GAHmHTf/pA038H0QzRgBZh0XD4ZI6ABtMAmXBxKVURAVUR2SIB4dRwKdnIAXaAJmHTANMA0wD6QFYgVQHHBfLgZu1HbxBvFwH6QPoAMIAVYaIC+ABvEFACoCDCAI6AISHhciMB+wIg2ckDnDArgCRhoIAbYcAAUgmxcbCOgAGjjoDh+CgtAccFVUJfBSGAHXpjgCdhdIAjY14ggCZhgCVhgCdhgCdhcoAmY+DIMAHbPIEAgvsAIXBZ2czK2gH8cENA4wRw+GT4RIIQgAAAACGxghD/////ErxwWOMEyHAhAc8LAYEAyiIBzwsfE8sfIVYjzwv/A8lwIwHPCwBVDyTOdiIBzwsCA9BxF88LAFKFy39WIlUEzlBkzlYlVQTOAslWIYASYVUGy38Xy39WKQHMVigBzFYnAcsHViYBywByy/9Q9cwezMlQAszJAczJAcxWG1UKzgHJcBL6AoApYQH0AHD6AnD6AnHPC2HMyYEAgPsA+GIhcFnZAbrIcCEBzwsAgCVhIcs/gCVhAcyAJGEBzIAgYSPOgCBhAcv/AYAiYc8LBxTLf4AYYcAAAYAgYc8L/46AjhEjVQYwIYAUeGOAHGF4gBVj2S0B4HElAc8LAIAeYQHOIdnNAVyAFGHAAI6AjhVwE88LAFUCMCKAGHRjgBxhdIAZY9kmAeBxE88LAIAcYQHL/yLZzgH+gBthAcsfgBphAfQAjjgwgBRhVQfL/4ATYQHLD4ASYQHKB8lQB8zJUAbMyVAGzMlQAszJ7VSCEEOE8piAGGKAGmGAGWUB2SIh4HEpAc8LAIAZYQHOgBhhAcv/IXBygBRjc4AWY3eAEmNygBVjcoAXY4ASYXKAF2MBcoAXY4AVYc8AEHKAF2OAGGHZAXKCEGeguV8TuiLh7UTQ0wAB8n/TP9TU0wfTf9P/1fpA0//VjoAB0wCZcHAkAVURVQLZIgHh+kBxJNnRAS6OgALTAJlwcCVVEQFVEdkiAeHT/3El2dIBQgHTH/QE1Y6AAdMAm3BwcCVVIV4QVRLZIgHh+kDT/3El2dMBjgHV0//TD9IH0YAeYdN/+kDTf9UI0TAG0/9wDtGAGGHRcPhkjoAB0wCOFXAjcFUfVQVVplUNVR8BgBJhgBJh2SIB4fpAcSTZ1AEsjoAC0wCZcHElVREBVRHZIgHh1HAl2dUBhAHRyHAhAc8LAHAhAc8LP1YjI84sAcv/VipVAcxWKQHMVigBywdwzwt/ViYBy/+OgJMjIdkpAeFxJQHPCwArAc4h2dYC/gnDAFYTJsv/VhMByw9WEgHKB8mCAgE0F88LF1BlzHAazwsggDFh0wDTANMA+kBWNlUF9AAC0wEC+kBVD8lWGVUMyw8C+gAwBszJUAvMyVAJzMkg+QAB12UazwsPVhcBy/8Zy//J0PkCKMEDmV8IwAPy0GPyNOEIwALytNMAjoDY1wAeIiHhAdMEAdcYATAhVQHZAVYw0gfT/zBQCbry4GftR28QgBdhVQKhAW8XbxCgIMIAjoAhIeFyIwH7AiDZ2QOoMFYTgCxhoIAjYcAAUg2xcbCOgAGjjoDh+ChWFQHHBVVSXwYhgB2AEWOALmFzgCtjdYAlY3SAKmOALGGALmGALmFygC1j4MgwAds8gQCA+wAhcFnZ3dvaADLIgBDPCwXOcPoCbQH0AHD6AnD6AnDPC2HJAf5wQ0DjBHD4ZPhEghCAAAAAIbGCEP////8SvHBY4wTIgQDKIQHPCx8Syx9wIgHPCwFxIwHPCwBWLCTOAYAXYc8L/wLJUmTLf3YlAc8LAwTQAYAZYc8LfxbLf1YwAcxWLwHMVi4BywdWLQHL/1BTzlYmAc5w+gKANGEB9ABw+gJw3ADO+gJxzwthjjlWKiXL/3HPCwBWKAHOgBJhAcyAF2FVBc7JAczJViUCzMlQBczJUAPMyVACzMmBAID7ADD4YiFwWdmXcBPPCwAi2VYQAeFxE88LAIAUYQHOInCAEWFygBJjVWxVCVWK2QG8yHAhAc8LAIAsYSHLP4AsYQHMgCthAcyAJ2EjzoAnYQHL/wGAKWHPCwcUy3+AH2HAAAGAJ2HPC/+OgI4RI1UGMCGAG3hjgCNheIAcY9lWEQHgcSUBzwsAgCVhAc4h2d4BXIAaYcAAjoCOFXATzwsAVQIwIoAfdGOAI2F0gCBj2SYB4HETzwsAgCNhAcv/ItnfAf6AImEByx+AIWEB9ACOODCAG2FVB8v/gBphAcsPgBlhAcoHyVAHzMlQBszJUAbMyVACzMntVIIQZ6C5X4AfYoAhYYAgZQHZIiHgcSkBzwsAgB9hAc6AHmEBy/8hcHKAG2NzgB1jgA6AEmNygBxjcoAeY4AZYXKAHmMBcoAeY4Ac4AASYXKAHmOAH2HZ",
        code: "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",
        codeHash: "c9e9e5ce23da5ee4625bd11641a1103cc49b08b4fa18395de5f97c9b95c995ba",
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

    async runTransfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletBalanceOutput,
    }> {
        return await runHelper(this, "balance", input);
    }

    async balance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: FlexWalletBalanceOutput,
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async acceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runBurn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runUnwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "unwrap", input);
    }

    async unwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrap", input);
    }

    async runMakeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "makeOrder", input);
    }

    async makeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "makeOrder", input);
    }

    async runCancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "cancelOrder", input);
    }

    async cancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelOrder", input);
    }

    async runReturnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "returnOwnership", input);
    }

    async returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runBind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
    }> {
        return await runHelper(this, "bind", input);
    }

    async bind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bind", input);
    }

    async runDetails(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletDetailsOutput,
    }> {
        return await runHelper(this, "details", input);
    }

    async details(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: FlexWalletDetailsOutput,
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        transactionTree: ResultOfQueryTransactionTree,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async getBalance_(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

