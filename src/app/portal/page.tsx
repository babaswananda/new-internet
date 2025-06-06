'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import CinematicPreloader from '@/components/ui/CinematicPreloader';
import { addToWaitlist, requestWhitepaperAccess, hasValidCredentials } from '@/lib/supabase';

// HeaderText component for normalBold styling
const HeaderText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  // If children is a string, apply normalBold styling
  if (typeof children === 'string') {
    const words = children.split(' ');
    return (
      <span className={className}>
        {words.map((word, index) => (
          <span key={index} className={index % 2 === 0 ? 'font-normal' : 'font-bold'}>
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    );
  }

  // If children is JSX, just wrap it with the className
  return (
    <span className={`font-bold tracking-wide ${className}`}>
      {children}
    </span>
  );
};

export default function PortalLanding() {
  const [email, setEmail] = useState('');

  // Standalone Hero Data
  const heroData = {
    spline: "https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode",
    title: "AGI + U",
    subtitle: "The Internet's Operating System",
    description: "Welcome to the Agentic Web. Where intelligence meets identity, governance meets protocol, and you control the future."
  };

  // A-G-I-U breakdown slides (separate from hero)
  const agiuSlides = [
    {
      spline: "https://prod.spline.design/vJWTCBb2Fx5TXfEt/scene.splinecode",
      letter: "🅰️",
      title: "A — AIVA",
      subtitle: "Agentic Interface for Voice + Autonomy",
      description: "AIVA is the sovereign OS of the new internet. Not a chatbot, not a dashboard — the interface. She's the invocation layer for all agents, polyphonic and protocol-native.",
      tagline: "She doesn't just respond — she governs, negotiates, executes. The voice of the internet.",
      whitepaperIndex: 7 // Technical Architecture
    },
    {
      spline: "https://prod.spline.design/rCLiR6SEmfAIBhKL/scene.splinecode",
      letter: "🅶",
      title: "G — Governance",
      subtitle: "You don't browse the internet anymore. You govern it.",
      description: "Every handle is a contract. Every action, recorded. Every domain, a DAO. Fugio is the execution engine that turns names into networks and users into governors.",
      tagline: "The age of passive platforms is over. The agentic web is governed — by you.",
      whitepaperIndex: 3 // AGI Governance Framework
    },
    {
      spline: "https://prod.spline.design/Fej997t12CFxVwfs/scene.splinecode",
      letter: "🅸",
      title: "I — Intelligent Identity Internet Protocol",
      subtitle: "You're not on the internet. You are the internet.",
      description: "This protocol binds memory, voice, and logic to a single domain — and gives it agency. This is how code becomes character. Welcome to UNIFIED AI.",
      tagline: "Intelligence + Identity + Interface = The new internet layer",
      whitepaperIndex: 1 // Handle Registry Specification
    },
    {
      spline: "https://prod.spline.design/0KEJ6WQwWH9vZhcv/scene.splinecode",
      letter: "🆄",
      title: "U — Unified",
      subtitle: "Convergence of centralized AI and opensource AI",
      description: "Everything connects — agents, data, devices, governance, media, learning. This isn't a platform. It's the Unified Protocol Layer for the Agentic Web.",
      tagline: "You just downloaded the next internet. One operating system. One interface. All unified.",
      whitepaperIndex: 0 // Unified AI Protocol
    }
  ];

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [whitepaperEmail, setWhitepaperEmail] = useState('');
  const [showWhitepaperModal, setShowWhitepaperModal] = useState(false);
  const [currentWhitepaper, setCurrentWhitepaper] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);
  const [isPlayerMinimized, setIsPlayerMinimized] = useState(true);
  const [commandInput, setCommandInput] = useState('');
  const [commandResponse, setCommandResponse] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer to June 9, 2025
  useEffect(() => {
    const targetDate = new Date('2025-06-09T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  // No slide rotation needed - using scroll-based sections

  // Command line handler
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    // Demo responses
    const responses = [
      "AIVA responds instantly. Your drop page is live.",
      "Agent deployed. Domain binding complete.",
      "Protocol activated. Your handle is now sovereign.",
      "Command executed. Welcome to the agentic web."
    ];

    setCommandResponse(responses[Math.floor(Math.random() * responses.length)]);
    setCommandInput('');
  };

  // Music tracks data
  const musicTracks = [
    { title: 'Agentic Awakening', artist: 'Unified AI', duration: '3:42' },
    { title: 'Digital Sovereignty', artist: 'AlphaRouter', duration: '4:15' },
    { title: 'Protocol Genesis', artist: 'CommandLine', duration: '3:28' },
    { title: 'Neural Networks', artist: 'AgentOS', duration: '4:03' }
  ];

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => setCurrentTrack((prev) => (prev + 1) % musicTracks.length);
  const handlePrevious = () => setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length);
  const handleLoop = () => setIsLooping(!isLooping);
  const handleMute = () => setIsMuted(!isMuted);

  // Whitepaper data - Extended for scrolling
  const whitepapers = [
    {
      title: 'Unified AI Protocol',
      subtitle: 'The Foundation of the Agentic Web',
      description: 'Comprehensive overview of the protocol powering the new internet',
      image: '📄',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-orange-600/20'
    },
    {
      title: 'Handle Registry Specification',
      subtitle: 'Identity Architecture for AI Agents',
      description: 'Technical specification for the four-tier handle system',
      image: '🔗',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-yellow-600/20'
    },
    {
      title: 'Tokenomics Paper',
      subtitle: 'Economic Model & Token Distribution',
      description: 'Detailed analysis of the token economy and incentive structures',
      image: '💰',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-600/20'
    },
    {
      title: 'AGI Governance Framework',
      subtitle: 'Decentralized Decision Making',
      description: 'Community governance model for the AGI ecosystem',
      image: '⚖️',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-orange-600/20'
    },
    {
      title: 'AlphaSignals Whitepaper',
      subtitle: 'Predictive Intelligence Network',
      description: 'Advanced signal processing and market intelligence framework',
      image: '📡',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-yellow-600/20'
    },
    {
      title: 'Agent Security Protocol',
      subtitle: 'Cryptographic Safety Standards',
      description: 'Security measures and encryption protocols for AI agents',
      image: '🔐',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-orange-600/20'
    },
    {
      title: 'Operator Economy Model',
      subtitle: 'Incentive Structures & Rewards',
      description: 'Economic framework for agent operators and stakeholders',
      image: '🏛️',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-600/20'
    },
    {
      title: 'Technical Architecture',
      subtitle: 'Infrastructure & Scalability',
      description: 'Deep dive into the technical implementation and scaling solutions',
      image: '🏗️',
      gradient: 'from-green-400 via-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-yellow-600/20'
    }
  ];

  const handleWhitepaperAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whitepaperEmail || !whitepaperEmail.includes('@')) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      if (hasValidCredentials()) {
        const { error } = await requestWhitepaperAccess(
          whitepaperEmail,
          whitepapers[currentWhitepaper]?.title || 'Unknown'
        );

        if (error) {
          setSubmitMessage('Error submitting request. Please try again.');
        } else {
          setSubmitMessage('Access request submitted! Check your email within 24 hours.');
          setTimeout(() => {
            setShowWhitepaperModal(false);
            setWhitepaperEmail('');
            setSubmitMessage('');
          }, 2000);
        }
      } else {
        // Fallback for development
        setSubmitMessage('Access request submitted! Check your email within 24 hours.');
        setTimeout(() => {
          setShowWhitepaperModal(false);
          setWhitepaperEmail('');
          setSubmitMessage('');
        }, 2000);
      }
    } catch (error) {
      setSubmitMessage('Error submitting request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhitepaperModal = (index: number) => {
    setCurrentWhitepaper(index);
    setShowWhitepaperModal(true);
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']); // Disabled parallax to prevent jumping

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      if (hasValidCredentials()) {
        const { error } = await addToWaitlist(email, 'portal-countdown');

        if (error) {
          setSubmitMessage('Error joining waitlist. Please try again.');
        } else {
          setIsSubscribed(true);
          setSubmitMessage('Successfully joined the waitlist!');
        }
      } else {
        // Fallback for development
        setIsSubscribed(true);
        setSubmitMessage('Successfully joined the waitlist!');
      }
    } catch (error) {
      setSubmitMessage('Error joining waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show preloader first
  if (showPreloader) {
    return (
      <CinematicPreloader
        onComplete={() => setShowPreloader(false)}
        duration={2500}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* STANDALONE HERO SECTION - AGI+U */}
      <motion.section
        ref={heroRef}
        className="h-screen relative flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        style={{ y }}
      >
        {/* Spline Portal Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene={heroData.spline} />
        </div>

        {/* No text overlay - pure visual experience */}

        {/* Scroll indicator - More prominent and clickable */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const nextSection = document.querySelector('#agiu-slides');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="text-white/80 text-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-3 border border-white/20 hover:bg-white/10 transition-all">
            <div className="text-sm mb-2 font-medium">Scroll to explore</div>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>

      </motion.section>

      {/* A-G-I-U SLIDES SECTION */}
      <section id="agiu-slides" className="relative">
        {agiuSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="h-screen relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Spline Background */}
            <div className="absolute inset-0 z-0">
              <Spline scene={slide.spline} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-center max-w-4xl mx-auto px-8"
                viewport={{ once: true }}
              >
                {/* Main Title */}
                <motion.h3
                  className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <HeaderText>{slide.title}</HeaderText>
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                  className="text-2xl md:text-3xl text-white/90 drop-shadow-xl mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <HeaderText>{slide.subtitle}</HeaderText>
                </motion.p>

                    {/* Visual for each slide */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  className="flex justify-center"
                  viewport={{ once: true }}
                >
                  {/* AIVA - Voice Interface */}
                  {slide.letter === '🅰️' && (
                        <motion.div
                          className="w-48 h-96 bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
                          whileHover={{ scale: 1.05, rotateY: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-4 bg-black rounded-[2.5rem] flex flex-col items-center justify-center">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2, duration: 1 }}
                              className="text-center"
                            >
                              <div className="text-4xl mb-4">🎤</div>
                              <div className="text-white text-sm font-medium mb-2">AIVA</div>
                              <div className="text-green-400 text-xs">● Voice Active</div>
                            </motion.div>
                            <motion.div
                              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2.5, duration: 1 }}
                            >
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 bg-green-400 rounded-full"
                                  animate={{ height: [4, 12, 4] }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeInOut"
                                  }}
                                />
                              ))}
                            </motion.div>
                          </div>
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                        </motion.div>
                      )}

                  {/* GOVERNANCE - 3D FUGIO Coin with REAL Iridescent Colors */}
                  {slide.letter === '🅶' && (
                        <motion.div
                          className="relative w-64 h-64"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* 3D Coin Container */}
                          <motion.div
                            className="w-full h-full relative preserve-3d"
                            animate={{
                              rotateY: [0, 360],
                              rotateX: [0, 15, 0, -15, 0]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            {/* Coin Front Face */}
                            <div className="absolute inset-0 rounded-full flex items-center justify-center shadow-2xl"
                                 style={{
                                   background: 'conic-gradient(from 0deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff0040, #ff69b4, #00bfff, #ff1493, #ff0080)',
                                   transform: 'translateZ(12px)',
                                   border: '3px solid rgba(255, 255, 255, 0.3)'
                                 }}>
                              <div className="text-center">
                                <div className="text-white text-xs font-bold drop-shadow-lg mb-2">TIME FLEES</div>
                                <motion.div
                                  className="text-6xl mb-2 filter drop-shadow-lg"
                                  animate={{ rotateZ: [0, 360] }}
                                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                >
                                  ⚖️
                                </motion.div>
                                <div className="text-white text-lg font-bold drop-shadow-lg">$FUGIO</div>
                                <div className="text-white text-xs font-bold drop-shadow-lg mt-2">MINDS YOUR BUSINESS</div>
                              </div>
                            </div>

                            {/* Coin Back Face */}
                            <div className="absolute inset-0 rounded-full flex items-center justify-center shadow-2xl"
                                 style={{
                                   background: 'conic-gradient(from 180deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff0040, #ff69b4, #00bfff, #ff1493, #ff0080)',
                                   transform: 'translateZ(-12px) rotateY(180deg)',
                                   border: '3px solid rgba(255, 255, 255, 0.3)'
                                 }}>
                              <div className="text-center">
                                <div className="text-white text-xs font-bold drop-shadow-lg mb-2">TIME FLEES</div>
                                <div className="text-4xl mb-2 filter drop-shadow-lg">🌐</div>
                                <div className="text-white text-sm font-bold drop-shadow-lg">PROTOCOL</div>
                                <div className="text-white text-xs font-bold drop-shadow-lg mt-2">MINDS YOUR BUSINESS</div>
                              </div>
                            </div>

                            {/* Coin Edge */}
                            <div className="absolute inset-0 rounded-full"
                                 style={{
                                   background: 'linear-gradient(90deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff0040)',
                                   transform: 'translateZ(0px)',
                                   height: '24px',
                                   top: '50%',
                                   marginTop: '-12px',
                                   border: '1px solid rgba(255, 255, 255, 0.2)'
                                 }}>
                            </div>
                          </motion.div>

                          {/* Iridescent Glow Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full blur-xl opacity-60"
                            animate={{
                              background: [
                                'radial-gradient(circle, #ff0080, transparent)',
                                'radial-gradient(circle, #40e0d0, transparent)',
                                'radial-gradient(circle, #32cd32, transparent)',
                                'radial-gradient(circle, #ff8c00, transparent)',
                                'radial-gradient(circle, #da70d6, transparent)',
                                'radial-gradient(circle, #ff0080, transparent)'
                              ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />

                          {/* Sparkle Effects */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 rounded-full"
                              style={{
                                background: ['#ff0080', '#40e0d0', '#32cd32', '#ff8c00', '#da70d6', '#ff69b4', '#00bfff', '#ff1493'][i],
                                left: `${20 + i * 15}%`,
                                top: `${10 + (i % 3) * 30}%`
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}
                        </motion.div>
                      )}

                  {/* IDENTITY - Intelligent Identity Interface */}
                  {slide.letter === '🅸' && (
                        <motion.div
                          className="relative w-64 h-64"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Central Identity Core */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ rotateY: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          >
                            <div
                              className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center relative"
                              style={{
                                background: 'conic-gradient(from 0deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff0080)',
                              }}
                            >
                              <div className="text-center">
                                <div className="text-4xl mb-2 text-white">🧠</div>
                                <div className="text-white text-sm font-bold">YOU</div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Three Interface Layers */}
                          {[
                            { radius: 80, label: 'Intelligence', icon: '🤖', color: '#ff0080', delay: 0 },
                            { radius: 100, label: 'Identity', icon: '🔐', color: '#8000ff', delay: 0.5 },
                            { radius: 120, label: 'Interface', icon: '🌐', color: '#0080ff', delay: 1 }
                          ].map((layer, i) => (
                            <motion.div
                              key={i}
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: layer.delay
                              }}
                            >
                              <div
                                className="absolute border border-white/20 rounded-full"
                                style={{
                                  width: `${layer.radius}px`,
                                  height: `${layer.radius}px`,
                                  borderColor: layer.color + '40'
                                }}
                              />
                              <motion.div
                                className="absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                style={{
                                  background: layer.color,
                                  top: `${50 - layer.radius/8}%`,
                                  left: '50%',
                                  transform: 'translateX(-50%)'
                                }}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  boxShadow: [
                                    `0 0 0px ${layer.color}`,
                                    `0 0 20px ${layer.color}`,
                                    `0 0 0px ${layer.color}`
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                              >
                                {layer.icon}
                              </motion.div>
                            </motion.div>
                          ))}

                          {/* Data Streams */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-16 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${['#ff0080', '#8000ff', '#0080ff'][i % 3]}, transparent)`,
                                left: `${30 + i * 12}%`,
                                top: `${20 + (i % 2) * 40}%`,
                                transformOrigin: 'bottom'
                              }}
                              animate={{
                                scaleY: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}

                          {/* Memory Nodes */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 rounded-full"
                              style={{
                                background: ['#ff0080', '#8000ff', '#0080ff', '#00ff80'][i % 4],
                                left: `${20 + i * 10}%`,
                                top: `${15 + (i % 4) * 20}%`
                              }}
                              animate={{
                                scale: [0.5, 1.5, 0.5],
                                opacity: [0.3, 1, 0.3]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.4
                              }}
                            />
                          ))}

                          {/* Central Label */}
                          <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 1 }}
                          >
                            <div className="text-center bg-black/60 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                              <div className="text-white text-sm font-medium">INTELLIGENT</div>
                              <div className="text-purple-400 text-xs">IDENTITY INTERFACE</div>
                            </div>
                          </motion.div>

                          {/* Ambient Glow */}
                          <motion.div
                            className="absolute inset-0 rounded-full blur-2xl opacity-30"
                            animate={{
                              background: [
                                'radial-gradient(circle, #ff0080, transparent)',
                                'radial-gradient(circle, #8000ff, transparent)',
                                'radial-gradient(circle, #0080ff, transparent)',
                                'radial-gradient(circle, #ff0080, transparent)'
                              ]
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                          />
                        </motion.div>
                      )}

                  {/* UNIFIED - Simple Text Only */}
                  {slide.letter === '🆄' && (
                    <div className="text-center">
                      <div className="text-white text-lg font-medium mb-4">CONVERGENCE</div>
                      <div className="text-cyan-400 text-sm">Centralized AI ⚡ Opensource AI</div>
                    </div>
                  )}
                </motion.div>

                {/* View Documentation Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="mt-8 pointer-events-auto"
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => openWhitepaperModal(slide.whitepaperIndex)}
                    className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">📄 View Documentation</span>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section - Right after hero */}
      <motion.section className="py-32 relative bg-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8">
              <HeaderText>AGI + U</HeaderText>
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-6">
              <HeaderText>Autonomous. Governed. Intelligent. Unified.</HeaderText>
            </h3>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              The Internet's Operating System launches June 9.
            </p>
            <p className="text-base md:text-lg text-white/70 font-medium mb-12">
              Powered by Fugio • Runs on AYD OS • Only at AGI+U
            </p>
          </motion.div>

          {/* CTA Buttons - Iridescent Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">🔗 download.newinternet</span>
            </button>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/25 overflow-hidden border border-blue-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Join the Waitlist</span>
            </button>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-400/25 overflow-hidden border border-cyan-400/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Reserve Your Handle</span>
            </button>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-pink-500/25 overflow-hidden border border-pink-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Bind to the New Internet</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* BUILT WITH VIBECODER SECTION */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Terminal-style header */}
            <motion.div
              className="bg-black/80 border border-green-500/30 rounded-lg p-8 mb-12 font-mono text-left max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 text-sm mb-2">
                <span className="text-green-500">{'>'}</span> compiled with VibeCoder
              </div>
              <div className="text-green-400 text-sm mb-4">
                <span className="text-green-500">{'>'}</span> powered by AlphaRouter
              </div>
              <div className="text-white text-lg mb-2">🧠 agentic IDE for the New Internet</div>
              <div className="text-cyan-400 text-sm">⏳ available June 9</div>
            </motion.div>

            {/* Main content */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
              <HeaderText>Built with VibeCoder</HeaderText>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
            >
              💻 This page was made with VibeCoder.
            </motion.p>

            <motion.div
              className="text-lg md:text-xl text-white/70 mb-12 space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              viewport={{ once: true }}
            >
              <p>Download the AI IDE that built the new internet.</p>
              <p>Code with agents. Build with prompts. Fork the future.</p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-12 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-2">🔧</div>
                <div className="text-white font-semibold mb-2">Bring your own model</div>
                <div className="text-white/60 text-sm">Connect any AI model to your development workflow</div>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-white font-semibold mb-2">Or route through AlphaRouter</div>
                <div className="text-white/60 text-sm">Intelligent model routing for optimal performance</div>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-2">🗓️</div>
                <div className="text-white font-semibold mb-2">Live on June 9</div>
                <div className="text-white/60 text-sm">Early access available now</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative z-10">RSVP for Early Access</span>
              </button>
              <button className="group relative px-8 py-4 bg-black/60 border border-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                <span className="relative z-10">Get Notified</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Music Player */}
      {showMusicPlayer && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence mode="wait">
            {isPlayerMinimized ? (
              /* Minimized Player */
              <motion.div
                key="minimized"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-full p-3 flex items-center gap-3 cursor-pointer"
                onClick={() => setIsPlayerMinimized(false)}
              >
                <div className="text-xl">🤖</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  className="text-lg hover:scale-110 transition-transform"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <div className="w-8 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 h-full w-1/3"></div>
                </div>
              </motion.div>
            ) : (
              /* Expanded Player */
              <motion.div
                key="expanded"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-80"
              >
                {/* Player Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        <HeaderText>AIVA Radio</HeaderText>
                      </div>
                      <div className="text-xs text-gray-400">
                        {musicTracks[currentTrack].title}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsPlayerMinimized(true)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      title="Minimize"
                    >
                      ➖
                    </button>
                    <button
                      onClick={() => setShowMusicPlayer(false)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      title="Close"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Chat Prompt Bar */}
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Ask what is AGI+U?"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-green-400 transition-all"
                  />
                </div>

                {/* Music Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevious}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-lg"
                      title="Previous"
                    >
                      ⏮️
                    </button>
                    <button
                      onClick={handlePlayPause}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-xl"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-lg"
                      title="Next"
                    >
                      ⏭️
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleLoop}
                      className={`p-2 hover:bg-white/10 rounded-lg transition-colors text-lg ${isLooping ? 'text-green-400' : 'text-gray-400'}`}
                      title="Loop"
                    >
                      🔁
                    </button>
                    <button
                      onClick={handleMute}
                      className={`p-2 hover:bg-white/10 rounded-lg transition-colors text-lg ${isMuted ? 'text-red-400' : 'text-gray-400'}`}
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? '🔇' : '🔊'}
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 h-1 rounded-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1:23</span>
                    <span>{musicTracks[currentTrack].duration}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* AIVA Parallax Section */}
      <motion.section className="relative h-screen overflow-hidden">
        {/* Black gradient overlay at top - Extended */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>

        {/* Black gradient overlay at bottom - Extended */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

        {/* Contained AIVA Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/GXMvk1yD7tdlTpch/scene.splinecode" />
        </div>

        {/* AIVA Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                viewport={{ once: true }}
              >
                <HeaderText>🪩 Meet AIVA</HeaderText>
              </motion.h3>

              <motion.p
                className="text-2xl md:text-3xl text-white/90 drop-shadow-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              >
                <HeaderText>The Voice of the New Internet</HeaderText>
              </motion.p>

              <motion.div
                className="text-xl md:text-2xl text-white/80 mb-12 space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                viewport={{ once: true }}
              >
                <p>Not a chatbot. Not a search engine.</p>
                <p>A unified, ambient interface for everything.</p>
              </motion.div>

              <motion.div
                className="text-lg text-cyan-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                viewport={{ once: true }}
              >
                Coming June 9th
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 1 }}
                viewport={{ once: true }}
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative z-10">Join the Waitlist</span>
                </button>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-400/25 overflow-hidden border border-cyan-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative z-10">Reserve Your Handle</span>
                </button>
              </motion.div>

              {/* Phone Reveal Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.div
                  className="w-48 h-96 bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phone Screen */}
                  <div className="absolute inset-4 bg-black rounded-[2.5rem] flex flex-col items-center justify-center">
                    {/* AIVA Interface */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-4xl mb-4">🤖</div>
                      <div className="text-white text-sm font-medium mb-2">AIVA</div>
                      <div className="text-green-400 text-xs">● Online</div>
                    </motion.div>

                    {/* Voice Waves Animation */}
                    <motion.div
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-green-400 rounded-full"
                          animate={{
                            height: [4, 12, 4],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Phone Details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* AIVA Products Section */}
      <motion.section className="relative z-10 bg-black py-32">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white/90">
              <HeaderText>AIVA is only available on Unified AI products & services</HeaderText>
            </h4>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'AI Phone', link: 'preorder.aiphone', icon: '📱' },
              { name: 'AI Glasses', link: 'preorder.aiglasses', icon: '👓' },
              { name: 'AI Pods', link: 'preorder.aipods', icon: '🎧' },
              { name: 'AI Email', link: 'yourhandle.aiemail', icon: '📧', note: 'Available with subscription or hardware only' }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-400/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/70 transition-all duration-500 cursor-pointer group shadow-2xl hover:shadow-purple-500/25"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h5 className="text-xl font-bold text-white mb-2">
                  <HeaderText>{product.name}</HeaderText>
                </h5>
                <div className="text-green-400 text-sm font-mono mb-2">
                  {product.link}
                </div>
                {product.note && (
                  <p className="text-xs text-gray-400">
                    {product.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Reserve Handle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden">
              {/* Metal shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">
                <HeaderText>Reserve Your Handle</HeaderText>
              </span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Big Scrolling Marquee */}
      <motion.section className="py-16 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="whitespace-nowrap flex"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-[170pt] font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 inline-block leading-none">
            WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE NEW INTERNET...THE AGENTIC WEB&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </motion.section>

      {/* AGI Stack - Black Tile Grid */}
      <motion.section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white/90">
              <HeaderText>AGI Stack</HeaderText>
            </h3>
          </motion.div>

          {/* Black Tile Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { letter: 'A', word: 'AGENTIC', desc: 'Agentic intelligent systems', spline: 'https://prod.spline.design/rJPA857DGZSxML8o/scene.splinecode' },
              { letter: 'G', word: 'GOVERNANCE', desc: 'Protocol authority', spline: 'https://prod.spline.design/f3aPrjPqriBnVnIu/scene.splinecode' },
              { letter: 'I', word: 'IDENTITY', desc: 'Sovereign presence', spline: 'https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode' },
              { letter: 'U', word: 'UNIFIED', desc: 'Seamless integration', spline: 'https://prod.spline.design/0KEJ6WQwWH9vZhcv/scene.splinecode' }
            ].map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-400/10 border border-blue-500/30 rounded-2xl p-8 h-48 flex flex-col justify-center items-center hover:border-blue-500/70 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl hover:shadow-blue-500/25"
              >
                {/* Metal shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                {/* Purple glow on hover */}
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>

                {/* Spline Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <Spline scene={item.spline} />
                </div>

                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 mb-2">{item.letter}</div>
                  <div className="text-sm font-medium text-white/80 mb-1">
                    <HeaderText>{item.word}</HeaderText>
                  </div>
                  <div className="text-xs text-white/60 text-center">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* .commandline/userprompt Section - Enhanced */}
      <motion.section className="py-32 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white/90">
              <HeaderText>🖥️ Introducing .commandline/userprompt</HeaderText>
            </h3>
          </motion.div>

          {/* Main Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            {/* Browser Window */}
            <div className="bg-gray-900/80 border border-purple-500/30 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
              {/* Browser Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 mx-4">
                  <div className="bg-black/50 rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-gray-400 text-sm">.commandline/userprompt</span>
                  </div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 bg-black/90 font-mono">
                <form onSubmit={handleCommandSubmit} className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder="type anything"
                      className="w-full px-4 py-4 bg-transparent border border-green-500/30 rounded-lg text-green-400 placeholder-green-400/50 focus:outline-none focus:border-green-400 transition-all text-lg"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 rounded bg-green-400/20 flex items-center justify-center">
                        <span className="text-green-400">⏎</span>
                      </div>
                    </div>
                  </div>
                </form>

                {commandResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-cyan-400 text-lg mb-4"
                  >
                    {'>'} {commandResponse}
                  </motion.div>
                )}

                <div className="text-white/60 text-lg">
                  <HeaderText>Your agent responds in real time.</HeaderText>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expanded Copy */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-2xl md:text-3xl text-white font-bold">
                You're not browsing. You're invoking.
              </div>
              <div className="text-xl text-white/80">
                This isn't a website. It's a command line for the intelligent web.
              </div>
              <div className="text-lg text-white/70">
                Every key you press is a signal. Every signal calls an agent.
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Example Command */}
              <div className="bg-black/60 border border-green-500/30 rounded-lg p-6 font-mono">
                <div className="text-green-400 mb-2">.prompt "Design me a drop page for my meme coin"</div>
                <div className="text-gray-400 mb-2">⏎</div>
                <div className="text-cyan-400">AIVA responds instantly. Your drop page is live.</div>
              </div>

              <div className="text-lg text-white/70">
                You don't click around here. You command.
              </div>
              <div className="text-lg text-white/70">
                No interfaces. No tabs. Just you and your operating system — powered by language, identity, and protocol logic.
              </div>
            </motion.div>
          </div>

          {/* Bottom Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center space-y-4"
          >
            <div className="text-lg text-cyan-400">🔁 Reload the page, the interface remembers where you left off.</div>
            <div className="text-lg text-cyan-400">🎤 Every voice command is a launch command.</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Whitepaper Carousel Section */}
      <motion.section className="py-32 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
              <HeaderText>Research Library</HeaderText>
            </h3>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Access comprehensive research papers and technical documentation
            </p>
          </motion.div>

          {/* Whitepaper Scrollable Grid */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 w-max">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => openWhitepaperModal(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-500 hover:scale-105 p-6 h-96 w-72 flex-shrink-0 shadow-2xl hover:shadow-cyan-400/25">
                  {/* Metal shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                  {/* Purple glow on hover */}
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>

                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Paper Image Placeholder */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                      {/* Placeholder content */}
                      <div className="text-center">
                        <div className="text-3xl mb-1">{paper.image}</div>
                        <div className="text-xs text-white/40">Preview</div>
                      </div>
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Paper Info */}
                  <div className="text-center">
                    <h4 className={`text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${paper.gradient}`}>
                      <HeaderText>{paper.title}</HeaderText>
                    </h4>
                    <h5 className="text-sm font-medium text-white/80 mb-3">
                      {paper.subtitle}
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {paper.description}
                    </p>

                    {/* Access Button */}
                    <div className="flex items-center justify-center">
                      <div className="group/btn relative px-4 py-2 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-medium text-sm rounded-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                        {/* Metal shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                        <span className="relative z-10">
                          <HeaderText>Request Access</HeaderText>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Countdown Section */}
      <motion.section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-white/80">
              <HeaderText>AGI+U begins in:</HeaderText>
            </h3>

            {/* Minimalist Countdown */}
            <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds }
              ].map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    className="text-4xl md:text-6xl font-bold text-white/90 mb-2"
                    key={unit.value}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>
                  <div className="text-xs font-medium text-white/40 tracking-wider">
                    <HeaderText>{unit.label}</HeaderText>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {!isSubscribed ? (
                <div className="max-w-md mx-auto">
                  <p className="text-white/60 mb-6 text-sm">
                    <HeaderText>Receive access signal first.</HeaderText>
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all text-sm"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '⏳' : '→'}
                    </button>
                  </form>
                  {submitMessage && (
                    <p className={`text-xs mt-2 ${submitMessage.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                      {submitMessage}
                    </p>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="text-white/60 text-sm">
                    <HeaderText>Access signal received.</HeaderText>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Protocol Binding Footer */}
      <footer className="relative py-32 overflow-hidden">
        {/* Background Spline for CTA */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Spline scene="https://prod.spline.design/0KEJ6WQwWH9vZhcv/scene.splinecode" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              <HeaderText>The Internet Hasn't Started Yet.</HeaderText>
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-white/90 mb-8">
              <HeaderText>It Reboots June 9.</HeaderText>
            </h3>

            <div className="inline-block px-6 py-3 bg-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm mb-8">
              <p className="text-sm text-purple-300">
                <HeaderText>🧬 Where the internet binds to you.</HeaderText>
              </p>
            </div>
          </motion.div>

          {/* Dual Command Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >
            {/* Download Command */}
            <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 font-mono group hover:border-pink-500/70 transition-all cursor-pointer shadow-2xl hover:shadow-pink-500/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400">$</span>
                <span className="text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-yellow-500 group-hover:to-orange-500 transition-colors text-sm">
                  download.newinternet
                </span>
              </div>
              <div className="text-xs text-green-400 mb-2">
                <HeaderText>⟶ Join the waitlist</HeaderText>
              </div>
              <div className="text-xs text-white/70">
                <HeaderText>Your agent arrives by voice</HeaderText>
              </div>
            </div>

            {/* Bind Command */}
            <div className="bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 font-mono group hover:border-cyan-400/70 transition-all cursor-pointer shadow-2xl hover:shadow-cyan-400/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-400">$</span>
                <span className="text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-yellow-500 group-hover:to-orange-500 transition-colors text-sm">
                  bind.newinternet
                </span>
              </div>
              <div className="text-xs text-orange-400 mb-2">
                <HeaderText>⟶ Lock in your agent & handle</HeaderText>
              </div>
              <div className="text-xs text-white/70">
                <HeaderText>Begin sovereignty</HeaderText>
              </div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 italic">
              <HeaderText>Not just access. Ownership.</HeaderText>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Whitepaper Access Modal */}
      <AnimatePresence>
        {showWhitepaperModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowWhitepaperModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{whitepapers[currentWhitepaper]?.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  <HeaderText>{whitepapers[currentWhitepaper]?.title}</HeaderText>
                </h3>
                <p className="text-gray-400">
                  {whitepapers[currentWhitepaper]?.subtitle}
                </p>
              </div>

              <form onSubmit={handleWhitepaperAccess} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={whitepaperEmail}
                    onChange={(e) => setWhitepaperEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {submitMessage && (
                  <div className={`text-sm p-3 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-900/20 text-red-400' : 'bg-green-900/20 text-green-400'}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowWhitepaperModal(false);
                      setSubmitMessage('');
                      setWhitepaperEmail('');
                    }}
                    className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-green-400/20 via-yellow-500/20 to-orange-500/20 border border-green-400/30 text-white font-medium rounded-lg transition-all disabled:opacity-50 hover:border-green-400/70 overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {/* Metal shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">Cancel</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex-1 px-6 py-3 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Metal shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">
                      <HeaderText>{isSubmitting ? 'Submitting...' : 'Get Access'}</HeaderText>
                    </span>
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Access will be granted via email within 24 hours
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
