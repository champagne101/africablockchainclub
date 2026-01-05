"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Hash, Link2 } from "lucide-react"

export default function BlockchainTimeline() {
  const [activeBlock, setActiveBlock] = useState<number | null>(null)

  // Full timeline events data
  const timelineEvents = [
    {
      year: "2008",
      title: "Bitcoin Whitepaper",
      description: "Satoshi Nakamoto publishes the Bitcoin whitepaper, introducing the first decentralized cryptocurrency",
    },
    {
      year: "2009",
      title: "Genesis Block Mined",
      description: "The Bitcoin network comes into existence with the mining of the genesis block (Block 0)",
    },
    {
      year: "2011",
      title: "Altcoins Emerge",
      description: "Litecoin and Namecoin launch, marking the beginning of alternative cryptocurrencies",
    },
    {
      year: "2015",
      title: "Ethereum Launch",
      description: "Vitalik Buterin launches Ethereum, introducing smart contract functionality",
    },
    {
      year: "2017",
      title: "ICO Boom",
      description: "Initial Coin Offerings raise billions, driving massive blockchain innovation",
    },
    {
      year: "2020",
      title: "DeFi Explosion",
      description: "Decentralized Finance protocols reach $20B+ in locked value",
    },
    {
      year: "2021",
      title: "NFT Mainstream",
      description: "NFT sales surpass $24B, entering mainstream culture",
    },
    {
      year: "2023",
      title: "Institutional Adoption",
      description: "Major financial institutions begin offering blockchain-based services",
    },
  ]

  return (
    <div className="min-h-screen px-4 relative overflow-hidden">
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes chainHover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0"
           style={{ 
             backgroundImage: `
               linear-gradient(to right, #1a2f3a 1px, transparent 1px),
               linear-gradient(to bottom, #1a2f3a 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-blue-400/5 to-transparent" />
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 font-mono bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        BLOCKCHAIN EVOLUTION
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Central blockchain line */}
        <div 
          className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 transform -translate-x-1/2"
          style={{ boxShadow: '0 0 40px rgba(74, 222, 128, 0.2)' }}
        >
          <div className="absolute inset-0 bg-[#4ade80] animate-pulse opacity-20" />
        </div>

        {/* Timeline blocks */}
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative z-10 mb-16"
            onHoverStart={() => setActiveBlock(index)}
            onHoverEnd={() => setActiveBlock(null)}
          >
            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
              
              {/* Block number indicator */}
              <div className="flex-1 relative h-24">
                <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} -translate-y-1/2`}>
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: activeBlock === index ? 1.2 : 1,
                        boxShadow: activeBlock === index ? '0 0 20px rgba(74, 222, 128, 0.5)' : 'none'
                      }}
                      className="h-12 w-12 rounded-lg bg-slate-800 border-2 border-green-400/50 flex items-center justify-center"
                    >
                      <Hash className="text-green-400" size={20} />
                      <span className="absolute -bottom-6 font-mono text-green-400 text-sm">
                        #{index + 1}
                      </span>
                    </motion.div>
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-16' : '-left-16'} -translate-y-1/2 opacity-40`}>
                      <Link2 
                        className="text-green-400" 
                        style={{ animation: 'chainHover 3s ease-in-out infinite' }}
                        size={24} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content card */}
              <motion.div
                animate={{
                  y: activeBlock === index ? -5 : 0,
                  borderColor: activeBlock === index ? '#4ade80' : '#1e293b'
                }}
                className="flex-1 relative p-8 rounded-xl bg-slate-900 border-2 transition-all duration-300"
                style={{ boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="absolute top-4 font-mono text-green-400 text-lg tracking-wider">
                  {event.year}
                </div>
                <h3 className="text-2xl font-bold text-green-300 mb-4 mt-8">
                  {event.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {event.description}
                </p>
                
                {/* Hover effects */}
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl" />
                  <div className="absolute inset-0 border-2 border-green-400/30 rounded-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Animated floating elements */}
        <div 
          className="absolute top-0 left-1/4 w-8 h-8 rounded-lg bg-green-400/20"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-lg bg-blue-400/20"
          style={{ 
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
    </div>
  )
}