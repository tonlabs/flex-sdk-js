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
exports.AuthIndexAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class AuthIndexAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(AuthIndexAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", {});
        });
    }
    runLocalOnDeploy() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", {});
        });
    }
    runRemove(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "remove", input);
        });
    }
    runLocalRemove(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "remove", input);
        });
    }
}
exports.AuthIndexAccount = AuthIndexAccount;
AuthIndexAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [], "outputs": [], "id": "0xa" }, { "name": "remove", "inputs": [{ "name": "dst", "type": "address" }], "outputs": [], "id": "0xb" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "owner_", "type": "optional(address)" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "4e305bcbd34b3a8b3825ddc769a51e7f8f848b94217097e40c9aa4aa7b8f3d30",
};
//# sourceMappingURL=AuthIndexAccount.js.map