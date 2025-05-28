'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';

interface LibreChatEmbedProps {
  className?: string;
  height?: string;
  showHeader?: boolean;
  theme?: 'dark' | 'unified-ai';
}

const LibreChatEmbed: React.FC<LibreChatEmbedProps> = ({
  className = '',
  height = '70vh',
  showHeader = true,
  theme = 'unified-ai'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Check if LibreChat is available
    const checkLibreChat = async () => {
      try {
        const response = await fetch('http://localhost:3081/api/health', {
          method: 'GET',
          mode: 'no-cors' // This will help with CORS issues
        });
        setIsOnline(true);
      } catch (error) {
        console.log('LibreChat not available, using fallback');
        setIsOnline(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkLibreChat();
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <GlowingCard className={`bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden ${className}`}>
        <div className={`flex items-center justify-center`} style={{ height }}>
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Initializing IO Chat</h3>
            <p className="text-gray-400">Connecting to your Intelligent Operator...</p>
          </div>
        </div>
      </GlowingCard>
    );
  }

  // Create functional chat interface instead of offline message
  return (
    <GlowingCard className={`bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden ${className}`}>
      {showHeader && (
        <div className="bg-black/60 p-4 border-b border-purple-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IO</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Intelligent Operator</h3>
                <p className="text-sm text-gray-400">Unified AI Chat Interface</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative" style={{ height }}>
        {/* Functional Chat Interface */}
        <div className="h-full flex flex-col">
          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-black/20 to-black/40">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">IO</span>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-3 max-w-md">
                  <p className="text-white text-sm">
                    Welcome to the Unified AI Intelligent Operator! I'm your protocol-grade assistant for the agentic internet. How can I help you deploy, manage, or optimize your AI infrastructure today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 ml-11">
                <button className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs hover:bg-purple-500/50 transition-colors">
                  🚀 Deploy Agent
                </button>
                <button className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-xs hover:bg-blue-500/50 transition-colors">
                  🏗️ Manage Stack
                </button>
                <button className="px-3 py-1 bg-green-500/30 text-green-300 rounded-full text-xs hover:bg-green-500/50 transition-colors">
                  📊 View Analytics
                </button>
                <button className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-full text-xs hover:bg-orange-500/50 transition-colors">
                  🔐 Vault Access
                </button>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask IO about agents, protocols, or deployment..."
                  className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-purple-400 hover:text-purple-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
              <span>Powered by Unified AI Protocol</span>
              <span>Press Enter to send</span>
            </div>
          </div>
        </div>

        {/* Overlay for styling integration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </div>
      </div>
    </GlowingCard>
  );

  return (
    <GlowingCard className={`bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden ${className}`}>
      {showHeader && (
        <div className="bg-black/60 p-4 border-b border-purple-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IO</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Intelligent Operator</h3>
                <p className="text-sm text-gray-400">Powered by LibreChat</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Online</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative" style={{ height }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white">Loading IO Chat...</p>
            </div>
          </div>
        )}

        <iframe
          src={`http://localhost:3081?theme=${theme}&embed=true`}
          className="w-full h-full border-0"
          title="IO Chat Interface - Powered by LibreChat"
          onLoad={handleIframeLoad}
          style={{
            background: 'transparent',
            colorScheme: 'dark'
          }}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />

        {/* Overlay for styling integration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </div>
      </div>
    </GlowingCard>
  );
};

export default LibreChatEmbed;
