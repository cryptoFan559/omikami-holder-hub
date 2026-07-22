# 🌸 Amaterasu Omikami Holder Hub

**A community-built portal for OMIKAMI holders.** Connect your wallet, see your holder rank, and get a first look at what's coming next in the Omikami ecosystem.

> Built by the community, for the community — because the Omikami team said it themselves: *if you want something, build it yourself.*

---

## ✨ What it does

- **Read-only wallet connect** — MetaMask or Coinbase Wallet, no staking, no transactions, no private keys ever requested
- **Holder rank system** — your OMIKAMI balance automatically places you into a rank:

  | Rank | Requirement |
  |---|---|
  | 🌸 Holder | any balance > 0 |
  | 🦊 Fox Spirit | ≥ 100,000 OMIKAMI |
  | ⚡ OmiWarrior | ≥ 1,000,000 OMIKAMI |
  | 🐉 Dragon Lord | ≥ 10,000,000 OMIKAMI |

- **Dashboard preview** — wallet address, token balance, holder status, and voting access at a glance
- **Roadmap & utility overview** — where the ecosystem is headed (AI tools, NFT access, community voting, staking, VR temple, and more)
- **Community voting section** — a look at what the community is prioritizing next

## 🔒 Security & trust

This hub is **read-only by design**:

- No staking, no swaps, no transactions of any kind
- No private keys or seed phrases are ever requested
- The only thing it does is call `balanceOf()` on the official OMIKAMI contract to check your holdings — the same kind of read anyone can verify independently on [PolygonScan/Etherscan](https://polygonscan.com/token/0x9e18d5bab2fa94a6a95f509ecb38f8f68322abd3)

**Official OMIKAMI token contract:**
`0x9e18d5bab2fa94a6a95f509ecb38f8f68322abd3`

Always verify the contract address yourself before connecting any wallet, here or anywhere else.

## 🛠️ Tech stack

Kept intentionally simple — no build step, no framework, no backend:

- Plain **HTML / CSS / JavaScript**
- [ethers.js v6](https://docs.ethers.org/v6/) (loaded via CDN) for wallet connection and contract reads
- Deployed as a static site on [Vercel](https://vercel.com)

## 🚀 Running it locally

No build tools needed — it's a single static file.

```bash
git clone https://github.com/cryptoFan559/omikami-holder-hub.git
cd omikami-holder-hub
```

Then just open `index.html` in your browser, or serve it locally:

```bash
npx serve .
```

## 🌐 Live demo

👉 [omikami-holder-hub.vercel.app](https://omikami-holder-hub-git-main-omi-fan-s-projects.vercel.app/)

## 🗺️ Roadmap

- [x] **Phase 1** — Holder Hub V1 (community prototype)
- [x] **Phase 2** — Wallet verification & holder ranks
- [ ] **Phase 3** — Community voting system
- [ ] **Phase 4** — AI utility assistant
- [ ] **Phase 5** — NFT access system
- [ ] **Phase 6** — Staking dashboard prototype
- [ ] **Phase 7** — VR / 3D Omikami temple

## 🙏 Credits

The original idea for this hub came from a fellow member of the Omikami community — this build is an attempt to bring it to life. Built with the help of Claude.ai, and thanks to community member Reprisal for the original code base. Built with the help of [Claude.ai](https://claude.ai). 

## 🤝 Contributing

This is a community prototype and very much a work in progress. Suggestions, feedback, and pull requests are all welcome:

- Open an issue or PR on this repo
- Or drop by the OmikamiBuilders group on Telegram

Talk less, add value, build. 🛠️

## ⚠️ Disclaimer

This is an unofficial, community-built tool and is **not affiliated with or endorsed by any centralized Omikami team** (the project has no central authority — the contract is ownerless and the original dev holds no OMIKAMI). Use at your own discretion. Always do your own research and verify contract addresses independently before connecting any wallet.
