'use client';

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Eye, Film, Image as ImageIcon, Zap } from 'lucide-react';

interface CinematicMediaPlaceholderProps {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image' | 'animation' | '3d';
  duration?: string;
  resolution?: string;
  category: 'hero' | 'agents' | 'protocol' | 'tokens' | 'products' | 'future';
  priority: 'high' | 'medium' | 'low';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9';
  className?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  overlay?: boolean;
  onMediaReady?: (mediaUrl: string) => void;
}

const CinematicMediaPlaceholder: React.FC<CinematicMediaPlaceholderProps> = memo(({
  id,
  title,
  description,
  type,
  duration = '30s',
  resolution = '4K',
  category,
  priority,
  aspectRatio = '16:9',
  className = '',
  showControls = false,
  autoPlay = false,
  overlay = true,
  onMediaReady
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Simulate loading progress
  useEffect(() => {
    if (isInView && !isLoaded) {
      const interval = setInterval(() => {
        setLoadProgress(prev => {
          if (prev >= 100) {
            setIsLoaded(true);
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isInView, isLoaded]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const glowVariants = {
    idle: {
      boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
    },
    hover: {
      boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)',
      transition: { duration: 0.3 }
    }
  };

  // Get category-specific styling
  const getCategoryStyle = () => {
    const styles = {
      hero: 'from-purple-900/20 via-blue-900/20 to-black/40',
      agents: 'from-blue-900/20 via-purple-900/20 to-pink-900/20',
      protocol: 'from-green-900/20 via-blue-900/20 to-purple-900/20',
      tokens: 'from-yellow-900/20 via-orange-900/20 to-red-900/20',
      products: 'from-gray-900/20 via-blue-900/20 to-purple-900/20',
      future: 'from-purple-900/20 via-pink-900/20 to-blue-900/20'
    };
    return styles[category] || styles.hero;
  };

  // Get type icon
  const getTypeIcon = () => {
    switch (type) {
      case 'video': return <Film className="w-6 h-6" />;
      case 'animation': return <Zap className="w-6 h-6" />;
      case '3d': return <motion.div className="w-6 h-6 border-2 border-current transform rotate-45" animate={{ rotateY: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />;
      case 'image': return <ImageIcon className="w-6 h-6" />;
      default: return <Eye className="w-6 h-6" />;
    }
  };

  // Get aspect ratio class
  const getAspectRatioClass = useCallback(() => {
    const ratios = {
      '16:9': 'aspect-video',
      '4:3': 'aspect-[4/3]',
      '1:1': 'aspect-square',
      '21:9': 'aspect-[21/9]'
    };
    return ratios[aspectRatio] || ratios['16:9'];
  }, [aspectRatio]);

  // Event handlers
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(() => setShowDetails(!showDetails), [showDetails]);
  const handlePlayToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  const handleMuteToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative group cursor-pointer ${className}`}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      {/* Main Media Container */}
      <motion.div
        variants={glowVariants}
        animate={isHovered ? "hover" : "idle"}
        className={`relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br ${getCategoryStyle()} backdrop-blur-sm ${getAspectRatioClass()}`}
      >
        {/* Loading Progress */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="text-white text-sm mb-2">Loading {type}...</div>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-purple-300 text-xs mt-1">{Math.round(loadProgress)}%</div>
            </div>
          </div>
        )}

        {/* Placeholder Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8B5CF6 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, #EC4899 0%, transparent 50%),
                                 radial-gradient(circle at 50% 50%, #D946EF 0%, transparent 50%)`
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center p-8">
            <motion.div
              className="text-purple-400 mb-4"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {getTypeIcon()}
            </motion.div>

            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4 max-w-xs">{description}</p>

            <div className="flex items-center justify-center gap-4 text-xs text-purple-300">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                {type.toUpperCase()}
              </span>
              <span>{duration}</span>
              <span>{resolution}</span>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-6 z-30"
            >
              <div className="text-white">
                <div className="text-sm font-medium mb-1">{title}</div>
                <div className="text-xs text-gray-300">Priority: {priority}</div>
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  onClick={handlePlayToggle}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  onClick={handleMuteToggle}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Priority Indicator */}
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
          priority === 'high' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
          priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
          'bg-green-500/20 text-green-300 border border-green-500/30'
        }`}>
          {priority.toUpperCase()}
        </div>
      </motion.div>

      {/* Details Panel */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 bg-gray-900/90 backdrop-blur-sm border border-purple-500/20 rounded-xl z-40"
          >
            <div className="text-white text-sm space-y-2">
              <div><strong>ID:</strong> {id}</div>
              <div><strong>Category:</strong> {category}</div>
              <div><strong>Aspect Ratio:</strong> {aspectRatio}</div>
              <div><strong>Description:</strong> {description}</div>

              <div className="flex gap-2 pt-2">
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  Upload Media
                </button>
                <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs transition-colors">
                  Generate AI
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

CinematicMediaPlaceholder.displayName = 'CinematicMediaPlaceholder';

export default CinematicMediaPlaceholder;
