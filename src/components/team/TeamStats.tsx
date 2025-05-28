'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { aiTeam } from '@/data/aiTeam';

export default function TeamStats() {
  const totalPerformance = aiTeam.reduce((acc, member) => {
    acc.reasoning += member.modelSpecs.performance.reasoning;
    acc.creativity += member.modelSpecs.performance.creativity;
    acc.execution += member.modelSpecs.performance.execution;
    acc.leadership += member.modelSpecs.performance.leadership;
    return acc;
  }, { reasoning: 0, creativity: 0, execution: 0, leadership: 0 });

  const avgPerformance = {
    reasoning: Math.round(totalPerformance.reasoning / aiTeam.length),
    creativity: Math.round(totalPerformance.creativity / aiTeam.length),
    execution: Math.round(totalPerformance.execution / aiTeam.length),
    leadership: Math.round(totalPerformance.leadership / aiTeam.length)
  };

  const stats = [
    {
      label: 'AI Team Members',
      value: aiTeam.length,
      suffix: '',
      description: 'Specialized AI agents'
    },
    {
      label: 'Avg Reasoning Score',
      value: avgPerformance.reasoning,
      suffix: '%',
      description: 'Problem-solving capability'
    },
    {
      label: 'Avg Creativity Score',
      value: avgPerformance.creativity,
      suffix: '%',
      description: 'Innovation potential'
    },
    {
      label: 'Avg Execution Score',
      value: avgPerformance.execution,
      suffix: '%',
      description: 'Implementation efficiency'
    },
    {
      label: 'Avg Leadership Score',
      value: avgPerformance.leadership,
      suffix: '%',
      description: 'Strategic guidance'
    },
    {
      label: 'Protocols Managed',
      value: [...new Set(aiTeam.flatMap(member => member.protocols))].length,
      suffix: '+',
      description: 'Active protocol systems'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Collective Intelligence Metrics
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real-time performance metrics of our AI collective, showcasing the combined 
            capabilities that drive the Unified AI protocol forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                className="text-3xl font-bold text-purple-400 mb-2"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-sm font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-6 text-center text-purple-300">
            Collective Performance Matrix
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(avgPerformance).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-semibold mb-2 capitalize text-white">
                  {key}
                </div>
                <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
                <div className="text-sm text-purple-400 mt-1 font-medium">
                  {value}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
