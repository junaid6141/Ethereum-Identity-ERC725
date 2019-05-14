var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "Lc2vdbhIswp6iQDRcmSa";
var mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://rinkeby.infura.io/" + infura_apikey
      ),
      network_id: 4
    }
  }
};
