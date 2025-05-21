'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * DashboardSection
 * 
 * This section highlights Unified AI as a dashboard to unify all things AI.
 */
const DashboardSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Unified AI
          </h2>
          
          <p className="text-2xl md:text-3xl font-light mb-8 text-white">
            Think of us as your dashboard to unify all things AI
          </p>
          
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              In a world of fragmented AI tools and services, Unified AI brings everything together in one seamless experience. 
              Navigate the new internet with a single control layer for all your AI interactions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                className="bg-black/30 p-6 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-colors"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Centralized Control</h3>
                <p className="text-gray-400 text-center">
                  Manage all your AI agents and tools from a single, intuitive dashboard
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Seamless Integration</h3>
                <p className="text-gray-400 text-center">
                  Connect your favorite AI services and tools with zero friction
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 p-6 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-colors"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">Customizable Experience</h3>
                <p className="text-gray-400 text-center">
                  Tailor your AI dashboard to your specific needs and workflows
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
          >
            Explore the Dashboard
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
