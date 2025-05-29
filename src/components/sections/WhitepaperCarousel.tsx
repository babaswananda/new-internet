'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, DocumentTextIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface Whitepaper {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: number;
  downloadUrl: string;
  securityLevel: 'public' | 'restricted' | 'classified';
  releaseDate: string;
  version: string;
  icon: string;
}

const whitepapers: Whitepaper[] = [
  {
    id: 'unified-ai-protocol',
    title: 'Unified AI Protocol',
    description: 'The foundational architecture for the Agentic Internet, defining how AI agents communicate and collaborate across platforms.',
    category: 'Protocol',
    pages: 47,
    downloadUrl: '/whitepapers/unified-ai-protocol.pdf',
    securityLevel: 'public',
    releaseDate: '2024-01-15',
    version: 'v2.1',
    icon: '🌐'
  },
  {
    id: 'handle-registry-spec',
    title: 'Handle Registry Specification',
    description: 'Technical specification for the three-tier handle system powering digital identity in the new internet.',
    category: 'Identity',
    pages: 32,
    downloadUrl: '/whitepapers/handle-registry-spec.pdf',
    securityLevel: 'public',
    releaseDate: '2024-02-01',
    version: 'v1.8',
    icon: '🆔'
  },
  {
    id: 'agentic-economics',
    title: 'Agentic Economics Research',
    description: 'Economic models and tokenomics for AI agent marketplaces and the creator economy.',
    category: 'Research',
    pages: 28,
    downloadUrl: '/whitepapers/agentic-economics.pdf',
    securityLevel: 'restricted',
    releaseDate: '2024-02-15',
    version: 'v1.3',
    icon: '💰'
  },
  {
    id: 'ion-protocol',
    title: 'ION Protocol Deep Dive',
    description: 'Intelligent Ontology Network architecture for semantic AI agent communication and knowledge sharing.',
    category: 'Technical',
    pages: 56,
    downloadUrl: '/whitepapers/ion-protocol.pdf',
    securityLevel: 'public',
    releaseDate: '2024-03-01',
    version: 'v3.0',
    icon: '🧠'
  },
  {
    id: 'security-framework',
    title: 'Security Framework',
    description: 'Cryptographic security protocols and threat models for the Agentic Internet infrastructure.',
    category: 'Security',
    pages: 41,
    downloadUrl: '/whitepapers/security-framework.pdf',
    securityLevel: 'classified',
    releaseDate: '2024-03-15',
    version: 'v2.5',
    icon: '🔐'
  },
  {
    id: 'ai-agent-architecture',
    title: 'AI Agent Architecture',
    description: 'Comprehensive research on autonomous AI agent design patterns and deployment strategies.',
    category: 'Research',
    pages: 63,
    downloadUrl: '/whitepapers/ai-agent-architecture.pdf',
    securityLevel: 'public',
    releaseDate: '2024-04-01',
    version: 'v1.0',
    icon: '🤖'
  },
  {
    id: 'decentralized-intelligence',
    title: 'Decentralized Intelligence',
    description: 'Research paper on distributed AI systems and collective intelligence networks.',
    category: 'Research',
    pages: 38,
    downloadUrl: '/whitepapers/decentralized-intelligence.pdf',
    securityLevel: 'public',
    releaseDate: '2024-04-15',
    version: 'v1.2',
    icon: '🌐'
  },
  {
    id: 'quantum-ai-protocols',
    title: 'Quantum AI Protocols',
    description: 'Cutting-edge research on quantum computing integration with AI agent networks.',
    category: 'Research',
    pages: 52,
    downloadUrl: '/whitepapers/quantum-ai-protocols.pdf',
    securityLevel: 'restricted',
    releaseDate: '2024-05-01',
    version: 'v0.9',
    icon: '⚛️'
  }
];

const WhitepaperCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealing, setIsRevealing] = useState<string | null>(null);
  const [revealedPapers, setRevealedPapers] = useState<Set<string>>(new Set());

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(whitepapers.length / cardsPerSlide);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleReveal = (paperId: string) => {
    setIsRevealing(paperId);
    setTimeout(() => {
      setRevealedPapers(prev => new Set([...prev, paperId]));
      setIsRevealing(null);
    }, 2000);
  };

  const getSecurityIcon = (level: string) => {
    switch (level) {
      case 'public': return <DocumentTextIcon className="w-5 h-5 text-green-400" />;
      case 'restricted': return <ShieldCheckIcon className="w-5 h-5 text-yellow-400" />;
      case 'classified': return <LockClosedIcon className="w-5 h-5 text-red-400" />;
      default: return <DocumentTextIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'public': return 'border-green-500/30 bg-green-500/5';
      case 'restricted': return 'border-yellow-500/30 bg-yellow-500/5';
      case 'classified': return 'border-red-500/30 bg-red-500/5';
      default: return 'border-gray-500/30 bg-gray-500/5';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - STATIC */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
              📄 Research Library
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive white papers and research documents exploring the technical foundations, protocols, and innovations behind the Agentic Internet.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all group"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all group"
          >
            <ChevronRightIcon className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whitepapers
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((paper) => (
                        <motion.div
                          key={paper.id}
                          className={`relative p-6 rounded-lg backdrop-blur-sm border ${getSecurityColor(paper.securityLevel)} overflow-hidden group cursor-pointer bg-white shadow-lg`}
                          style={{
                            width: '280px',
                            height: '360px', // 8.5:11 ratio approximation
                            aspectRatio: '8.5/11'
                          }}
                          whileHover={{ scale: 1.02, rotateY: 5 }}
                          transition={{ duration: 0.3 }}
                        >


                    {/* Paper Content */}
                    <div className="relative z-0 h-full flex flex-col text-black">
                      {/* Paper Header */}
                      <div className="border-b border-gray-200 pb-3 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{paper.icon}</span>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">{paper.category}</span>
                        </div>
                        <h3 className="text-lg font-bold text-black leading-tight">{paper.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                          <span>{paper.pages} pages</span>
                          <span>•</span>
                          <span>{paper.version}</span>
                          <span>•</span>
                          <span className="capitalize">{paper.securityLevel}</span>
                        </div>
                      </div>

                      {/* Paper Abstract */}
                      <div className="flex-1 mb-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {paper.description}
                        </p>
                      </div>

                      {/* Paper Footer */}
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            {new Date(paper.releaseDate).toLocaleDateString()}
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-1 bg-black text-white text-xs font-medium rounded hover:bg-gray-800 transition-all"
                          >
                            Download
                          </motion.button>
                        </div>
                      </div>
                    </div>

                          {/* Digital Grid Pattern */}
                          <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <div className="w-full h-full" style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperCarousel;
