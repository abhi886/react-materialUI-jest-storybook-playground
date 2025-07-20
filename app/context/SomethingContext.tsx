import React, { createContext, useContext, useState } from 'react';

// 1. Define the shape of the context
interface SomethingContextType {
  something: string;
  setSomething: (value: string) => void;
}

// 2. Create the context
const SomethingContext = createContext<SomethingContextType | undefined>(
  undefined
);

// 3. Create the context provider
export const SomethingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [something, setSomething] = useState('Hello Paramatta');

  return (
    <SomethingContext.Provider value={{ something, setSomething }}>
      {children}
    </SomethingContext.Provider>
  );
};

// 4. Custom hook for using the context
export const useSomething = (): SomethingContextType => {
  const context = useContext(SomethingContext);
  if (!context) {
    throw new Error('useSomething must be used within a SomethingProvider');
  }
  return context;
};
