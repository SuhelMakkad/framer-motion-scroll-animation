import { motion, useScroll, useTransform } from 'motion/react';

export const Header = () => {
  const { scrollY } = useScroll();

  // Transform scroll progress to opacity and position values
  const h1Opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const h2Opacity = useTransform(scrollY, [100, 400], [0, 1]);
  const translateYContainer = useTransform(scrollY, [100, 400], [0, -100]); // Parallax effect: moves up by 50%
  const translateYHeading = useTransform(scrollY, [100, 400], [0, -150]); // Parallax effect: moves up by 50%

  return (
    <motion.header
      className="fixed inset-0 flex flex-1 flex-col items-center justify-center container-padding"
      style={{ y: translateYContainer }}
    >
      <motion.h1
        className="max-w-4xl text-center text-3xl/tight font-bold md:text-5xl/tight lg:text-7xl/tight"
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
        style={{ opacity: h1Opacity }}
      >
        Welcome to the world of Experiential Marketing
      </motion.h1>

      <motion.h2
        className="max-w-6xl text-center text-3xl/tight font-bold md:text-5xl/tight lg:text-7xl/tight"
        style={{
          opacity: h2Opacity,
          y: translateYHeading,
        }}
      >
        Experiences that are far greater than just engagement
      </motion.h2>
    </motion.header>
  );
};
