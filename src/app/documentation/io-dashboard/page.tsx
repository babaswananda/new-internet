'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Command, BarChart3, Settings, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function IODashboardPage() {
  const dashboardFeatures = [
    {
      icon: <Command className="w-8 h-8" />,
      title: 'Command Center',
      description: 'Execute commands across your entire agent ecosystem from a unified interface.',
      commands: ['io deploy --agent="support"', 'io scale --auto', 'io route --intent="meeting"']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Real-time monitoring of agent performance, resource usage, and optimization metrics.',
      metrics: ['Agent Response Time', 'Resource Utilization', 'Success Rate', 'Cost Efficiency']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Agent Management',
      description: 'Deploy, configure, and manage all your AI agents from a single control panel.',
      features: ['Agent Deployment', 'Configuration Management', 'Health Monitoring', 'Version Control']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Workflow Orchestration',
      description: 'Create and manage complex multi-agent workflows with visual flow builders.',
      capabilities: ['Visual Flow Builder', 'Trigger Configuration', 'Error Handling', 'Parallel Processing']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Access',
      description: 'Manage permissions, authentication, and security policies across your infrastructure.',
      security: ['Role-Based Access', 'API Key Management', 'Audit Logs', 'Security Policies']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'System Configuration',
      description: 'Configure global settings, integrations, and preferences for your I.O. instance.',
      settings: ['Global Preferences', 'Integration Setup', 'Notification Rules', 'Backup Configuration']
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="/documentation"
                className="p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:border-purple-500/50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  I.O. Dashboard
                </h1>
                <p className="text-gray-400 mt-2">Navigate your Intelligent Operator interface</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h2>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-300 mb-4">
                  The I.O. Dashboard is your command center for the Agentic Internet. It provides a unified interface 
                  to deploy, manage, and orchestrate AI agents across your entire digital ecosystem.
                </p>
                <p className="text-gray-300">
                  Unlike traditional AI platforms that require you to manage each agent separately, I.O. gives you 
                  centralized control with intelligent automation and real-time insights.
                </p>
              </div>

              {/* Dashboard Demo Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <CinematicMediaPlaceholder
                  id="io-dashboard-overview"
                  title="I.O. Dashboard Overview"
                  description="Complete walkthrough of the I.O. Dashboard interface showing agent management, command execution, and real-time monitoring"
                  type="video"
                  duration="60s"
                  resolution="4K"
                  category="products"
                  priority="high"
                  aspectRatio="16:9"
                  className="w-full"
                  showControls={true}
                  autoPlay={false}
                  overlay={true}
                />
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid gap-8">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        
                        {/* Feature-specific content */}
                        {feature.commands && (
                          <div className="bg-black/40 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-green-400 mb-2">Example Commands:</h4>
                            {feature.commands.map((cmd, cmdIndex) => (
                              <div key={cmdIndex} className="font-mono text-sm text-gray-300 mb-1">
                                <span className="text-green-400">$ </span>{cmd}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.metrics && (
                          <div className="grid grid-cols-2 gap-2">
                            {feature.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-sm text-gray-400">{metric}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.features && (
                          <div className="grid grid-cols-2 gap-2">
                            {feature.features.map((feat, featIndex) => (
                              <div key={featIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-sm text-gray-400">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.capabilities && (
                          <div className="grid grid-cols-2 gap-2">
                            {feature.capabilities.map((cap, capIndex) => (
                              <div key={capIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-sm text-gray-400">{cap}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.security && (
                          <div className="grid grid-cols-2 gap-2">
                            {feature.security.map((sec, secIndex) => (
                              <div key={secIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <span className="text-sm text-gray-400">{sec}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {feature.settings && (
                          <div className="grid grid-cols-2 gap-2">
                            {feature.settings.map((setting, settingIndex) => (
                              <div key={settingIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                <span className="text-sm text-gray-400">{setting}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Getting Started */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">First Time Setup</h3>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                      <span>Complete your account setup and claim your handle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                      <span>Choose your I.O. subscription plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                      <span>Access your dashboard at io.unified.ai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                      <span>Deploy your first AI agent</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/documentation/first-agent"
                      className="block p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:border-blue-400/50 transition-colors"
                    >
                      <h4 className="font-semibold text-blue-400">Deploy First Agent</h4>
                      <p className="text-sm text-gray-400">Get your first AI agent running in 5 minutes</p>
                    </Link>
                    
                    <Link
                      href="/documentation/agent-management"
                      className="block p-3 bg-green-500/10 border border-green-500/30 rounded-lg hover:border-green-400/50 transition-colors"
                    >
                      <h4 className="font-semibold text-green-400">Agent Management</h4>
                      <p className="text-sm text-gray-400">Learn to manage and optimize your agents</p>
                    </Link>
                    
                    <Link
                      href="/documentation/api-reference"
                      className="block p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:border-purple-400/50 transition-colors"
                    >
                      <h4 className="font-semibold text-purple-400">API Reference</h4>
                      <p className="text-sm text-gray-400">Integrate with I.O. programmatically</p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
                <p className="text-gray-300 mb-6">
                  Access your I.O. Dashboard and begin orchestrating your AI agent ecosystem.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/io"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    Access Dashboard
                  </Link>
                  <Link
                    href="/documentation/first-agent"
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                  >
                    Deploy First Agent
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
