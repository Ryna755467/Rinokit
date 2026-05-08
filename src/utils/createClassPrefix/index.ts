import { UTILS_ERROR_PREFIX } from '@constants';

const PREFIX = `${UTILS_ERROR_PREFIX} createClassPrefix`;

export const createClassPrefix = (
  prefix: string,
): ((className?: string) => string) => {
  if (!prefix) {
    throw new Error(`${PREFIX} - prefix 不能为空`);
  }
  return (className?: string): string =>
    className ? `${prefix}__${className}` : prefix;
};
