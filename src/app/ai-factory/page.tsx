'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

interface AITool {
  name: string;
  description: string;
  useCases: string[];
  icon: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

const aiTools: AITool[] = [
  {
    name: "AI Agents",
    description: "Deploy AI-powered agents for tasks like customer support, data analysis, and more.",
    useCases: ["24/7 customer service", "Data processing", "Task automation"],
    icon: "🤖"
  },
  {
    name: "AI Avatars",
    description: "Create virtual avatars for personalized customer interactions.",
    useCases: ["Virtual assistants", "Interactive marketing", "Training simulations"],
    icon: "👤"
  },
  {
    name: "AI Call Center",
    description: "Automate call center operations with intelligent voice agents.",
    useCases: ["Customer inquiries", "Appointment scheduling", "Feedback collection"],
    icon: "📞"
  },
  {
    name: "Vibe Coder",
    description: "An AI-assisted coding environment for rapid development.",
    useCases: ["Software development", "Code debugging", "Learning programming"],
    icon: "💻"
  },
  {
    name: "Webinar",
    description: "Host AI-driven webinars and virtual events.",
    useCases: ["Product launches", "Training sessions", "Virtual conferences"],
    icon: "🎥"
  },
  {
    name: "Text Me",
    description: "Automate SMS and messaging campaigns.",
    useCases: ["Marketing promotions", "Customer reminders", "Alerts"],
    icon: "💬"
  },
  {
    name: "Video Chat",
    description: "Integrate AI into video conferencing for enhanced communication.",
    useCases: ["Virtual meetings", "Telehealth consultations", "Remote interviews"],
    icon: "📹"
  },
  {
    name: "AI Contracts",
    description: "Generate and manage contracts using AI.",
    useCases: ["Legal document creation", "Contract analysis", "Compliance checks"],
    icon: "📄"
  },
  {
    name: "AI Developer",
    description: "AI tools to assist in software development.",
    useCases: ["Code generation", "Bug fixing", "Feature suggestions"],
    icon: "⚡"
  },
  {
    name: "AI Staff",
    description: "Virtual AI employees to handle various tasks.",
    useCases: ["Administrative support", "Data entry", "Customer follow-ups"],
    icon: "👥"
  },
  {
    name: "AI Music Generator",
    description: "Create original music compositions with AI.",
    useCases: ["Background scores", "Jingles", "Personalized playlists"],
    icon: "🎵"
  },
  {
    name: "AI Search",
    description: "Enhanced search capabilities powered by AI.",
    useCases: ["Internal knowledge bases", "Customer queries", "Data retrieval"],
    icon: "🔍"
  },
  {
    name: "AI Strategists",
    description: "AI-driven business strategy recommendations.",
    useCases: ["Market analysis", "Growth planning", "Competitive insights"],
    icon: "📊"
  },
  {
    name: "AI Templates",
    description: "Pre-built templates for various business needs.",
    useCases: ["Marketing materials", "Business plans", "Reports"],
    icon: "📋"
  },
  {
    name: "AI Voices",
    description: "Generate realistic AI voices for various applications.",
    useCases: ["Voice-overs", "Virtual assistants", "Audiobooks"],
    icon: "🎤"
  },
  {
    name: "AI Workflows",
    description: "Design and automate business workflows.",
    useCases: ["Process automation", "Task management", "Operational efficiency"],
    icon: "⚙️"
  }
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$49",
    features: ["Access to 3 AI tools of your choice", "Basic support", "Email integration", "Standard templates"],
    idealFor: "Freelancers, small businesses",
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    features: ["Access to 6 AI tools", "Priority support", "Advanced integrations", "Custom templates", "Analytics dashboard"],
    idealFor: "Growing businesses, startups",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    features: ["Full access to all AI tools", "24/7 dedicated support", "Custom integrations", "White-label options", "Advanced analytics", "API access"],
    idealFor: "Large enterprises, corporations",
    popular: false
  },
  {
    name: "Custom",
    price: "Contact Us",
    features: ["Tailored solutions", "Dedicated consulting", "Custom development", "On-premise deployment", "Training & onboarding"],
    idealFor: "Organizations with specific needs",
    popular: false
  }
];

