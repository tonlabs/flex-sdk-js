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
exports.UserDataConfigAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class UserDataConfigAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(UserDataConfigAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", input);
        });
    }
    onDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", input);
        });
    }
    runDeployFlexClient(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployFlexClient", input);
        });
    }
    deployFlexClient(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployFlexClient", input);
        });
    }
    runRequestDetails(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestDetails", input);
        });
    }
    requestDetails(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestDetails", input);
        });
    }
    runGetFlexClientAddr(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getFlexClientAddr", input);
        });
    }
    getFlexClientAddr(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getFlexClientAddr", input);
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
    runGetConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getConfig", {});
        });
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getConfig", {});
        });
    }
}
exports.UserDataConfigAccount = UserDataConfigAccount;
UserDataConfigAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }], "outputs": [] }, { "name": "deployFlexClient", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "deploy_evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "requestDetails", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }] }, { "name": "getFlexClientAddr", "inputs": [{ "name": "pubkey", "type": "uint256" }], "outputs": [{ "name": "value0", "type": "address" }] }, { "name": "getDetails", "inputs": [], "outputs": [{ "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding", "type": "tuple" }, { "name": "flex_client_stub", "type": "cell" }, { "name": "flex_client_code", "type": "cell" }, { "name": "auth_index_code", "type": "cell" }, { "name": "user_id_index_code", "type": "cell" }] }, { "name": "getConfig", "inputs": [], "outputs": [{ "name": "super_root", "type": "address" }] }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "components": [{ "name": "wallet", "type": "uint32" }, { "name": "exchange", "type": "uint32" }, { "name": "user", "type": "uint32" }], "name": "triplet_", "type": "tuple" }, { "components": [{ "name": "flex", "type": "address" }, { "name": "unsalted_price_code_hash", "type": "uint256" }], "name": "binding_", "type": "optional(tuple)" }, { "name": "flex_client_stub_", "type": "optional(cell)" }, { "name": "flex_client_code_", "type": "optional(cell)" }, { "name": "auth_index_code_", "type": "optional(cell)" }, { "name": "user_id_index_code_", "type": "optional(cell)" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "9b56878a25eaa8f6a2dbf8eaf17bc0adf0941c405c3eb470703f0c407f0328bc",
};
//# sourceMappingURL=UserDataConfigAccount.js.map