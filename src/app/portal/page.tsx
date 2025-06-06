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

  // Force deployment update - all content should be visible

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
  const [currentAgiuSlide, setCurrentAgiuSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
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



  // A-G-I-U slide auto-rotation (simple version)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentAgiuSlide((prev) => (prev + 1) % agiuSlides.length);
    }, 10000); // Slower auto-rotation - every 10 seconds

    return () => clearInterval(slideInterval);
  }, [agiuSlides.length]);

  // Scroll to top functionality and gentle slide advancement
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Gentle slide advancement based on scroll position (with delay)
      scrollTimeout = setTimeout(() => {
        const agiuSection = document.querySelector('#agiu-slides');
        if (agiuSection) {
          const rect = agiuSection.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;

          if (isInView) {
            // Calculate which slide should be active based on scroll position
            const sectionProgress = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / window.innerHeight));
            const targetSlide = Math.floor(sectionProgress * agiuSlides.length);

            if (targetSlide !== currentAgiuSlide && targetSlide < agiuSlides.length && targetSlide >= 0) {
              setCurrentAgiuSlide(targetSlide);
            }
          }
        }
      }, 100); // Small delay to prevent excessive updates
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentAgiuSlide, agiuSlides.length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const nextAgiuSlide = () => {
    setCurrentAgiuSlide((prev) => (prev + 1) % agiuSlides.length);
  };

  const prevAgiuSlide = () => {
    setCurrentAgiuSlide((prev) => (prev - 1 + agiuSlides.length) % agiuSlides.length);
  };

  // Wheel event handler for A-G-I-U slides - smart scrolling
  useEffect(() => {
    let lastWheelTime = 0;
    const wheelThrottle = 300; // Reduced throttle for better responsiveness

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < wheelThrottle) return;

      const agiuSection = document.querySelector('#agiu-slides');
      if (agiuSection) {
        const rect = agiuSection.getBoundingClientRect();
        // Check if the A-G-I-U section is in the viewport
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        const isCentered = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

        if (isInViewport && isCentered) {
          const isAtFirstSlide = currentAgiuSlide === 0;
          const isAtLastSlide = currentAgiuSlide === agiuSlides.length - 1;

          if (e.deltaY > 0) {
            // Scrolling down
            if (!isAtLastSlide) {
              e.preventDefault();
              nextAgiuSlide();
              lastWheelTime = now;
            }
            // If at last slide, allow normal scrolling to continue to next section
          } else {
            // Scrolling up
            if (!isAtFirstSlide) {
              e.preventDefault();
              prevAgiuSlide();
              lastWheelTime = now;
            }
            // If at first slide, allow normal scrolling to continue to previous section
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentAgiuSlide, agiuSlides.length]);

  // Keyboard navigation for A-G-I-U slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const agiuSection = document.querySelector('#agiu-slides');
      if (agiuSection) {
        const rect = agiuSection.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

        if (isInView) {
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              e.preventDefault();
              nextAgiuSlide();
              break;
            case 'ArrowLeft':
            case 'ArrowUp':
              e.preventDefault();
              prevAgiuSlide();
              break;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  // Scroll hook for parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']); // Disabled parallax to prevent jumping

  // Email submission handler
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

  // Whitepaper modal functions
  const openWhitepaperModal = (index: number) => {
    setCurrentWhitepaper(index);
    setShowWhitepaperModal(true);
  };

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

  // Whitepaper data - Extended for scrolling with iridescent colors
  const whitepapers = [
    {
      title: 'Unified AI Protocol',
      subtitle: 'The Foundation of the Agentic Web',
      description: 'Comprehensive overview of the protocol powering the new internet',
      image: '📄',
      gradient: 'from-pink-500 via-cyan-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-pink-900/20 to-purple-600/20'
    },
    {
      title: 'Handle Registry Specification',
      subtitle: 'Identity Architecture for AI Agents',
      description: 'Technical specification for the four-tier handle system',
      image: '🔗',
      gradient: 'from-cyan-400 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-pink-600/20'
    },
    {
      title: 'Tokenomics Paper',
      subtitle: 'Economic Model & Token Distribution',
      description: 'Detailed analysis of the token economy and incentive structures',
      image: '💰',
      gradient: 'from-purple-500 via-pink-500 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-cyan-600/20'
    },
    {
      title: 'AGI Governance Framework',
      subtitle: 'Decentralized Decision Making',
      description: 'Community governance model for the AGI ecosystem',
      image: '⚖️',
      gradient: 'from-pink-500 via-cyan-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-pink-900/20 to-purple-600/20'
    },
    {
      title: 'AlphaSignals Whitepaper',
      subtitle: 'Predictive Intelligence Network',
      description: 'Advanced signal processing and market intelligence framework',
      image: '📡',
      gradient: 'from-cyan-400 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-pink-600/20'
    },
    {
      title: 'Agent Security Protocol',
      subtitle: 'Cryptographic Safety Standards',
      description: 'Security measures and encryption protocols for AI agents',
      image: '🔐',
      gradient: 'from-purple-500 via-pink-500 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-cyan-600/20'
    },
    {
      title: 'Operator Economy Model',
      subtitle: 'Incentive Structures & Rewards',
      description: 'Economic framework for agent operators and stakeholders',
      image: '🏛️',
      gradient: 'from-pink-500 via-cyan-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-pink-900/20 to-purple-600/20'
    },
    {
      title: 'Technical Architecture',
      subtitle: 'Infrastructure & Scalability',
      description: 'Deep dive into the technical implementation and scaling solutions',
      image: '🏗️',
      gradient: 'from-cyan-400 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-pink-600/20'
    }
  ];



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
      {/* Iridescent Animation Styles */}
      <style jsx>{`
        @keyframes iridescent {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* STANDALONE HERO SECTION - AGI+U */}
      <motion.section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        style={{ y }}
      >
        {/* Spline Portal Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene={heroData.spline} />
        </div>

        {/* No text overlay - pure visual experience */}

        {/* Enhanced Scroll indicator with multiple interaction methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer group"
          onClick={() => {
            const nextSection = document.querySelector('#agiu-slides');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 group-hover:scale-110">
            <div className="text-sm font-medium mb-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <HeaderText>Scroll • Wheel • Arrow Keys</HeaderText>
            </div>
            <motion.div
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl filter drop-shadow-lg"
              style={{
                background: 'linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'iridescent 2s ease-in-out infinite'
              }}
            >
              ↓
            </motion.div>
            <div className="text-xs text-white/60 mt-1">
              Navigate A-G-I-U
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* A-G-I-U HERO SLIDER SECTION */}
      <motion.section
        id="agiu-slides"
        className="relative h-screen overflow-hidden"
      >
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene={agiuSlides[currentAgiuSlide].spline} />
        </div>

        {/* Hero Navigation Controls */}
        <div className="absolute top-1/2 left-4 z-40 transform -translate-y-1/2">
          <button
            onClick={prevAgiuSlide}
            className="p-3 bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-500/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 right-4 z-40 transform -translate-y-1/2">
          <button
            onClick={nextAgiuSlide}
            className="p-3 bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-500/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
          {agiuSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAgiuSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentAgiuSlide
                  ? 'bg-purple-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Text Overlay Layer */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-center max-w-4xl mx-auto px-8 relative"
          >
            <motion.div
              className="text-white leading-relaxed tracking-wide relative z-10 p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              key={`slide-content-${currentAgiuSlide}`}
            >
              {/* Main Title */}
              <motion.h3
                className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                <HeaderText>{agiuSlides[currentAgiuSlide].title}</HeaderText>
              </motion.h3>

              {/* Subtitle */}
              <motion.p
                className="text-2xl md:text-3xl text-white/90 drop-shadow-xl mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <HeaderText>{agiuSlides[currentAgiuSlide].subtitle}</HeaderText>
              </motion.p>

              {/* Visual for each slide */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                className="flex justify-center"
                key={`visual-${currentAgiuSlide}`}
              >
                {/* AIVA - Voice Interface */}
                {agiuSlides[currentAgiuSlide].letter === '🅰️' && (
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
                        <div className="text-cyan-400 text-xs">● Voice Active</div>
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
                            className="w-1 bg-cyan-400 rounded-full"
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
                {agiuSlides[currentAgiuSlide].letter === '🅶' && (
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
                {agiuSlides[currentAgiuSlide].letter === '🅸' && (
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
                  </motion.div>
                )}

                {/* UNIFIED - Enhanced Text with Better Copy */}
                {agiuSlides[currentAgiuSlide].letter === '🆄' && (
                  <div className="text-center max-w-2xl mx-auto">
                    <div className="text-white text-2xl font-bold mb-6">INFRASTRUCTURE</div>
                    <div className="space-y-4 text-lg">
                      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-medium">
                        Centralized AI + Decentralized AI = Unified AI
                      </div>
                      <div className="text-white/80 text-base">
                        Together we bind it under one infrastructure.
                      </div>
                      <div className="text-white/80 text-base">
                        Making it become one. Unified.
                      </div>
                    </div>
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
                  onClick={() => openWhitepaperModal(agiuSlides[currentAgiuSlide].whitepaperIndex)}
                  className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                  style={{
                    background: 'linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff8000, #ff0080)',
                    backgroundSize: '300% 300%',
                    animation: 'iridescent 3s ease-in-out infinite'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative z-10">📄 View Documentation</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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

          {/* CTA Buttons - True Iridescent Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff8000, #ff0080)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">🔗 download.newinternet</span>
            </button>
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #40e0d0, #da70d6, #ff69b4, #00bfff, #32cd32, #40e0d0)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite 0.5s'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Join the Waitlist</span>
            </button>
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff1493, #00ced1, #ffd700, #ff6347, #9370db, #ff1493)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite 1s'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Reserve Your Handle</span>
            </button>
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff4500, #1e90ff, #ff69b4, #32cd32, #ff8c00, #ff4500)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite 1.5s'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Bind to the New Internet</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* NEW SPLINE SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative h-screen overflow-hidden"
      >
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/MaCBo5ZC2U0H0A2x/scene.splinecode" />
        </div>

        {/* Optional overlay content - can be customized */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Add any overlay content here if needed */}
          </div>
        </div>

        {/* Gradient overlays for smooth transitions */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
      </motion.section>

      {/* BUILT WITH VIBECODER SECTION */}
      <motion.section className="py-32 relative bg-black overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-cyan-400/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  borderColor: ['rgba(34, 211, 238, 0.1)', 'rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.1)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Terminal-style header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 mb-12 font-mono"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent text-sm">terminal</div>
            </div>
            <div className="text-sm space-y-1">
              <div className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">{'>'} compiled with VibeCoder</div>
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">{'>'} powered by AlphaRouter</div>
              <div className="text-white">🧠 agentic IDE for the New Internet</div>
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">⏳ available June 9</div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <HeaderText>Built with VibeCoder</HeaderText>
            </h2>
            <div className="text-2xl md:text-3xl bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8">
              💻 This page was made with VibeCoder.
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Download the AI IDE that built the new internet.
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Code with agents. Build with prompts. Fork the future.
            </p>

            {/* Vibathon Announcement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-400/10 border border-purple-500/30 rounded-2xl p-6 mb-12 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <HeaderText>Join the Vibathon</HeaderText>
              </h3>
              <p className="text-lg text-white/80 mb-4">
                The world's first AI coding competition. Build the future with VibeCoder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🗓️</span>
                  <span>June 9-16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">💰</span>
                  <span>$100K+ in prizes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">🌐</span>
                  <span>Global virtual event</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">
                <HeaderText>Bring your own model</HeaderText>
              </h3>
              <p className="text-white/70">
                Connect any AI model to your development workflow
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">
                <HeaderText>Or route through AlphaRouter</HeaderText>
              </h3>
              <p className="text-white/70">
                Intelligent model routing for optimal performance
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗓️</div>
              <h3 className="text-xl font-bold text-white mb-2">
                <HeaderText>Live on June 9</HeaderText>
              </h3>
              <p className="text-white/70">
                Early access available now
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff8000, #ff0080)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">🏆 Join Vibathon</span>
            </button>
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #40e0d0, #da70d6, #ff69b4, #00bfff, #32cd32, #40e0d0)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite 0.5s'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">RSVP for Early Access</span>
            </button>
            <button className="group relative px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff1493, #00ced1, #ffd700, #ff6347, #9370db, #ff1493)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite 1s'
                    }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Get Notified</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Music Player */}
      {showMusicPlayer && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {isPlayerMinimized ? (
            /* Minimized Player */
            <motion.div
              className="bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-full p-4 cursor-pointer hover:bg-purple-500/20 transition-all"
              onClick={() => setIsPlayerMinimized(false)}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🤖</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  className="text-lg hover:scale-110 transition-transform"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            </motion.div>
          ) : (
            /* Expanded Player */
            <motion.div
              className="bg-black/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 w-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {/* Player Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-xl">🤖</div>
                  <div>
                    <div className="text-white font-medium text-sm">AIVA Radio</div>
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent text-xs">{musicTracks[currentTrack].title}</div>
                  </div>
                </div>
                <div className="flex gap-2">
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
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="what is AGI+U?"
                  className="w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500/70 transition-all"
                />
              </div>

              {/* Music Controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={handlePrevious}
                  className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-cyan-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  ⏮️
                </button>
                <button
                  onClick={handlePlayPause}
                  className="text-2xl text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button
                  onClick={handleNext}
                  className="text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  ⏭️
                </button>
                <button
                  onClick={handleLoop}
                  className={`text-white transition-colors ${isLooping ? 'bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent' : 'hover:bg-gradient-to-r hover:from-pink-500 hover:via-cyan-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent'}`}
                >
                  🔁
                </button>
                <button
                  onClick={handleMute}
                  className="text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>1:23</span>
                <div className="flex-1 bg-white/10 rounded-full h-1">
                  <div className="h-1 rounded-full w-1/3"
                       style={{
                         background: 'linear-gradient(90deg, #ff0080, #8000ff, #0080ff, #00ff80)',
                         backgroundSize: '200% 100%',
                         animation: 'iridescent 2s ease-in-out infinite'
                       }}></div>
                </div>
                <span>{musicTracks[currentTrack].duration}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/25"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀
          </motion.button>
        )}
      </AnimatePresence>

      {/* AIVA Parallax Section */}
      <motion.section className="relative h-screen overflow-hidden bg-black">
        {/* Black gradient overlay at top - Extended */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>

        {/* Black gradient overlay at bottom - Extended */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>

        {/* Meet AIVA Background - Correct Spline Scene */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Spline scene="https://prod.spline.design/GXMvk1yD7tdlTpch/scene.splinecode" />
        </div>

        {/* AIVA Content Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-6xl mb-6">🪩</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <HeaderText>Meet AIVA</HeaderText>
              </h2>
              <h3 className="text-2xl md:text-3xl text-white/90 mb-8">
                The Voice of the New Internet
              </h3>
              <div className="space-y-4 text-lg md:text-xl text-white/80 mb-12">
                <p>Not a chatbot. Not a search engine.</p>
                <p className="text-2xl font-bold text-white">A unified, ambient interface for everything.</p>
                <p className="text-purple-400">Coming June 9th</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative z-10">Join the Waitlist</span>
                </button>
                <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-400/25 overflow-hidden border border-cyan-400/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative z-10">Reserve Your Handle</span>
                </button>
              </div>
            </motion.div>

            {/* Phone Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                className="w-64 h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border border-white/20 shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Phone Screen */}
                <div className="absolute inset-4 bg-black rounded-[2.5rem] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 text-white text-xs">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>

                  {/* AIVA Interface */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2, duration: 1 }}
                      className="text-center mb-8"
                    >
                      <div className="text-4xl mb-4">🤖</div>
                      <div className="text-white text-lg font-medium mb-2">AIVA</div>
                      <div className="text-green-400 text-sm">● Online</div>
                    </motion.div>

                    {/* Voice Waves Animation */}
                    <motion.div
                      className="flex gap-1 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 1 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-green-400 rounded-full"
                          animate={{ height: [8, 24, 8] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    <div className="text-white/70 text-sm text-center">
                      "Show me the new internet"
                    </div>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* AIVA Products Section */}
      <motion.section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-lg md:text-xl text-white/70 mb-8">
              AIVA is only available on Unified AI products & services
            </h4>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              { name: 'AI Phone', link: 'preorder.aiphone', icon: '📱' },
              { name: 'AI Glasses', link: 'preorder.aiglasses', icon: '👓' },
              { name: 'AI Pods', link: 'preorder.aipods', icon: '🎧' },
              { name: 'AI Email', link: 'yourhandle.aiemail', icon: '📧', note: 'Available with subscription or hardware only' }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h5 className="text-xl font-bold text-white mb-2">
                  <HeaderText>{product.name}</HeaderText>
                </h5>
                <div className="text-purple-400 text-sm mb-4">{product.link}</div>
                {product.note && (
                  <p className="text-xs text-white/60">{product.note}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Reserve Handle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 overflow-hidden border border-purple-500/30">
              {/* Metal shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <span className="relative z-10">Reserve Your Handle</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Big Scrolling Marquee */}
      <motion.section className="py-16 bg-black overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        <motion.div
          className="whitespace-nowrap text-white font-bold"
          style={{ fontSize: '255pt' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          WELCOME TO THE AGENTIC WEB. WE CAN'T WAIT TO SEE WHAT YOU BUILD WITH IT&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE AGENTIC WEB. WE CAN'T WAIT TO SEE WHAT YOU BUILD WITH IT&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE AGENTIC WEB. WE CAN'T WAIT TO SEE WHAT YOU BUILD WITH IT&nbsp;&nbsp;&nbsp;&nbsp;WELCOME TO THE AGENTIC WEB. WE CAN'T WAIT TO SEE WHAT YOU BUILD WITH IT&nbsp;&nbsp;&nbsp;&nbsp;
        </motion.div>
      </motion.section>

      {/* AGI Stack - Black Tile Grid */}
      <motion.section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              <HeaderText>AGI Stack</HeaderText>
            </h3>
          </motion.div>

          {/* Black Tile Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { letter: 'A', word: 'AGENTIC', desc: 'Agentic intelligent systems', spline: 'https://prod.spline.design/rJPA857DGZSxML8o/scene.splinecode' },
              { letter: 'G', word: 'GOVERNANCE', desc: 'Protocol authority', spline: 'https://prod.spline.design/f3aPrjPqriBnVnIu/scene.splinecode' },
              { letter: 'I', word: 'IDENTITY', desc: 'Sovereign presence', spline: 'https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode' },
              { letter: 'U', word: 'UNIFIED', desc: 'Seamless integration', spline: 'https://prod.spline.design/0KEJ6WQwWH9vZhcv/scene.splinecode' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-black border border-white/20 rounded-2xl p-8 h-64 overflow-hidden cursor-pointer hover:border-purple-500/50 transition-all"
              >
                {/* Metal shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                {/* Purple glow on hover */}
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300 rounded-2xl"></div>

                {/* Spline Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <Spline scene={item.spline} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold text-white mb-4">{item.letter}</div>
                  <div className="text-2xl font-bold text-white mb-2">
                    <HeaderText>{item.word}</HeaderText>
                  </div>
                  <div className="text-white/70">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* .commandline/userprompt Section - Enhanced */}
      <motion.section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <HeaderText>🖥️ Introducing .commandline/userprompt</HeaderText>
            </h3>
          </motion.div>

          {/* Main Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Browser Window */}
            <div className="bg-gray-900 rounded-t-lg border border-gray-700">
              {/* Browser Header */}
              <div className="flex items-center gap-2 p-4 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm">.commandline/userprompt</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 bg-black rounded-b-lg font-mono">
                <form onSubmit={handleCommandSubmit} className="mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">$</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder="type anything"
                      className="w-full px-4 py-4 bg-transparent border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 transition-all text-lg"
                    />
                    <button
                      type="submit"
                      className="px-4 py-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-400/20 border border-purple-500/30 rounded-lg text-white hover:bg-gradient-to-r hover:from-purple-500/30 hover:via-pink-500/30 hover:to-cyan-400/30 transition-all"
                    >
                      ⏎
                    </button>
                  </div>
                </form>

                {commandResponse && (
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {'>'} {commandResponse}
                  </div>
                )}

                <div className="text-white/70 text-sm">
                  Your agent responds in real time.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expanded Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Left Column */}
            <div className="space-y-6 text-white">
              <h4 className="text-2xl md:text-3xl font-bold">
                <HeaderText>You're not browsing. You're invoking.</HeaderText>
              </h4>
              <p className="text-lg text-white/80">
                This isn't a website. It's a command line for the intelligent web.
              </p>
              <p className="text-lg text-white/80">
                Every key you press is a signal. Every signal calls an agent.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Example Command */}
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 font-mono">
                <div className="text-green-400 mb-2">
                  .prompt "Design me a drop page for my meme coin"
                </div>
                <div className="text-green-400/70 text-sm mb-2">⏎</div>
                <div className="text-green-400">
                  AIVA responds instantly. Your drop page is live.
                </div>
              </div>

              <p className="text-lg text-white/80">
                You don't click around here. You command.
              </p>
              <p className="text-white/70">
                No interfaces. No tabs. Just you and your operating system — powered by language, identity, and protocol logic.
              </p>
            </div>
          </motion.div>

          {/* Bottom Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 text-white/70">
              <span className="text-2xl">🔁</span>
              <span>Reload the page, the interface remembers where you left off.</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <span className="text-2xl">🎤</span>
              <span>Every voice command is a launch command.</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Whitepaper Carousel Section */}
      <motion.section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <HeaderText>Research Library</HeaderText>
            </h3>
            <p className="text-xl text-white/70">
              Access comprehensive research papers and technical documentation
            </p>
          </motion.div>

          {/* Whitepaper Scrollable Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-black border border-white/20 rounded-2xl p-6 cursor-pointer hover:border-purple-500/50 transition-all overflow-hidden"
                onClick={() => openWhitepaperModal(index)}
              >
                {/* Metal shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                {/* Purple glow on hover */}
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-all duration-300 rounded-2xl"></div>

                {/* Background Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${paper.bgColor} rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Paper Image Placeholder */}
                  <div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder content */}
                    <div className="text-4xl">{paper.image}</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute bottom-2 right-2 text-xs text-white/50">Preview</div>

                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${paper.bgColor} opacity-20`}></div>
                  </div>

                  {/* Paper Info */}
                  <h4 className="text-lg font-bold text-white mb-2">
                    <HeaderText>{paper.title}</HeaderText>
                  </h4>
                  <h5 className="text-sm text-purple-400 mb-3">{paper.subtitle}</h5>
                  <p className="text-xs text-white/70 mb-4">{paper.description}</p>

                  {/* Access Button */}
                  <button className="group/btn relative w-full px-4 py-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-400/20 border border-purple-500/30 text-white font-medium rounded-lg transition-all hover:border-purple-500/70 overflow-hidden">
                    {/* Metal shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10 text-sm">Request Access</span>
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Countdown Section */}
      <motion.section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-12">
              <HeaderText>AGI+U begins in:</HeaderText>
            </h3>

            {/* Minimalist Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-8 mb-16"
            >
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds }
              ].map((unit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-white/70 font-medium">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Optional Email Signup */}
          {!isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <p className="text-white/70 mb-6">Receive access signal first.</p>
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/70 transition-all text-sm"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white font-bold rounded-lg transition-all hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? '⏳' : '→'}
                </button>
              </form>

              {submitMessage && (
                <div className="mt-4 text-sm bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  {submitMessage}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-medium">Access signal received.</p>
            </motion.div>
          )}
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
            <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-400/10 backdrop-blur-sm border border-pink-500/30 rounded-lg p-6 font-mono group hover:border-pink-500/70 transition-all cursor-pointer shadow-2xl hover:shadow-pink-500/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-400">$</span>
                <span className="text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-cyan-400 group-hover:to-purple-500 transition-colors text-sm">
                  download.newinternet
                </span>
              </div>
              <div className="text-xs text-pink-400 mb-2">
                <HeaderText>⟶ Join the waitlist</HeaderText>
              </div>
              <div className="text-xs text-white/70">
                <HeaderText>Your agent arrives by voice</HeaderText>
              </div>
            </div>

            {/* Bind Command */}
            <div className="bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 font-mono group hover:border-cyan-400/70 transition-all cursor-pointer shadow-2xl hover:shadow-cyan-400/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-cyan-400">$</span>
                <span className="text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-colors text-sm">
                  bind.newinternet
                </span>
              </div>
              <div className="text-xs text-cyan-400 mb-2">
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
                    className="group relative flex-1 px-6 py-3 bg-black/50 border border-white/30 text-white font-medium rounded-lg transition-all disabled:opacity-50 hover:border-white/70 overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {/* Metal shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative z-10">Cancel</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex-1 px-6 py-3 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(45deg, #ff0080, #8000ff, #0080ff, #00ff80, #ff8000, #ff0080)',
                      backgroundSize: '300% 300%',
                      animation: 'iridescent 3s ease-in-out infinite'
                    }}
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
