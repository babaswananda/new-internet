'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AITeamMember } from '@/data/aiTeam';
import { Twitter, Linkedin, Github, MessageCircle, Brain, Zap, Target, Crown, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface TeamMemberProfileProps {
  member: AITeamMember;
}

export default function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'github': return <Github className="w-5 h-5" />;
      case 'telegram': return <MessageCircle className="w-5 h-5" />;
      default: return null;
    }
  };

  const getPerformanceIcon = (metric: string) => {
    switch (metric) {
      case 'reasoning': return <Brain className="w-6 h-6" />;
      case 'creativity': return <Zap className="w-6 h-6" />;
      case 'execution': return <Target className="w-6 h-6" />;
      case 'leadership': return <Crown className="w-6 h-6" />;
      default: return null;
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 95) return 'from-green-500 to-emerald-500';
    if (score >= 90) return 'from-blue-500 to-cyan-500';
    if (score >= 85) return 'from-purple-500 to-pink-500';
    return 'from-yellow-500 to-orange-500';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* Name & Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {member.name}
              </h1>
              <p className="text-xl text-purple-400 font-medium mb-2">{member.title}</p>
              <p className="text-gray-400 mb-6">{member.role}</p>

              {/* Department Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium mb-8">
                {member.department} Division
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {Object.entries(member.socialLinks).map(([platform, handle]) => (
                  <motion.a
                    key={platform}
                    href={`#${handle}`}
                    className="p-3 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {getSocialIcon(platform)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">About {member.name}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{member.bio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Performance Metrics</h2>
              <p className="text-gray-300 mb-8">Real-time neural network performance indicators</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(member.modelSpecs.performance).map(([metric, score], index) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${getPerformanceColor(score)}`}>
                      {getPerformanceIcon(metric)}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 capitalize">{metric}</h3>
                  <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${getPerformanceColor(score)} rounded-full`}
                    />
                  </div>
                  <div className="text-2xl font-bold text-white">{score}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model Specifications */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Model Specifications</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Technical Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Base Model:</span>
                    <p className="text-white font-medium">{member.modelSpecs.baseModel}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Specialization:</span>
                    <p className="text-white font-medium">{member.modelSpecs.specialization}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Training Data:</span>
                    <p className="text-white font-medium">{member.modelSpecs.trainingData}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Capabilities</h3>
                <ul className="space-y-2">
                  {member.modelSpecs.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Model Files */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Model Documentation</h2>
              <p className="text-gray-300 mb-8">
                Access detailed technical documentation and model files for {member.name}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/docs/models/${member.id}.md`}>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Model Docs</span>
                  </motion.button>
                </Link>
                
                <Link href={`/api/models/${member.id}`}>
                  <motion.button
                    className="px-6 py-3 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>API Access</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
