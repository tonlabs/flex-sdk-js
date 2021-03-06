# flex-sdk-js

FLEX-SDK is a library with convenient facade over the FLEX smart contract system
and can be used by FLEX maintainers, FLEX traders and others.

The library is targeted to be used with Node.js applications.

Read the full Flex documentation here https://docs.everos.dev/flex

# Setup Library

Library setup is simple, it includes setup for the Everscale client and configuration of the FLEX SDK:

```ts
import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex } from "../flex";

TonClient.useBinaryLibrary(libNode);
Flex.config = {
    web3: {
        network: {
            endpoints: ["https://flex2.dev.tonlabs.io"],
        },
    },
    superRoot: "0:ed1741f19f7c2f870e96bca16c45283721f023235dc6896c765407e9127bb073",
};
```

Many functions of FLEX SDK accept parameters named `signer`.
It is an object that has a secret, required to sign messages that will be sent to the blockchain accounts.

`signer` parameter can accept these values:

- String containing the secret key of the key pair required to sign messages.
  Secret key must be represented as a hex string with exactly 64 characters.
  
- Instance of the [`Signer` type](https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_abi#signer) from the `@eversdk/core` library. 

- Name of the signer in the [`everdev` signer registry](https://github.com/tonlabs/everdev/blob/main/docs/command-line-interface/signer-tool.md).


# Exchange Maintenance

## Super Root

## Global Config

## Tokens

## Pairs

## Migration

# Client Management

Before trading on FLEX you have to prepare some required FLEX actors: client and user.

## Clients and Traders

Client creation requires a wallet with EVER balance that will become an owner
for Client contract used to perform management operations of Flex. 
Good choice is a Multisig Wallet. 
Owner contract means that only this contract can call functions of Client contract. 
One of the management funcstions is deploy of a Trader's contract:

```ts
const everWallet = new EverWallet({
    address: "0:b4da2773b3566c8799ff8292bb1058662d143556a7ac8a129c481a38657cbd33",
    signer: "msig private key",
});

const client = await Client.deploy({
    everWallet,
    signer: "flex-client-1",
});


// Client deploys Trader's contract (`userIdIndex` contract)

await client.deployTrader({
    // Trader's ID
    id: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
    // Trader name
    name: "Trader's Name",
    // Trader's public key that will be used to validate `makeOrder` and `cancelOrder` operations
    pubkey: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",
});

```

## FLEX Wallets

# Trading

## Orders

If you have a FLEX wallet with tokens you can start making orders.

```ts
// Trader initialization, all the trader's wallets addresses are calculated  
// and linked under the hood.
const trader = new Trader({
    client: "0:ae6cb924f28a5b95f61afd239ad7cf3920edcfadcda456afa3b2dea7c9da31a8",
    id: "88dfec98c82a5e34f3152be0525ec58544f9e1dcc9a88fde75f7b7eb4c31d4b5",
    signer: "private-key",
});

const order = await trader.makeOrder({
    sell: false,
    market: "0:f0bb8d8a4a1416a7b380cb217513395aea994487a2b3e80129c136184def8bb4",
    price: 1.23,
    amount: 1,
});

console.log(`Order: ${JSON.stringify(order, undefined, "    ")}\n`);
```

# Examples

You can examine the `examples` folder for a lot of examples. 

# CLI

The major part of library functionality is accessible via command line interface flex-cli.

To use command line interface run command `npm run cli command [options] <arguments>`.

You can get help on CLI running `npm run cli --help`.

# Remarks for the FLEX SDK Developers

FLEX SDK contains folder `contracts` with TS wrappers of all contracts used in 
FLEX contract system.

To update FLEX contract wrappers you have to perform following steps:

- Clone `ton-contracts` repository aside of `flex-sdk-js` folder.
- Checkout `ton-contracts` repo on required branch.
- Run `npm run update-contracts` inside of `flex-sdk-js` folder.

After that step the `flex-sdk-js` library can stop to compile.
You have to perform changes in library code to reflect changes in 
FLEX contract system if required.


