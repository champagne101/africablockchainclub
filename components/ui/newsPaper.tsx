'use client';

import Image from "next/image";
import Link from "next/link";


const articles = [
  {
    title: "Gamification in Blockchain Education",
    description:
      "This research analyzes how game mechanics can enhance blockchain learning platforms for better engagement.",
    image: "/abcWork/gameMel.png",
    link: "/vision",
    message: "View Full Article",
  },
  {
    title: "DeFi Strategies: A Case Study",
    description:
      "This paper evaluates popular decentralized finance mechanisms and their economic implications.",
    image: "/abcWork/bybit.jpg",
    link: "/vision",
    message: "View Full Article",
  },
  {
    title: "SAM: Smart Asset Management",
    description:
      "A research paper exploring blockchain-driven solutions for automating asset lifecycle management.",
    image: "/abcWork/sam6.png",
    link: "/vision",
    message: "View Full Article",
  },
  {
    title: "Quantum Resistance in Blockchain",
    description:
      "This research investigates the cryptographic foundations of blockchain and future-proofing against quantum threats.",
    image: "/abcWork/quantumShield.jpg",
    link: "/vision",
    message: "View Full Article",
  },
];
export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-gray-900 px-6 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Blockchain Research</h1>
        <p className="text-gray-600">Innovations in Decentralized Technology</p>
      </header>

      <section className="space-y-20 max-w-4xl mx-auto">
        {articles.map((article, idx) => (
          <article 
            key={idx}
            className="scroll-mt-20" // Add this if using scroll navigation
          >
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-center mb-6">
                {article.title}
              </h2>
              
              <div className="relative w-full h-60 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-center text-gray-600 mb-4 max-w-xl">
                {article.description}
              </p>

              <Link
                href={article.link}
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                {article.message}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}