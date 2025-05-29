'use client';

import React, { Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import NewHeroSlider from '@/components/ui/NewHeroSlider';
import IOSection from '@/components/sections/IOSection';
import AIDirectoryMarketplaceSection from '@/components/sections/AIDirectoryMarketplaceSection';
import AgentOSSection from '@/components/sections/AgentOSSection';
import OperatorEconomySection from '@/components/sections/OperatorEconomySection';
import PreOrderHardwareSection from '@/components/sections/PreOrderHardwareSection';
import DashboardSection from '@/components/sections/DashboardSection';
import WhitepaperCarousel from '@/components/sections/WhitepaperCarousel';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={100} color="mixed" speed="medium" depth={true} interactive={true} />
          <NewHeroSlider />
        </div>
      </Suspense>

      {/* Hello IO Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={80} color="pink" speed="slow" depth={true} interactive={true} />
          <IOSection />
        </div>
      </Suspense>

      {/* Agent OS Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={60} color="blue" speed="slow" depth={false} interactive={false} />
          <AgentOSSection />
        </div>
      </Suspense>

      {/* AI Directory Marketplace */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="cyan" speed="medium" depth={true} interactive={true} />
          <AIDirectoryMarketplaceSection />
        </div>
      </Suspense>

      {/* Operator Economy Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={60} color="mixed" speed="slow" depth={false} interactive={false} />
          <OperatorEconomySection />
        </div>
      </Suspense>

      {/* PreOrder Hardware */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="gold" speed="slow" depth={true} interactive={true} />
          <PreOrderHardwareSection />
        </div>
      </Suspense>

      {/* Dashboard Preview */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="green" speed="medium" depth={true} interactive={true} />
          <DashboardSection />
        </div>
      </Suspense>

      {/* Research Library */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={40} color="purple" speed="slow" depth={false} interactive={false} />
          <WhitepaperCarousel />
        </div>
      </Suspense>

      {/* Digital Territory Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Claim Your Digital Territory
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Secure your place in the agentic internet with premium domain handles
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4 mb-8">
                <input
                  type="text"
                  placeholder="Enter your desired handle"
                  className="flex-1 px-6 py-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                />
                <select className="px-6 py-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none">
                  <option>.commandline</option>
                  <option>.aideveloper</option>
                  <option>.aiagents</option>
                  <option>.aiavatars</option>
                  <option>.vibecoder</option>
                  <option>.router</option>
                  <option>.endpoint</option>
                </select>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                Check Availability
              </button>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Final CTA */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'perspective(500px) rotateX(45deg)',
              transformOrigin: 'center bottom'
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-pulse">
                THE FUTURE IS
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                AGENTIC
              </span>
            </h2>

            <div className="flex justify-center gap-8 text-4xl opacity-60">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🤖</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🚀</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🌐</span>
              <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>✨</span>
            </div>
          </div>
        </section>
      </Suspense>
    </MainLayout>
  );
}
