import { createContext, use } from 'react';

export interface ToastType {
  variant: 'error' | 'info' | 'success';
  message: string;
  title: string;
  id: number;
};

export interface ToastContextValue {
  close: (id: ToastType['id']) => void,
  add: (toast: ToastType) => void,
  clear: () => void,
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToastContext = () => {
  const contextValue = use(ToastContext);

  if (!contextValue) {
    throw new Error('useToastContext must be used within a <ToastContext />');
  }

  return contextValue;
};
