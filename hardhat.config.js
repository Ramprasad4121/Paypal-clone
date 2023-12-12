require("@nomicfoundation/hardhat-waffle");
require("@nomicfoundation/hardhat-etherscan");


const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    }
  },

  ethescan: {
    apikey:process.env.APIKEY,
  }
};
