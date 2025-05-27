'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const FreeHandleProgramSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="free-handle-program" className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-12 text-center"
          >
            FREE HANDLE PROGRAM
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">FOR EDUCATION</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong>.VibeCoder handles free for students</strong></li>
                  <li>• Teacher LMS training and certification</li>
                  <li>• Long-term vaults and graduation drops</li>
                  <li>• Curriculum integration support</li>
                  <li>• Student portfolio development</li>
                  <li>• Career pathway guidance</li>
                </ul>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-blue-500/20 border border-blue-500/40 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    ONBOARD SCHOOL
                  </motion.button>
                </div>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">FOR ENTERPRISE</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong>.EnterpriseCoding free for 30 days</strong></li>
                  <li>• AI auto-ops, dashboards, container deployment</li>
                  <li>• Optional full-service onboarding via .DevAgency</li>
                  <li>• Custom integration support</li>
                  <li>• Enterprise-grade security and compliance</li>
                  <li>• Dedicated account management</li>
                </ul>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/30 transition-colors"
                  >
                    ONBOARD ORGANIZATION
                  </motion.button>
                </div>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">Program Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="font-semibold mb-2">Educational Access</h4>
                  <p className="text-gray-300 text-sm">Free access to cutting-edge AI development tools for students and educators</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="font-semibold mb-2">Enterprise Trial</h4>
                  <p className="text-gray-300 text-sm">30-day free trial with full enterprise features and support</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-semibold mb-2">Full Support</h4>
                  <p className="text-gray-300 text-sm">Comprehensive onboarding and training for all program participants</p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-xl md:text-2xl font-bold mb-4">
              Democratizing access to the future of AI development.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're teaching the next generation or building the next breakthrough,<br />
              we're here to support your journey.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              APPLY FOR FREE ACCESS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeHandleProgramSection;
