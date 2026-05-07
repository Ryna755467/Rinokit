export const createClassPrefix = (prefix: string) => {
  if (!prefix) {
    throw new Error('Prefix cannot be empty');
  }
  return (className?: string): string =>
    className ? `${prefix}__${className}` : prefix;
};
