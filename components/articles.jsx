'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Pause, Play, Sparkles, Clock, BookOpen, MoveRight, Circle, ChevronUp, ChevronDown } from 'lucide-react';

const sampleArticles = [
 {
    id: 1,
    image: '/Articles/PENDLEimages.jpeg',
    title: 'Pendle Finance: Redefining Yield in DeFi',
    description: 'The core of Pendle’s innovation begins with assets you already own, such as Ethereum (ETH). Normally, ETH sits still, but many protocols allow you to convert it into a yield-bearing asset, a “superform” that passively earns you rewards (e.g., staking ETH on Lido to get stETH, or converting a stablecoin into a version like sdeUSD, which earns from treasury yields or funding rates).',
    category: 'DeFi Innovation',
    accentColor: '#7c3aed', 
    gradient: 'from-purple-500 via-violet-400 to-fuchsia-300',
    bgGradient: 'from-purple-900/20 via-violet-900/15 to-fuchsia-900/10',
    readTime: '11 min read'
  },
  {
    id: 2,
    image: '/Articles/kaito.jpeg',
    title: 'Kaito AI: Turning Crypto Knowledge into Earnings',
    description: 'Kaito AI, a Web3 intelligence platform, is transforming how we access and use crypto information by combining artificial intelligence and blockchain technology. Founded in 2022 by Yu Hu (ex-Citadel portfolio manager, now CEO) and Yunzhong He in Seattle, USA, the platform is built on Base.',
    category: 'AI & Blockchain',
    accentColor: '#f59e0b', 
    gradient: 'from-amber-500 via-orange-400 to-yellow-300',
    bgGradient: 'from-amber-900/20 via-orange-900/15 to-yellow-900/10',
    readTime: '9 min read'
  },
   {
    id: 3,
    image: '/Articles/Bybit.webp',
    title: 'The breach that rocked the crypto world: Bybit’s $1.5 Billion Heist',
    description: 'On February 21st, 2025, 14:13:35 UTC Bybit fell victim to a sophisticated cyberattack that resulted in the theft of over 400,000 ETH — valued at nearly $1.5 billion at the time — unraveling critical questions about security in the DeFi space.',
    category: 'Crypto Security',
    accentColor: '#ef4444',
    gradient: 'from-red-500 via-orange-400 to-rose-300',
    bgGradient: 'from-red-900/25 via-orange-900/15 to-rose-900/10',
    readTime: '6 min read'
  },
  {
    id: 4,
    image: '/Articles/gamificationArticle.webp',
    title: 'Unlocking Value in Web3 Gaming',
    description: 'The gaming world is entering an exciting new phase with the rise of Web3 technologies, especially through GameFi — a mix of online gaming and decentralised finance (DeFi).',
    category: 'Web3 Gaming',
    accentColor: '#10b981', 
    gradient: 'from-emerald-500 via-green-400 to-lime-300',
    bgGradient: 'from-emerald-900/20 via-green-900/15 to-lime-900/10',
    readTime: '9 min read'
  },
  {
    id: 5,
    image: '/Articles/sam4.jpg',
    title: 'CEX or DEX? The FTX collapse disruption!',
    description: 'The shocking downfall of a crypto trading platform called FTX Trading Ltd, amidst allegations of insider trading and fraud, exposed the vulnerabilities such as lack of transparency, and misuse of customer funds in centralised exchanges (CEXs).',
    category: 'Crypto Crash',
    accentColor: '#1e40af', 
    gradient: 'from-blue-600 via-indigo-500 to-sky-400',
    bgGradient: 'from-blue-900/25 via-indigo-900/15 to-sky-900/10',
    readTime: '8 min read'
  }
 
];


export default function ArtisticArticlesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const previewRailRef = useRef(null);

  const FADE_DURATION = 500;
  const VISIBLE_ARTICLES = 4; 

  // Helper function to truncate text by word count
const truncateWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

  const fadeTransition = useCallback((direction = 'next') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsVisible(false);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % sampleArticles.length);
      } else if (direction === 'prev') {
        setCurrentIndex((prev) => (prev - 1 + sampleArticles.length) % sampleArticles.length);
      } else {
        setCurrentIndex(direction);
      }
      
      setTimeout(() => {
        setIsVisible(true);
        setIsTransitioning(false);
      }, 50);
    }, FADE_DURATION);
  }, [isTransitioning]);

  const nextArticle = useCallback(() => {
    fadeTransition('next');
  }, [fadeTransition]);

  const prevArticle = useCallback(() => {
    fadeTransition('prev');
  }, [fadeTransition]);

  const goToArticle = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    fadeTransition(index);
    
    // Scroll to make the selected article visible in the preview rail
    if (previewRailRef.current) {
      const articleElement = previewRailRef.current.children[index];
      if (articleElement) {
        const scrollTop = articleElement.offsetTop - previewRailRef.current.offsetTop;
        previewRailRef.current.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, isTransitioning, fadeTransition]);

  // Scroll handlers for preview rail
  const scrollUp = () => {
    if (previewRailRef.current) {
      previewRailRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (previewRailRef.current) {
      previewRailRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextArticle();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, nextArticle]);

  const currentArticle = sampleArticles[currentIndex];

  return (
    <div className="relative w-full p-4 md:p-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentArticle.bgGradient}`}></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Creative Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <BookOpen size={20} className="text-white/80" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles size={10} className="text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Articles By ABC Researchers</h2>
              <p className="text-white/70 text-sm bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-full inline-block">
                Exploring trends, history, and breakthroughs in blockchain.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-green-400 animate-pulse'}`}></div>
              <span className="text-sm text-white/80">
                {isPaused ? 'Paused' : 'Auto-rotating'}
              </span>
            </div>
            
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 group backdrop-blur-sm"
              aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
            >
              {isPaused ? (
                <Play size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Pause size={18} className="text-white group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Main Article Display */}
        <div className="relative">
          {/* Article Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Preview Rail with Scrollbar */}
            <div className="lg:col-span-4">
              <div className="relative h-full rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 backdrop-blur-sm shadow-lg shadow-black/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Article Series ({sampleArticles.length})
                    </span>
                  </h3>
                  
                  {/* Scroll Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={scrollUp}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
                      aria-label="Scroll up"
                    >
                      <ChevronUp size={14} className="text-white/80" />
                    </button>
                    <button
                      onClick={scrollDown}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
                      aria-label="Scroll down"
                    >
                      <ChevronDown size={14} className="text-white/80" />
                    </button>
                  </div>
                </div>
                
                {/* Scrollable Preview List */}
                <div 
                  ref={previewRailRef}
                  className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                  style={{ 
                    height: `${VISIBLE_ARTICLES * 100}px`,
                    scrollBehavior: 'smooth'
                  }}
                >
                  {sampleArticles.map((article, index) => (
                    <div
                      key={article.id}
                      onClick={() => goToArticle(index)}
                      className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 group backdrop-blur-sm ${
                        index === currentIndex
                          ? 'bg-gradient-to-r from-white/20 to-white/10 border border-white/30 shadow-lg'
                          : 'bg-white/5 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 border border-transparent hover:border-white/20'
                      }`}
                    >
                      {/* Active Indicator */}
                      {index === currentIndex && (
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/30"></div>
                      )}
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125 shadow-sm shadow-cyan-400/50'
                            : 'bg-white/40 group-hover:bg-white/60'
                        }`}></div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-300 ${
                              index === currentIndex 
                                ? 'text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-400/30'
                                : 'text-white/70 bg-white/10 border-white/20 group-hover:text-white'
                            }`}>
                              {article.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock size={10} className={`transition-colors duration-300 ${
                                index === currentIndex ? 'text-cyan-300' : 'text-white/50 group-hover:text-white/70'
                              }`} />
                              <span className={`text-xs transition-colors duration-300 ${
                                index === currentIndex ? 'text-cyan-200' : 'text-white/50 group-hover:text-white/70'
                              }`}>
                                {article.readTime}
                              </span>
                            </div>
                          </div>
                          <p className={`text-sm font-medium truncate transition-colors duration-300 ${
                            index === currentIndex 
                              ? 'text-white' 
                              : 'text-white/80 group-hover:text-white'
                          }`}>
                            {article.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Article */}
            <div className="lg:col-span-8">
              <div 
                className="relative rounded-xl border border-white/20 overflow-hidden shadow-2xl shadow-black/30"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity ${FADE_DURATION}ms ease-in-out`,
                }}
              >
                {/* Dynamic Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r ${currentArticle.gradient} opacity-30 -z-10`}></div>
                
                {/* Animated Accent Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${currentArticle.accentColor}80, transparent)`,
                    animation: 'shine 3s ease-in-out infinite'
                  }}
                ></div>
                
                <div className="p-6 backdrop-blur-sm bg-gradient-to-br from-black/40 to-black/60">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image Section - Fixed Ratio */}
                    <div className="md:col-span-1 relative">
                      <div className="relative rounded-xl overflow-hidden group">
                        {/* Container with controlled aspect ratio */}
                        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
                          <img 
                            src={currentArticle.image} 
                            alt={currentArticle.title}
                            className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxNjE2MTYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                            }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 `}></div>
                        </div>
                    
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2">
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          {/* Featured Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/20 mb-6 backdrop-blur-sm group/featured">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-sm font-semibold text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                              Featured Analysis
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 -z-10"></div>
                          </div>
                          
                          {/* Title */}
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                            {currentArticle.title}
                          </h2>
                          
                          {/* Description */}
                          <p className="text-white/90 text-lg leading-relaxed mb-8">
                             {truncateWords(currentArticle.description, 20)}
                          </p>
                        </div>

                        {/* Action Area */}
                        <div className="space-y-6">
                          {/* Progress Indicators */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {sampleArticles.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => goToArticle(index)}
                                  className={`transition-all duration-300 relative ${
                                    index === currentIndex 
                                      ? 'w-10 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30'
                                      : 'w-4 h-2 rounded-full bg-white/40 hover:bg-white/60 hover:w-6'
                                  }`}
                                  aria-label={`Go to article ${index + 1}`}
                                >
                                  {index === currentIndex && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping opacity-40"></div>
                                  )}
                                </button>
                              ))}
                            </div>
                            
                            <span className="text-sm text-white/70 font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20">
                              {currentIndex + 1} / {sampleArticles.length}
                            </span>
                          </div>
                          
                          {/* Action Button */}
                          <button className="group relative w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10">Explore Full Analysis</span>
                            <MoveRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { background-position: -100px 0; }
          100% { background-position: calc(100% + 100px) 0; }
        }
        
        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
        
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}