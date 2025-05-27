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

  if (!isOnline) {
    return (
      <GlowingCard className={`bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg overflow-hidden ${className}`}>
        {showHeader && (
          <div className="bg-black/60 p-4 border-b border-red-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-400 font-medium">LibreChat Offline</span>
              </div>
              <span className="text-gray-400 text-sm">IO Chat Unavailable</span>
            </div>
          </div>
        )}
        <div className={`flex items-center justify-center`} style={{ height }}>
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🔌</div>
            <h3 className="text-xl font-semibold text-white mb-2">LibreChat Not Available</h3>
            <p className="text-gray-400 mb-6">
              The LibreChat service is not running. Please start it to access the full IO chat experience.
            </p>
            <div className="bg-gray-800 rounded-lg p-4 text-left">
              <p className="text-gray-300 text-sm mb-2">To start LibreChat:</p>
              <code className="text-green-400 text-xs">
                cd chat && docker-compose up -d
              </code>
            </div>
          </div>
        </div>
      </GlowingCard>
    );
  }

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
