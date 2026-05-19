# Amaterasu Omikami Holder Hub

Premium V1 starter for the Omikami holder portal.

## What is included

- Landing page
- Holder dashboard preview
- Connect Wallet demo button
- Holder status logic
- Rank system
- Utility cards
- Community voting preview
- Roadmap
- Dark luxury crypto dashboard style

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Deploy on Vercel

1. Go to Vercel.
2. Create a new project.
3. Upload or import this folder.
4. Keep the default build command:

```bash
npm run build
```

5. Keep the default output folder:

```bash
dist
```

6. Deploy.

## Next developer step

Replace the demo connect button with real wallet connection using:

- Wagmi
- Viem
- RainbowKit
- WalletConnect

Then replace this placeholder in `src/App.jsx`:

```js
const TOKEN_CONTRACT_ADDRESS = 'PASTE_TOKEN_CONTRACT_HERE';
```

Add the real token contract address only after checking it through the official source.

## V1 security rules

- No seed phrase requests
- No transaction signing
- No staking contract yet
- Read-only wallet check only
- No guaranteed rewards
- No financial promises

## Best first upgrade

Add real holder verification:

1. Connect wallet.
2. Read token balance.
3. If balance is 0, show Watcher.
4. If balance is above 0, show Verified Holder.
5. Later add NFT checks, voting, AI access, and staking preview.
