'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function EditorialContact() {
  return (
    <section className="py-32 px-6 bg-[#FDFBF7] text-[#1A1A1A] border-t border-[#1A1A1A]/10">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-12">
            Let's build something <br />
            <span className="italic text-[#C2A878]">timeless.</span>
          </h2>

          <a 
            href="mailto:hello@kiasi.co" 
            className="inline-block text-lg border-b border-[#1A1A1A] pb-1 hover:text-[#C2A878] hover:border-[#C2A878] transition-colors mb-16"
          >
            hello@kiasi.co
          </a>

          <div className="flex justify-center gap-8 text-xs uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>

          <div className="mt-32 text-[10px] opacity-20 uppercase tracking-widest">
            © 2024 Kiasi & Co.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
