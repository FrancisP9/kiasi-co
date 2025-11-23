'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Brand Strategy',
    description: 'Positionnement, Storytelling, Identité verbale'
  },
  {
    id: '02',
    title: 'Visual Identity',
    description: 'Logo, Charte graphique, Direction artistique'
  },
  {
    id: '03',
    title: 'Digital Design',
    description: 'Sites web, E-commerce, Applications'
  },
  {
    id: '04',
    title: 'Content Creation',
    description: 'Photographie, Vidéo, Motion Design'
  }
];

export function EditorialServices() {
  return (
    <section className="py-32 px-6 bg-[#FDFBF7] text-[#1A1A1A]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-[#1A1A1A]/10 pb-8">
          <h2 className="text-xs uppercase tracking-widest opacity-50">Expertises</h2>
          <p className="text-sm font-serif italic opacity-60">Sur mesure uniquement</p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-baseline gap-8">
                <span className="text-xs font-mono opacity-30">/{service.id}</span>
                <h3 className="text-4xl md:text-6xl font-serif font-light group-hover:italic transition-all duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm md:text-base opacity-50 max-w-xs md:text-right group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
