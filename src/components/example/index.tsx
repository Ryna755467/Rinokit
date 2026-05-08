import { CLASS_PREFIX } from '@constants';
import { BaseProps } from '@types';
import { classNames, createClassPrefix } from '@utils';
import './index.less';

export interface ExampleProps extends BaseProps {
  content: string;
}

const prefix = createClassPrefix(`${CLASS_PREFIX}-example`);

export const Example = ({ className, style, content }: ExampleProps) => {
  return (
    <div className={classNames(prefix(), className)} style={style}>
      {content}
    </div>
  );
};
