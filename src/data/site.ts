/** Profile content. Source of truth: Nazar_Web3_CV_2026.pdf */

import { pick, type Tech } from "./tech";

export const site = {
  name: "Nazar Havryliuk",
  shortName: "Na3aga",
  role: "Web3 Backend & Fullstack Engineer",
  tagline: "Solana & EVM · TypeScript, Rust, Solidity",
  location: "Ukraine · Remote",
  email: "na3aga@gmail.com",
  telegram: "@na3aga",
  url: "https://na3aga.com",
  cv: "/cv/nazar-havryliuk.pdf",
  description:
    "Web3 backend and fullstack engineer with 6 years of experience, 5 in blockchain. Solana programs in Rust and Anchor, EVM contracts in Solidity, and the backends and indexers around them.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/Na3aga", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/na3aga/", icon: "linkedin" },
  { label: "Telegram", href: "https://t.me/na3aga", icon: "telegram" },
  { label: "Email", href: "mailto:na3aga@gmail.com", icon: "gmail" },
] as const;

/** Headline metrics — all drawn from the CV, no rounding up. */
export const stats = [
  { value: "6", unit: "years", label: "Engineering, 5 of them in blockchain" },
  { value: "6+", unit: "audits", label: "External audits passed, no re-audit" },
  { value: "$10M+", unit: "volume", label: "Processed by the Bonq lending protocol" },
  { value: "12", unit: "chains", label: "EVM and non-EVM shipped to production" },
] as const;

/** Chains, split the way the CV does. */
export const chains = {
  evm: pick("ethereum", "polygon", "optimism", "arbitrum", "base", "avalanche"),
  nonEvm: pick("solana", "ton", "tron", "stellar", "concordium", "filecoin"),
};

export type StackGroup = { group: string; note: string; items: Tech[] };

export const stack: StackGroup[] = [
  {
    group: "Languages",
    note: "Day to day",
    items: pick("rust", "solidity", "typescript", "go", "javascript", "python"),
  },
  {
    group: "Solana",
    note: "Anchor and native Rust programs, PDAs, CPI, SPL tokens",
    items: pick("solana", "anchor", "rust", "spl", "web3js"),
  },
  {
    group: "EVM",
    note: "Contracts, tooling and L2 deployments",
    items: pick(
      "solidity",
      "hardhat",
      "foundry",
      "ethersjs",
      "viem",
      "wagmi",
      "thegraph",
      "safe",
      "tenderly",
    ),
  },
  {
    group: "Backend & Frontend",
    note: "Services, APIs and the interfaces on top",
    items: pick("nodejs", "nestjs", "react", "nextjs", "vite", "bun", "axum"),
  },
  {
    group: "Data",
    note: "Storage and indexing",
    items: pick("postgresql", "mongodb", "redis", "cassandra", "elasticsearch"),
  },
  {
    group: "Infrastructure",
    note: "CI/CD, cloud, monitoring and keepers",
    items: pick("docker", "aws", "railway", "render", "netlify", "linux", "jenkins"),
  },
  {
    group: "Zero-knowledge",
    note: "Circuits and proving",
    items: pick("circom", "groth16", "snarkjs"),
  },
];

export type Role = {
  period: string;
  company: string;
  /** Official logo under /public/logos (reversed for the dark background where needed) */
  logo?: string;
  title: string;
  summary: string;
  highlights: { name: string; detail: string }[];
  tech: Tech[];
};

