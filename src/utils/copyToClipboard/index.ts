export const copyToClipboard = (text: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => resolve(true))
        .catch(() => resolve(false));
    } else {
      resolve(false);
    }
  });
};
