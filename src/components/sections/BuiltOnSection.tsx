'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BuiltOnSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-400 leading-relaxed">
            Built on revolutionary AI infrastructure that powers the next generation of intelligent applications, 
            from autonomous agents to real-time model routing, creating a unified ecosystem where AI works seamlessly together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltOnSection;
