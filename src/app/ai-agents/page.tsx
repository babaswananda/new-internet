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

      {/* Industry-Specific Agents Goldmine Section */}
      <section className="py-20 bg-gradient-to-b from-black via-yellow-950/10 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                The Real Goldmine
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Industry-specific AI agents that target overlooked verticals, unsolved problems, and underserved operators.
                <span className="text-yellow-400 font-semibold"> Forget generic chatbots — this is where the deep money lives.</span>
              </p>
            </div>

            {/* Strategy Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-16"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                🧠 STRATEGY:
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                We focus on agents that solve real pain, not just chat.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Unserved industries',
                  'Cash flow problems',
                  'Manual labor bottlenecks',
                  'Repeatable time-sucks',
                  'Specialized knowledge gaps',
                  'Legacy systems screaming for an upgrade'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400 text-lg">✅</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industry Categories */}
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                🔥 INDUSTRY-SPECIFIC AGENT CATEGORIES + KILLER USE CASES
              </h3>

              {/* Industry Grid */}
              <div className="grid gap-8">
                {/* Healthcare */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🏥</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-400 mb-2">HEALTHCARE</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: Health Intake Optimizer</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Auto-collects patient history pre-visit</li>
                        <li>• Standardizes insurance data submission</li>
                        <li>• Flags risk factors for provider review</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 Built for clinics, not hospitals. Private practice cash cows.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Accounting/Tax */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🧾</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-green-400 mb-2">ACCOUNTING / TAX</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: Solo Hustler TaxBot</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Built for creators, freelancers, crypto traders</li>
                        <li>• Categorizes receipts, exports IRS-ready docs</li>
                        <li>• AI audit-prep & crypto wallet integration</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 TurboTax ain't doing this.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Real Estate */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🏘️</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-400 mb-2">REAL ESTATE</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: Follow-Up Fiend</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Texts + emails leads automatically</li>
                        <li>• Pulls property data into listing pages</li>
                        <li>• Books calls, syncs to calendar</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 For agents who suck at follow-up (aka most of them).</p>
                    </div>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🎓</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">EDUCATION</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: AI TA (Teaching Assistant)</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Answers student questions in your teaching style</li>
                        <li>• Auto-generates lesson reviews, quizzes, learning plans</li>
                        <li>• Works in Google Docs, Sheets, PDFs</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 For course creators, homeschoolers, micro-academies.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Ecommerce */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/40 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🛍️</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-pink-400 mb-2">ECOMMERCE / DTC BRANDS</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: UGC Comment Sniper</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Responds to social comments 24/7</li>
                        <li>• Turns fans into buyers, buyers into affiliates</li>
                        <li>• Writes in your brand voice + emojis</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 High-volume dropshippers NEED this.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Coaches/Consultants */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🎙️</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-orange-400 mb-2">COACHES / CONSULTANTS</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: Session Syncer</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Auto-transcribes Zoom calls</li>
                        <li>• Summarizes action items + next steps</li>
                        <li>• Delivers personalized follow-up emails</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 Make $300/hr feel like $1,000/hr.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Blue-Collar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🧑‍🔧</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-yellow-400 mb-2">BLUE-COLLAR / TRADES</h4>
                      <h5 className="text-lg font-semibold text-white mb-3">Agent: Quote Crusher</h5>
                      <ul className="text-gray-300 space-y-1 mb-3">
                        <li>• Collects job info via SMS</li>
                        <li>• Auto-generates estimates with materials + labor</li>
                        <li>• Sends branded quotes with click-to-book</li>
                      </ul>
                      <p className="text-yellow-400 font-semibold">💡 Plumbers, HVAC, contractors = overlooked goldmine.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bonus Niche Examples */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  🧵 BONUS: HYPER-SPECIFIC NICHE EXAMPLES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    '"LawyerBot" for immigration cases',
                    '"ChurchOps" for service planning + donation flows',
                    '"AI Pastor" with voice sermons & Bible Q&A',
                    '"Tattoo AI Assistant" for appointment setup & art uploads',
                    '"Salon SchedulerBot" w/ reminders + reviews + referrals',
                    '"Car Lot Closer" that text-sells used cars like a street shark',
                    '"Short-Term Rental AI" to manage Airbnbs via WhatsApp'
                  ].map((example, index) => (
                    <motion.div
                      key={example}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg p-4"
                    >
                      <span className="text-gray-300 text-sm">• {example}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