const consultingServices = [
  "AI readiness assessment",
  "Custom AI solution development",
  "Integration with existing systems",
  "Staff training and support",
  "Ongoing optimization and maintenance"
];

export default function AIFactoryPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="orange" speed="slow" depth={true} interactive={true} />
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
              <HeaderText>🏭 AI Factory™</HeaderText>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="font-bold">Build,</span> <span className="font-normal">Automate,</span> <span className="font-bold">and</span> <span className="font-normal">Scale</span> <span className="font-bold">with</span> <span className="font-normal">AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with AI Factory™ - not just software, but complete physical AI infrastructure. From prefab container factories to digital twin systems, we build and deploy real AI manufacturing facilities.
            </p>
            <p className="text-lg text-orange-300 max-w-3xl mx-auto mb-12">
              🏭 Physical AI Factories • 📦 Prefab Container Systems • 🔄 Digital Twin Infrastructure • ⚡ Edge Computing Deployment
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link href="#pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  🔗 Explore AI Factory™ Suite
                </motion.button>
              </Link>
              <Link href="#consulting">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-orange-500/50 text-orange-300 font-bold text-lg rounded-lg hover:bg-orange-500/10 transition-all"
                >
                  📞 Schedule a Consultation
                </motion.button>
              </Link>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                "🏭 Deploy physical AI factories with prefab container systems",
                "🔄 Digital twin infrastructure for real-time monitoring and optimization",
                "⚡ Edge computing deployment for low-latency AI processing",
                "📦 Modular container factories for rapid deployment anywhere",
                "🛠️ Complete turnkey AI manufacturing solutions with expert support"
              ].map((proposition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-4 text-center"
                >
                  <p className="text-gray-300 text-sm">{proposition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Tools Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>🛠️ Included Tools</HeaderText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tool.icon}</span>
                <h3 className="text-lg font-bold text-white">{tool.name}</h3>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tool.description}</p>

              <div className="space-y-2">
                <h4 className="text-orange-300 font-semibold text-xs">Use Cases:</h4>
                <ul className="space-y-1">
                  {tool.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>💰 Pricing Plans</HeaderText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-black/30 backdrop-blur-sm border rounded-lg p-6 hover:border-orange-500/50 transition-all ${
                plan.popular ? 'border-orange-500/50 ring-2 ring-orange-500/20' : 'border-orange-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {plan.price}
                  {plan.price !== "Contact Us" && <span className="text-lg text-gray-400">/mo</span>}
                </div>
                <p className="text-gray-400 text-sm">{plan.idealFor}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  selectedPlan === plan.name
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-600/20 text-orange-300 hover:bg-orange-600/30'
                }`}
              >
                {selectedPlan === plan.name ? 'Selected' : `Choose ${plan.name}`}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consulting Services */}
      <div id="consulting" className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-lg p-8">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            <HeaderText>🎯 Consulting Services</HeaderText>
          </h2>

          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Beyond the digital suite, AI Factory™ offers expert consulting to help businesses implement AI strategies effectively.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-4 text-center"
              >
                <p className="text-white font-medium text-sm">{service}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all"
            >
              📞 Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-orange-500/50 text-orange-300 font-bold rounded-lg hover:bg-orange-500/10 transition-all"
            >
              📄 Download AI Factory™ Brochure
            </motion.button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Transform Your Business Today
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            By integrating AI Factory™ into your operations, you're not just adopting new tools — you're transforming the way your business operates, engages with customers, and scales for the future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            🚀 Get Started with AI Factory™
          </motion.button>
        </motion.div>
      </div>
    </MainLayout>
  );
}
