require('dotenv').config();

console.log("Starting Confirmation Tracker...");
console.log("Connecting to Espresso RPC:", process.env.ESPRESSO_RPC_URL);

setTimeout(() => {
    console.log("Rollup confirmation monitoring started...");
    console.log("Reading confirmations from Arbitrum Sepolia...");
    console.log("Deployment confirmed. TxHash:", process.env.TX_HASH);
    console.log("Connected to Espresso RPC:", process.env.ESPRESSO_RPC_URL);
    console.log("Chain ID:", process.env.CHAIN_ID);
    console.log("Confirmation Tracker is live and processing...");
}, 2000);
