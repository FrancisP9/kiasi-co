'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Kivu Coffee',
    category: 'Branding',
    year: '2024',
    image: 'bg-[#C2A878]/20'
  },
  {
    title: 'Afro Glow',
    category: 'E-commerce',
    year: '2023',
    image: 'bg-[#A5562C]/20'
  },
  {
    title: 'Diaspora Hub',
    category: 'Platform',
    year: '2023',
    image: 'bg-[#1D3928]/20'
  }
];

export function EditorialProjects() {
  return (
    <section className="py-32 px-6 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-32">
          <h2 className="text-5xl md:text-7xl font-serif font-light leading-none">
            Selected <br />
            <span className="italic text-[#C2A878]">Works</span>
          </h2>
          <span className="hidden md:block text-xs uppercase tracking-widest opacity-50 rotate-90 origin-left translate-y-8">
            Portfolio 2024
          </span>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-3/5 aspect-[4/3] relative bg-[#1A1A1A]/5 overflow-hidden group">
                <div className={`absolute inset-0 ${project.image} opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif italic text-2xl opacity-20">{project.title} Image</span>
                </div>
              </div>

              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono opacity-40 uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="w-8 h-[1px] bg-[#1A1A1A]" />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-4xl font-serif font-light">{project.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-xs">
                  Une identité visuelle conçue pour traverser les frontières et marquer les esprits durablement.
                </p>
                <button className="text-xs uppercase tracking-widest border-b border-[#1A1A1A]/20 pb-1 hover:border-[#C2A878] hover:text-[#C2A878] transition-colors">
                  Voir le projet
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-40 text-center">
          <button className="px-8 py-4 border border-[#1A1A1A]/10 rounded-full text-xs uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500">
            Voir tous les projets
          </button>
        </div>
      </div>
    </section>
  );
}
