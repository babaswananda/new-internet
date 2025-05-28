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
    description: 'The foundational architecture for the Agentic Internet, defining how AI agents communicate and collaborate.',
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
    title: 'Agentic Economics',
    description: 'Economic models and tokenomics for AI agent marketplaces and the creator economy.',
    category: 'Economics',
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
    description: 'Intelligent Ontology Network architecture for semantic AI agent communication.',
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
    description: 'Cryptographic security protocols and threat models for the Agentic Internet.',
    category: 'Security',
    pages: 41,
    downloadUrl: '/whitepapers/security-framework.pdf',
    securityLevel: 'classified',
    releaseDate: '2024-03-15',
    version: 'v2.5',
    icon: '🔐'
  }
];

const WhitepaperCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealing, setIsRevealing] = useState<string | null>(null);
  const [revealedPapers, setRevealedPapers] = useState<Set<string>>(new Set());

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whitepapers.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % whitepapers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + whitepapers.length) % whitepapers.length);
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
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            📄 White Papers and Research Papers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore the technical foundations and research behind the Agentic Internet
          </motion.p>
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
              {whitepapers.map((paper, index) => (
                <div key={paper.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className={`relative p-8 rounded-2xl backdrop-blur-sm border ${getSecurityColor(paper.securityLevel)} overflow-hidden group cursor-pointer`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => !revealedPapers.has(paper.id) && handleReveal(paper.id)}
                  >
                    {/* Security Layer Overlay */}
                    <AnimatePresence>
                      {!revealedPapers.has(paper.id) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm z-10 flex items-center justify-center"
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        >
                          {isRevealing === paper.id ? (
                            <motion.div
                              className="text-center"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
                              <p className="text-white font-semibold">Decrypting...</p>
                            </motion.div>
                          ) : (
                            <motion.div
                              className="text-center"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                {getSecurityIcon(paper.securityLevel)}
                              </div>
                              <p className="text-white font-semibold mb-2">Secure Document</p>
                              <p className="text-gray-300 text-sm">Click to reveal</p>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="relative z-0">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{paper.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{paper.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300">{paper.category}</span>
                              <span>{paper.pages} pages</span>
                              <span>{paper.version}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getSecurityIcon(paper.securityLevel)}
                          <span className="text-xs text-gray-400 capitalize">{paper.securityLevel}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {paper.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          Released: {new Date(paper.releaseDate).toLocaleDateString()}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all"
                        >
                          Download PDF
                        </motion.button>
                      </div>
                    </div>

                    {/* Digital Grid Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                      }}></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {whitepapers.map((_, index) => (
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
