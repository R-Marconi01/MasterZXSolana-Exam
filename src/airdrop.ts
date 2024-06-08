import { 
    Keypair, 
    Connection, 
    LAMPORTS_PER_SOL 
} from "@solana/web3.js";

import wallet from "../wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
    try {
        
        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,      
            1 * LAMPORTS_PER_SOL    
        );

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();

// got 5 SOL by using https://faucet.solana.com/
// got 1 SOL by using airdrop https://explorer.solana.com/tx/3Kh1fRrjhQMuVWiEYEihgyGWWShooJFZjzQGwvqrn2sXmieDduzv9mRcx72x3bQAzcGHGmC2fXZP3xkFtgzTDHid?cluster=devnet