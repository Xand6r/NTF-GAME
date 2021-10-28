const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Gon", "Naruto", "Saitama"], // Names
    [
      "https://fandomslangcar.files.wordpress.com/2019/03/gon.jpeg", // Images
      "https://www.looper.com/img/gallery/the-entire-naruto-storyline-finally-explained/intro-1583346246.jpg",
      "https://qph.fs.quoracdn.net/main-qimg-db9b029369290ef3aa48fc2c2f29e653",
    ],
    [400, 800, 1000], // HP values
    [100, 50, 2500000000] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();