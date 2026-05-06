# formatDate

时间格式化工具函数。

## 基础用法

```jsx
import { formatDate } from 'rinokit';

export default () => {
  const now = formatDate(Date.now());
  return <div>当前时间：{now}</div>;
};
```
