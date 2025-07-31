import { motion, useScroll, useTransform } from 'motion/react';

import { PeopleRow } from '@/components/icons/people-row';

export const PeopleSection = () => {
  const { scrollY } = useScroll();

  // Animation threshold - similar to cylinder animation
  const peopleOpacity = useTransform(scrollY, [0, 400], [0, 1]);
  const peopleY = useTransform(scrollY, [0, 400], [250, 50]);
  const peopleScale = useTransform(scrollY, [0, 400], [1.2, 1]);

  return (
    <motion.div
      className="fixed right-0 bottom-0 left-0 mx-auto w-full"
      style={{
        color: '#f9e500',
        y: peopleY,
        opacity: peopleOpacity,
        scale: peopleScale,
      }}
    >
      <PeopleRow className="max-w-full overflow-hidden" />
    </motion.div>
  );
};
