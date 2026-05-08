import { UTILS_ERROR_PREFIX } from '@constants';

const PREFIX = `${UTILS_ERROR_PREFIX} formatDecimal`;

export const formatDecimal = (num: number, digits = 2): string => {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new Error(`${PREFIX} - 必须传入有效数字`);
  }
  if (digits < 0) {
    throw new Error(`${PREFIX} - 小数位数不能为负数`);
  }

  return num.toFixed(digits);
};
