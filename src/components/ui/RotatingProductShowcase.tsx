'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Product {
  name: string;
  href: string;
  description: string;
  icon: string;
  gradient: string;
}

const products: Product[] = [
  {
    name: 'I.O. - Intelligent Operator',
    href: '/io',
    description: 'Your AI stack that replaces every subscription',
    icon: '🧠',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'AI Agents Marketplace',
    href: '/ai-agents',
    description: 'Deploy, discover, and monetize AI agents',
    icon: '🤖',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'AlphaRouter',
    href: '/alpharouter',
    description: 'Intelligent model routing and optimization',
    icon: '🔀',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'ION Protocol',
    href: '/ion',
    description: 'Intelligent Ontology Network infrastructure',
    icon: '⚡',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Agent OS',
    href: '/agentos',
    description: 'Operating system for autonomous agents',
    icon: '💻',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    name: 'AgentChat',
    href: '/agentchat',
    description: 'Conversational AI superapp interface',
    icon: '💬',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: '.GenerateArt',
    href: '/io',
    description: 'Professional AI art generation suite',
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    name: '.VideoGenerator',
    href: '/io',
    description: '4K AI video creation platform',
    icon: '🎬',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export default function RotatingProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentProduct = products[currentIndex];

  const textVariants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.2,
      filter: 'blur(5px)',
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative py-16 bg-black/50 backdrop-blur-sm border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="font-normal">Discover</span>{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Products
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Click any product to explore • Auto-rotating every 3 seconds
            </p>
          </motion.div>

          {/* Rotating Product Display */}
          <div
            className="relative h-32 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <Link href={currentProduct.href} className="group cursor-pointer">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {currentProduct.icon}
                    </span>
                    <h3
                      className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${currentProduct.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                      style={{
                        textShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      {currentProduct.name}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                    {currentProduct.description}
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Product Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${currentProduct.gradient} scale-125`
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Quick Navigation Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.href}
                className={`group p-4 rounded-lg border transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-purple-500/50 bg-purple-500/10'
                    : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                }`}
                onMouseEnter={() => setCurrentIndex(index)}
              >
                <div className="text-center">
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </span>
                  <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                    {product.name.replace('I.O. - ', '').replace('.', '')}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Link href="/io">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                🚀 Start Your Free Trial
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
