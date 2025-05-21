'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline/next';

/**
 * SimpleSplineSite
 * 
 * A simplified version of the site with the Spline background.
 * This version includes only the essential content to ensure it loads properly.
 */
export default function SimpleSplineSite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/EegKcAAn0DX9KgHh/scene.splinecode" 
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                UNIFIED AI I/O
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/agentos" className="text-gray-300 hover:text-white transition-colors">AgentOS</Link>
              <Link href="/adk" className="text-gray-300 hover:text-white transition-colors">ADK</Link>
            </nav>
            
            <button className="px-4 py-2 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              Enter the Protocol
            </button>
          </div>
        </header>
        
        {/* Main content */}
        <main className="pt-24">
          {/* Hero Section */}
          <section id="hero-section" className="min-h-screen flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full mb-4">
                  <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">Protocol-Grade Launchpad</span>
                  </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  UNIFIED AI I/O
                  <span className="block text-2xl md:text-3xl mt-4 font-light text-white">
                    The New Map of the New Internet
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  unified ai... think of us as your dashboard to unify all things AI
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20">
                    Enter the Protocol
                  </button>
                  
                  <button className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* What is Unified AI Section */}
          <section className="py-24 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  What is Unified AI I/O?
                </h2>
                
                <p className="text-xl text-gray-300 mb-12">
                  Unified AI I/O is your dashboard to unify all things AI. We provide a protocol-grade launchpad for the agent economy, enabling seamless integration between different AI systems and tools.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "A2A Protocol", description: "Agent-to-Agent communication protocol for seamless AI collaboration." },
                    { title: "Multi-Chain Protocol", description: "Connect and operate across multiple blockchain networks." },
                    { title: "Operator Economy", description: "Participate in the new economy of AI operators and agents." }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* AgentOS Section */}
          <section className="py-24 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  AgentOS
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 text-center">
                  The operating system for AI agents, enabling seamless integration and communication between different AI systems.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Features</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Agent-to-Agent communication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Multi-chain protocol support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Parallel processing capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Operator economy integration</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Seamless AI integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Enhanced agent capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Improved performance and efficiency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">✓</span>
                          <span>Unified dashboard for all AI systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Coming Soon Section */}
          <section id="coming-soon-section" className="py-24 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] rounded-full mb-8">
                  <div className="bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full flex items-center">
                    <span className="animate-pulse mr-2 text-red-500">●</span>
                    <span className="text-white font-medium">Launching May 21-22, 2025</span>
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Explore the New Internet
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  A revolutionary marketplace for generative art and vibe coding projects with templates and AI-powered tools.
                </p>
                
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/20">
                  Join Waitlist
                </button>
              </motion.div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">UNIFIED AI I/O</h3>
                <p className="text-gray-400">The New Map of the New Internet</p>
                <p className="text-gray-400 mt-2">Protocol-grade launchpad for the agent economy</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="/agentos" className="hover:text-white transition-colors flex items-center">
                      <span className="mr-2 text-blue-400">→</span>
                      <span>AgentOS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/adk" className="hover:text-white transition-colors flex items-center">
                      <span className="mr-2 text-blue-400">→</span>
                      <span>Agent Dev Kit</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/infrastructure" className="hover:text-white transition-colors flex items-center">
                      <span className="mr-2 text-blue-400">→</span>
                      <span>Infrastructure</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Unified AI I/O. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
