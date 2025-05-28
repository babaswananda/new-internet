'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIAgent } from '@/data/aiAgents';
import { 
  Bot, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Zap, 
  ChevronDown, 
  ExternalLink,
  Copy,
  Star,
  GitFork
} from 'lucide-react';
import Link from 'next/link';

interface AIAgentCardProps {
  agent: AIAgent;
  featured?: boolean;
}

export default function AIAgentCard({ agent, featured = false }: AIAgentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      utility: 'from-blue-500 to-cyan-500',
      commerce: 'from-green-500 to-emerald-500',
      media: 'from-purple-500 to-pink-500',
      intelligence: 'from-orange-500 to-red-500',
      spiritual: 'from-indigo-500 to-purple-500',
      infrastructure: 'from-gray-500 to-slate-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      utility: '🔧',
      commerce: '🛍️',
      media: '🎙️',
      intelligence: '🧠',
      spiritual: '🔮',
      infrastructure: '🏗️'
    };
    return icons[category as keyof typeof icons] || '🤖';
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return 'text-green-400';
    if (popularity >= 75) return 'text-blue-400';
    if (popularity >= 60) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <motion.div
      layout
      className={`bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 ${
        featured ? 'ring-2 ring-purple-500/30' : ''
      }`}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          {/* Agent Info */}
          <div className="flex items-start space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(agent.category)} rounded-full flex items-center justify-center text-xl`}>
              {getCategoryIcon(agent.category)}
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{agent.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-300 capitalize">
                  {agent.category}
                </span>
                {agent.remixable && (
                  <span className="px-2 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-300 flex items-center">
                    <GitFork className="w-3 h-3 mr-1" />
                    Remixable
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Popularity Score */}
          <div className="text-right">
            <div className={`text-lg font-bold ${getPopularityColor(agent.popularity)}`}>
              {agent.popularity}%
            </div>
            <div className="text-xs text-gray-400">Popularity</div>
          </div>
        </div>

        {/* Function Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {agent.function}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-green-400 font-bold text-sm">{agent.earnings}</div>
            <div className="text-xs text-gray-400">Avg Earnings</div>
          </div>
          
          <div className="text-center">
            <div className="text-blue-400 font-bold text-sm">{agent.pricing.deploymentCost}</div>
            <div className="text-xs text-gray-400">Deploy Cost</div>
          </div>
          
          <div className="text-center">
            <div className="text-purple-400 font-bold text-sm">{agent.pricing.revenueShare}</div>
            <div className="text-xs text-gray-400">Revenue Share</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
            >
              #{tag}
            </span>
          ))}
          {agent.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
              +{agent.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Zap className="w-4 h-4 inline mr-1" />
            Deploy
          </motion.button>
          
          {agent.remixable && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2 border border-green-500/50 rounded-lg font-bold text-green-300 text-sm hover:bg-green-500/10 transition-all duration-300"
            >
              <GitFork className="w-4 h-4 inline mr-1" />
              Remix
            </motion.button>
          )}
        </div>

        {/* Expand Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center space-x-2 py-2 text-purple-400 hover:text-purple-300 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'View Details'}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-purple-500/20 overflow-hidden"
          >
            <div className="p-6 space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Description</h4>
                <p className="text-gray-300 text-sm">{agent.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Features</h4>
                <ul className="space-y-2">
                  {agent.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monetization */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Monetization Strategy</h4>
                <p className="text-gray-300 text-sm">{agent.monetizationAngle}</p>
              </div>

              {/* Target Users */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Target Users</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.targetUsers.map((user) => (
                    <span
                      key={user}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Details */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Pricing Structure</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-black/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Deployment</div>
                    <div className="font-bold text-white">{agent.pricing.deploymentCost}</div>
                  </div>
                  <div className="text-center p-3 bg-black/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Usage Fee</div>
                    <div className="font-bold text-white">{agent.pricing.usageFee}</div>
                  </div>
                  <div className="text-center p-3 bg-black/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Revenue Share</div>
                    <div className="font-bold text-white">{agent.pricing.revenueShare}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/ai-agents/${agent.id}`} className="flex-1">
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Full Profile
                    <ExternalLink className="w-4 h-4 inline ml-2" />
                  </motion.button>
                </Link>
                
                <motion.button
                  className="flex-1 py-3 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Copy className="w-4 h-4 inline mr-2" />
                  Copy Agent ID
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
