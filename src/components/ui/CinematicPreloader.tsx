'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceParticlesBackground from './SpaceParticlesBackground';

interface CinematicPreloaderProps {
  onComplete: () => void;
  duration?: number;
}

const CinematicPreloader: React.FC<CinematicPreloaderProps> = ({
  onComplete,
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  // Create OS-style loading sound
  const playLoadingSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(ctx);

      // Create a sequence of beeps that sound like OS loading
      const frequencies = [440, 523, 659, 784]; // A4, C5, E5, G5

      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = ctx.createOscillator();
          const gainNode = ctx.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(ctx.destination);

          oscillator.frequency.setValueAtTime(freq, ctx.currentTime);
          oscillator.type = 'sine';

          gainNode.gain.setValueAtTime(0, ctx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.3);
        }, index * 200);
      });
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  // Play sound on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      playLoadingSound();
    }, 500); // Small delay to ensure user interaction

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50);

    return () => {
      clearInterval(interval);
      // Cleanup audio context
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [duration, onComplete, audioContext]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Space Particles Background */}
          <SpaceParticlesBackground
            particleCount={150}
            color="mixed"
            speed="slow"
            depth={true}
            interactive={true}
            tinyParticles={true}
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to the New Internet
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Loading AI Agents
              </p>
              <p className="text-lg text-gray-400">
                agentic🌐 coming soon
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-80 mx-auto"
            >
              <div className="bg-gray-800 rounded-full h-2 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-gray-400 text-sm">
                {Math.round(progress)}% Complete
              </p>
            </motion.div>

            {/* Loading stages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-sm text-gray-500"
            >
              {progress < 25 && "Initializing blockchain protocols..."}
              {progress >= 25 && progress < 50 && "Deploying AI agents on-chain..."}
              {progress >= 50 && progress < 75 && "Synchronizing crypto intelligence..."}
              {progress >= 75 && progress < 100 && "Web3 AI network activated..."}
              {progress >= 100 && "Welcome to the decentralized future ₿"}
            </motion.div>
          </div>

          {/* Cinematic bars */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-16 bg-black z-20"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20"
            initial={{ y: 64 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicPreloader;
