'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AnimatedBackgroundPage() {
  return (
    <main className="min-h-screen relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black overflow-hidden"
          style={{
            background: 'linear-gradient(-45deg, #0f172a, #1e293b, #0f766e, #0c4a6e)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        >
          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(40px)',
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: Math.random() * 10 + 10,
                }}
              />
            ))}
          </div>
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg mt-20">
          <h1 className="text-4xl font-bold mb-6 text-white">Animated Background Test</h1>
          <p className="text-xl mb-4 text-white">
            This page demonstrates an animated gradient background with particles as a fallback for the Spline 3D background.
          </p>
          <p className="text-lg mb-8 text-white">
            Since the Spline scene has access restrictions, we're using this animated background instead.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}
