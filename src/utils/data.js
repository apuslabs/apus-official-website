import r1 from "@/assets/images/Decentralized@2x.png";
import r2 from "@/assets/images/Demand-driven@2x.png";
import r3 from "@/assets/images/Web3@2x.png";
import r4 from "@/assets/images/NO KYC@2x.png";

import s0 from "@/assets/images/DeSocial Relay@2x.png";
import s1 from "@/assets/images/Decentralized CDN@2x.png";
import s2 from "@/assets/images/Decentralized Edge Computing@2x.png";
import s3 from "@/assets/images/Decentralized Edge DVPN@2x.png";

import p1 from "@/assets/images/Civitai@2x.png";
import p2 from "@/assets/images/cosmos-icon@3x.png";
import p3 from "@/assets/images/FILECOIN@2x.png";
import p4 from "@/assets/images/arweave-org@2x.png";
import p5 from "@/assets/images/everVision@2x.png";
import p6 from "@/assets/images/PORTALVERSE@2x.png";

import c1 from "@/assets/images/Twitter@2x.png";
import c2 from "@/assets/images/email@2x.png";
import c3 from "@/assets/images/Telegram@2x.png";
import c4 from "@/assets/images/github@2x.png";

export const reasons = [
  {
    title: "Decentralized Privacy Protection",
    desc: "Establishing a decentralized data storage and management system, empowering users with direct control and management over their own data.",
    src: r1,
  },
  {
    title: "Open-Source",
    desc: "Open-source platform encourages universal participation and contribution, allowing creators to directly publish and sell their NFTs to users, eliminating intermediaries.",
    src: r2,
  },
  {
    title: "DAO and Incentivized Governance",
    desc: "Establishing a DAO with transparent and equitable incentive mechanisms, encouraging users to contribute data and participate in community governance for token rewards.",
    src: r3,
  },
  {
    title: "Cost-Effective and Accessible",
    desc: "Addressing high cost issues with the open-source toolchains, enabling consumer-level GPU computational power, and utilizing distributed storage networks.",
    src: r4,
  },
];

export const solutions = [
  {
    title: "DeSocial Relay",
    desc: "The decentralized computing network allows people to create privatized relays for themselves. ",
    src: s0,
  },
  {
    title: "Decentralized p2p CDN",
    desc: "The decentralized computing network protects user's data and privacy and provides lower network latency and a cheaper price than traditional CDNs. ",
    src: s1,
  },
  {
    title: "Decentralized edge transcoding",
    desc: "The decentralized edge computing infrastructure to encode and process live streams for video uploaders.",
    src: s2,
  },
  {
    title: "DVPN",
    desc: "The decentralized edge computing infrastructure to combine network security and build Web 3.0 infrastructure and ecosystem for users.",
    src: s3,
  },
];

export const partners = [
  // width 默认70%
  {
    href: "",
    src: p1,
    width: "60%",
  },
  {
    href: "",
    src: p2,
    width: "80%",
  },
  {
    href: "",
    src: p3,
    width: "50%",
  },
  {
    href: "",
    src: p4,
    width: "80%",
  },
  {
    href: "",
    src: p5,
  },
  {
    href: "",
    src: p6,
  },
];

export const roadmaps = [
  {
    year: 2022,
    plan: "Launch MVP",
  },
  {
    year: 2023,
    plan: "Release Dev/Test Network Acquire more Web3's AI bots creators and users.",
  },
  {
    year: 2024,
    plan: "Release Main Network.",
  },
  {
    year: 2025,
    plan: "Serve mainstream customers in more regions.",
  },
];

export const contracts = [
  {
    name: "Twitter",
    href: "https://twitter.com/apus_network",
    src: c1,
  },
  {
    name: "Email",
    href: "mailto:jason@apus.network",
    src: c2,
  },
  {
    name: "Telegram",
    href: "https://t.me/+AWdHtLSl2m4yM2I1",
    src: c3,
  },
  {
    name: "GitHub",
    href: "https://github.com/apusnetwork",
    src: c4,
  },
];

export const clone = (value) => JSON.parse(JSON.stringify(value));

export const sleep = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};
