'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ui/particle-background';

const CreateWebinarPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    tokenGated: false,
    requiredTokens: 0,
    maxAttendees: 100
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating webinar:', formData);
    // Handle form submission
  };

  return (
    <div className="relative min-h-screen w-full">
      <ParticleBackground />
      <Header />
      
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Create Webinar
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Launch your token-gated event for the agentic internet
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Webinar Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your webinar title..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 h-32"
                    placeholder="Describe your webinar content..."
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Time</label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="tokenGated"
                    checked={formData.tokenGated}
                    onChange={(e) => setFormData({...formData, tokenGated: e.target.checked})}
                    className="w-5 h-5 text-purple-500 bg-black/50 border border-white/20 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="tokenGated" className="text-white font-medium">
                    🪙 Enable Token Gating
                  </label>
                </div>
                
                {formData.tokenGated && (
                  <div>
                    <label className="block text-white font-medium mb-2">Required AI Tokens</label>
                    <input
                      type="number"
                      value={formData.requiredTokens}
                      onChange={(e) => setFormData({...formData, requiredTokens: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      placeholder="Number of tokens required..."
                      min="1"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-white font-medium mb-2">Max Attendees</label>
                  <input
                    type="number"
                    value={formData.maxAttendees}
                    onChange={(e) => setFormData({...formData, maxAttendees: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    placeholder="Maximum number of attendees..."
                    min="1"
                    required
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    🚀 Create Webinar
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
                  >
                    💾 Save Draft
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="text-lg font-bold text-white mb-2">Live Streaming</h3>
                <p className="text-gray-400 text-sm">HD video with AI co-hosts</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">🪙</div>
                <h3 className="text-lg font-bold text-white mb-2">Token Gating</h3>
                <p className="text-gray-400 text-sm">Control access with AI Tokens</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">Monetization</h3>
                <p className="text-gray-400 text-sm">Earn from premium content</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateWebinarPage;
