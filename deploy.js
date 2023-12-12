
const hre = require("hardhat");

async function main() {

  const Paypal = await hre.ethers.getContractFactory("Lock");
  const paypal = await Paypal.deploy();
  await paypal.deployed();

  console.log("Paypal deployed to" , lock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
