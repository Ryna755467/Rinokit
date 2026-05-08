import { AnyFunction } from '@types';
import { EventEmitter } from '@utils';
import { useEffect } from 'react';

export const useEvent = (
  eventName: string,
  callback: AnyFunction,
  depends: unknown[],
): void => {
  useEffect(() => {
    EventEmitter.on(eventName, callback);
    return () => {
      EventEmitter.off(eventName, callback);
    };
  }, depends);
};
