'use client';

import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import WhatIsUnifiedAISection from '@/components/sections/WhatIsUnifiedAISection';
import AgentOSSection from '@/components/sections/AgentOSSection';
import ADKSection from '@/components/sections/ADKSection';
import A2ASection from '@/components/sections/A2ASection';
import MCPSection from '@/components/sections/MCPSection';
import ParallelProcessingSection from '@/components/sections/ParallelProcessingSection';
import VibeCodingSection from '@/components/sections/VibeCodingSection';
import OperatorEconomySection from '@/components/sections/OperatorEconomySection';
import MarketplaceSection from '@/components/sections/MarketplaceSection';
import VideoSection from '@/components/sections/VideoSection';
import InfrastructureSection from '@/components/sections/InfrastructureSection';
import InvestmentOfferingSection from '@/components/sections/InvestmentOfferingSection';
import LibreChatSection from '@/components/sections/LibreChatSection';
import MerchSection from '@/components/sections/MerchSection';
import MapSection from '@/components/sections/MapSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import ComingSoonSection from '@/components/sections/ComingSoonSection';

export default function Home() {
  return (
    <MainLayout>
      {/* Main Hero Section */}
      <HeroSection />

      {/* What is Unified AI Section */}
      <WhatIsUnifiedAISection />

      {/* AgentOS Section */}
      <AgentOSSection />

      {/* Agent Dev Kit (ADK) Section */}
      <ADKSection />

      {/* Agent-to-Agent (A2A) Protocol Section */}
      <A2ASection />

      {/* Multi-Chain Protocol (MCP) Section */}
      <MCPSection />

      {/* Parallel Processing Section */}
      <ParallelProcessingSection />

      {/* Vibe Coding Section */}
      <VibeCodingSection />

      {/* Operator Economy Section */}
      <OperatorEconomySection />

      {/* Marketplace Section */}
      <MarketplaceSection />

      {/* Infrastructure Overview Section */}
      <InfrastructureSection />

      {/* Video Section */}
      <VideoSection />

      {/* LibreChat Integration Section with Pricing Plans */}
      <LibreChatSection />

      {/* Investment Offering Section */}
      <InvestmentOfferingSection />

      {/* Merch Section */}
      <MerchSection />

      {/* Map of the New Internet Section */}
      <MapSection />

      {/* Coming Soon - Explore Page for Generative Art */}
      <ComingSoonSection />

      {/* Final Call to Action Section */}
      <FinalCTASection />
    </MainLayout>
  );
}
