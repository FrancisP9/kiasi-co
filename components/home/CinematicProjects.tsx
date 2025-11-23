'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Kivu Coffee Lab',
    category: 'Branding',
    image: '/images/project1.jpg', // Placeholder
    year: '2024'
  },
  {
    title: 'Afro Glow',
    category: 'E-commerce',
    image: '/images/project2.jpg', // Placeholder
    year: '2023'
  },
  {
    title: 'Diaspora Hub',
    category: 'Digital Product',
    image: '/images/project3.jpg', // Placeholder
    year: '2023'
  }
];

export function CinematicProjects() {
  return (
    <section className="bg-black text-white py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-24">
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/40">
            Sélection de travaux
          </h2>
          <span className="text-xs font-mono text-white/40">01 — 03</span>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-8 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-serif italic">
                  {project.title} Image
                </div>
                
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 z-20" />
              </div>

              <div className="flex justify-between items-baseline border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors duration-500">
                <div>
                  <h3 className="text-3xl md:text-5xl font-light mb-2 group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-mono text-sm">
                    {project.category}
                  </p>
                </div>
                <span className="text-white/40 font-mono text-sm">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
