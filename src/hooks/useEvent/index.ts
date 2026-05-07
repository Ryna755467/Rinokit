import { useEffect } from 'react';
import { Event, EventCallback } from 'rinokit';

export const useEvent = (
  eventName: string,
  callback: EventCallback,
  depends: unknown[],
) => {
  useEffect(() => {
    Event.on(eventName, callback);
    return () => {
      Event.off(eventName, callback);
    };
  }, depends);
};
