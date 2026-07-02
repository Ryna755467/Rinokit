import { CLASS_PREFIX } from '@constants';
import { classNames, createClassPrefix } from '@utils';
import type { ReactElement, ReactNode } from 'react';
import {
  cloneElement,
  createElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './index.less';

export interface SkeletonProps {
  template: ReactElement;
  count?: number;
}

export type TChildSize = {
  width: number;
  height: number;
};

const prefix = createClassPrefix(`${CLASS_PREFIX}-skeleton`);

const processChildNode = (
  child: ReactNode,
  width?: number,
  height?: number,
): ReactElement | null => {
  // 过滤非React元素节点 文本、数字、null、undefined等
  if (!isValidElement(child)) {
    return null;
  }
  const { type, props } = child;

  // 构建元素类名
  const originalClassName = props.className || '';
  const skeletonType = props['data-skeleton-class'] || 'input';
  const finalClassName = classNames(prefix(skeletonType), originalClassName);

  // 构建元素尺寸
  const style: Record<string, string> = {};
  if (width) style.width = `${width}px`;
  if (height) style.height = `${height}px`;

  // LazyLoadImg组件的特殊处理
  if (skeletonType === 'image') {
    style.border = 'none';
    style.opacity = '1';
  }

  // 返回构建的骨架元素
  return createElement(type, {
    className: finalClassName,
    style: Object.keys(style).length > 0 ? style : undefined,
  });
};

const createSkeElement = (
  template: ReactElement,
  childSizeList: TChildSize[],
): ReactElement[] => {
  const { props = {} } = template || {};
  const children = props.children;
  const childNodes: ReactElement[] = [];

  // 统一转为数组类型
  const childrenArray = Array.isArray(children)
    ? children
    : children
    ? [children]
    : [];

  childrenArray.forEach((child, index) => {
    const { width, height } = childSizeList[index] || {};
    const processedChild = processChildNode(child, width, height);

    // 过滤空值，确保childNodes是ReactElement类型数组
    if (processedChild) {
      childNodes.push(processedChild);
    }
  });

  return childNodes;
};

export const Skeleton = ({ template, count = 1 }: SkeletonProps) => {
  const [childSizeList, setChildSizeList] = useState<TChildSize[]>([]);
  const [isSkeletonInited, setIsSkeletonInited] = useState(false);
  const templateRef = useRef<HTMLElement>(null);

  // 模版元素改变时 重新渲染template 获取新的尺寸
  useEffect(() => {
    setIsSkeletonInited(false);
  }, [template]);

  // 为了感知到连续的setIsSkeletonInited(false) 需要依赖template
  useEffect(() => {
    if (!templateRef.current || isSkeletonInited) return;
    const childElements = templateRef.current!.children;
    const sizeMap: TChildSize[] = [];

    Array.from(childElements).forEach((el) => {
      const rect = el.getBoundingClientRect();
      sizeMap.push({
        width: rect.width,
        height: rect.height,
      });
    });

    setChildSizeList(sizeMap);
    setIsSkeletonInited(true);
  }, [isSkeletonInited, template]);

  const skeletonList = useMemo(() => {
    const skeElement = createSkeElement(template, childSizeList);
    const templateClassName = template?.props?.className ?? '';

    return Array.from({ length: count }, (_, index) => (
      <div className={classNames(prefix(), templateClassName)} key={index}>
        {skeElement}
      </div>
    ));
  }, [template, count, childSizeList]);

  return (
    <>
      {!isSkeletonInited &&
        cloneElement(template, {
          ref: templateRef,
          style: {
            ...template.props.style,
            zIndex: -1,
            visibility: 'hidden',
            pointerEvents: 'none',
          },
        })}
      {skeletonList}
    </>
  );
};
