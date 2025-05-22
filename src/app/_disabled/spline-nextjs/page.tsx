'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Import Spline component with dynamic import to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading 3D scene...</div>
    </div>
  ),
});

/**
 * SplineNextJs
 * 
 * A test page that uses the @splinetool/react-spline component.
 * This is the approach used in the liquid_gradient_abstract_background project.
 */
export default function SplineNextJs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Spline background using the Next.js component */}
      <div className="fixed inset-0 z-0 pointer-events-none">
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
      </div>
    </div>
  );
}
