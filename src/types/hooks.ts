import { Dispatch, SetStateAction } from 'react';

/** 状态设置函数 */
export type SetState<T> = Dispatch<SetStateAction<T>>;
