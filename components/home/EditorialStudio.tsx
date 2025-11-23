'use client';

import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Jonathan Mwamba',
    role: 'Director',
  },
  {
    name: 'Francis Paul Inonga',
    role: 'Tech Lead',
  },
  {
    name: 'Sharon',
    role: 'Art Director',
  }
];

export function EditorialStudio() {
  return (
    <section className="py-32 px-6 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-24">
          <h2 className="text-xs uppercase tracking-widest opacity-50 mb-6">Le Studio</h2>
          <p className="text-3xl md:text-5xl font-serif font-light leading-tight">
            Nous sommes un collectif de créatifs passionnés par l'excellence et l'authenticité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-[#1A1A1A]/5 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                 {/* Placeholder for team photo */}
                 <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif italic opacity-20">{member.name}</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest opacity-40">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
