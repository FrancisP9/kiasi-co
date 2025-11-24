'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Palette, Globe, Camera, Share2 } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

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

function ServiceCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, rotate, opacity: cardOpacity }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group p-8 md:p-12 bg-foreground/5 hover:bg-[#E8A87C]/10 transition-colors duration-500 rounded-sm relative overflow-hidden cursor-pointer flex flex-col justify-between h-full border border-transparent hover:border-[#E8A87C]/20"
    >
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#D96C06]">
        <ArrowUpRight size={24} />
      </div>

      <div>
        <div className="mb-8 text-foreground/40 group-hover:text-[#D96C06] transition-colors duration-500">
            <service.icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="text-2xl md:text-3xl font-light mb-4">{service.title}</h3>
        <p className="text-foreground/50 mb-8">{service.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag, i) => (
          <span key={i} className="text-xs font-mono px-2 py-1 border border-foreground/10 rounded-full text-foreground/40 bg-background/50 group-hover:border-[#E8A87C]/30 group-hover:text-[#D96C06]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function CinematicServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="bg-background text-foreground py-32 px-6 relative z-10 border-t border-foreground/5 overflow-hidden">
        {/* Geometric Pattern Background (Rappel) */}
        <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
            style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
        />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <h2 className="text-xs font-light tracking-[0.3em] uppercase text-[#8B4513] dark:text-[#E8A87C] mb-4">
                Nos Expertises
              </h2>
              <p className="text-3xl md:text-5xl font-light max-w-2xl leading-tight">
                Nous construisons des écosystèmes digitaux complets.
              </p>
            </div>
            <button className="px-6 py-3 border border-[#E8A87C]/30 rounded-full text-sm hover:bg-[#D96C06] hover:border-[#D96C06] hover:text-white transition-all duration-300">
              Voir tous les services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
