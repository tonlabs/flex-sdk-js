import {
    FlexClientAccount, PriceXchgAccount,
    XchgPairAccount,
} from "../../contracts";
import {
    getWallet,
} from "./internals";
import { PriceXchgGetDetailsOutput } from "../../contracts/generated/PriceXchgAccount";
import { TraderOptions } from "./types";
import { Evr } from "../web3";
import { priceToUnits } from "../flex";


export type CancelOrderOptions = {
    /**
     * Flex Client address. If you are a trader, ask the person who lent you the money.
     */
    clientAddress: string,
     /**
     * Trader info
     */
    trader: TraderOptions,
     /**
     * Trading market
     */
    marketAddress: string,
     /**
     * Order price
     */
    price: number,
     /**
     * Optional order ID. If omitted, all orders with this price will be canceled.
     * Otherwise, only order with orderId will be canceled.
     *
     */
    orderId: number | string,
     /**
     * Evers for commission.
     */
    evers?: bigint | number | string,

};

export async function cancelOrder(evr: Evr, options: CancelOrderOptions): Promise<void> {
    const pair = await evr.accounts.get(XchgPairAccount, options.marketAddress);
    const pairDetails = (await pair.getDetails()).output;
    const price = priceToUnits(options.price, pairDetails.price_denum);
    const priceDetails = await getPriceDetails(evr, options.clientAddress, pair, price.num);
    let sell: boolean;
    if (findOrder(options.orderId, priceDetails.sells)) {
        sell = true;
    } else if (findOrder(options.orderId, priceDetails.buys)) {
        sell = false;
    } else {
        throw new Error(`Order ${options.orderId} not found in price ${priceDetails.address}.`);
    }
    const wallet = await getWallet(evr, {
        marketAddress: options.marketAddress,
        sell,
        clientAddress: options.clientAddress,
        trader: options.trader,
    });
    await wallet.runCancelOrder({
        order_id: options.orderId,
        sell,
        price: priceDetails.address,
        evers: options.evers ?? 3e9,
    });
}

function findOrder(id: number | string, orders: any[] | null | undefined): any | undefined {
    if (!orders) {
        return undefined;
    }
    const numId = Number(id);
    return orders.find(x => Number(x.order_id) === numId);
}

async function getPriceDetails(
    evr: Evr,
    client: string,
    pair: XchgPairAccount,
    priceNum: string,
): Promise<PriceXchgGetDetailsOutput & { address: string }> {
    const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
    const clientAccount = await evr.accounts.get(FlexClientAccount, client);
    const address = (await clientAccount.getPriceXchgAddress({
        price_num: priceNum,
        salted_price_code: saltedPriceCode,
    })).output.value0;
    const priceAccount = await evr.accounts.get(PriceXchgAccount, address);
    const details = (await priceAccount.getDetails()).output;
    return {
        address,
        ...details,
    };
}
