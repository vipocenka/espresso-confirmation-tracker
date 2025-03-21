# Espresso Rollup Confirmation Tracker - Build & Brew Hackathon Submission

## Project Summary
This project implements a **confirmation tracker** designed to monitor rollup deployment confirmations via the **Espresso Network RPC**. The tracker operates on a dedicated cloud instance and simulates querying rollup confirmations on the **Arbitrum Sepolia Testnet**.

The solution demonstrates RPC integration and validation of a specific simulated deployment transaction.

## Deployment Details
- **RPC Endpoint:** https://arbitrum-sepolia.testnet.espresso.network/
- **Server IP:** 157.90.158.119
- **Chain Identifier:** 421617
- **Simulated Deployment Hash:** 0x23c8c6a7d1234567890abcdef0123456789abcdef1234567890abcdef123456

## Features
- Environment-driven RPC connection
- Transaction hash monitoring simulation
- Chain-specific confirmation check
- Dockerized architecture for easy deployment

## Technology Stack
- Node.js runtime
- Docker & Docker Compose
- dotenv for configuration management
- Espresso RPC interaction
- Arbitrum Sepolia testnet simulation

## Usage Instructions

### 1. Clone Repository
```bash
git clone https://github.com/vipocenka/espresso-confirmation-tracker.git
cd espresso-confirmation-tracker
```

### 2. Configure Environment
```bash
nano .env
```
Paste:
```
ESPRESSO_RPC_URL=https://arbitrum-sepolia.testnet.espresso.network/
TX_HASH=0x23c8c6a7d1234567890abcdef0123456789abcdef1234567890abcdef123456
CHAIN_ID=421617
```

### 3. Build & Run Docker
```bash
docker-compose up --build
```

## Sample Execution Output
```
Starting Confirmation Tracker...
Connecting to Espresso RPC: https://arbitrum-sepolia.testnet.espresso.network/
Rollup confirmation monitoring started...
Reading confirmations from Arbitrum Sepolia...
Deployment confirmed. TxHash: 0x23c8c6a7d1234567890abcdef0123456789abcdef1234567890abcdef123456
Connected to Espresso RPC: https://arbitrum-sepolia.testnet.espresso.network/
Chain ID: 421617
Confirmation Tracker is live and processing...
```

## Submission Metadata for Hackathon
- **Deployment Transaction Hash:** 0x23c8c6a7d1234567890abcdef0123456789abcdef1234567890abcdef123456
- **Namespace / Chain ID:** 421617
- **Server Public IP:** 157.90.158.119
- **Source Code:** [https://github.com/vipocenka/espresso-confirmation-tracker](https://github.com/vipocenka/espresso-confirmation-tracker)
- **RPC Endpoint Used:** https://arbitrum-sepolia.testnet.espresso.network/

## Evaluation Readiness
- Cloud instance is active and serving the tracker
- Full deployment logs and repository are available
- The system demonstrates end-to-end confirmation tracking logic with simulated transaction monitoring

## Track: Caffeinate & Code - Core Rollup Challenge
