const Wallet = artifacts.require("wallet.sol");

module.exports = async function (deployer) {
  await deployer.deploy(Wallet);
};
