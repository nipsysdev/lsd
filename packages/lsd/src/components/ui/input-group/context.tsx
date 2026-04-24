import * as React from 'react';
import type { InputGroupSize } from './types';

interface InputGroupContextValue {
  size: InputGroupSize;
}

const InputGroupContext = React.createContext<InputGroupContextValue | undefined>(undefined);

interface InputGroupProviderProps {
  children: React.ReactNode;
  size: InputGroupSize;
}

export const InputGroupProvider: React.FC<InputGroupProviderProps> = ({ children, size }) => {
  return <InputGroupContext.Provider value={{ size }}>{children}</InputGroupContext.Provider>;
};

export const useInputGroup = (): InputGroupContextValue => {
  const context = React.useContext(InputGroupContext);
  if (context === undefined) {
    throw new Error('useInputGroup must be used within an InputGroupProvider');
  }
  return context;
};
