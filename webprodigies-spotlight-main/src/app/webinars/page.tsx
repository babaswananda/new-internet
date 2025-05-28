'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/ui/particle-background';

const WebinarsPage = () => {
  const webinars = [
    {
      id: 1,
      title: 'Building the Agentic Internet',
      host: 'Industry Tycoon (I.T.)',
      date: '2024-01-15',
      time: '2:00 PM PST',
      attendees: 1247,
      tokenGated: true,
      requiredTokens: 100,
      status: 'upcoming',
      description: 'Learn how to deploy autonomous agents across the protocol layer'
    },
    {
      id: 2,
      title: 'Agent Deployment Masterclass',
      host: 'VibeCoder',
      date: '2024-01-18',
      time: '11:00 AM PST',
      attendees: 892,
      tokenGated: true,
      requiredTokens: 50,
      status: 'live',
      description: 'Hands-on workshop for deploying AI agents in production'
    },
    {
      id: 3,
      title: 'Meme Coin Economics & Viral Growth',
      host: 'AIMadeMeRich Community',
      date: '2024-01-20',
      time: '4:00 PM PST',
      attendees: 2156,
      tokenGated: false,
      requiredTokens: 0,
      status: 'upcoming',
      description: 'Strategies for creating viral token economies'
    }
  ];

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
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Browse Webinars
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Token-gated events and live streams for the agentic internet
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: webinar.id * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/30 transition-colors"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative flex items-center justify-center">
                    <div className="text-4xl">🎥</div>
                    {webinar.status === 'live' && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                        🔴 LIVE
                      </div>
                    )}
                    {webinar.tokenGated && (
                      <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                        🪙 {webinar.requiredTokens} Tokens
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{webinar.title}</h3>
                    <p className="text-purple-400 text-sm mb-2">Hosted by {webinar.host}</p>
                    <p className="text-gray-400 text-sm mb-4">{webinar.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{webinar.date} • {webinar.time}</span>
                      <span>{webinar.attendees} registered</span>
                    </div>
                    
                    <Link href={`/webinars/${webinar.id}`}>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all">
                        {webinar.status === 'live' ? 'JOIN LIVE' : webinar.tokenGated ? 'RESERVE SPOT' : 'REGISTER FREE'}
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/create">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                  🎥 Create Your Webinar
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WebinarsPage;
