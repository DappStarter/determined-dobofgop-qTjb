require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad good kitchen orange small'; 
let testAccounts = [
"0x344595387bcf0dc89da59df5f53aefb61177203b21c7bde465ca4ce4537458b9",
"0x44cc6c0a21d1b7319d0c5f8da2203a2bd2f5c466962d010563f8d8dc29929356",
"0xb342b35c5995d99d8570af259d64381d8a7cc095310ebdbc18d42c0fee716241",
"0xaef02bc0f2c51c34abe473398ef3495efbe3dc369bd4a3127c7a712676acd6fd",
"0x5abb267fbc15e3add275c0e4ae5b6b7977989cf11ad8eccd29be63c83bc2f4f0",
"0x185cd1fc4d868ca20ae414dcc44620226c3273e6ea04a0bad2cc8412219761f3",
"0x7d631bfcc597259aa7868f050c6bccc4fde0f8c77d14fb251b1bf14814dfeffc",
"0x6e4140784dd8ff375f03006f40ae43adb0db0c6c56989f2cd4a5f97765c57c24",
"0x1a6947990a1978ea999a13cd5ad31e49fdc7e734701a3663e407568f00d26a2b",
"0x819ba31c722cd721844b22d771f0788ce6f71cea4076b3b1d3a5712431190a93"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

