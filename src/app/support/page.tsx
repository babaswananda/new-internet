'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I get started with Unified AI?",
    answer: "Getting started is simple! Sign up for your free trial at /io, choose your subscription tier, and you'll have immediate access to our AI agent marketplace, intelligent operator, and all core features. No credit card required for the trial.",
    category: "Getting Started"
  },
  {
    question: "What's included in my IO subscription?",
    answer: "Your IO (Intelligent Operator) subscription includes: Access to 50+ AI models, unlimited agent deployments, AlphaRouter intelligent routing, ION protocol access, AgentChat interface, and priority support. Higher tiers include additional features and increased limits.",
    category: "Subscriptions"
  },
  {
    question: "How does the AI Agent marketplace work?",
    answer: "Our marketplace lets you deploy, discover, and monetize AI agents. You can fork existing agents, create custom ones, or deploy pre-built solutions for specific industries. Revenue sharing is available for popular agents.",
    category: "AI Agents"
  },
  {
    question: "What is AlphaRouter and how does it optimize my AI usage?",
    answer: "AlphaRouter is our intelligent model routing system that automatically selects the best AI model for each task based on cost, speed, and quality requirements. It can reduce your AI costs by up to 70% while maintaining or improving output quality.",
    category: "Technical"
  },
  {
    question: "Can I integrate Unified AI with my existing systems?",
    answer: "Yes! We provide comprehensive APIs, webhooks, and integrations with popular platforms. Our ION protocol enables seamless integration with existing infrastructure, and we support custom enterprise integrations.",
    category: "Integration"
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple support tiers: Community support (free), Priority email support (paid plans), Live chat support (higher tiers), and dedicated account management (enterprise). Response times range from 24 hours to immediate based on your plan.",
    category: "Support"
  },
  {
    question: "How secure is my data with Unified AI?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and offer private cloud deployments. Your data is never used to train models without explicit consent, and we provide full data portability.",
    category: "Security"
  },
  {
    question: "What's the difference between subscription tiers?",
    answer: "Starter ($20/mo): Basic features, 10K tokens. Builder ($50/mo): Advanced features, 50K tokens, priority support. Master ($150/mo): All features, 200K tokens, dedicated support, custom integrations. Enterprise: Custom pricing with unlimited usage.",
    category: "Subscriptions"
  },
  {
    question: "How do AI Agent handles work?",
    answer: "Agent handles are unique identifiers (like YourName.AIAgents) that provide branded access to your AI agents. They enable custom domains, revenue tracking, and professional presentation of your AI services to clients.",
    category: "AI Agents"
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime with no penalties. Your access continues until the end of your billing period, and you can export all your data. We also offer pause options for temporary breaks.",
    category: "Billing"
  }
];

const supportChannels = [
  {
    title: "📧 Email Support",
    description: "Get detailed help via email",
    contact: "support@unified.ai",
    responseTime: "24-48 hours",
    availability: "All plans"
  },
  {
    title: "💬 Live Chat",
    description: "Real-time assistance",
    contact: "Available in dashboard",
    responseTime: "Immediate",
    availability: "Builder+ plans"
  },
  {
    title: "📞 Phone Support",
    description: "Direct phone assistance",
    contact: "+1 (555) 123-4567",
    responseTime: "Business hours",
    availability: "Master+ plans"
  },
  {
    title: "🎯 Dedicated Manager",
    description: "Personal account management",
    contact: "Assigned on signup",
    responseTime: "Same day",
    availability: "Enterprise only"
  }
];

const resourceLinks = [
  {
    title: "📚 Documentation",
    description: "Complete guides and API references",
    href: "/docs",
    icon: "📖"
  },
  {
    title: "🎥 Video Tutorials",
    description: "Step-by-step video guides",
    href: "/tutorials",
    icon: "🎬"
  },
  {
    title: "💡 Best Practices",
    description: "Tips and optimization guides",
    href: "/blog",
    icon: "⚡"
  },
  {
    title: "🔧 API Reference",
    description: "Technical documentation",
    href: "/api-docs",
    icon: "🛠️"
  },
  {
    title: "🌟 Community Forum",
    description: "Connect with other users",
    href: "/community",
    icon: "👥"
  },
  {
    title: "📊 Status Page",
    description: "System status and uptime",
    href: "/status",
    icon: "📈"
  }
];

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>🛟 Support Center</HeaderText>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Get Help</span> <span className="font-normal">When You</span> <span className="font-bold">Need It</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Find answers, get support, and learn how to maximize your Unified AI experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Contact:</span>
                  <span className="text-white">{channel.contact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response:</span>
                  <span className="text-green-400">{channel.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-purple-400">{channel.availability}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>📚 Help Resources</HeaderText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceLinks.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={resource.href}>
                <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>❓ Frequently Asked Questions</HeaderText>
        </h2>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-purple-600/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div>
                  <span className="text-sm text-purple-400 font-medium">{faq.category}</span>
                  <h3 className="text-white font-semibold">{faq.question}</h3>
                </div>
                <span className={`text-white transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                📧 Contact Support
              </button>
            </Link>
            <Link href="/io">
              <button className="px-8 py-3 bg-black/50 text-white border border-white/30 font-bold rounded-lg hover:bg-white/10 transition-all">
                🚀 Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
