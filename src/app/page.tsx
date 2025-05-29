'use client';

import React, { Suspense, useMemo, useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';

// Core components
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

// Import sections directly for better reliability
import IOSection from '@/components/sections/IOSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';

import AgentOSSection from '@/components/sections/AgentOSSection';
import DashboardSection from '@/components/sections/DashboardSection';
import WhitepaperCarousel from '@/components/sections/WhitepaperCarousel';
import PreOrderHardwareSection from '@/components/sections/PreOrderHardwareSection';
import OperatorEconomySection from '@/components/sections/OperatorEconomySection';

import NewHeroSlider from '@/components/ui/NewHeroSlider';
import CinematicPreloader from '@/components/ui/CinematicPreloader';
import LoginGate from '@/components/auth/LoginGate';
import { homePageSlides } from '@/data/cinematicSlides';
import RotatingProductShowcase from '@/components/ui/RotatingProductShowcase';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Only show preloader on first visit in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (!hasSeenPreloader) {
      setIsLoading(true);
    }
  }, []);

  // Memoized data structures for performance optimization
  const coreProductsData = useMemo(() => [
    {
      id: 'io-operator',
      title: 'IO: Your Intelligent Operator',
      description: 'The central AI that manages your entire digital ecosystem. Deploy agents, manage vaults, and orchestrate your presence in the Agentic Internet.',
      component: <IOSection />,
      media: {
        id: 'io-dashboard',
        title: 'IO Dashboard Visualization',
        description: 'Interactive dashboard showing IO managing multiple AI agents and protocols',
        type: 'video' as const,
        category: 'products' as const,
        priority: 'high' as const
      }
    },

  ], []);

  return (
    <>
      {/* Cinematic Preloader - ONLY SHOWS ON FIRST VISIT */}
      {isLoading && (
        <CinematicPreloader
          onComplete={() => {
            setIsLoading(false);
            // Mark that user has seen the preloader in this session
            sessionStorage.setItem('hasSeenPreloader', 'true');
          }}
          duration={2500}
        />
      )}

      {/* Login Gate - SHOWS AFTER PRELOADER IF NOT AUTHENTICATED */}
      {!isLoading && !isAuthenticated && (
        <LoginGate onAuthenticated={() => setIsAuthenticated(true)} />
      )}

      {/* Main Content - ONLY SHOWS AFTER AUTHENTICATION */}
      {!isLoading && isAuthenticated && (
        <MainLayout onLogout={() => setIsAuthenticated(false)}>
        {/* NEW HERO SLIDER - NO MORE ISSUES! */}
        <NewHeroSlider />

      {/* Rotating Product Showcase - Flash Billboard */}
      <RotatingProductShowcase />

      {/* IO Section - Amazing Visuals */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="purple" speed="slow" depth={false} interactive={false} />
          <IOSection />
        </div>
      </Suspense>

      {/* Built On Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-400 leading-relaxed">
              Built on revolutionary AI infrastructure that powers the next generation of intelligent applications,
              from autonomous agents to real-time model routing, creating a unified ecosystem where AI works seamlessly together.
            </p>
          </div>
        </div>
      </Suspense>



      {/* Agent OS - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <AgentOSSection />
      </Suspense>

      {/* Dashboard Section - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <DashboardSection />
      </Suspense>

      {/* Hardware Pre-Order Section - FROM REMOVED SECTIONS INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={100} color="purple" speed="slow" depth={false} interactive={false} />
          <PreOrderHardwareSection />
        </div>
      </Suspense>

      {/* White Papers and Research Papers - IMPROVED CAROUSEL */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={80} color="purple" speed="slow" depth={false} interactive={false} />
          <WhitepaperCarousel />
        </div>
      </Suspense>



      {/* Operator Economy Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={60} color="mixed" speed="slow" depth={false} interactive={false} />
          <OperatorEconomySection />
        </div>
      </Suspense>

      {/* Domain Registration Search Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative py-20 px-4">
          <SpaceParticlesBackground particleCount={40} color="cyan" speed="slow" depth={false} interactive={false} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              🌐 Claim Your Digital Territory
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Search and register domains for the agentic internet. Secure your place in the new digital economy.
            </p>

            <div className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your domain name..."
                    className="w-full px-6 py-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none text-lg"
                  />
                </div>
                <select className="px-6 py-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none">
                  <option>.commandline</option>
                  <option>.aideveloper</option>
                  <option>.aiagents</option>
                  <option>.aiavatars</option>
                  <option>.vibecoder</option>
                  <option>.router</option>
                  <option>.endpoint</option>
                </select>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Instant availability check</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>AI-powered suggestions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Bulk registration</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Agent integration ready</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all">
                🆔 Register Handle + Domain
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                📋 View Pricing
              </button>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={50} color="purple" speed="slow" depth={false} interactive={false} />
          <NewsletterSection />
        </div>
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={40} color="cyan" speed="slow" depth={false} interactive={false} />
          <FAQSection />
        </div>
      </Suspense>

      {/* THE FUTURE IS AGENTIC - RETRO GRID FINAL CTA */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Retro Grid Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black"></div>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'center bottom'
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-pulse">
                THE FUTURE
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                IS AGENTIC
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
              Join the revolution. Own your tools, run the system, become the intelligence.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                🚀 ENTER THE AGENTIC WEB
              </button>
              <button className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold text-xl rounded-lg hover:bg-cyan-400/10 transition-all transform hover:scale-105">
                🤖 DEPLOY YOUR FIRST AGENT
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 text-purple-400 text-6xl animate-bounce">🤖</div>
            <div className="absolute top-32 right-16 text-cyan-400 text-4xl animate-pulse">⚡</div>
            <div className="absolute bottom-20 left-20 text-pink-400 text-5xl animate-bounce delay-1000">🌐</div>
            <div className="absolute bottom-32 right-12 text-blue-400 text-3xl animate-pulse delay-500">🔮</div>
          </div>

          {/* Glow Effects */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        </div>
      </Suspense>
        </MainLayout>
      )}
    </>
  );
}
