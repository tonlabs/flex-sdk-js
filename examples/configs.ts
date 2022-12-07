type TraderConfig = {
    client: string,
    id: string,
    signer: string,
}

type EverWalletConfig = {
    address: string,
    signer: string,
}

type Tip3Config = {
    TBTC: {
        tokenWalletAddress: string,
        tokenWrapperAddress: string,
        tokenWrapperWalletAddress: string
    },
    TSDT: {
        tokenWalletAddress: string,
        tokenWrapperAddress: string,
        tokenWrapperWalletAddress: string
    },
    EVER: {
        wrapperAddress: string
    }
}

type MarketConfig = {
    EVER_TSDT: string
    EVER_TBTC: string
}

type ExamplesConfig = {
    endpoints: string[],
    superRoot: string,
    trader: TraderConfig,
    everWallet: EverWalletConfig,
    tip3: Tip3Config,
    market: MarketConfig,
}

export const DEFAULT_CONFIG: ExamplesConfig = {
    endpoints: ["https://test.flex.everos.dev"],
    superRoot: "0:7a6d3ab04ab26333d6e0523410b60d9f4bc55913e4c0291010c8314e9e47d169",
    trader: {
        client: "0:08bb63efb181e4b1a3448c5245def6f6ea1ed8d80ccb63d3beadaa34676e300a",
        id: "9e732b1ab32fa6448a7a7089985b82853d33561471cc0d8098ec546dd07a22a8",
        signer: "traderSigner",
    },
    everWallet: {
        address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
        signer: "everWallet"
    },
    tip3: {
        TSDT: {
            tokenWrapperAddress: "0:b550a9138452d36d0a1e38edebac0063f3126e4d7a4cf593e6c090faa2ec0523", // major.address(Wrapper)
            tokenWrapperWalletAddress: "0:c304ee549051d5500877f2fc796bb81e3f9cfde2b1b62de0eb360804ab7fe661", // major.externalAddress(Vault)
            tokenWalletAddress: "0:6c9f3c4ceb865a5746839c1dd7d67f7fe108596d2aecbbe40f457fce00a79ae7", // everWallet(Holder) tip3
        },
        TBTC: {
            tokenWrapperAddress: "0:b10af0f3b17440d3a152e78b7dd971be7d47bc3299aa465bf7ceddb79660b948", // major.address(Wrapper)
            tokenWrapperWalletAddress: "0:69d1ab51377f2fa29fc121b956b96f01f9234b9a3579552d0ec526c1d6e66613", // major.externalAddress(Vault)
            tokenWalletAddress: "0:1309c37ce30b1884a95359009299d89636f43a56f997b11486ae04ca0b8b1ced", // everWallet(Holder) tip3
        },
        EVER: {
            wrapperAddress: "0:1cc3596e2db5cc92d0e02f55526f8aec949924ef320d72b763a5f4aafcca3e30" // minor.address(Wrapper)
        }
    },
    market: {
        EVER_TSDT: "0:6e5cdd84aae99152121653c0901632b11b848f8eb18b1a0963cfffcf9b82d61f",
        EVER_TBTC: "0:c03421cbca87a213a6f9feafd9830f9e3d19d02e6a438ff964362e36cffcb31a",
    }
};
