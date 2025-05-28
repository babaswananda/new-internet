'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aiTeam, getAllDepartments, getTeamByDepartment } from '@/data/aiTeam';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import TeamHero from '@/components/team/TeamHero';
import TeamStats from '@/components/team/TeamStats';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const departments = ['All', ...getAllDepartments()];
  
  const filteredTeam = selectedDepartment === 'All' 
    ? aiTeam 
    : getTeamByDepartment(selectedDepartment);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <TeamHero />
      
      {/* Team Stats */}
      <TeamStats />
      
      {/* Department Filter */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <motion.button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {dept}
              </motion.button>
            ))}
          </div>
          
          {/* Team Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* AI-Native Message */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future of AI-Native Organizations
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our AI team represents the next evolution of organizational structure. Each AI agent is 
              specialized, autonomous, and optimized for their specific domain while working in perfect 
              harmony with the collective intelligence of the protocol.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-gray-300">Infinite Scalability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">Human Bias</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
