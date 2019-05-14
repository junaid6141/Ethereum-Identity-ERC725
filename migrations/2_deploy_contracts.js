
const ERC725 = artifacts.require("../contracts/ERC725.sol");
const KeyHolder = artifacts.require("../contracts/KeyHolder.sol");
const KeyHolderLibrary = artifacts.require("../contracts/KeyHolderLibrary.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC725);
  deployer.deploy(KeyHolderLibrary)
  deployer.link(ERC725, KeyHolderLibrary, KeyHolder);
  deployer.deploy(KeyHolder);
};
