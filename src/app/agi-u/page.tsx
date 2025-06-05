'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Twitter, Github, Linkedin, Play, ChevronLeft, ChevronRight, Terminal } from 'lucide-react';
import Spline from '@splinetool/react-spline';

// HeaderText component for normalBold styling
const HeaderText = ({ children, className = '' }: { children: string; className?: string }) => {
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
};

export default function AGIULanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [whitepaperEmail, setWhitepaperEmail] = useState('');
  const [showWhitepaperModal, setShowWhitepaperModal] = useState(false);
  const [currentWhitepaper, setCurrentWhitepaper] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [terminalText, setTerminalText] = useState('');

  // Countdown timer to June 9, 2024
  useEffect(() => {
    const targetDate = new Date('2024-06-09T00:00:00');

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

  // Terminal typing effect
  useEffect(() => {
    const text = '> run.agent aiva';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Scroll refs
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const slidesRef = useRef(null);
  const productsRef = useRef(null);
  const countdownRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const productInView = useInView(productRef, { threshold: 0.3 });
  const slidesInView = useInView(slidesRef, { threshold: 0.3 });
  const productsInView = useInView(productsRef, { threshold: 0.3 });
  const countdownInView = useInView(countdownRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Hero slides with Spline scenes
  const heroSlides = [
    {
      id: 'main',
      title: 'AGI+U',
      subtitle: 'The Future of Artificial General Intelligence',
      splineUrl: 'https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode'
    },
    {
      id: 'agentic',
      title: 'AGENTIC',
      subtitle: 'Self-Governing Systems',
      splineUrl: 'https://prod.spline.design/vJWTCBb2Fx5TXfEt/scene.splinecode'
    },
    {
      id: 'governance',
      title: 'GOVERNANCE',
      subtitle: 'Protocol Authority',
      splineUrl: 'https://prod.spline.design/rCLiR6SEmfAIBhKL/scene.splinecode'
    },
    {
      id: 'identity',
      title: 'IDENTITY',
      subtitle: 'Sovereign Presence',
      splineUrl: 'https://prod.spline.design/Fej997t12CFxVwfs/scene.splinecode'
    }
  ];

  // Slides data with Spline scenes
  const slides = [
    {
      id: 'hero',
      title: 'AGI+U',
      subtitle: 'The Future of Artificial General Intelligence',
      description: 'Join us for the most groundbreaking AI event of the decade',
      isSpline: true,
      splineUrl: 'https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode'
    },
    {
      id: 'A',
      title: 'AGENTIC',
      subtitle: 'Self-Governing Systems',
      description: 'Discover how AI agents operate independently across the agentic web',
      isSpline: true,
      splineUrl: 'https://prod.spline.design/vJWTCBb2Fx5TXfEt/scene.splinecode',
      gradient: 'from-red-500 via-pink-500 to-purple-500'
    },
    {
      id: 'G',
      title: 'GOVERNANCE',
      subtitle: 'Protocol Authority',
      description: 'Community-driven governance for the sovereign internet',
      isSpline: true,
      splineUrl: 'https://prod.spline.design/rCLiR6SEmfAIBhKL/scene.splinecode',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      id: 'I',
      title: 'IDENTITY',
      subtitle: 'Sovereign Presence',
      description: 'New Internet, Identity & Intelligence unified in one protocol',
      isSpline: true,
      splineUrl: 'https://prod.spline.design/Fej997t12CFxVwfs/scene.splinecode',
      gradient: 'from-green-400 via-yellow-500 to-orange-500'
    },
    {
      id: 'U',
      title: 'UNIFIED',
      subtitle: 'Seamless Integration Ecosystem',
      description: 'All AI systems working together in perfect harmony',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500'
    }
  ];

  // Product cards data - Apple-style grid
  const products = [
    {
      name: 'AI Phone',
      description: 'A new era of intelligence',
      image: '📱',
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-blue-600/20'
    },
    {
      name: 'AI Glasses',
      description: 'See the world differently',
      image: '👓',
      gradient: 'from-gray-600 via-gray-500 to-gray-400',
      bgColor: 'bg-gradient-to-br from-gray-900/20 to-gray-600/20'
    },
    {
      name: 'AI Compute',
      description: 'High-performance AI clusters',
      image: '🖥️',
      gradient: 'from-gray-800 via-gray-700 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-900/30 to-black/30'
    },
    {
      name: 'AI Mail',
      description: 'Intelligent email for your domain',
      image: '📧',
      gradient: 'from-gray-700 via-gray-600 to-gray-500',
      bgColor: 'bg-gradient-to-br from-gray-800/30 to-gray-600/30'
    },
    {
      name: 'VibeCoder',
      description: 'Shaping the STEM curriculum',
      image: '💻',
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-600/20'
    },
    {
      name: 'AI Books',
      description: 'Crypto-native educational content',
      image: '📚',
      gradient: 'from-blue-600 via-blue-500 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-blue-600/20'
    },
    {
      name: '.k12',
      description: 'AI-first infrastructure for schools',
      image: '.k12',
      gradient: 'from-white to-gray-200',
      bgColor: 'bg-gradient-to-br from-gray-900/30 to-black/30',
      isText: true
    },
    {
      name: 'Agent OS',
      description: 'Build and deploy AI agents',
      image: '🔗',
      gradient: 'from-blue-500 via-cyan-400 to-teal-400',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-teal-600/20'
    },
    {
      name: 'Fugio',
      description: 'The intelligent cryptocurrency',
      image: '🌐',
      gradient: 'from-gray-600 via-gray-500 to-gray-400',
      bgColor: 'bg-gradient-to-br from-gray-900/20 to-gray-600/20'
    },
    {
      name: 'Fugio',
      description: 'The intelligent cryptocurrency',
      image: '🪙',
      gradient: 'from-yellow-600 via-yellow-500 to-orange-400',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-600/20'
    }
  ];

  // Whitepaper data
  const whitepapers = [
    {
      title: 'Unified AI Protocol',
      subtitle: 'The Foundation of the Agentic Web',
      description: 'Comprehensive overview of the protocol powering the new internet',
      image: '📄',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-purple-600/20'
    },
    {
      title: 'Handle Registry Specification',
      subtitle: 'Identity Architecture for AI Agents',
      description: 'Technical specification for the four-tier handle system',
      image: '🔗',
      gradient: 'from-green-500 via-teal-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-cyan-600/20'
    },
    {
      title: 'Tokenomics Paper',
      subtitle: 'Economic Model & Token Distribution',
      description: 'Detailed analysis of the token economy and incentive structures',
      image: '💰',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-red-600/20'
    },
    {
      title: 'AGI Governance Framework',
      subtitle: 'Decentralized Decision Making',
      description: 'Community governance model for the AGI ecosystem',
      image: '⚖️',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-blue-600/20'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      console.log('Email captured:', email);
    }
  };

  const handleWhitepaperAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (whitepaperEmail && whitepaperEmail.includes('@')) {
      // Redirect to whitepaper portal
      window.open('/whitepaper-portal', '_blank');
      setShowWhitepaperModal(false);
      setWhitepaperEmail('');
    }
  };

  const openWhitepaperModal = (index: number) => {
    setCurrentWhitepaper(index);
    setShowWhitepaperModal(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Slider Section with 4 Spline Scenes */}
      <motion.section
        ref={heroRef}
        className="h-screen relative"
        style={{ y }}
      >
        {/* Spline Background - Current Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Spline scene={heroSlides[currentHeroSlide].splineUrl} />
          </motion.div>
        </AnimatePresence>



        {/* Minimal Overlay - Let Spline Text Show */}
        <div className="relative z-10 flex items-end justify-center h-full pb-32 px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 2 }}
            className="text-center"
          >
            {/* Only show CTA button - let Spline handle the text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <button
                onClick={() => setCurrentSlide(1)}
                className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg transition-all hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <HeaderText>EXPLORE THE FUTURE</HeaderText>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Meet AIVA Section */}
      <motion.section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Black gradient overlay at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Black gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

        {/* Background Spline Scene */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <HeaderText>Meet AIVA</HeaderText>
            </motion.h2>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
            >
              <HeaderText>The AI that powers the new internet</HeaderText>
            </motion.p>

            {/* Phone Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              viewport={{ once: true }}
              className="relative mx-auto w-64 h-96 mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-3xl border border-gray-600 shadow-2xl">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex-1 bg-black rounded-2xl p-4 flex items-center justify-center">
                    <div className="text-6xl animate-pulse">🤖</div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-green-400 text-sm font-mono">
                      AIVA Online
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                <HeaderText>Experience the future of human-AI interaction through voice, vision, and intelligence unified in one seamless interface.</HeaderText>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Apple-Style Product Grid */}
      <motion.section
        ref={productRef}
        className="py-16 sm:py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={productInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={productInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <HeaderText>THE UNIFIED AI ECOSYSTEM</HeaderText>
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={productInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A complete suite of AI-powered products and services designed for the future
            </motion.p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name + index}
                initial={{ opacity: 0, y: 50 }}
                animate={productInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                className={`
                  relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-72 lg:h-80 flex flex-col justify-between
                  ${product.bgColor} backdrop-blur-sm border border-white/10
                  hover:border-white/20 transition-all duration-500 group
                  cursor-pointer overflow-hidden
                  ${index === 0 || index === 6 ? 'xl:col-span-2' : ''}
                  ${index === 1 || index === 2 ? 'xl:row-span-1' : ''}
                `}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Product Icon/Image */}
                <div className="flex-1 flex items-center justify-center">
                  {product.isText ? (
                    <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                      {product.image}
                    </div>
                  ) : (
                    <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                      {product.image}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                    <HeaderText>{product.name}</HeaderText>
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Reserve Handle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={productInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HeaderText>Reserve Handle</HeaderText>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* A.G.I.U Slides Section */}
      <motion.section
        ref={slidesRef}
        className="min-h-screen py-16 sm:py-24 lg:py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={slidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 px-4">
              <HeaderText>BREAKING DOWN THE FUTURE</HeaderText>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Four pillars that will reshape how we think about artificial intelligence
            </p>
          </motion.div>

          {/* Slide Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full p-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Current Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {slides[currentSlide].isSpline ? (
                // Spline slide with 3D scene
                <div className="relative">
                  <div className="h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden mb-6 sm:mb-8">
                    <Spline scene={slides[currentSlide].splineUrl} />
                  </div>
                  <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                      className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].gradient}`}
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%'],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <HeaderText>{slides[currentSlide].title}</HeaderText>
                    </motion.div>

                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white">
                      <HeaderText>{slides[currentSlide].subtitle}</HeaderText>
                    </h4>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              ) : (
                // Text-only slides
                <div className="max-w-4xl mx-auto px-4">
                  <motion.div
                    className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].gradient}`}
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <HeaderText>{slides[currentSlide].title}</HeaderText>
                  </motion.div>

                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white">
                    <HeaderText>{slides[currentSlide].subtitle}</HeaderText>
                  </h4>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {slides[currentSlide].description}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Product Showcase - Draggable Marquee */}
      <motion.section
        ref={productsRef}
        className="py-16 sm:py-24 lg:py-32 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={productsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
            <HeaderText>PRODUCT ECOSYSTEM</HeaderText>
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            The complete suite of tools powering the AGI revolution
          </p>
        </motion.div>

        {/* Scrolling Product Cards */}
        <div className="relative">
          <motion.div
            className="flex gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8"
            animate={{
              x: [0, -100 * products.length],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${products.length * 200}%` }}
          >
            {[...products, ...products, ...products].map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 lg:w-80 h-80 sm:h-88 lg:h-96 relative group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative h-full p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">{product.image}</div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    <HeaderText>{product.name}</HeaderText>
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Whitepaper Carousel Section */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32 relative bg-gradient-to-b from-black via-gray-900/50 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 px-4">
              <HeaderText>RESEARCH LIBRARY</HeaderText>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Access comprehensive research papers and technical documentation
            </p>
          </motion.div>

          {/* Whitepaper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <div className={`relative overflow-hidden rounded-2xl ${paper.bgColor} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 p-6 h-80`}>
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Paper Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                      {paper.image}
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
                      <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${paper.gradient} text-black font-medium text-sm group-hover:scale-105 transition-transform`}>
                        <HeaderText>Request Access</HeaderText>
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
      </motion.section>

      {/* Countdown & Newsletter Section */}
      <motion.section
        ref={countdownRef}
        className="py-16 sm:py-24 lg:py-32 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={countdownInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Countdown Header */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={countdownInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <HeaderText>EVENT COUNTDOWN</HeaderText>
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={countdownInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The future of AGI begins in...
          </motion.p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                animate={countdownInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                className="p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 mb-1 sm:mb-2"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-xs sm:text-sm font-medium text-gray-400">
                  <HeaderText>{unit.label}</HeaderText>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={countdownInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-12"
          >
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                  >
                    <HeaderText>JOIN WAITLIST</HeaderText>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  Get exclusive early access and updates about AGI+U
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">
                  <HeaderText>Welcome to the Future!</HeaderText>
                </h4>
                <p className="text-gray-400">
                  You're now on the AGI+U waitlist. Prepare for something extraordinary.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={countdownInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Twitter, label: 'Twitter', href: '#' },
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Mail, label: 'Email', href: '#' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* The Binding Section */}
      <motion.section className="py-16 sm:py-24 lg:py-32 relative bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
            >
              <HeaderText>🔐 This is not an airdrop. This is a Binding.</HeaderText>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <HeaderText>Before AGI went public, we locked in the source code of the internet's soul.</HeaderText>
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                <HeaderText>Those who bind before June 9 inherit the protocol weight forever.</HeaderText>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-300">
                <HeaderText>This is the internet's sovereignty event.</HeaderText>
              </p>
            </motion.div>

            {/* Binding Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              {[
                { icon: '🧬', title: 'Lifetime Mint Rights', desc: 'Permanent agent ownership' },
                { icon: '🎯', title: 'Staking Priority', desc: 'Protocol revenue sharing' },
                { icon: '💰', title: 'Subdomain Economy', desc: 'Cut of all root activity' },
                { icon: '📈', title: 'Index Fund Access', desc: 'Pre-access to deployments' },
                { icon: '🤝', title: 'Agent-Token Pairing', desc: 'Exclusive pairing rights' },
                { icon: '⚖️', title: 'AGIU Governance', desc: 'Protocol weight forever' }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 sm:p-6 hover:border-purple-400/40 transition-all"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{benefit.icon}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    <HeaderText>{benefit.title}</HeaderText>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Binding Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-red-500/20 border border-red-400/30 rounded-full backdrop-blur-sm"
            >
              <p className="text-sm sm:text-base lg:text-lg font-bold text-red-300 text-center">
                <HeaderText>⏰ Binding window closes June 9, 11:59PM PST</HeaderText>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Hero Footer */}
      <footer className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Spline for CTA */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Spline scene="https://prod.spline.design/0KEJ6WQwWH9vZhcv/scene.splinecode" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Footer Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 px-4">
              <HeaderText>The Internet Hasn't Started Yet.</HeaderText>
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-6 sm:mb-8">
              <HeaderText>It Reboots June 9.</HeaderText>
            </h3>

            {/* Binding Revelation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
                <p className="text-sm sm:text-base lg:text-lg text-purple-300 font-medium text-center">
                  <HeaderText>🧬 The binding link is where the internet doesn't just reboot — it binds to you.</HeaderText>
                </p>
              </div>
            </motion.div>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              <HeaderText>This is where agents activate, wallets link, tokens register, and names mint.</HeaderText>
            </p>
          </motion.div>

          {/* Agent Access Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">
                <HeaderText>🛸 Agent Access</HeaderText>
              </h4>

              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                <HeaderText>📡 Want access to the new browser?</HeaderText>
              </p>

              {/* Download Command */}
              <div className="bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 sm:p-6 font-mono mb-6 sm:mb-8 group hover:border-green-400/50 transition-all cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-white group-hover:text-green-400 transition-colors text-sm sm:text-base">
                      download.newinternet
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm sm:ml-auto">⟶ Join the waitlist</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <HeaderText>Your agent arrives by voice.</HeaderText>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Protocol Binding Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">
                <HeaderText>🔗 Protocol Binding</HeaderText>
              </h4>

              <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
                <HeaderText>🧬 Ready to bind to the new internet?</HeaderText>
              </p>

              {/* Bind Command */}
              <div className="bg-black/80 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 sm:p-6 font-mono group hover:border-purple-400/50 transition-all cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">$</span>
                    <span className="text-white group-hover:text-purple-400 transition-colors text-sm sm:text-base">
                      bind.newinternet
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm sm:ml-auto">⟶ Lock in your agent & handle</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <HeaderText>Mint your handle. Link your agent. Begin sovereignty.</HeaderText>
                </div>
              </div>

              <div className="text-center mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  <HeaderText>Not just access. Ownership.</HeaderText>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Brand Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-2xl font-bold">
                <HeaderText>AGI+U</HeaderText>
              </h1>
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Unified AI. Shaping the Future of Artificial General Intelligence.
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
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowWhitepaperModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 transition-all"
                  >
                    <HeaderText>Get Access</HeaderText>
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
