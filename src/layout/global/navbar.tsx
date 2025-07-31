import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

import { Logo } from '@/components/icons/logo';
import { useRingAnimation } from '@/contexts/ring-animation-context';

export const navbarId = 'navbar';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const { isRingExtracted } = useRingAnimation();

  // Ring border animation for logo (starts after flying ring arrives)
  const ringBorderScale = useTransform(scrollY, [440, 460], [0, 1]);
  const ringBorderOpacity = useTransform(scrollY, [440, 460], [0, 1]);

  return (
    <motion.nav
      id={navbarId}
      className="fixed top-0 left-0 flex w-full items-center gap-4 bg-background/50 p-4 backdrop-blur-sm z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
    >
      <div className="relative">
        <Logo />
        
        {/* Animated ring border around logo */}
        <AnimatePresence>
          {isRingExtracted && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                scale: ringBorderScale,
                opacity: ringBorderOpacity,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 rounded-full border-4 border-yellow-400 animate-pulse shadow-lg shadow-yellow-400/50 bg-yellow-400/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <span className="text-3xl font-bold">Co-Curators</span>
    </motion.nav>
  );
};
