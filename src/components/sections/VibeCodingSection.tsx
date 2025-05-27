'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VibeCodingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const features = [
    {
      title: "Intuitive Visual Interface",
      description: "Drag-and-drop components to build complex agent logic without writing traditional code."
    },
    {
      title: "Real-time Collaboration",
      description: "Work with other operators in real-time, seeing changes as they happen."
    },
    {
      title: "AI-Assisted Development",
      description: "Get intelligent suggestions and auto-completions as you build your agent logic."
    },
    {
      title: "Instant Deployment",
      description: "Deploy your agents directly to the protocol with one click."
    }
  ];

  const testimonials = [
    {
      quote: "Vibe Coding changed how I think about building agents. It's intuitive, powerful, and actually fun to use.",
      author: "Alex K., AI Operator"
    },
    {
      quote: "I went from idea to deployed agent in under an hour. The visual interface makes complex logic accessible.",
      author: "Maya R., Developer"
    }
  ];

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            Vibe Coding
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            The future of agent development is visual.
          </motion.p>

          {/* Visual IDE Preview */}
          <motion.div
            variants={itemVariants}
            className="mb-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-1 rounded-lg"
          >
            <div className="bg-black/80 rounded-lg overflow-hidden">
              <div className="h-96 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500 text-xl">
                    [Vibe Coding IDE Visualization]
                  </div>
                </div>

                {/* Floating UI elements to simulate the IDE */}
                <motion.div
                  className="absolute top-8 left-8 w-48 h-64 bg-purple-900/30 rounded-md border border-purple-500/30"
                  animate={{
                    y: [0, 5, 0],
                    boxShadow: ['0 0 0px rgba(168, 85, 247, 0.3)', '0 0 15px rgba(168, 85, 247, 0.5)', '0 0 0px rgba(168, 85, 247, 0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="absolute bottom-12 right-12 w-64 h-32 bg-blue-900/30 rounded-md border border-blue-500/30"
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: ['0 0 0px rgba(59, 130, 246, 0.3)', '0 0 15px rgba(59, 130, 246, 0.5)', '0 0 0px rgba(59, 130, 246, 0.3)']
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />

                <motion.div
                  className="absolute top-12 right-24 w-32 h-32 bg-green-900/30 rounded-md border border-green-500/30"
                  animate={{
                    y: [0, 7, 0],
                    boxShadow: ['0 0 0px rgba(34, 197, 94, 0.3)', '0 0 15px rgba(34, 197, 94, 0.5)', '0 0 0px rgba(34, 197, 94, 0.3)']
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                />

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M100,100 C150,150 200,150 250,100"
                    stroke="rgba(139, 92, 246, 0.5)"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      strokeDashoffset: [0, 100, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    strokeDasharray="5,5"
                  />
                  <motion.path
                    d="M250,100 C300,50 350,50 400,100"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      strokeDashoffset: [0, 100, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-gray-400 text-sm">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400 text-center">🔗 Hidden Route URL Hack (Just for Vibes)</h3>
              <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-center">
                <div className="text-purple-400">https://commandline/claim?handle=yourname&access=early&source=terminal</div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                For those who know how to type fast and move first.
              </p>
            </GlowingCard>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            Code by vibing. Deploy by existing.<br />The new paradigm for agent creation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VibeCodingSection;
