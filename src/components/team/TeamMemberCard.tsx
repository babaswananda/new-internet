'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AITeamMember } from '@/data/aiTeam';
import { Twitter, Linkedin, Github, MessageCircle, ChevronDown, Brain, Zap, Target, Crown } from 'lucide-react';
import Link from 'next/link';

interface TeamMemberCardProps {
  member: AITeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'telegram': return <MessageCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getPerformanceIcon = (metric: string) => {
    switch (metric) {
      case 'reasoning': return <Brain className="w-4 h-4" />;
      case 'creativity': return <Zap className="w-4 h-4" />;
      case 'execution': return <Target className="w-4 h-4" />;
      case 'leadership': return <Crown className="w-4 h-4" />;
      default: return null;
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-blue-400';
    if (score >= 85) return 'text-purple-400';
    return 'text-yellow-400';
  };

  return (
    <motion.div
      layout
      className="bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Avatar & Basic Info */}
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-purple-400 font-medium text-sm mb-1">{member.title}</p>
            <p className="text-gray-400 text-xs">{member.role}</p>
          </div>
          
          {/* Department Badge */}
          <div className="px-3 py-1 bg-purple-500/20 rounded-full text-xs font-medium text-purple-300">
            {member.department}
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {member.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
            >
              {specialty}
            </span>
          ))}
          {member.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400">
              +{member.specialties.length - 3} more
            </span>
          )}
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 mb-4">
          {Object.entries(member.socialLinks).map(([platform, handle]) => (
            <motion.a
              key={platform}
              href={`#${handle}`}
              className="p-2 bg-gray-800 rounded-lg hover:bg-purple-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {getSocialIcon(platform)}
            </motion.a>
          ))}
        </div>

        {/* Quick Performance Preview */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(member.modelSpecs.performance).map(([metric, score]) => (
            <div key={metric} className="text-center">
              <div className={`text-lg font-bold ${getPerformanceColor(score)}`}>
                {score}
              </div>
              <div className="text-xs text-gray-400 capitalize">
                {metric.slice(0, 4)}
              </div>
            </div>
          ))}
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
              {/* Model Specifications */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Model Specifications</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-400">Base Model:</span>
                    <p className="text-white font-medium">{member.modelSpecs.baseModel}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Specialization:</span>
                    <p className="text-white font-medium">{member.modelSpecs.specialization}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Training Data:</span>
                    <p className="text-white font-medium">{member.modelSpecs.trainingData}</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  {Object.entries(member.modelSpecs.performance).map(([metric, score]) => (
                    <div key={metric} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getPerformanceIcon(metric)}
                        <span className="text-white capitalize">{metric}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          />
                        </div>
                        <span className={`text-sm font-bold ${getPerformanceColor(score)}`}>
                          {score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocols */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Managed Protocols</h4>
                <div className="flex flex-wrap gap-2">
                  {member.protocols.map((protocol) => (
                    <span
                      key={protocol}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Profile Button */}
              <Link href={`/team/${member.id}`}>
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Full Profile
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
