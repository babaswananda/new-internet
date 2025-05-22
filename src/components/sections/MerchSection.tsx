'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MerchSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
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

  // Mock merch items - these would come from your API
  const merchItems = [
    {
      id: 1,
      name: 'AI Made Me Rich Tee',
      price: '$35',
      image: '/images/tshirt-placeholder.jpg',
      type: 'tshirt'
    },
    {
      id: 2,
      name: 'Protocol Hoodie',
      price: '$75',
      image: '/images/hoodie-placeholder.jpg',
      type: 'hoodie'
    },
    {
      id: 3,
      name: 'New Internet Poster',
      price: '$25',
      image: '/images/poster-placeholder.jpg',
      type: 'poster'
    },
    {
      id: 4,
      name: 'Agent Key Laptop Decal',
      price: '$12',
      image: '/images/decal-placeholder.jpg',
      type: 'decal'
    },
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
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            AI Made Me Rich
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center"
          >
            Official protocol merch for those who minted upstream.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {merchItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-sm overflow-hidden"
              >
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  {/* This would be an actual image in production */}
                  <div className="text-center text-gray-500">
                    [Product Image]
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.price}</p>
                  <button className="w-full py-2 bg-white text-black font-medium rounded-sm hover:bg-opacity-90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="/merch-store"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Full Merch Store
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
