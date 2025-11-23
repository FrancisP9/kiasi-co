'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Briefcase, Users, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Accueil', href: '/' },
  { icon: Briefcase, label: 'Projets', href: '/projets' },
  { icon: Users, label: 'Studio', href: '/studio' },
  { icon: Mail, label: 'Contact', href: '/contact' },
];

export function FloatingNav() {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="pointer-events-auto bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl flex items-center gap-6 md:gap-8"
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center gap-1 group"
          >
            <div className="p-2 rounded-full group-hover:bg-white/10 transition-colors duration-300">
              <item.icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 absolute -top-8 bg-black/80 px-2 py-1 rounded backdrop-blur-md">
              {item.label}
            </span>
          </Link>
        ))}
      </motion.nav>
    </div>
  );
}
