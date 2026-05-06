# useToggle

布尔值状态切换 Hook。

## 基础用法

```jsx
import { useToggle } from 'rinokit';

export default () => {
  const { value, toggle } = useToggle();
  return (
    <div>
      <p>状态：{String(value)}</p>
      <button onClick={toggle}>切换</button>
    </div>
  );
};
```
