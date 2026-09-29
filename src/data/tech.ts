/**
 * Tech registry.
 *
 * `icon` is a Simple Icons slug, verified by eye against the real brand mark.
 * Anything without a verified logo is deliberately left undefined and renders
 * as a mono text chip — a wrong brand mark is worse than no mark.
 *
 * Known traps, do not "fix" these:
 *   simple-icons:anchor  = Anchor.fm (a podcast app), NOT Solana's Anchor
 *   simple-icons:ethers  = an unrelated cloud company, NOT ethers.js
 *   simple-icons:graphql = GraphQL the spec, NOT The Graph protocol
 */

export type Tech = { name: string; icon?: string };

const t = (name: string, icon?: string): Tech => ({ name, icon });

export const TECH = {
  // Languages
  rust: t("Rust", "rust"),
  solidity: t("Solidity", "solidity"),
  go: t("Go", "go"),
  typescript: t("TypeScript", "typescript"),
  javascript: t("JavaScript", "javascript"),
  python: t("Python", "python"),

  // Solana
  solana: t("Solana", "solana"),
  anchor: t("Anchor"),
  web3js: t("web3.js", "web3dotjs"),
  spl: t("SPL Tokens"),

  // EVM
  ethereum: t("Ethereum", "ethereum"),
  ethersjs: t("Ethers.js"),
  viem: t("viem"),
  wagmi: t("Wagmi", "wagmi"),
  hardhat: t("Hardhat"),
  foundry: t("Foundry"),
  thegraph: t("The Graph"),
  safe: t("Safe"),
  tenderly: t("Tenderly"),

  // Chains
  polygon: t("Polygon", "polygon"),
  optimism: t("Optimism", "optimism"),
  arbitrum: t("Arbitrum"),
  base: t("Base"),
  avalanche: t("Avalanche"),
  ton: t("TON", "ton"),
  tron: t("Tron"),
  stellar: t("Stellar", "stellar"),
  concordium: t("Concordium"),
  filecoin: t("Filecoin"),

  // Backend / frontend
  nodejs: t("Node.js", "nodedotjs"),
  nestjs: t("NestJS", "nestjs"),
  react: t("React", "react"),
  nextjs: t("Next.js", "nextdotjs"),
  vite: t("Vite", "vite"),
  bun: t("Bun", "bun"),
  axum: t("axum"),
  flask: t("Flask", "flask"),

  // Data
  postgresql: t("PostgreSQL", "postgresql"),
  mongodb: t("MongoDB", "mongodb"),
  redis: t("Redis", "redis"),
  cassandra: t("Cassandra", "apachecassandra"),
  elasticsearch: t("Elasticsearch", "elasticsearch"),
  spark: t("Apache Spark", "apachespark"),

  // Infra
  docker: t("Docker", "docker"),
  aws: t("AWS", "amazonwebservices"),
  railway: t("Railway", "railway"),
  render: t("Render", "render"),
  netlify: t("Netlify", "netlify"),
  linux: t("Linux", "linux"),
  jenkins: t("Jenkins", "jenkins"),
  git: t("Git", "git"),

  // ZK
  circom: t("Circom"),
  groth16: t("Groth16"),
  snarkjs: t("snarkjs"),

  // Testing
  mocha: t("Mocha", "mocha"),
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof TECH;

export const pick = (...keys: TechKey[]): Tech[] => keys.map((k) => TECH[k]);

const byName = new Map<string, Tech>(
  Object.values(TECH).map((tech) => [tech.name.toLowerCase(), tech]),
);

/** Resolve a free-text stack entry (as written in MDX) to a registered tech. */
export const techByName = (name: string): Tech =>
  byName.get(name.toLowerCase()) ?? { name };
