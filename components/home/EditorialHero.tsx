'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function EditorialHero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#FDFBF7] text-[#1A1A1A] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20">
        <span className="font-serif italic text-xl">Kiasi & Co.</span>
        <span className="text-xs uppercase tracking-widest opacity-50">Est. 2024</span>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1 border border-[#1A1A1A]/10 rounded-full text-xs uppercase tracking-widest">
            Agence Créative
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-serif font-light leading-[0.9] tracking-tight mb-12"
        >
          We craft <br />
          <span className="italic text-[#C2A878]">legacy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-md mx-auto text-lg text-[#1A1A1A]/60 font-light leading-relaxed"
        >
          Une approche éditoriale du digital pour les marques qui ont une histoire à raconter.
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center">
        <div className="w-[1px] h-24 bg-[#1A1A1A]/10" />
      </div>
    </section>
  );
}
