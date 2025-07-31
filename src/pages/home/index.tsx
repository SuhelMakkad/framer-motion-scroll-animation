import { RingAnimationProvider } from '@/contexts/ring-animation-context';

import { CylinderSection } from './components/cylinder-section';
import { Header } from './components/header';
import { PeopleSection } from './components/people-section';

export const HomePage = () => {
  return (
    <RingAnimationProvider>
      <main className="flex flex-1 flex-col">
        <Header />

        <CylinderSection />

        <PeopleSection />

        <section className="h-[calc(100vh*2)]" />
      </main>
    </RingAnimationProvider>
  );
};
