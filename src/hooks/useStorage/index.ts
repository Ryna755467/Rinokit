import { useEffect, useState } from 'react';

export const useStorage = <T>(
  key: string,
  initialValue: T,
  storage: Storage,
) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage: ${error}`);
    }
  }, [value, key, storage]);

  useEffect(() => {
    const listener = (ev: StorageEvent) => {
      if (ev.key === key) {
        try {
          const newValue = ev.newValue ? JSON.parse(ev.newValue) : null;
          if (newValue !== null) {
            setValue(newValue);
          }
        } catch (error) {
          console.error(`Error parsing localStorage change: ${error}`);
        }
      }
    };

    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key]);

  return [value, setValue] as const;
};
