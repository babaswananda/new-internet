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
    name: 'AI FACTORY™',
    href: '/ai-factory',
    description: 'Build, automate, and scale with AI',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'AI AGENTS',
    href: '/ai-agents',
    description: 'Deploy, discover, and monetize autonomous AI agents',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'PARALLEL PROCESSING',
    href: '/alpharouter',
    description: 'Intelligent model routing and optimization at scale',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'INTELLIGENT OPERATOR',
    href: '/io',
    description: 'Your personal AI operating system',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'AGENT CHAT',
    href: '/agentchat',
    description: 'Conversational AI superapp interface',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'AGENT OS',
    href: '/agentos',
    description: 'Operating system for autonomous agents',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'ION PROTOCOL',
    href: '/ion',
    description: 'Intelligent Ontology Network infrastructure',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'AI ART GENERATION',
    href: '/io',
    description: 'Professional AI art creation suite',
    icon: '',
    gradient: 'from-white to-gray-100'
  },
  {
    name: 'VIDEO GENERATION',
    href: '/io',
    description: '4K AI video creation platform',
    icon: '',
    gradient: 'from-white to-gray-100'
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
    <div className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Big Rotating Text Display */}
          <div
            className="relative h-48 flex items-center justify-center"
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
                  <h3
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-white group-hover:scale-105 transition-transform duration-300 tracking-tight leading-none"
                    style={{
                      textShadow: '0 0 50px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {currentProduct.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-4 font-light">
                    {currentProduct.description}
                  </p>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators removed for cleaner UI */}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
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
