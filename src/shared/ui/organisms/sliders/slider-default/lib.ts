import type { RefObject } from 'react';
import { createContext, use } from 'react';

interface ContextValue {
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>
}

export const SliderContext = createContext<ContextValue | null>(null);

export const useSliderContext = () => {
  const ctx = use(SliderContext);
  if (!ctx) {
    throw new Error('useSliderContext must be used within a <SliderContext />');
  }
  return ctx;
};
