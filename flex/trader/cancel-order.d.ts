import { TraderOptions } from "./types";
import { Evr } from "../web3";
export declare type CancelOrderOptions = {
    client: string;
    trader: TraderOptions;
    market: string;
    price: number;
    orderId: number | string;
    evers?: bigint | number | string;
};
export declare function cancelOrder(evr: Evr, options: CancelOrderOptions): Promise<void>;
//# sourceMappingURL=cancel-order.d.ts.map