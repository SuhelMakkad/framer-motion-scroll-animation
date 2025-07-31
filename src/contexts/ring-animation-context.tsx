import React, { createContext, useContext, useState } from 'react';

interface RingAnimationContextType {
  isRingExtracted: boolean;
  setIsRingExtracted: (extracted: boolean) => void;
  ringPosition: { x: number; y: number };
  setRingPosition: (position: { x: number; y: number }) => void;
}

const RingAnimationContext = createContext<RingAnimationContextType | undefined>(undefined);

export const useRingAnimation = () => {
  const context = useContext(RingAnimationContext);
  if (!context) {
    throw new Error('useRingAnimation must be used within a RingAnimationProvider');
  }
  return context;
};

export const RingAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRingExtracted, setIsRingExtracted] = useState(false);
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  return (
    <RingAnimationContext.Provider
      value={{
        isRingExtracted,
        setIsRingExtracted,
        ringPosition,
        setRingPosition,
      }}
    >
      {children}
    </RingAnimationContext.Provider>
  );
};