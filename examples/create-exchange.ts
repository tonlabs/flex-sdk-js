import { Evr, Exchange } from "../flex";
import { examplesLog } from "./examples";
import { LogLevel } from "../contracts/helpers";

(async () => {
    try {
        const evr = new Evr({
            sdk: {
                network: { endpoints: ["http://localhost"] },
            },
        });
        evr.log.level = LogLevel.DEBUG;
        const signer = "flex-exchange";
        const info = await Exchange.deploy(evr, {
            signer,
            everWallet: { signer: "msig" },
            tokenTypes: {
                tip3: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                },
                ever: {
                    wrapperSigner: signer,
                    wrapperDeployerSigner: signer,
                },
            },
        });

        examplesLog("Exchange", info);
        await evr.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
