# GenuFi — Soulbound Certificates for Verifiable Learning

### 🔗 Live Project

- **Frontend**: [https://genu-fi-frontend.vercel.app](https://genu-fi-frontend.vercel.app)
- **Backend**: [https://genu-fi-backend.onrender.com](https://genu-fi-backend.onrender.com)
- **Backend GitHub**: [Genu-Fi-backend Repository](https://github.com/yehaditii/Genu-Fi-backend)

---

## 🚨 Problem

**Fake certificates, unverifiable skills, and trustless online education are eroding the credibility of learners and institutions.**

- Online courses (MOOCs, bootcamps, etc.) are easy to complete but hard to verify.
- Anyone can generate a certificate using basic design tools.
- Recruiters and institutions struggle to trust resumes, portfolios, or LinkedIn endorsements.
- Learners often pay for certifications that hold no real-world value.

---

## ✅ Solution

**A decentralized platform that issues tamper-proof, soulbound NFTs as proof of skill or course completion.**

- Learners complete a quiz or assignment after each module.
- A **smart contract** issues a **non-transferable (soulbound) NFT** as a certificate.
- The NFT is stored permanently on the blockchain and cannot be faked, sold, or transferred.
- Recruiters, colleges, and scholarship bodies can verify credentials in a single click — trustless, global, and secure.

---

## 💡 What Makes GenuFi Different?

| Edge | Description |
|------|-------------|
| 🪪 **Soulbound NFTs** | Certificates are tied to the learner’s identity — cannot be faked, sold, or manipulated. |
| 🧠 **Modular Learning System** | Quizzes, assignments, and tasks are customizable — usable by bootcamps, colleges, and DAOs. |
| 🌐 **On-chain Verifiability** | No login, no paperwork — anyone with the link or wallet can verify credentials instantly. |
| 🎓 **Free Learning, Paid Verification** | Users learn for free. Institutions or sponsors pay to mint or validate certifications. |
| 🪄 **AI-Powered Add-ons (Optional)** | Auto-score open-ended answers, generate feedback, and personalize quizzes using AI. |
| 🔗 **Offline Compatible** | Quizzes and modules can work offline via PWA — certification triggers when back online. |
| 💼 **Job & Scholarship Layer** | Users can unlock career opportunities by showcasing verified learning NFTs — building a skill passport. |

---

## 🧠 Tech Stack

- **Frontend**: Vite + React (TypeScript)
- **Smart Contracts**: Solidity (ERC-721 Soulbound NFT)
- **Backend**: Node.js, Express.js, Hardhat
- **Blockchain**: Polygon Amoy Testnet
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 🔒 Core Smart Contract Feature

- `CertNFT.sol`: ERC721 Soulbound contract
- Minting is triggered via backend only after successful quiz completion
- NFT is non-transferable and wallet-bound

---

## 🎯 Final Hook

> “We’re replacing fake PDFs with soulbound, verifiable credentials for the future of learning.”  
>  
> **Learn it. Prove it. Own it.**

---

## 📁 Related Repositories

- 🖥️ **Backend Repo**: [yehaditii/Genu-Fi-backend](https://github.com/yehaditii/Genu-Fi-backend)

---

## 🛠️ How to Run Locally

```bash
# Clone frontend
git clone https://github.com/yehaditii/genu-fi-glow-ui.git
cd genu-fi-glow-ui

# Install dependencies
npm install

# Start frontend
npm run dev
