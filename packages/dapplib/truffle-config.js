require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note range protect hidden private forget twin'; 
let testAccounts = [
"0xfcecfe068c07b27392666673068c83877b23bfeda00863ad651639d62cc43eb8",
"0xaef849ac4348e50bd2002896cd931739047be8894f7ddce9f7d456fc4068aedd",
"0x88a01259ff064b220e902b6119530e2b9b12354fa24ae913d38230a6e2cdafcf",
"0x838fb45e5e5191de1ded03ac938fdf1bcc85581fe03b8beb3419ce9dd1b3788c",
"0xa1adbe39c9e8a34469212550bed8d7d45fa4b8cdeaae979aa31e631d86c7f260",
"0xc074be7db78fe2dc2b6f7276bb92c99f15dc3b1b21e3f29c97c85db5a350b1c1",
"0x6206b115cd6bff64ff4aece1816b2cc489e126c8e09290b58db006e91ec544ee",
"0x511b0e4e6f5c19395cb06b2a007ff45eed8e06f8f782f5f2996d57c72e0c6e1d",
"0xc65fff295c8913838a585775914eef0360c56ff6dc6dd0c6f5b98337beb393f7",
"0x4fc20d424136ab319190e8eeda6aa5c82200fa5b43bfbc8eb9c2b1f59182f91f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


