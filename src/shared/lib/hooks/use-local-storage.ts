import { useCallback, useEffect, useState } from 'react';

type UseLocalStorageReturn<T> = [
  itemValue: T | null,
  setItemValue: (value: T) => void,
  removeItemValue: () => void
];

interface UseLocalStorageParams<T> {
  key: string;
  value?: T;
}

export const useLocalStorage = <T>({ key, value }: UseLocalStorageParams<T>): UseLocalStorageReturn<T> => {
  const [itemValue, setItemValue] = useState<T | null>(value ?? JSON.parse(localStorage.getItem(key) ?? 'null'));

  const setLocalStorageItem = useCallback(
    (v: T | null) => {
      setItemValue(v);
      localStorage.setItem(key, JSON.stringify(v ?? 'null'));
    },
    [key]
  );

  const removeLocalStorageItem = useCallback(() => {
    localStorage.removeItem(key);
    setItemValue(null);
  }, [key]);

  useEffect(() => {
    const updateState = (event: StorageEvent) => {
      if (key === event.key) {
        setItemValue(JSON.parse(event.newValue ?? 'null'));
      };
    };

    window.addEventListener('storage', updateState);
    return () => window.removeEventListener('storage', updateState);
  }, [key]);

  return [itemValue, setLocalStorageItem, removeLocalStorageItem];
};
