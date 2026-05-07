export type EventCallback = (...args: unknown[]) => void;

const events = new Map<string, EventCallback[]>();

const on = (eventName: string, callback: EventCallback): void => {
  if (!events.has(eventName)) {
    events.set(eventName, []);
  }
  events.get(eventName)!.push(callback);
};

const off = (eventName: string, callback: EventCallback): void => {
  if (!events.has(eventName)) return;

  const callbacks = events.get(eventName)!.filter((cb) => cb !== callback);
  if (callbacks.length === 0) {
    events.delete(eventName);
  } else {
    events.set(eventName, callbacks);
  }
};

const emit = (eventName: string, ...args: unknown[]): void => {
  if (!events.has(eventName)) return;
  events.get(eventName)!.forEach((callback) => callback(...args));
};

export const Event = { on, off, emit };
