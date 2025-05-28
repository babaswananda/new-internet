'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CinematicMediaPlaceholder from './CinematicMediaPlaceholder';

interface DeckCard {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  media?: {
    id: string;
    title: string;
    description: string;
    type: 'video' | 'image' | 'animation' | '3d';
    category: 'hero' | 'agents' | 'protocol' | 'tokens' | 'products' | 'future';
    priority: 'high' | 'medium' | 'low';
  };
  gradient: string;
}

interface ParallaxDeckProps {
  cards: DeckCard[];
  title: string;
  subtitle?: string;
  className?: string;
}

const ParallaxDeck: React.FC<ParallaxDeckProps> = ({
  cards,
  title,
  subtitle,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.4, 0.25, 1] 
      }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className={`relative py-20 overflow-hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -200])
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Parallax Cards */}
        <div className="space-y-32">
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;
            const cardY = useTransform(
              scrollYProgress,
              [0, 1],
              [0, (index + 1) * -50]
            );

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                style={{ y: cardY }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-lg text-gray-300">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {card.content}
                  </div>
                </motion.div>

                {/* Media */}
                <motion.div
                  className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? 50 : -50,
                    rotateY: isEven ? 15 : -15
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-20 blur-xl`} />
                  
                  {/* Media Container */}
                  <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                    {card.media ? (
                      <CinematicMediaPlaceholder
                        {...card.media}
                        className="w-full"
                        showControls={false}
                        autoPlay={false}
                        overlay={true}
                      />
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-4">🎬</div>
                          <div>Media Placeholder</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-500 rounded-full opacity-40"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 0.9, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to explore the future?
            </h3>
            <p className="text-gray-300 mb-6">
              Join the Agentic Internet revolution and become an Intelligent Operator.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ParallaxDeck;
