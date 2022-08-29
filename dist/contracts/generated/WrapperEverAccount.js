"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperEverAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WrapperEverAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(WrapperEverAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runInit(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "init", input);
        });
    }
    init(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "init", input);
        });
    }
    runDeployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runOnEverTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onEverTransfer", input);
        });
    }
    onEverTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onEverTransfer", input);
        });
    }
    runBurn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burn", input);
        });
    }
    burn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burn", input);
        });
    }
    runTransferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferFromReserveWallet", input);
        });
    }
    transferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferFromReserveWallet", input);
        });
    }
    runRequestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloned", input);
        });
    }
    cloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloned", input);
        });
    }
    runSetCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setCloned", input);
        });
    }
    setCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setCloned", input);
        });
    }
    runGetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {});
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTip3Config", {});
        });
    }
    getTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTip3Config", {});
        });
    }
    runHasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasInternalWalletCode", {});
        });
    }
    hasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasInternalWalletCode", {});
        });
    }
    runGetWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getReserveWallet", {});
        });
    }
    getReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getReserveWallet", {});
        });
    }
}
exports.WrapperEverAccount = WrapperEverAccount;
WrapperEverAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "init", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "reserve_wallet_evers", "type": "uint128" }, { "name": "internal_wallet_code", "type": "cell" }], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0xa" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xb" }, { "name": "onEverTransfer", "inputs": [{ "name": "tokens", "type": "uint128" }, { "components": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }, { "name": "keep_evers", "type": "uint128" }], "name": "args", "type": "tuple" }], "outputs": [], "id": "0xca" }, { "name": "burn", "inputs": [{ "name": "tokens", "type": "uint128" }, { "name": "answer_addr", "type": "address" }, { "name": "sender_pubkey", "type": "uint256" }, { "name": "sender_owner", "type": "optional(address)" }, { "name": "out_pubkey", "type": "uint256" }, { "name": "out_owner", "type": "optional(address)" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xc" }, { "name": "transferFromReserveWallet", "inputs": [{ "name": "answer_addr", "type": "optional(address)" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint128" }], "outputs": [], "id": "0xd" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0xe" }, { "name": "cloned", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "first", "type": "optional(address)" }, { "name": "second", "type": "uint256" }], "id": "0x400" }, { "name": "setCloned", "inputs": [{ "name": "cloned", "type": "optional(address)" }, { "name": "cloned_pubkey", "type": "uint256" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "wrappers_cfg_code_hash", "type": "uint256" }, { "name": "wrappers_cfg_code_depth", "type": "uint16" }], "outputs": [], "id": "0x500" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "total_granted", "type": "uint128" }, { "name": "wallet_code", "type": "cell" }, { "name": "external_wallet", "type": "optional(address)" }, { "name": "reserve_wallet", "type": "address" }, { "name": "super_root", "type": "address" }, { "name": "cloned", "type": "optional(address)" }, { "name": "type_id", "type": "uint8" }], "id": "0x100" }, { "name": "getTip3Config", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "id": "0x200" }, { "name": "hasInternalWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x10" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x300" }, { "name": "getReserveWallet", "inputs": [], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x12" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "wic_unsalted_code_", "type": "cell" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "workchain_id_", "type": "int8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "total_granted_", "type": "uint128" }, { "name": "internal_wallet_code_", "type": "optional(cell)" }, { "name": "start_balance_", "type": "varuint16" }, { "name": "super_root_", "type": "optional(address)" }, { "name": "wallet_", "type": "optional(address)" }, { "name": "cloned_", "type": "optional(address)" }, { "name": "cloned_pubkey_", "type": "uint256" }, { "name": "type_id_", "type": "uint8" }], "events": [] },
    tvc: "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",
    code: "te6ccgECRQEAFiAAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIBUEAjz/0wAC0CDbPI6AIyHhgQIAFdcYATAkAVUhVQRVBNkUBQEkMAPTAI6AIiHhAdP/ATAhVQHZBgP2be1AA9M/0x/TH5UB7VDbMIEBACMBuY6A4SLBEo6A4QLAEPKpMAmj8nlfBALTAds8cPhkXwkJwALIAfKwcyEBzwsBcCIBzwsBydABzgn6QDBQCc6AEHESzwthgBAazwsfCm7AAHGwGs8LAMlQCMzJcPsAVQdVCV8JVQHZCwdBAnYCwBLyqTAJo/J5+CjbPHD4ZF8LJtMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2UEIAf7IcSEBzwsAcCIBzwsAgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCMBzwv/gBKAEhLPCw8G0gcwUgfKB8kizFLkznDPCyBwE88LP4AVYdMBBclQ4sxR9c6AEmFVA/QADcACUC3MyXASzwv/zMlQrcwYywdwzwt/CQH+Fcv/GszJB/KwcyMBzwsBcCQBzwsBydABzgX6QDBQBc6CEgE0ABIjAc8LJyfXZc8LD3QkAc8LAnETzwthgBIVzwsfUGLKB4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwWzwv/B/kAF88L/8nQ+QIUzwv/ydBQBQoAJM7JUATMyXD7AFVRVRhfCVUB2QOmgQIAIwG5joDhgQEAE7ryqTAJo/J52zxbBMAAJ27DAHD4ZLEBBQHy0G34KCDTASHBA5gwwAPy0GPyNOEBwALytNMAjoAiIeEB0wQB1xgBMCFVAdkPQQwB/shxIQHPCwBwIgHPCwCC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868IwHPC/+AEs8LDwXSBzBSBsoHySHMU3LOcM8LIHAjAc8LP4AeYdMBBMlWGFUCzFG3zoAcYVUD9AADwAJQI8zJcBLPC//MyVYVVQnMVhQBywcNAfxwzwt/VhIBy//MyQHysIISATQAEiUBzwsnIddlzwsPcyYBzwsBcCcBzwsBydABzoLwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwSzwv/AvkAEs8L/4EBACYBzwsfA/pAMFACzoAVYVUCzALJdCYBzwsCGMoHB9AOAOSAFGFVAsxxE88LYXEdsFGVzoATYVUCywcC+QIXzwv/ydBQBM5Q88v/Hct/G8xwzwsAjiVxHs8LB8lQA8zJUArMyQHMyVAFzMlw+wCBAQBV0FUfgBBlVQHZJSHhUJzOK3BVEQFVGlUNVVZVClUMVQ1VDdkC1oEDACMBuY6A4YECAIECABS68qkLo/J5MAfTAds8cPhkXwsHwALIAfKwcyEBzwsBcCIBzwsBydABzgf6QDBQB86BAgAXzwsfFMwSzHEVzwthBMsHFMv/+CgBzslQAszJcPsAVQZVCF8IXhDZEEECWoEDABO68qkKo/J5CdXT/9s8cPhkjoCAEmHTAJlwcSRVEQFVEdkiAeH6QHAk2UERAaoB0chwIQHPCwBwIQHPCz/4KCPOgBlhAcv/gBdhVQHMgBZhAcyOgAWjAYAWYc8LB3DPC3+AFGEBy/+acSUBzwsAF84l2SIB4SNVATAlVQFVMlUGVRXZEgH8gvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCUBzwv/gBLPCw9WFQHKB8lQBMxwFM8LIIAdYdMBgBthVQL0AAXJAsACUCXMyVADzMlQBszJAvKwcyMBzwsBcCQBzwsBydABzgH6QDABzoISATQAEiMBzwsnItdlEwDazwsPdCQBzwsCgQMAcRTPC2GBAwAWzwsfAYAVYc8KB4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwTzwv/BPkAFM8L/8nQ+QLPC//J0FACzslQAszJcPsAgBRicoAWY4AWZVUB2QA40wEBwALtQAHysO1Q+kD6QPoA0wAwwwBxsANfAwJQ3wHQINMAAfJwINYBlu1A7VDbMAHTAI6AATAhAeEwBNs8cFUgXwMB2RcWArTSH+1AAsD/+ADy4GXTH4IQQ4TymBK68uBl03/bPCpWE7ny0GZVCYASYaFxGLBxFrBxFLBVD1UPVQ9VD1UPVQ9VDFUPVQ9VD1UOVQ9VDlUPVQ1VD1UP2zww7VBBPgSWMCTXDR9vowbbPJlwVSBVNF8HAdknAeEn10nysJuj8nlwWVUzXwYB2SMB4W0I0x+cW6PyeXBZVTNfBgHZIsEOjoDhIsEMjoDhIsELRDEhGAP+joDhAsAKIuHTH9N/2zwJcPhkboARYdQwAfLgaCD5AILwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zry68uBn+CrQINdKwAPy4EVyKgH7AshwIQHPCwCC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868IhxBGQH8Ac8L/4ASzwsPcSIBzwsBcCQBzwsBBdSAIGHTAAjJAtT4KHApAc8LP1LIzHQrAc8LAlYZVQnKBwMM0wAF1XAuAc8LH3YuAc8LAgvQcVYYsAP6QDCAGGHAAArTAArJVhNWE85WIFUJygdxG88LAFYjgBJhzFUFVQ/OB8kM+kBxGgH+gBhhAbBxgBphAbBVD1ULsQpVB4ATYczJcYAUYQHPCwCAFGEBznDPCyBWKwH0AMzJcBnPC/8YzMlWHVUFzFYcAcsHcM8Lf1YaAcv/zMlQBcxwzwsAySD5ABzPC//J0FAIzoAdYfoCViUB9ABw+gJw+gJzzwthGsxxzwsAGszJcBsB9PsAyHYhAc8LA3AiAc8LAcnQAc4aznD6AoAjYQH0AIAbYVUJyx9wEvoCcRLPCwBwEvoCAclxEs8LYczJgQCA+wCAGGGAGGGAGGGAGGGAGGGAGGGAGGGAEmGAF2FVCVULgBZhVQuAFmFVDoAWYYAYYds8elWwVR1fDgHZPgJQMAKj8nkw0x/T/9s8cPhkjoCAEmHTAJlwcSRVEQFVEdkiAeH6QHAk2UEdAe6AHGHTANMA0wD6QO1HbxBvFwH6QAjV03/4KAHRCvoAMARvEI6ACqMFoXL7AshwIQHPCwBwIQHPCz9Rws6AIWEBy/9WH1UMzFYeAcxWHQHLB3DPC39WGwHL/5pxJAHPCwAezizZKAHhIlUFMCxVAVVmVQ1VOlUc2R4B/oLwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrwkAc8L/3AlAc8LAYASEs8LD1YeAcoHcSUBzwsBAckCyXQnAc8LAnYnAc8LAgLQUEfMcBXPCyBWHVUCzHAYzwsfcRjPCwBWK1UB9AAEyVBizlYfVQLKBwbJcYAWYQEfAf6wcYAYYQGwcYAaYQGwUFbMyVAGzMmAEWHMyVAGzHDPCwDJIPkAF88L/8nQUgLOUAf6AlYlAfQAcPoCcPoCc88LYRXMcc8LABPMyXD7AMiAHWEhyx8VznYlAc8LA3AWzwsBydAByQXOGM5w+gKAIWEB9ABw+gJw+gJxzwthE8zJIAGEgQCA+wCAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWGAGWFVCoAZYVULgBlhgBFhgBlhgBlh2zyAC1WgVRxfDQHZPgNyMAHBDY6A4QGj8nnTf/pA0//V2zxwcPhkjoCAE2HTAI4QcCNwVRMBVQFVEwFVBVUF2SIB4fpAcSTZK0EiATYB0//VjoAB0wCZcHAkAVURVQLZIgHh+kBxJNkjASyOgALTAJlwcSVVEQFVEdkiAeHUcCXZJAHqAdEI0Y6ACsMAA/Lga1YYViO58tBp7UdvEG8XbxBWIwG58uBpyHAhAc8LAHAhAc8LP1YgAcxWHwHM+CgjzlYkAcv/AVYfzwsHgCth0wDTANMAcBXPC38E+kAwViFVBMv/lCZWEtkrAeFxKAHPCwBWEwHOVhLZJQHSgvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvCkBzwv/gBLPCw9WJAHKB8lQCMxwGM8LIFYxAfQAB8l0KQHPCwKCEgE0ABIazwsnViRVCcoHUCnMyVAHzMkBzMkg12UWzwsPJgP+gvDJL2tfc3NwdKYBBuCmKie24Liq2K5mokaoq1/UInvOvM8L/wX5ABXPC//J0PkCFc8L/8nQE8cF8uBqXwOAGGFWIqEgVhigcvsCjoAJo46A4ch2IQHPCwNwEs8LAcnQAc4WzoAiYfoCgCdhAfQAcPoCcPoCcM8LYcmBAID7ACooJwAYWyWAHGKAHWGAHWHZAf7IdiEBzwsDcCIBzwsBydABzhfOgQDKJwHPCx+AJGEBy3+AImEBy/8D0NN/cBP6AgLTfzCAKWFVAvQAcPoCcPoCcc8LYY4XUDnLf8t/yVAHzMlQBszJgQCA+wAwJtmXcBbPCwAl2SgB4XEWzwsAH84kcFUdVR0BVQ5VHQFVHVUYKQAUAVUrVQ9VDlUP2QGecVUPAbBxgBJhAbBxgBRhAbCAHGGAHGGAHGGAHGGAHGGAHGFVC4AcYYAcYYAcYVUJgBxhVQuAHGFVDYAcYYAcYds8gAxV8HKAEmOAEmUB2T4CRAGj8nnbPHD4ZI6AgBJh0wCZcHEkVREBVRHZIgHh+kBwJNlBLAGeAdX6QNN/0S3y4G0ugB1h0wDTANMA+kBRUccFBfpA+gAwBvLgZPgoINMBIcEDmDDAA/LQY/I04QHAAvK00wCOgCIh4QHTBAHXGAEwIVUB2S0B/MiC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868IQHPC/+AEs8LDwPSBzBSBMoHcSIBzwsAJgHOcCMBzwsAAsntR28QURPMcBPPCyABbxd0JQHPCwKAE2GjBMlwFs8LP1GmzlYtVQP0AAOCEgE0ABIXzwsnVQNVCy4B9oAUYeMEUIPKB3GAF2EBsHGAGWEBsHGAG2EBsFB2zMlwFM8L/xPMViFVCswHbxAfonL7Ag3JVh5VBcxWHQHLB3DPC39WGwHL/8zJINdlF88LD4LwyS9rX3NzcHSmAQbgpiontuC4qtiuZqJGqKtf1CJ7zrzPC/8G+QD4RC8B/oIQgAAAACGxghD/////ErxQKMv/cEgI4wTIeiEBzwsfEssfcc8LAHAiAc8LAcl2IwHPCwMJydAB0AH5AlBSzlUPVQLOH8t/cM8L/3DPCwDJUA7MyVAmzlDLy//J0FAKznD6AoAhYQH0AHD6AnD6AnHPC2ETzMmBAID7ADCAGGEwAXSAGGGAGGGAGGGAGGGAGGGAGGGAGGGAGGGAGGFVD4AYYVULgBhhgBNhgBhhgBhh2zyADVWQVRtfDAHZPgT+gQQAIwG5joDhgQDKIwG5joDhAsAOIuECo/J52zxw+GSAEmHTH8hRIssfdiMBzwsDcBTPCwHJ0IAaYdMAUCXOUvPLfwTTANMA+kBxG7BxHbBxH7AHyQXOcPoCgB5hAfQAcPoCcPoCcc8LYRTMyYBA+wBfBIARYYARYYARYYARYTgzQTIBXIARYYARYYARYYARYYARYYARYVUJVQ+AEWFVD4ARYVUPVQ/bPIAOVTBVFV8GAdk+AlyBAMoTuiLhAqPyeTDTf9P/2zxw+GSOgIASYdMAmXBxJFURAVUR2SIB4fpAcCTZQTQB/oAcYdMAA9XTf9N/0QFWG6AF0wDTAPpA+kD6ADBQCbny0GxWHYAWYaAgVhWgcvsCyHAhAc8LAPgoIs6AH2EBy/9wIgHPCz+OgAyjVh9VAcxWHgHMVh0Bywdwzwt/VhsBy/+acSUBzwsAH84s2SIB4SNVATAsVQFVDlWjVQ5VHdk1AfqC8Mkva19zc3B0pgEG4KYqJ7bguKrYrmaiRqirX9Qie868JQHPC/9wJgHPCwGAEhLPCw+CEEOE8pgnAc8LHwFWH88KB3EnAc8LAQPJdigBzwsCAdBwFs8LIFYfVQTMA8mAJmFVBMt/G84dy39xzwsAdCgBzwsCUKfMB8lxEzYB/s8LAFYpVQz0AAjJUELOVh5VBsoHUDnMcYAVYQGwcYAXYQGwcYAZYQGwUEnMyVAHzMlVD8zJUATMA8lwFM8LAMkg+QAZzwv/ydBQAs5w+gKAImEB9ABw+gJw+gJzzwthF8xxzwsAzMmBAID7ADCAGGGAGGGAGGGAGGGAGGGAGGE3AVRVB4AYYYAYYYAYYVUKgBhhVQyAGGFVDYAYYYAYYds8gQDKVZBVG18MAdk+A+SBBQAjAbmOgOGBBAATuiLhAqPyeY6A2zxw+GTIcCEBzwsByXYiAc8LAwHQgBth0wDTANMAgBph0x8wUFbOUFbLHwP6QDBQBc5w+gKAHWEB9ABw+gJw+gJxzwthmHATzwsAVhbZKAHhcRPPCwAoAc5WFtk6OUEBqiYBy//JUALMyYBA+wBxFrBxGLBxGrCAE2GAE2GAE2GAE2GAE2GAE2GAE2GAE2GAE2GAE2FVCYASYYATYYASYYATYYASYYASYds8gQQAVWBVGF8JAdk+AmKBBQATuiLhAqPyeds8cHD4ZI6AgBRh0wCfcCNwVRMBVQFVBFUFVRTZIgHh+kABcSTZQTsB/ALT/9X6QNP/0w/RVQ/y4G1WGdAg10rAAsgB8uBFVhIhzlFRzhTL/xLLD8lQA8xwIgHPCwBwIQHPCwACyVFDznQkAc8LAnAkAc8LACTJgCRh0wDTANMA+kAwUEXMVh1VBcoHUKbMyXEYzwsAF8xxzwsACMlwJgHPCx9WJwH0ADwB/FYeAcxwzwsIzMlQCMxwzwsAyfkAE88L/8nQIQHHBfLgbnYTzwsCcBXPCwHJ0FAEzs5w+gJxVQ8BsAjDAIAhYVUB9ABw+gJw+gJwzwthyYBC+wBxgBphgBphgBphgBphgBphgBphgBphgBphgBphgBphVQmAGmGAE2GAE2FVDT0BJoATYYAXYds8gQUAVcBVHl8PAdk+ATjIcCEBzwsAgBJhIcyAEmEBzHEasFHC9ABQC/oCPwH+jmdxFrCOSO1AcRawo44aMFA5y//LB8lQB8zJUAPMyVAIzMntVO1QXwcgWQFVAeFxHc8LAAZQBs4rcFUaVRMBVQtVGgFVKFUJVQtVDFUM2QGjkygh2eFxKwHPCwAHUAfOJnBVQlUHVRbZDKOAEWFVCcxVDwHLBx/KBx3L/xvLf0AAOpdwHM8LACnZLQHhcRzPCwAHUAfOKHBVQlUHVRbZATDtRNDTAAHyf9TU1NMH0gfT/9N/1fQE+gBCAfyOcQLVjlztQAPVjhDT/9MH0QnRCdEG7VBVBFUVAdMAjh5wcFUCVRhVHYASYV8GVQdVBFUHVRgBVRhVFlUYAdkiAeH6QAFxVQJVGFUdgBJhXwZVB1UEVQdVGAFVGFUWVRgB2QHTAJRwcCTZIgHh+kABcSTZAdMAlHBwJNkiAeFDAAz6QAFxJNkAWNMA7UAC8nDTANMA0wD6QPpABu1QXwX6APQE+gD6ANM/0x/TADDDAHGwBl8G",
    codeHash: "8b4d7b1a6f9f2e9f1b89f8a085e562fe57db0b13589a49fcd8b2eae808633644",
};
//# sourceMappingURL=WrapperEverAccount.js.map