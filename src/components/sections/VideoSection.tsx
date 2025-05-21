'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            See Unified AI I/O in Action
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Watch how the protocol is revolutionizing the agent economy.
          </motion.p>

          {/* Video Player */}
          <motion.div
            variants={itemVariants}
            className="mb-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-1 rounded-lg"
          >
            <div className="bg-black/80 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                {!isPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                      <motion.button
                        className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePlayClick}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center text-white/70 text-xl">
                          [Video Thumbnail: Unified AI I/O Protocol Overview]
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="text-center text-white/70">
                      [Video Player: Unified AI I/O Protocol Overview]
                      <p className="mt-4 text-sm">In a real implementation, this would be an embedded video player.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Video Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: "Protocol Overview",
                description: "A comprehensive walkthrough of the Unified AI I/O protocol architecture."
              },
              {
                title: "Agent Development",
                description: "See how operators build and deploy agents using Vibe Coding."
              },
              {
                title: "Economic Model",
                description: "Understand how value flows through the operator economy."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Videos */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">More Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Agent-to-Agent Communication",
                "Multi-Chain Protocol in Action",
                "Marketplace Walkthrough"
              ].map((title, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="h-32 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-sm">
                        [Video Thumbnail]
                      </div>
                    </div>
                    <motion.button
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-gray-400 text-sm mt-1">3:45 • Tutorial</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Videos
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
