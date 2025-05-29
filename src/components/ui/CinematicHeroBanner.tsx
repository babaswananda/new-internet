'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export interface CinematicSlide {
  id: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  overlay?: 'dark' | 'light' | 'gradient' | 'none';
  textPosition?: 'left' | 'center' | 'right';
}

interface CinematicHeroBannerProps {
  slides: CinematicSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  enableParallax?: boolean;
}

export default function CinematicHeroBanner({
  slides,
  autoPlay = true,
  autoPlayInterval = 8000,
  height = '100vh',
  showControls = true,
  showIndicators = true,
  enableParallax = true
}: CinematicHeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length, autoPlayInterval]);

  // Video control with better error handling
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleLoadedData = () => {
        setIsLoaded(true);
        if (isPlaying) {
          video.play().catch(() => {
            // Silently handle autoplay failures
            setIsPlaying(false);
          });
        }
      };

      const handleError = () => {
        setIsLoaded(true); // Still show content even if video fails
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [currentSlide]);

  // Separate effect for play/pause control
  useEffect(() => {
    if (videoRef.current && isLoaded) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isLoaded]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsLoaded(false); // Reset loading state for new slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsLoaded(false); // Reset loading state for new slide
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const currentSlideData = slides[currentSlide];

  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.1,
      filter: 'blur(5px)',
      transition: { duration: 0.6 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const getTextAlignment = () => {
    switch (currentSlideData.textPosition) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      default: return 'text-center items-center';
    }
  };

  const getOverlayClass = () => {
    switch (currentSlideData.overlay) {
      case 'dark': return 'bg-black/60';
      case 'light': return 'bg-white/20';
      case 'gradient': return 'bg-gradient-to-t from-black/80 via-black/20 to-transparent';
      default: return 'bg-black/40';
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* Media Background */}
      <motion.div
        className="absolute inset-0"
        style={enableParallax ? { y } : {}}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentSlideData.type === 'video' ? (
              <video
                ref={videoRef}
                src={currentSlideData.src}
                poster={currentSlideData.poster}
                className="w-full h-full object-cover"
                autoPlay={false} // Controlled by useEffect
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onLoadStart={() => setIsLoaded(false)}
                onLoadedData={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
              />
            ) : (
              <img
                src={currentSlideData.src}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
                onLoadStart={() => setIsLoaded(false)}
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${getOverlayClass()}`} />

      {/* Content */}
      <motion.div
        className={`relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 ${getTextAlignment()}`}
        style={enableParallax ? { opacity } : {}}
      >
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              {/* Title with letter animation */}
              <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
                {currentSlideData.title.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                    style={{
                      textShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
                      background: 'linear-gradient(45deg, #ffffff, #a855f7, #3b82f6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                variants={textVariants}
                className="text-xl md:text-3xl lg:text-4xl text-gray-200 font-light max-w-4xl"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* CTAs */}
              {currentSlideData.cta && (
                <motion.div
                  variants={textVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.a
                    href={currentSlideData.cta.primary.href}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    style={{
                      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {currentSlideData.cta.primary.text}
                  </motion.a>

                  {currentSlideData.cta.secondary && (
                    <motion.a
                      href={currentSlideData.cta.secondary.href}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300"
                      style={{ backdropFilter: 'blur(10px)' }}
                    >
                      {currentSlideData.cta.secondary.text}
                    </motion.a>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/50 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/50 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Media Controls */}
      {currentSlideData.type === 'video' && (
        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
          <button
            onClick={togglePlayPause}
            className="p-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/50 transition-all duration-300"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/50 transition-all duration-300"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-30">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-white/60">🎬 Loading Cinematic Experience...</p>
          </div>
        </div>
      )}
    </div>
  );
}
