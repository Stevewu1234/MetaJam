import hre from "hardhat";

(async () => {
  const [signer] = await hre.ethers.getSigners();
  console.log("deploying contract ... ");
  console.log("deployer is: ", signer.address);
  const metaJamFactory = hre.ethers.getContractFactory("MetaJam_Awards");
  const metaJam = await (await metaJamFactory).deploy();

  await metaJam.deployed();
  console.log(`contract deployed: ${metaJam.address}`, "\n");
})();
