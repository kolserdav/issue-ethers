/* eslint-disable no-undef */
const NFT = artifacts.require('NFT');

module.exports = function (deployer) {
  deployer.deploy(NFT, '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0');
};
