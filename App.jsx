import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Shield, Sparkles, Vote, Coins, Cuboid, Bot, Crown, Wallet } from 'lucide-react';
import './styles.css';

const TOKEN_CONTRACT_ADDRESS = 'PASTE_TOKEN_CONTRACT_HERE';

const pillars = [
  ['AI Tools', 'Content generation, onboarding, lore support, announcements, and community growth tools.', Bot],
  ['NFT Access', 'Future access passes, founder badges, lore artifacts, and ecosystem keys.', Sparkles],
  ['Community Voting', 'Holders help decide which prototypes deserve priority.', Vote],
  ['Holder Rewards', 'Loyalty-based access, rank, and future benefits.', Crown],
  ['Staking Prototype', 'Transparent staking concept before live contract deployment.', Coins],
  ['VR Temple', 'Future 3D Omikami space for holders, lore, and community identity.', Cuboid],
];

const ranks = [
  ['Watcher', 'Entry-level community observer.'],
  ['Holder', 'Verified token holder.'],
  ['Loyal Holder', 'Consistent holder with deeper access.'],
  ['Genesis Holder', 'Early supporter with stronger ecosystem identity.'],
  ['Ryujin Guard', 'High-loyalty member protecting community direction.'],
  ['Omikami Inner Circle', 'Top-tier access for future ecosystem benefits.'],
];

const roadmap = [
  'Holder Hub V1',
  'Wallet verification and holder ranks',
  'Community voting',
  'AI utility assistant',
  'NFT access system',
  'Staking dashboard prototype',
  'VR / 3D Omikami Temple',
];

function App() {
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const status = !connected ? 'Not Connected' : balance > 0 ? 'Verified Holder' : 'Connected';
  const rank = !connected || balance === 0 ? 'Watcher' : 'Holder';

  function connectWalletMock() {
    setConnected(true);
    setBalance(1250000);
  }

  return (
    <main>
      <header className="nav">
        <div className="brand"><span className="brandMark">Σ</span> Amaterasu Omikami</div>
        <nav>
          <a href="#holders">Holders</a>
          <a href="#utility">Utility</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#community">Community</a>
        </nav>
        <button className="connect" onClick={connectWalletMock}><Wallet size={17}/> {connected ? 'Wallet Connected' : 'Connect Wallet'}</button>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Community first. Utility with purpose.</p>
          <h1>Amaterasu Omikami Holder Hub</h1>
          <p className="lead">A community-driven utility portal for holders, AI tools, NFT access, staking prototypes, voting, and future ecosystem rewards.</p>
          <div className="actions">
            <button className="primary" onClick={connectWalletMock}>Connect Wallet</button>
            <a className="secondary" href="#roadmap">View Roadmap</a>
          </div>
          <p className="trust">Built step by step. Verified by holders. Directed by community.</p>
        </div>
        <div className="heroPanel">
          <div className="orb"></div>
          <h3>Holder Status</h3>
          <div className="stat"><span>Status</span><strong>{status}</strong></div>
          <div className="stat"><span>Rank</span><strong>{rank}</strong></div>
          <div className="stat"><span>Token Balance</span><strong>{connected ? balance.toLocaleString() : '0'}</strong></div>
          <div className="contract">Contract: {TOKEN_CONTRACT_ADDRESS}</div>
        </div>
      </section>

      <section id="holders" className="section twoCol">
        <div>
          <p className="eyebrow">Holder Identity</p>
          <h2>Your Wallet Becomes Your Identity</h2>
          <p>The Holder Hub connects your wallet to your role inside the Omikami ecosystem. Verified holders unlock rank, voting access, AI tools, NFT previews, staking concepts, and future community rewards.</p>
        </div>
        <div className="miniGrid">
          {['Wallet Verification', 'Holder Status', 'Community Rank', 'Private Access'].map(item => <div className="mini" key={item}><Shield size={18}/>{item}</div>)}
        </div>
      </section>

      <section id="utility" className="section">
        <p className="eyebrow">Utility Pillars</p>
        <h2>Utility Starts With Structure</h2>
        <div className="grid">
          {pillars.map(([title, text, Icon]) => <article className="card" key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Ranks</p>
        <h2>Holder Rank System</h2>
        <div className="rankList">
          {ranks.map(([title, text]) => <div className="rank" key={title}><strong>{title}</strong><span>{text}</span></div>)}
        </div>
      </section>

      <section id="community" className="section twoCol glass">
        <div>
          <p className="eyebrow">Community Direction</p>
          <h2>Vote On What Gets Built First</h2>
          <p>The community helps decide which prototype receives priority. Development stays focused, transparent, and aligned with holders.</p>
        </div>
        <div className="voteGrid">
          {['AI Assistant', 'Genesis Relic NFTs', 'Staking Dashboard', 'VR Temple', 'Reward System', 'Lore Expansion'].map(v => <button key={v}>{v}</button>)}
        </div>
      </section>

      <section id="roadmap" className="section">
        <p className="eyebrow">Roadmap</p>
        <h2>Prototype Roadmap</h2>
        <div className="timeline">
          {roadmap.map((r, i) => <div className="phase" key={r}><span>Phase {i + 1}</span><strong>{r}</strong></div>)}
        </div>
      </section>

      <section className="dashboard section">
        <p className="eyebrow">Dashboard Preview</p>
        <h2>Holder Dashboard</h2>
        <div className="dashboardGrid">
          {[
            ['Wallet Address', connected ? '0xA7...OMI' : 'Not connected'],
            ['Token Balance', connected ? balance.toLocaleString() : '0'],
            ['Holder Status', status],
            ['Rank', rank],
            ['Voting Access', connected ? 'Preview unlocked' : 'Locked'],
            ['AI Utility Access', 'Coming soon'],
            ['NFT Access', 'Coming soon'],
            ['Staking Preview', 'Concept phase'],
          ].map(([k, v]) => <div className="dashCard" key={k}><span>{k}</span><strong>{v}</strong></div>)}
        </div>
      </section>

      <footer>
        <strong>Amaterasu Omikami Holder Hub</strong>
        <span>Community first. Utility with purpose.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
