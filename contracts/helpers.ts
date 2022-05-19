import { Account, ContractPackage } from "@eversdk/appkit";

export abstract class Log {
    static NULL: Log = new class NullLog extends Log {
        verbose(_text: string) {
        }
    };
    static STDOUT: Log = new class StdOutLog extends Log {
        verbose(text: string) {
            process.stdout.write(text);
        }
    }();

    static default = this.STDOUT;

    abstract verbose(text: string): void;

    processingStart(title: string): void {
        this.verbose(`${title}...`);
    }

    processingDone(): void {
        this.verbose(" ✓\n");
    }
}

export type ContractPackageEx = ContractPackage & {
    code: string,
    codeHash: string,
}

export type Transaction = {
    id: string,
    in_msg: string,
    [name: string]: unknown,
};

function errorWith(
    err: any,
    method: string,
    account: Account,
    fn: string,
    params: object,
): any {
    err.data = {
        ...err.data,
        [method]: {
            fn: `${account.constructor.name}.${fn}`,
            params,
        },
    };
    return err;
}

export async function runHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
): Promise<{
    transaction: Transaction,
    output: O,
}> {
    account.log?.processingStart(`Processing on Network ${account.constructor.name}.${fn}`);
    try {
        const result = await account.run(fn, params);
        await account.client.net.query_transaction_tree({
            in_msg: result.transaction.in_msg,
            timeout: 60000 * 5,
        });
        account.log?.verbose(`TRN: ${result.transaction.id}`);
        account.log?.processingDone();
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        };
    } catch (err: any) {
        throw errorWith(err, "run", account, fn, params);
    }
}

export async function deployHelper(
    account: Account & { log?: Log },
    fn: string | undefined,
    params: object | undefined,
): Promise<{
    transaction: Transaction,
}> {
    account.log?.processingStart(`Deploy to Network ${account.constructor.name}.${fn ?? ""}`);
    try {
        const result = await account.deploy({
            initFunctionName: fn,
            initInput: params,
        });
        account.log?.processingDone();
        return {
            transaction: result.transaction,
        };
    } catch (err: any) {
        throw errorWith(err, "deploy", account, fn ?? "", params ?? {});
    }
}

export async function runLocalHelper<O>(
    account: Account & { log?: Log },
    fn: string,
    params: object,
): Promise<{
    transaction: Transaction,
    output: O,
}> {
    try {
        account.log?.processingStart(`Executing on VM ${account.constructor.name}.${fn}`);
        const result = await account.runLocal(fn, params);
        account.log?.processingDone();
        return {
            transaction: result.transaction,
            output: result.decoded?.output,
        };
    } catch (err: any) {
        throw errorWith(err, "run", account, fn, params);
    }
}

export function amountToUnits(tokens: number, decimals: string | number): string {
    return Math.floor(tokens * Math.pow(10, Number(decimals))).toString();
}

export function priceToUnits(
    price: number,
    denominator: string | number,
): { num: string, denum: string } {
    const denom = Math.floor(Number(denominator));
    const price_num = Math.floor(price * denom);
    return {
        num: price_num.toString(),
        denum: denom.toString(),
    };
}
