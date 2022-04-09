import hre from "hardhat";

(async () => {
  const contractAbi = hre.artifacts.readArtifactSync("MetaJam_Awards").abi;
  const address = "0x6b38800efcdee349ed9d32b578ad0eefcbc7b490";
  const [signer] = await hre.ethers.getSigners();
  const metaJam = new hre.ethers.Contract(
    address,
    contractAbi,
    hre.ethers.provider
  );

  const fashionQueen = {
    recipient: "0x222B1285D6754b3868538e0aB5Eb372de5e2Ac26",
    tokenUri: "ipfs://QmYJpnr5Ud4dybSiD4iLfGJVT5ZryXqUqBHtF6HgVacpvn",
  };

  const peopleChoice = {
    recipient: "0xb7637542279e38fADBcDF7298aA381AAFd157795",
    tokenUri: "ipfs://QmPUaEy1Jjk3aYP7kPENirnJJnWutS1wU3cZgccis1SiN5",
  };

  console.log("mint token ... ");

  try {
    // mint token1
    await metaJam
      .connect(signer)
      .grant(fashionQueen.recipient, fashionQueen.tokenUri);

    // mint token2
    await metaJam
      .connect(signer)
      .grant(peopleChoice.recipient, peopleChoice.tokenUri);
  } catch (error) {
    console.log(error);
  }

  console.log("check mint status");

  try {
    const token1Address = await metaJam.callStatic.ownerOf(0);
    const token2Address = await metaJam.callStatic.ownerOf(1);
    const token1URI = await metaJam.callStatic.tokenURI(0);
    const token2URI = await metaJam.callStatic.tokenURI(1);

    console.log("The owner of token1 is: ", token1Address);
    console.log("The owner of token2 is: ", token2Address);
    console.log("The tokenURI of token1 is: ", token1URI);
    console.log("The tokenURI of token2 is: ", token2URI);
  } catch (error) {
    console.log(error);
  }
})();
