'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'The New Internet Flag',
    price: '$29.99',
    image: '/images/merch/flag.jpg',
    description: 'Show your support for the new internet with our premium quality flag.',
    colors: ['Black', 'White'],
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: 2,
    name: 'Protocol T-Shirt',
    price: '$24.99',
    image: '/images/merch/tshirt.jpg',
    description: 'Premium cotton t-shirt with The New Internet protocol design.',
    colors: ['Black', 'White', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: 'Agent Economy Hoodie',
    price: '$49.99',
    image: '/images/merch/hoodie.jpg',
    description: 'Stay warm while representing the agent economy with our premium hoodie.',
    colors: ['Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Digital Frontier Cap',
    price: '$19.99',
    image: '/images/merch/cap.jpg',
    description: 'Adjustable cap with embroidered logo.',
    colors: ['Black', 'White', 'Blue'],
    sizes: ['One Size']
  },
  {
    id: 5,
    name: 'Protocol Sticker Pack',
    price: '$9.99',
    image: '/images/merch/stickers.jpg',
    description: 'Set of 5 high-quality vinyl stickers featuring protocol designs.',
    colors: ['Mixed'],
    sizes: ['Standard']
  },
  {
    id: 6,
    name: 'Agent Mug',
    price: '$14.99',
    image: '/images/merch/mug.jpg',
    description: '11oz ceramic mug with The New Internet agent design.',
    colors: ['Black', 'White'],
    sizes: ['Standard']
  }
];

const MerchStorePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
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
    <MainLayout>
      <div className="min-h-screen pt-32 pb-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 text-center"
            >
              The New Internet Merch Store
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-16 text-center max-w-3xl mx-auto"
            >
              Represent the future with our exclusive merchandise collection.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="aspect-square relative bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      {/* Placeholder for image */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-blue-400 font-bold mb-4">{product.price}</p>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.colors.map((color) => (
                        <span key={color} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold"
                      onClick={() => setSelectedProduct(product.id)}
                    >
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
              <p className="text-xl mb-8">More products coming soon! Check back regularly for updates.</p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg">
                View All Products
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MerchStorePage;
