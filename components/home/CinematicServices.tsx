'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Palette, Globe, Camera, Share2 } from 'lucide-react';

const services = [
  {
    title: 'Brand Identity',
    description: 'Logos, chartes graphiques, direction artistique.',
    tags: ['Strategy', 'Design', 'Art Direction'],
    icon: Palette
  },
  {
    title: 'Digital Experience',
    description: 'Sites web immersifs, e-commerce Shopify, applications.',
    tags: ['Web Design', 'Development', 'UX/UI'],
    icon: Globe
  },
  {
    title: 'Content Production',
    description: 'Photographie, vidéo, motion design, 3D.',
    tags: ['Photo', 'Video', 'Motion'],
    icon: Camera
  },
  {
    title: 'Social Growth',
    description: 'Stratégie social media, création de contenu, campagnes.',
    tags: ['Social Media', 'Ads', 'Copywriting'],
    icon: Share2
  }
];

export function CinematicServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="bg-background text-foreground py-32 px-6 relative z-10 border-t border-foreground/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8"
        >
          <div>
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-foreground/40 mb-4">
              Nos Expertises
            </h2>
            <p className="text-3xl md:text-5xl font-light max-w-2xl leading-tight">
              Nous construisons des écosystèmes digitaux complets.
            </p>
          </div>
          <button className="px-6 py-3 border border-foreground/20 rounded-full text-sm hover:bg-foreground hover:text-background transition-colors duration-300">
            Voir tous les services
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            });
            
            const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
            const rotate = useTransform(cardProgress, [0, 0.5, 1], [-5, 0, 5]);
            const cardOpacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ scale, rotate, opacity: cardOpacity }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group p-8 md:p-12 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500 rounded-sm relative overflow-hidden cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight size={24} />
                </div>

                <div>
                  <div className="mb-8 text-foreground/40 group-hover:text-foreground/80 transition-colors duration-500">
                     <service.icon size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light mb-4">{service.title}</h3>
                  <p className="text-foreground/50 mb-8">{service.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded-full text-foreground/40 bg-background/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
