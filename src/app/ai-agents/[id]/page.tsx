import React from 'react';
import { notFound } from 'next/navigation';
import { getAgentById, aiAgentsCatalog } from '@/data/aiAgents';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AIAgentProfile from '@/components/agents/AIAgentProfile';

interface AIAgentPageProps {
  params: {
    id: string;
  };
}

export default function AIAgentPage({ params }: AIAgentPageProps) {
  const agent = getAgentById(params.id);

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AIAgentProfile agent={agent} />
      <Footer />
    </div>
  );
}

// Generate static params for all agents
export async function generateStaticParams() {
  return aiAgentsCatalog.map((agent) => ({
    id: agent.id,
  }));
}
