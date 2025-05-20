'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const ComingSoonSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const controls = useAnimation();

  // Launch date: May 21, 2025
  useEffect(() => {
    const launchDate = new Date('2025-05-21T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Feature rotation
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % 5);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Note: Replace this URL with your actual Spline scene URL
  const splineSceneUrl = undefined;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1.2, 0.8],
      transition: {
        repeat: Infinity,
        duration: 3,
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: "✨",
      title: "Generative Art",
      description: "Create and discover stunning AI-powered generative art that pushes creative boundaries.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: "🧠",
      title: "Vibe Coding",
      description: "Access premium templates and tools for vibe coding projects with intuitive interfaces.",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: "🤖",
      title: "AI Marketplace",
      description: "Buy, sell, and trade AI-powered templates and projects in our curated marketplace.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: "🔮",
      title: "LibreChat Integration",
      description: "Powerful AI chat capabilities powered by ElizaOS, Zerebro/Zerepy+, and more.",
      color: "from-green-500 to-yellow-500"
    },
    {
      icon: "🚀",
      title: "Launch Templates",
      description: "Ready-to-use templates to kickstart your next AI-powered project in minutes.",
      color: "from-yellow-500 to-purple-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>

        {/* Animated glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          style={{ animationDelay: "1s" }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Launch badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] rounded-full">
              <div className="bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full flex items-center">
                <span className="animate-pulse mr-2 text-red-500">●</span>
                <span className="text-white font-medium">Launching May 21-22, 2025</span>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            Explore the New Internet
          </motion.h2>

          {/* Countdown timer */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 w-20 h-20 flex items-center justify-center">
                    <span className="text-3xl font-bold">{item.value}</span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-16 text-center max-w-3xl mx-auto text-gray-300"
          >
            A revolutionary marketplace for generative art and vibe coding projects with templates and AI-powered tools.
          </motion.p>

          {/* Feature showcase */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r p-[1px] from-purple-500 via-blue-500 to-teal-500">
              <div className="bg-black/80 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Feature navigation */}
                  <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-semibold mb-6 text-white/80">Upcoming Features</h3>
                    <div className="space-y-2">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-white/10 border-l-2 border-white' : 'hover:bg-white/5'}`}
                          onClick={() => setActiveFeature(index)}
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                        >
                          <div className="flex items-center">
                            <span className="mr-3 text-xl">{feature.icon}</span>
                            <span className={activeFeature === index ? 'font-semibold' : ''}>{feature.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature details */}
                  <div className="w-full md:w-2/3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <div className={`bg-gradient-to-r ${features[activeFeature].color} p-[1px] rounded-xl h-full`}>
                          <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                            <div className="text-4xl mb-4">{features[activeFeature].icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                            <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
                            <div className="mt-auto">
                              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                                Learn more
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Waitlist signup */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-center">Be the First to Know</h3>
              <p className="text-gray-300 mb-6 text-center">Join our exclusive waitlist for early access and special perks.</p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-lg font-semibold ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Join Waitlist'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <div className="inline-block bg-green-500/20 text-green-400 p-2 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">You&apos;re on the list!</h4>
                    <p className="text-gray-300">We&apos;ll notify you when we launch. Stay tuned!</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Pricing teaser */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Starting at just $9.99/month</h3>
            <p className="text-gray-300 mb-6">Premium tiers available with advanced features and integrations.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={pulseVariants}
              animate="pulse"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold text-lg shadow-lg shadow-purple-500/20"
            >
              View Pricing Plans
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
