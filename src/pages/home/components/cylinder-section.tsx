import { motion, useScroll, useTransform } from 'motion/react';

import { useRef } from 'react';

import { Circle } from '@/components/icons/circle';
import { Cylinder } from '@/components/icons/cylinder';

import { cn } from '@/lib/utils';

export const CylinderSection = () => {
  const { scrollY } = useScroll();
  const cylinderRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);

  // Transform scroll progress to move cylinder up slightly
  const translateY = useTransform(scrollY, [0, 400], [0, -250]);
  const textColor = useTransform(scrollY, [0, 400], ['#f9e500', '#ffffff']);

  //   useEffect(() => {
  //     const unsubscribe = scrollY.on('change', (latest) => {
  //       let startRingAnimation = false;
  //       if (latest >= 400) {
  //         startRingAnimation = true;
  //       }

  //       if (!startRingAnimation || !ringRef.current || !cylinderRef.current) {
  //         return;
  //       }

  //       const navbar = document.getElementById(navbarId);
  //       if (!navbar) {
  //         return;
  //       }

  //       const { x: currentX, y: currentY } = cylinderRef.current.getBoundingClientRect();
  //       const { x: targetX, y: targetY } = navbar.getBoundingClientRect();

  //       ringRef.current.style.display = 'block';
  //       ringRef.current.animate(
  //         [
  //           {
  //             top: currentY,
  //             left: currentX,
  //           },
  //           {
  //             top: targetY,
  //             left: targetX,
  //           },
  //         ],
  //         { duration: 1000, easing: 'ease-in-out' }
  //       );
  //     });

  //     return () => unsubscribe();
  //   }, [scrollY]);

  return (
    <>
      <Circle ref={ringRef} className="hidden" />

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
