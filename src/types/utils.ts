/** 任意对象 */
export type PlainObject = Record<string, unknown>;

/** 任意函数 */
export type AnyFunction = (...args: unknown[]) => unknown;

/** 任意异步函数 */
export type AsyncFunction = (...args: unknown[]) => Promise<unknown>;
