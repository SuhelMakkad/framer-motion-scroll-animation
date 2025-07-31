import { motion, useScroll, useTransform } from 'motion/react';

import { useEffect, useRef, useState } from 'react';

import { Cylinder } from '@/components/icons/cylinder';

import { navbarLogoId } from '@/layout/global/navbar';
import { cn } from '@/lib/utils';

export const CylinderSection = () => {
  const { scrollY } = useScroll();
  const cylinderRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [thresholdReached, setThresholdReached] = useState(false);

  // Transform scroll progress to move cylinder up slightly
  const translateY = useTransform(scrollY, [0, 400], [0, -250]);
  const textColor = useTransform(scrollY, [0, 400], ['#f9e500', '#ffffff']);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest < 350 || !ringRef.current || !cylinderRef.current || thresholdReached) {
        return;
      }

      const navbar = document.getElementById(navbarLogoId);
      if (!navbar) {
        return;
      }

      const { top: currentTop, left: currentLeft } = cylinderRef.current.getBoundingClientRect();
      const {
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: targetHeight,
      } = navbar.getBoundingClientRect();

      const { width: currentWidth, height: currentHeight } =
        cylinderRef.current.getElementsByTagName('ellipse')?.[0]?.getBoundingClientRect() || {};

      ringRef.current.style.display = 'block';
      ringRef.current.animate(
        [
          {
            top: `${currentTop}px`,
            left: `${currentLeft}px`,
            width: `${currentWidth}px`,
            height: `${currentHeight}px`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          },
          {
            top: `${targetTop}px`,
            left: `${targetLeft}px`,
            width: `${targetWidth}px`,
            height: `${targetHeight}px`,
            borderRadius: '50%',
          },
        ],
        { duration: 1000, easing: 'ease-in-out', fill: 'forwards' }
      );

      setThresholdReached(true);
    });

    return () => unsubscribe();
  }, [scrollY, thresholdReached]);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed z-100 hidden size-8 border-2 border-yellow-400"
        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
      />

      <motion.div
        ref={cylinderRef}
        initial={{ opacity: 0, y: 150, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.3 }}
        className={cn('fixed right-0 -bottom-30 left-0 mx-auto w-full')}
        style={{ y: translateY, color: textColor }}
      >
        <Cylinder className="w-full" />
      </motion.div>
    </>
  );
};
