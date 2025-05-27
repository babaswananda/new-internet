'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RetroGrid } from '@/components/ui/retro-grid';
<<<<<<< HEAD
import { GlowingCard } from '@/components/ui/glowing-card';
=======
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba

const FinalCTASection: React.FC = () => {
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
    <section className="relative min-h-screen w-full py-24 overflow-hidden bg-black" style={{
      transform: 'translateZ(0)',
      willChange: 'transform',
      backfaceVisibility: 'hidden'
    }}>
      {/* RetroGrid container with animation direction set to false for correct direction */}
      <div className="absolute inset-0 flex items-center justify-center">
        <RetroGrid angle={45} className="!opacity-100" />
      </div>

      <div className="container mx-auto px-4 relative z-10"> {/* Content on top with z-10 */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12 text-xl md:text-2xl space-y-4"
          >
            <p>If you missed Bitcoin.</p>
            <p>If you missed Ethereum.</p>
            <p>If you missed buying that NFT of a rock for $8.</p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-12"
          >
            Don't miss the protocol that mints what's next.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
<<<<<<< HEAD
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-sm border border-blue-500/20">
              <div className="text-xl md:text-2xl space-y-4">
                <p>Agent Keys mint soon.</p>
                <p>Contribution window closes May 23.</p>
                <p>This isn't early access. It's early territory.</p>
              </div>
            </GlowingCard>
=======
            <p>Agent Keys mint soon.</p>
            <p>The protocol is syncing.</p>
            <p>You're not joining early. You're writing the rulebook.</p>
>>>>>>> a8bb613d961596c562319d771cbc81914bce23ba
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-sm hover:bg-opacity-90 transition-colors"
            >
              Enter with AI Tokens
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-white border border-white/20 font-bold text-lg rounded-sm hover:bg-white/10 transition-colors"
            >
              Reserve Contributor Slot
            </motion.button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-400"
          >
            Tier Selection + Agent Key Minting + Protocol Access
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
