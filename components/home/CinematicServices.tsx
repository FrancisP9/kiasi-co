'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Brand Identity',
    description: 'Logos, chartes graphiques, direction artistique.',
    tags: ['Strategy', 'Design', 'Art Direction']
  },
  {
    title: 'Digital Experience',
    description: 'Sites web immersifs, e-commerce Shopify, applications.',
    tags: ['Web Design', 'Development', 'UX/UI']
  },
  {
    title: 'Content Production',
    description: 'Photographie, vidéo, motion design, 3D.',
    tags: ['Photo', 'Video', 'Motion']
  },
  {
    title: 'Social Growth',
    description: 'Stratégie social media, création de contenu, campagnes.',
    tags: ['Social Media', 'Ads', 'Copywriting']
  }
];

export function CinematicServices() {
  return (
    <section className="bg-black text-white py-32 px-6 relative z-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-4">
              Nos Expertises
            </h2>
            <p className="text-3xl md:text-5xl font-light max-w-2xl leading-tight">
              Nous construisons des écosystèmes digitaux complets.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
            Voir tous les services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group p-8 md:p-12 bg-white/5 hover:bg-white/10 transition-colors duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight size={24} />
              </div>

              <div className="h-32 flex flex-col justify-between">
                <h3 className="text-2xl md:text-3xl font-light">{service.title}</h3>
                <p className="text-white/50">{service.description}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 border border-white/10 rounded-full text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
