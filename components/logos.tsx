"use client";

import Image from "next/image";
import BlockchainHeroBg from "./ui/blockchain.-hero-bg";

const logos = [
  { src: "/Logos/polkadot.svg", invert: true },
  { src: "/Logos/aave-svgrepo-com.svg", invert: true },
  { src: "/Logos/chainlink.svg", invert: true },
  { src: "/Logos/ipfs.svg", invert: true },
  { src: "/Logos/ethereum-eth-logo.png", invert: false },
  { src: "/Logos/solana.svg", invert: true },
  { src: "/Logos/bitcoin.svg", invert: true },
  { src: "/Logos/hardhat-logo-png_seeklogo-426726.png", invert: false },
  { src: "/Logos/cardano.svg", invert: true },
  { src: "/Logos/remix.png", invert: false },
  { src: "/Logos/web3dotjs.svg", invert: true },
  { src: "/Logos/thirdweb.svg", invert: true },
  { src: "/Logos/solidity.svg", invert: true },
  { src: "/Logos/opensea.svg", invert: true },
  { src: "/Logos/ethereum.svg", invert: true },
  { src: "/Logos/truffle.png", invert: false },
  { src: "/Logos/vscode.png", invert: false },
  { src: "/Logos/alchemy.svg", invert: true },
  { src: "/Logos/openzeppelin.svg", invert: true },
  { src: "/Logos/metamask.png", invert: false },
  { src: "/Logos/graph.png", invert: false },
  { src: "/Logos/nodedotjs.svg", invert: true },
  { src: "/Logos/blockchaindotcom.svg", invert: true },
  { src: "/Logos/ethers.svg", invert: true },
  { src: "/Logos/javascript.svg", invert: true },
  { src: "/Logos/optimism.svg", invert: true },
  { src: "/Logos/polygon.svg", invert: true },
  { src: "/Logos/rust.svg", invert: true },
  { src: "/Logos/wagmi.svg", invert: true },
];

export default function LogosRow() {
  return (
    <div className="relative overflow-hidden py-8">
      <BlockchainHeroBg />
      
      <div className="scroller-container relative max-w-7xl mx-auto">
        <div className="logos-scroll flex gap-8 md:gap-12 py-4">
          {/* First set */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 transition-transform duration-300">
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                width={50}
                height={50}
                className={`object-contain ${logo.invert ? "invert" : ""} w-12 h-12 md:w-14 md:h-14`}
              />
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 transition-transform duration-300" aria-hidden="true">
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                width={50}
                height={50}
                className={`object-contain ${logo.invert ? "invert" : ""} w-12 h-12 md:w-14 md:h-14`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroller-container {
          mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }

        .logos-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        @media (max-width: 768px) {
          .logos-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}