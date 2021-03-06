import { Flex } from "../flex";
import { AccountOptionsEx } from "../../contracts/account-ex";
export declare type DeployTraderTip31WalletOptions = {
    clientAddress: string;
    traderId: string;
    tokenWalletAddress: string;
    tokenWrapperAddress: string;
    tokenWrapperWalletAddress: string;
    tokenUnits: string;
    everWallet: AccountOptionsEx;
    transferEvers?: number;
    evers?: number;
    keepEvers?: number;
};
export declare type DeployTraderTip31WalletResult = {
    address: string;
};
export declare function deployTraderTip31Wallet(flex: Flex, options: DeployTraderTip31WalletOptions): Promise<DeployTraderTip31WalletResult>;
//# sourceMappingURL=deploy-tip31-wallet.d.ts.map