import { motion } from 'motion/react';

import { Logo } from '@/components/icons/logo';

export const navbarLogoId = 'navbar';

export const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 flex w-full items-center gap-4 bg-background/50 p-4 backdrop-blur-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
    >
      <div id={navbarLogoId} className="relative size-7.5">
        <Logo className="size-full flex-none shrink-0" />
      </div>

      <span className="text-3xl font-bold">Co-Curators</span>
    </motion.nav>
  );
};
