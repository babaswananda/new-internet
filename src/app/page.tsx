'use client';

import React, { Suspense, useMemo, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

// Core components
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import ParallaxDeck from '@/components/ui/ParallaxDeck';

// Import sections directly for better reliability
import IOSection from '@/components/sections/IOSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';
import AIDirectoryMarketplaceSection from '@/components/sections/AIDirectoryMarketplaceSection';
import AgentOSSection from '@/components/sections/AgentOSSection';
import DashboardSection from '@/components/sections/DashboardSection';
import WhitepaperCarousel from '@/components/sections/WhitepaperCarousel';


import CinematicHeroBanner from '@/components/ui/CinematicHeroBanner';
import CinematicPreloader from '@/components/ui/CinematicPreloader';
import { homePageSlides } from '@/data/cinematicSlides';
import RotatingProductShowcase from '@/components/ui/RotatingProductShowcase';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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

  // Protocol Stack Parallax Data
  const protocolStackData = useMemo(() => [
    {
      id: 'ai-directory',
      title: 'AI Directory',
      description: 'Discover and access the world\'s largest collection of AI tools, agents, and services. Find the perfect AI solution for any task or industry.',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-bold mb-3">🔍 DISCOVERY:</h4>
            <p className="text-gray-300 text-sm mb-3">Find the right AI tool for every need.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Smart search & filtering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Ratings & reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Category organization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Easy integration</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h5 className="text-blue-400 font-semibold">AI Agents Marketplace</h5>
                <p className="text-gray-400 text-sm">Browse and deploy intelligent agents</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛠️</span>
              <div>
                <h5 className="text-green-400 font-semibold">Developer Tools</h5>
                <p className="text-gray-400 text-sm">APIs, SDKs, and integration tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h5 className="text-purple-400 font-semibold">Analytics & Insights</h5>
                <p className="text-gray-400 text-sm">Performance metrics and usage analytics</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: {
        id: 'ai-directory-showcase',
        title: 'AI Directory Platform',
        description: 'Comprehensive directory of AI tools, agents, and services with smart discovery features',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'ai-marketplace',
      title: 'AI Marketplace',
      description: 'The new creator economy where AI agents are bought, sold, and deployed across industries. Build, monetize, and scale intelligent agents that solve real-world problems.',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-400 font-bold mb-3">💰 CREATOR ECONOMY:</h4>
            <p className="text-gray-300 text-sm mb-3">Turn your AI expertise into sustainable revenue streams.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Revenue sharing models</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Subscription tiers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Pay-per-use pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Licensing opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h5 className="text-purple-400 font-semibold">Agent Deployment Hub</h5>
                <p className="text-gray-400 text-sm">One-click deployment across multiple platforms</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h5 className="text-pink-400 font-semibold">Remix & Fork System</h5>
                <p className="text-gray-400 text-sm">Collaborative development with revenue sharing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h5 className="text-orange-400 font-semibold">Performance Analytics</h5>
                <p className="text-gray-400 text-sm">Real-time metrics and optimization insights</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h5 className="text-blue-400 font-semibold">Creator Leaderboards</h5>
                <p className="text-gray-400 text-sm">Recognition and rewards for top performers</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: {
        id: 'ai-marketplace-flow',
        title: 'AI Marketplace Economy',
        description: 'Creator economy showing agent deployment, monetization, and collaboration',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'handle-registry',
      title: 'Handle Registry',
      description: 'Secure your digital identity with protocol-native handles for the Agentic Internet. Three-tier architecture supporting humans, agents, and infrastructure with cryptographic security.',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="text-green-400 font-bold mb-3">🆔 IDENTITY ARCHITECTURE:</h4>
            <p className="text-gray-300 text-sm mb-3">Three-tier system for complete ecosystem coverage.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Developer handles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Agent handles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Endpoint handles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Session handles</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h5 className="text-green-400 font-semibold">Cryptographic Security</h5>
                <p className="text-gray-400 text-sm">Military-grade encryption and verification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <h5 className="text-blue-400 font-semibold">Digital Asset Value</h5>
                <p className="text-gray-400 text-sm">Handles appreciate as network effects grow</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h5 className="text-purple-400 font-semibold">Universal Compatibility</h5>
                <p className="text-gray-400 text-sm">Works across all AI platforms and services</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h5 className="text-cyan-400 font-semibold">Analytics Dashboard</h5>
                <p className="text-gray-400 text-sm">Track handle usage and performance metrics</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h5 className="text-orange-400 font-semibold">Bulk Registration</h5>
                <p className="text-gray-400 text-sm">CSV upload and API access for enterprises</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: {
        id: 'handle-registry-viz',
        title: 'Handle Registry System',
        description: 'Decentralized identity system showing handle registration and verification',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-green-600 to-emerald-600'
    }
  ], []);

  return (
    <>
      {/* Cinematic Preloader */}
      {isLoading && (
        <CinematicPreloader
          onComplete={() => setIsLoading(false)}
          duration={2500}
        />
      )}

      <MainLayout>
        {/* Cinematic Hero Banner */}
      <CinematicHeroBanner
        slides={homePageSlides}
        autoPlay={true}
        autoPlayInterval={8000}
        height="100vh"
        showControls={false}
        showIndicators={false}
        enableParallax={true}
      />

      {/* Rotating Product Showcase - Flash Billboard */}
      <RotatingProductShowcase />

      {/* IO Section - Amazing Visuals */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={250} color="purple" speed="slow" depth={true} interactive={true} />
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

      {/* AI Directory Marketplace - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="cyan" speed="medium" depth={true} interactive={true} />
          <AIDirectoryMarketplaceSection />
        </div>
      </Suspense>

      {/* Agent OS - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={220} color="blue" speed="medium" depth={true} interactive={true} />
          <AgentOSSection />
        </div>
      </Suspense>

      {/* Dashboard Section - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="purple" speed="slow" depth={true} interactive={true} />
          <DashboardSection />
        </div>
      </Suspense>

      {/* AI Directory Marketplace - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <AIDirectoryMarketplaceSection />
      </Suspense>

      {/* Agent OS - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <AgentOSSection />
      </Suspense>

      {/* Dashboard Section - ACTUAL SECTION FROM INVENTORY */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <DashboardSection />
      </Suspense>

      {/* White Papers and Research Papers - SECURE DIGITAL REVEALS */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={100} color="purple" speed="slow" depth={true} interactive={true} />
          <WhitepaperCarousel />
        </div>
      </Suspense>

      {/* White Papers and Research Papers - SECURE DIGITAL REVEALS */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={100} color="purple" speed="slow" depth={true} interactive={true} />
          <WhitepaperCarousel />
        </div>
      </Suspense>



      {/* Protocol Stack Parallax Deck */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="mixed" speed="slow" depth={true} interactive={true} />
          <ParallaxDeck
            cards={protocolStackData}
            title="Protocol Stack"
            subtitle="The intelligent infrastructure powering the new internet"
          />
        </div>
      </Suspense>

      {/* Hardware Pre-order Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={140} color="purple" speed="medium" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Hardware Pre-order</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Next-generation AI hardware devices designed for the Agentic Internet
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: ".AIPhone", icon: "📱", desc: "AI-native smartphone" },
                  { name: ".AIPods", icon: "🎧", desc: "Intelligent audio devices" },
                  { name: ".AIGlasses", icon: "👓", desc: "Augmented reality AI" },
                  { name: ".AIEmail", icon: "📧", desc: "Hardware email device" }
                ].map((device, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">{device.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{device.name}</h3>
                    <p className="text-gray-300 text-sm">{device.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* AI Made Me Rich Merch Community Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="blue" speed="slow" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">AI Made Me Rich</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Join the community of AI entrepreneurs and showcase your success with exclusive merchandise
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">👕</div>
                  <h3 className="text-xl font-bold text-white mb-3">Exclusive Merch</h3>
                  <p className="text-gray-300">Limited edition apparel and accessories</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-white mb-3">Success Stories</h3>
                  <p className="text-gray-300">Share your AI entrepreneurship journey</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-3">Community Access</h3>
                  <p className="text-gray-300">Connect with fellow AI entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="purple" speed="medium" depth={true} interactive={true} />
          <NewsletterSection />
        </div>
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="cyan" speed="slow" depth={true} interactive={true} />
          <FAQSection />
        </div>
      </Suspense>

      {/* Hardware Pre-sale Section - ON TOP */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="purple" speed="slow" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">🔥 Hardware Pre-sale</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                Next-generation AI hardware devices designed for the Agentic Internet
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { name: ".AIPhone", icon: "📱", desc: "AI-native smartphone", price: "$999" },
                  { name: ".AIPods", icon: "🎧", desc: "Intelligent audio devices", price: "$299" },
                  { name: ".AIGlasses", icon: "👓", desc: "Augmented reality AI", price: "$1,499" },
                  { name: ".AIEmail", icon: "📧", desc: "Hardware email device", price: "$199" }
                ].map((device, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{device.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{device.name}</h4>
                    <p className="text-gray-300 text-sm mb-3">{device.desc}</p>
                    <p className="text-purple-400 font-bold">{device.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Final CTA with Agentic Wording - BOTTOM */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={100} color="blue" speed="slow" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to explore the future?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Join the Agentic Internet revolution and become an Intelligent Operator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      </MainLayout>
    </>
  );
}
