import type { RefObject } from 'react';
import { createContext, use } from 'react';

interface ContextValue {
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>
}

export const SliderContext = createContext<ContextValue | null>(null);

export const useSliderContext = () => {
  const contextValue = use(SliderContext);

  if (!contextValue) {
    throw new Error('useSliderContext must be used within a <SliderContext />');
  }

  return contextValue;
};
