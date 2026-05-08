import { HOOKS_ERROR_PREFIX } from '@constants';
import { useState } from 'react';

const PREFIX = `${HOOKS_ERROR_PREFIX} useToggle`;

export const useToggle = (
  initValue = false,
): readonly [boolean, () => void] => {
  const [state, setState] = useState(initValue);

  const toggle = () => {
    try {
      setState((prev) => !prev);
    } catch (err) {
      console.error(`${PREFIX} - 切换异常:`, err);
    }
  };

  return [state, toggle] as const;
};
