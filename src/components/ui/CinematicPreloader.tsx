'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Typewriter component for character-by-character typing effect
const TypewriterText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
}> = ({ text, className = '', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};
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
  const [currentScreen, setCurrentScreen] = useState<'agents' | 'agentos' | 'welcome'>('agents');
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [fontCycleIndex, setFontCycleIndex] = useState(0);

  // Font and color arrays for Screen 1
  const fonts = [
    'Courier New, monospace', // Terminal
    'Georgia, serif', // Serif
    'Impact, sans-serif', // Bold
    'Comic Sans MS, cursive', // Hand-written
    'Trebuchet MS, sans-serif', // Cyber
    'Times New Roman, serif', // Classic
    'Verdana, sans-serif', // Clean
    'Lucida Console, monospace' // Pixel-like
  ];

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#FF8A80',
    '#81C784', '#64B5F6', '#FFB74D', '#F06292'
  ];

  // Create OS-style loading sound with better volume
  const playLoadingSound = async () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

      // Resume context if suspended (required for autoplay policy)
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      setAudioContext(ctx);
      setSoundPlayed(true);
      setShowSoundPrompt(false);

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

          // Increased volume from 0.1 to 0.3 for better audibility
          gainNode.gain.setValueAtTime(0, ctx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

          oscillator.start(ctx.currentTime);
          oscillator.stop(ctx.currentTime + 0.4);
        }, index * 250); // Slightly longer intervals
      });
    } catch (error) {
      console.log('Audio not supported:', error);
      setSoundPlayed(true);
      setShowSoundPrompt(false);
    }
  };

  // Handle user click to enable sound
  const handleSoundEnable = () => {
    playLoadingSound();
  };

  // Auto-attempt sound on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      playLoadingSound();
    }, 800); // Slightly longer delay

    return () => clearTimeout(timer);
  }, []);

  // Font cycling effect for Screen 1
  useEffect(() => {
    if (currentScreen !== 'agents') return;

    const fontCycleInterval = setInterval(() => {
      setFontCycleIndex(prev => (prev + 1) % fonts.length);
    }, 300); // Cycle every 300ms as specified

    return () => clearInterval(fontCycleInterval);
  }, [currentScreen, fonts.length]);

  // Screen transition logic - SLOWED DOWN AS REQUESTED
  useEffect(() => {
    // Show "agents are coming" for 4 seconds (was 2.5)
    const agentsTimer = setTimeout(() => {
      setCurrentScreen('agentos');
    }, 4000);

    // Show AgentOS screen for 3.5 seconds (was 2), then transition to welcome screen
    const agentOSTimer = setTimeout(() => {
      setCurrentScreen('welcome');
    }, 7500);

    // Show skip button after 4 seconds
    const skipButtonTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 4000);

    return () => {
      clearTimeout(agentsTimer);
      clearTimeout(agentOSTimer);
      clearTimeout(skipButtonTimer);
    };
  }, []);

  // Skip intro function
  const skipIntro = () => {
    setCurrentScreen('welcome');
    setShowSkipButton(false);
  };

  useEffect(() => {
    // Only start progress when on welcome screen
    if (currentScreen !== 'welcome') return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            // Check if we should show whitepaper after preloader
            const shouldShowWhitepaper = window.location.search.includes('whitepaper') ||
                                       localStorage.getItem('showWhitepaper') === 'true';

            if (shouldShowWhitepaper) {
              window.location.href = '/whitepaper';
            } else {
              setTimeout(onComplete, 500);
            }
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
  }, [duration, onComplete, audioContext, currentScreen]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${
            currentScreen === 'agents' ? 'bg-black' : currentScreen === 'agentos' ? 'bg-white' : 'bg-black'
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Space Particles Background - Only on welcome screen */}
          {currentScreen === 'welcome' && (
            <SpaceParticlesBackground
              particleCount={60}
              color="mixed"
              speed="slow"
              depth={false}
              interactive={false}
              tinyParticles={false}
            />
          )}

          {/* Main content */}
          <div className="relative z-10 text-center w-full">
            <AnimatePresence mode="wait" initial={false}>
              {currentScreen === 'agents' && (
                <motion.div
                  key="agents"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-screen flex items-center justify-center overflow-hidden relative"
                >
                  {/* ONE FUCKING LINE - Robot emoji and text together */}
                  <div className="text-center relative z-10 font-mono px-4">
                    <TypewriterText
                      text="🤖 agents are loading..."
                      className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-green-400 font-mono"
                      speed={120}
                    />
                  </div>
                </motion.div>
              )}

              {currentScreen === 'agentos' && (
                <motion.div
                  key="agentos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-screen flex items-center justify-center relative bg-white"
                >
                  {/* Clean minimal background - like screen 2 */}
                  <div className="absolute inset-0">
                    {/* Subtle animated lines - minimal like screen 2 */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-px bg-black opacity-10"
                        style={{ top: `${30 + i * 20}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Clean centered content - matching screen 2 aesthetic */}
                  <div className="relative z-10 text-black text-center max-w-4xl mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="space-y-8"
                    >
                      {/* Minimal header */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-500 text-lg font-normal tracking-wide"
                      >
                        powered by
                      </motion.div>

                      {/* Clean typography stack - like screen 2 */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-6"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0, duration: 0.6 }}
                          className="text-3xl md:text-5xl font-light text-black"
                        >
                          AgentOS
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3 }}
                          className="text-gray-400 text-xl font-light"
                        >
                          +
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6, duration: 0.6 }}
                          className="text-3xl md:text-5xl font-light text-black"
                        >
                          AlphaRouter
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.9 }}
                          className="text-gray-400 text-xl font-light"
                        >
                          +
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.2, duration: 0.6 }}
                          className="text-3xl md:text-5xl font-light text-black"
                        >
                          commandline
                        </motion.div>
                      </motion.div>

                      {/* Minimal cursor indicator */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                        className="text-gray-400 text-2xl font-light"
                      >
                        _
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {currentScreen === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
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
              )}
            </AnimatePresence>

            {/* Progress bar - Only on welcome screen */}
            {currentScreen === 'welcome' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-80 mx-auto"
              >
                <div className="bg-gray-200 rounded-full h-2 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  {Math.round(progress)}% Complete
                </p>
              </motion.div>
            )}

            {/* Sound Enable Button - Only on welcome screen */}
            {currentScreen === 'welcome' && showSoundPrompt && !soundPlayed && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                onClick={handleSoundEnable}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                🔊 Enable Loading Sound
              </motion.button>
            )}

            {/* Sound Indicator */}
            {soundPlayed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-400 text-sm flex items-center justify-center gap-2"
              >
                <span className="animate-pulse">🔊</span>
                <span>Sound Enabled</span>
              </motion.div>
            )}

            {/* Loading stages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-sm text-gray-400"
            >
              {progress < 25 && "Initializing blockchain protocols..."}
              {progress >= 25 && progress < 50 && "Deploying AI agents on-chain..."}
              {progress >= 50 && progress < 75 && "Synchronizing crypto intelligence..."}
              {progress >= 75 && progress < 100 && "Web3 AI network activated..."}
              {progress >= 100 && "Welcome to the decentralized future ₿"}
            </motion.div>
          </div>




        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicPreloader;
