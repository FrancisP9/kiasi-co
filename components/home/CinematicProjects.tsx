'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Kivu Coffee Lab',
    category: 'Branding',
    image: '/images/project1.jpg',
    year: '2024'
  },
  {
    title: 'Afro Glow',
    category: 'E-commerce',
    image: '/images/project2.jpg',
    year: '2023'
  },
  {
    title: 'Diaspora Hub',
    category: 'Digital Product',
    image: '/images/project3.jpg',
    year: '2023'
  }
];

export function CinematicProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="bg-background text-foreground py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          style={{ y: titleY }}
          className="flex items-end justify-between mb-24"
        >
          <h2 className="text-xs font-light tracking-[0.3em] uppercase text-foreground/40">
            Sélection de travaux
          </h2>
          <span className="text-xs font-mono text-foreground/40">01 — 03</span>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const projectRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: projectProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "center center"]
            });

            const scale = useTransform(projectProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
            const opacity = useTransform(projectProgress, [0, 0.3, 0.7], [0, 1, 1]);
            const x = useTransform(projectProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);

            return (
              <motion.div
                key={index}
                ref={projectRef}
                style={{ opacity }}
                className="group cursor-pointer"
              >
                <motion.div 
                  style={{ scale, x }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative aspect-[16/9] overflow-hidden mb-8 bg-foreground/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                  
                  <div className="absolute inset-0 flex items-center justify-center text-foreground/10 text-4xl font-serif italic">
                    {project.title} Image
                  </div>
                  
                  <div className="absolute inset-0 border border-foreground/10 group-hover:border-foreground/30 transition-colors duration-500 z-20" />
                </motion.div>

                <div className="flex justify-between items-baseline border-t border-foreground/10 pt-6 group-hover:border-foreground/30 transition-colors duration-500">
                  <div>
                    <motion.h3 
                      whileHover={{ x: 10 }}
                      className="text-3xl md:text-5xl font-light mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-foreground/40 font-mono text-sm">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-foreground/40 font-mono text-sm">{project.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
