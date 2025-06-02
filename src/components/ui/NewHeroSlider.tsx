'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const slides: HeroSlide[] = [
  {
    id: 'unified-ai-launch',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
    title: 'Welcome to the New Map',
    subtitle: 'of the New Internet',
    description: 'Deploy, manage, and monetize AI agents across the decentralized web. Early access pricing available now.',
    ctaText: 'Read Whitepaper',
    ctaLink: 'https://whitepaper.newinternet',
    secondaryCtaText: '🚀 Start Free Trial',
    secondaryCtaLink: '/io'
  },
  {
    id: 'generate-art',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop',
    title: '.GenerateArt',
    subtitle: 'Professional AI Art Generation',
    description: 'Replace Midjourney with our advanced AI art suite. Create stunning visuals with cinematic quality.',
    ctaText: '🎨 Create Art Now',
    ctaLink: '/io',
    secondaryCtaText: 'View Gallery',
    secondaryCtaLink: '/ai-agents'
  },
  {
    id: 'video-generator',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1920&h=1080&fit=crop',
    title: '.VideoGenerator',
    subtitle: '4K AI Video Creation Suite',
    description: 'Replace RunwayML with our cutting-edge video generation technology. Create cinematic content at scale.',
    ctaText: '🎬 Generate Videos',
    ctaLink: '/io',
    secondaryCtaText: 'See Examples',
    secondaryCtaLink: '/documentation'
  },
  {
    id: 'agentic-internet',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
    title: 'The Agentic Web',
    subtitle: 'Where Intelligence Meets Infrastructure',
    description: 'Join the revolution. Own your tools, run the system, become the intelligence.',
    ctaText: 'download.agentic🌐',
    ctaLink: 'https://download.agentic',
    secondaryCtaText: 'Join Waitlist',
    secondaryCtaLink: '/waitlist'
  }
];

const NewHeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Media (Video/Image) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'video' ? (
            <video
              src={slides[currentSlide].src}
              poster={slides[currentSlide].poster}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-white">
                  {slides[currentSlide].title}
                </span>
              </motion.h1>

              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href={slides[currentSlide].ctaLink}
                  className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  {slides[currentSlide].ctaText}
                </a>
                {slides[currentSlide].secondaryCtaText && (
                  <a
                    href={slides[currentSlide].secondaryCtaLink}
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    {slides[currentSlide].secondaryCtaText}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full transition-all ${
            isAutoPlaying ? 'bg-green-500/30 text-green-400' : 'bg-red-500/30 text-red-400'
          }`}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>

      {/* Progress bar with glowing effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 shadow-lg shadow-orange-500/50"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentSlide}
          style={{
            boxShadow: '0 0 10px rgba(34, 197, 94, 0.5), 0 0 20px rgba(234, 179, 8, 0.3), 0 0 30px rgba(249, 115, 22, 0.2)'
          }}
        />
      </div>
    </div>
  );
};

export default NewHeroSlider;
