import { CSSProperties } from 'react';

/** 组件通用属性 */
export interface BaseProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

/** 弹窗组件属性 */
export interface PopupProps {
  /** 是否可见 */
  open?: boolean;
  /** 遮罩层 */
  mask?: boolean;
  /** 打开回调 */
  onOpen?: () => void;
  /** 关闭回调 */
  onClose?: () => void;
}
