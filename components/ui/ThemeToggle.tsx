'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-300 group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? (
          <Moon size={20} className="text-white group-hover:text-blue-300 transition-colors" />
        ) : (
          <Sun size={20} className="text-gray-900 group-hover:text-yellow-500 transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
}
