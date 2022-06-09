const hre = require("hardhat");

async function main() {
  const YieldWhalesNFT = await hre.ethers.getContractFactory("YieldWhalesNFT");
  const yieldWhalesNFT = await YieldWhalesNFT.deploy();

  await yieldWhalesNFT.deployed();

  console.log("YieldWhalesNFT deployed to:", yieldWhalesNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
