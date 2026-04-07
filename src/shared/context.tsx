import { createContext, useMemo, useState } from 'react';

export const ToggleContext = createContext({
  isOpen: false,
  toggle: () => {}
});

export const ToggleContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ctxValue = useMemo(() => ({ isOpen, toggle: () => setIsOpen((prev) => !prev) }), [isOpen]);

  return (
    <ToggleContext value={ctxValue}>
      {children}
      <button style={{ position: 'fixed', top: 0, left: 0, color: '#fff', zIndex: 1000 }} onClick={ctxValue.toggle} type='button'>Toggle</button>
    </ToggleContext>
  );
};
