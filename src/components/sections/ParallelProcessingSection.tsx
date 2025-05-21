'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ParallelProcessingSection: React.FC = () => {
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

  const metrics = [
    { label: "Concurrent Agents", value: "1M+" },
    { label: "Tasks Per Second", value: "10K+" },
    { label: "Latency", value: "<100ms" },
    { label: "Scaling Factor", value: "Linear" }
  ];

  const features = [
    {
      title: "Distributed Compute Grid",
      description: "Harness the power of thousands of nodes working in parallel to process agent tasks at unprecedented scale."
    },
    {
      title: "Dynamic Load Balancing",
      description: "Intelligent workload distribution ensures optimal resource utilization and prevents bottlenecks."
    },
    {
      title: "Fault Tolerance",
      description: "Automatic recovery from node failures with zero data loss and minimal performance impact."
    },
    {
      title: "Horizontal Scaling",
      description: "Add more compute resources on demand to handle increasing workloads with linear performance scaling."
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
            Parallel Processing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Unlimited scale. Uncompromising performance.
          </motion.p>

          {/* Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-sm border border-blue-500/20 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {metric.label}
                </div>
              </motion.div>
            ))}
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

          {/* Visualization */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <div className="h-80 bg-black/40 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="grid grid-cols-8 grid-rows-8 gap-1 p-4 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-500/20 rounded-sm"
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        backgroundColor: ['rgba(59, 130, 246, 0.2)', 'rgba(139, 92, 246, 0.2)', 'rgba(59, 130, 246, 0.2)']
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center text-white z-10 bg-black/50 px-6 py-3 rounded-sm">
                Parallel Processing Visualization
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl"
          >
            Process millions of agent tasks simultaneously.<br />No bottlenecks. No limits.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallelProcessingSection;
