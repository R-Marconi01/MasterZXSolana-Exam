import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();


console.log(`Public Key: ${keypair.publicKey.toBase58()} \n\n Private Key: [${keypair.secretKey}]`)
