import { RingAnimationProvider } from '@/contexts/ring-animation-context';

import { Navbar } from './navbar';

export const GlobalLayout = (props: React.PropsWithChildren) => {
  return (
    <RingAnimationProvider>
      <Navbar />

      {props.children}
    </RingAnimationProvider>
  );
};
