import { HOOKS_ERROR_PREFIX } from '@constants';
import { SetState } from '@types';
import { useEffect, useState } from 'react';

const PREFIX = `${HOOKS_ERROR_PREFIX} useStorage`;

export const useStorage = <T>(
  key: string,
  initialValue: T,
  storage: Storage,
): readonly [T, SetState<T>] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`${PREFIX} - 读取存储失败:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`${PREFIX} - 写入存储失败:`, error);
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
          console.error(`${PREFIX} - 监听变化失败:`, error);
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
