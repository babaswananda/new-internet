'use client';

import React from 'react';
import ScrollTriggerSlide from '@/components/ui/ScrollTriggerSlide';

const CoreProductsSlide: React.FC = () => {
  const coreProducts = [
    {
      name: "AI Factory™",
      href: "/ai-factory",
      description: "Complete business transformation suite with physical infrastructure",
      icon: "🏭"
    },
    {
      name: "VibeCoder",
      href: "/vibecoder",
      description: "AI-powered development platform with intelligent coding assistance",
      icon: "💻"
    },
    {
      name: "Webinar",
      href: "/webinar",
      description: "AI-driven virtual events and interactive presentations",
      icon: "🎥"
    },
    {
      name: "AI Agents",
      href: "/ai-agents",
      description: "Deploy, discover, and monetize intelligent autonomous agents",
      icon: "🤖"
    },
    {
      name: "AgentChat",
      href: "/agentchat",
      description: "Conversational AI superapp for seamless human-AI interaction",
      icon: "💬"
    },
    {
      name: "Text Me",
      href: "/textme",
      description: "Automated messaging campaigns and SMS automation",
      icon: "📱"
    },
    {
      name: "Video Chat",
      href: "/videochat",
      description: "AI-enhanced video communication with intelligent features",
      icon: "📹"
    }
  ];

  return (
    <ScrollTriggerSlide
      title="Core Products"
      subtitle="Revolutionary AI tools that transform how businesses operate, create, and scale"
      items={coreProducts}
      particleColor="orange"
      slideDirection="up"
    />
  );
};

export default CoreProductsSlide;
