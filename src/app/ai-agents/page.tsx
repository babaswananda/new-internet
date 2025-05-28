'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aiAgentsCatalog, agentCategories, getAgentsByCategory, getTopAgents } from '@/data/aiAgents';
import AIAgentCard from '@/components/agents/AIAgentCard';
import AIAgentHero from '@/components/agents/AIAgentHero';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';
import { Bot, Sparkles, TrendingUp, Filter } from 'lucide-react';

export default function AIAgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'earnings' | 'name'>('popularity');

  const filteredAgents = selectedCategory === 'all'
    ? aiAgentsCatalog
    : getAgentsByCategory(selectedCategory);

  const sortedAgents = [...filteredAgents].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'earnings':
        return parseInt(b.earnings.replace(/[^0-9]/g, '')) - parseInt(a.earnings.replace(/[^0-9]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <AIAgentHero />

      {/* Top Agents Preview */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🔥 Trending Agents
            </h2>
            <p className="text-gray-300">
              The most popular and highest-earning agents in the ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getTopAgents(6).map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AIAgentCard agent={agent} featured />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              .AIAgents Catalog
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy, customize, and monetize AI agents for every hustle, mission, and movement.
              Each agent is prebuilt, remixable, and revenue-ready.
            </p>

            {/* Agent Deployment Demo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 mb-8"
            >
              <CinematicMediaPlaceholder
                id="agent-deployment-demo"
                title="Agent Deployment in Action"
                description="Watch AI agents materialize and deploy across the digital landscape with synchronized harmony"
                type="3d"
                duration="15s"
                resolution="4K"
                category="agents"
                priority="high"
                aspectRatio="16:9"
                className="max-w-4xl mx-auto"
                showControls={false}
                autoPlay={true}
                overlay={false}
              />
            </motion.div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-4 h-4 inline mr-2" />
              All Agents
            </motion.button>

            {agentCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 p-2 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Sort by:</span>

              <button
                onClick={() => setSortBy('popularity')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  sortBy === 'popularity' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3 h-3 inline mr-1" />
                Popularity
              </button>

              <button
                onClick={() => setSortBy('earnings')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  sortBy === 'earnings' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                💰 Earnings
              </button>

              <button
                onClick={() => setSortBy('name')}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  sortBy === 'name' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                🔤 Name
              </button>
            </div>
          </div>

          {/* Agent Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {sortedAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <AIAgentCard agent={agent} />
              </motion.div>
            ))}
          </motion.div>

          {sortedAgents.length === 0 && (
            <div className="text-center py-16">
              <Bot className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No agents found</h3>
              <p className="text-gray-500">Try selecting a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Remix & Deploy CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deploy. Monetize. Multiply.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every agent can be deployed instantly, customized for your needs, and monetized
              through the protocol. Fork successful agents, remix them for your niche, and
              build your AI empire.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">One-Click Deploy</h3>
                <p className="text-gray-400 text-sm">
                  Deploy any agent instantly with custom handles and branding
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Remix & Customize</h3>
                <p className="text-gray-400 text-sm">
                  Fork successful agents and customize for your specific use case
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Monetize Everything</h3>
                <p className="text-gray-400 text-sm">
                  Earn from deployments, usage, and performance through the protocol
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Deploy Your First Agent
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                Learn About Remixing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
