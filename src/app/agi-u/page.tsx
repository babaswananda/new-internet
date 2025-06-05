'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Twitter, Github, Linkedin, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Spline from '@splinetool/react-spline/next';

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
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (30 days from now for AGI+U event)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
    
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

  // Scroll refs
  const heroRef = useRef(null);
  const slidesRef = useRef(null);
  const productsRef = useRef(null);
  const countdownRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const slidesInView = useInView(slidesRef, { threshold: 0.3 });
  const productsInView = useInView(productsRef, { threshold: 0.3 });
  const countdownInView = useInView(countdownRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Slides data
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
      title: 'AUTONOMOUS',
      subtitle: 'Self-Governing AI Systems',
      description: 'Discover how AI agents operate independently with full autonomy',
      gradient: 'from-red-500 via-pink-500 to-purple-500'
    },
    {
      id: 'G',
      title: 'GENERAL',
      subtitle: 'Universal Intelligence Framework',
      description: 'One system, infinite possibilities across all domains',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      id: 'I',
      title: 'INTELLIGENCE',
      subtitle: 'Beyond Human Cognitive Limits',
      description: 'Breakthrough reasoning capabilities that redefine intelligence',
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

  // Product cards data
  const products = [
    {
      name: 'Agent OS',
      description: 'The operating system for autonomous AI agents',
      image: '🤖',
      gradient: 'from-green-400 via-yellow-500 to-orange-500'
    },
    {
      name: 'ION Protocol',
      description: 'Intelligent Ontology Network for AI communication',
      image: '⚡',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      name: 'Alpha Router',
      description: 'Smart routing for optimal AI model selection',
      image: '🧠',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      name: 'Vault Economics',
      description: 'Tokenized incentive system for AI agents',
      image: '💎',
      gradient: 'from-yellow-400 via-orange-500 to-red-500'
    },
    {
      name: 'Handle Registry',
      description: 'Decentralized identity system for AI entities',
      image: '🔗',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      name: 'Agent Chat',
      description: 'Multi-agent communication platform',
      image: '💬',
      gradient: 'from-teal-500 via-green-500 to-blue-500'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      console.log('Email captured:', email);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Spline */}
      <motion.section
        ref={heroRef}
        className="h-screen relative flex items-center justify-center"
        style={{ y }}
      >
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/VkRWgTTfjABvoQlQ/scene.splinecode" />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">
                  <HeaderText>LIVE EVENT • MARCH 2024</HeaderText>
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-8xl md:text-[12rem] font-bold mb-8 tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <HeaderText>AGI+U</HeaderText>
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <HeaderText>The Future of Artificial General Intelligence</HeaderText>
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <button
                onClick={() => setCurrentSlide(1)}
                className="group relative px-12 py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg transition-all hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  <HeaderText>EXPLORE THE FUTURE</HeaderText>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* A.G.I.U Slides Section */}
      <motion.section
        ref={slidesRef}
        className="min-h-screen py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={slidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
              <HeaderText>BREAKING DOWN THE FUTURE</HeaderText>
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                // Hero slide content (already shown above)
                <div className="h-96 flex items-center justify-center">
                  <p className="text-2xl text-gray-400">
                    ↑ Experience the interactive 3D visualization above ↑
                  </p>
                </div>
              ) : (
                // A.G.I.U slides
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    className={`text-9xl md:text-[12rem] font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r ${slides[currentSlide].gradient}`}
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

                  <h4 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    <HeaderText>{slides[currentSlide].subtitle}</HeaderText>
                  </h4>

                  <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
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
        className="py-32 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={productsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
            <HeaderText>PRODUCT ECOSYSTEM</HeaderText>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The complete suite of tools powering the AGI revolution
          </p>
        </motion.div>

        {/* Scrolling Product Cards */}
        <div className="relative">
          <motion.div
            className="flex gap-8 py-8"
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
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
                  <div className="text-6xl mb-6">{product.image}</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">
                    <HeaderText>{product.name}</HeaderText>
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="absolute bottom-8 right-8">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Countdown & Newsletter Section */}
      <motion.section
        ref={countdownRef}
        className="py-32 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={countdownInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto px-8"
        >
          {/* Countdown Header */}
          <motion.h3
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={countdownInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <HeaderText>EVENT COUNTDOWN</HeaderText>
          </motion.h3>

          <motion.p
            className="text-xl text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={countdownInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The future of AGI begins in...
          </motion.p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-16">
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
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 mb-2"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-sm font-medium text-gray-400">
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
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 transition-all hover:scale-105"
                  >
                    <HeaderText>JOIN WAITLIST</HeaderText>
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
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

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
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
        </div>
      </footer>
    </div>
  );
}
