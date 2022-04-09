import hre from "hardhat";
// import path from "path";

(async () => {
  // verify contract code on etherscan
  console.log("verify contract on etherscan ... ");
  const contractAddress = "0x6b38800efcdee349ed9d32b578ad0eefcbc7b490";
  //   const contractPath = path.join(__dirname, "../contracts/MetaJam_Awards.sol");

  try {
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
      //   contract: contractPath,
    });
  } catch (err) {
    console.log(err);
  }
})();