export const work: Role[] = [
  {
    period: "07.2024 — present",
    company: "Boosty Labs",
    logo: "/logos/boostylabs.svg",
    title: "Smart Contract Competence Lead",
    summary:
      "Lead end-to-end delivery of DeFi and cross-chain solutions across Solana, Ethereum, Avalanche, TON, Stellar, Tron, Concordium and Filecoin. Own architecture decisions, audit supervision and production deployment, and mentor backend, DevOps and frontend teams.",
    highlights: [
      {
        name: "Eliza Protocol",
        detail:
          "Led a fullstack restaking dApp for Orca concentrated-liquidity positions. Built the restaking program from scratch in Rust and Anchor — passed the Zokkio audit first time, no re-audit.",
      },
      {
        name: "Saffron",
        detail:
          "Solana programs in Rust that passed the Pashov Audit Group audit, plus the indexing service and transaction flows across Solana and EVM.",
      },
      {
        name: "Tricorn Bridge",
        detail:
          "Smart Contract Tech Lead. Owned contract architecture and settlement across EVM, Solana, TON, Stellar, Tron and Concordium — extended the bridge from EVM-only to non-EVM.",
      },
      {
        name: "Akave",
        detail:
          "Tech Lead for R&D on large-scale on-chain data anchoring. Benchmarked compression and storage strategies on cost, throughput and data integrity.",
      },
      {
        name: "Somnia",
        detail:
          "Diagnosed and fixed protocol bugs on a live system securing millions of dollars, and resolved external audit findings to production.",
      },
    ],
    tech: pick("rust", "anchor", "solana", "solidity", "typescript", "nestjs", "aws", "railway"),
  },
  {
    period: "02.2023 — 09.2024",
    company: "SoftServe",
    logo: "/logos/softserve.svg",
    title: "Blockchain Developer",
    summary:
      "Enterprise Web3 delivery: multisig wallets, multi-chain proofs of concept, and decentralized identity evaluation. Trained client tech teams in Web3 practices.",
    highlights: [
      {
        name: "Safe-based multisig wallet",
        detail:
          "Multisignature wallet with plugin modules on Safe protocol in Solidity. Tested with Hardhat and Foundry, indexed with The Graph.",
      },
      {
        name: "L2 and multi-chain PoCs",
        detail:
          "Web3 proofs of concept on Polygon, Avalanche, Optimism and Stellar — NestJS backends, Ethers.js and Wagmi frontends, Tenderly for simulation.",
      },
      {
        name: "Decentralized identity and ZK",
        detail:
          "PoCs with Polygon ID (now Privado ID). Evaluated Dock.io, MATTR, Iden3 and Circom for capabilities and limits.",
      },
    ],
    tech: pick("solidity", "hardhat", "foundry", "safe", "thegraph", "nestjs", "wagmi", "circom"),
  },
  {
    period: "02.2022 — 01.2023",
    company: "JetSoftPro",
    logo: "/logos/jetsoftpro.svg",
    title: "Blockchain Developer, Solidity",
    summary:
      "Built Bonq, an EVM liquidity protocol with a stablecoin — deposit and borrow, stablecoin tokenomics and liquidation logic.",
    highlights: [
      {
        name: "Bonq",
        detail:
          "The protocol processed $10M+ in volume and passed an external security audit. Built the indexing layer with The Graph, the NestJS backend, and integrated the React and Ethers.js frontend.",
      },
    ],
    tech: pick("solidity", "hardhat", "mocha", "thegraph", "typescript", "nestjs", "ethersjs", "react"),
  },
  {
    period: "02.2022 — 06.2022",
    company: "VaultSwap",
    title: "Solidity Engineer",
    summary:
      "Exchange protocol for ERC-20, ERC-721 and ERC-1155. Added features to an existing codebase and wrote the test suite from zero.",
    highlights: [],
    tech: pick("solidity", "hardhat", "mocha", "thegraph", "ethersjs", "react"),
  },
  {
    period: "04.2021 — 02.2022",
    company: "GetU.Finance",
    title: "Blockchain dApp Developer",
    summary:
      "EVM liquidity protocol built end to end — smart contracts, the React and Web3.js frontend, and manual CI/CD on CentOS with Jenkins.",
    highlights: [],
    tech: pick("solidity", "hardhat", "react", "web3js", "jenkins", "linux"),
  },
  {
    period: "10.2020 — 05.2021",
    company: "Magetic AI",
    title: "Junior Python Developer",
    summary:
      "Backend for a social network MVP: Flask REST APIs, Cassandra, Elasticsearch and Kibana, log processing and a small Apache Spark setup. First Web3 work here — forked Pancake and Uniswap.",
    highlights: [],
    tech: pick("python", "flask", "cassandra", "elasticsearch", "spark"),
  },
];

export const education = [
  {
    period: "09.2018 — 06.2024",
    school: "National Technical University of Ukraine, Kyiv Polytechnic Institute",
    degree: "MSc, Mathematical Modelling and Data Science",
  },
];
