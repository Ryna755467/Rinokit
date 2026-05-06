---
title: Hooks
---

## Hooks 总览

此目录包含所有 React Hooks。

### 使用说明

所有 Hooks 可直接从包名统一引入：

```tsx
import { useToggle } from 'rinokit';

export default () => {
  const { value, toggle } = useToggle();
  return (
    <div>
      <p>状态：{String(value)}</p>
      <button onClick={toggle}>切换状态</button>
    </div>
  );
};
```

### Hooks 规范

- 每个 Hook 独立目录，目录名以 use 开头（符合 React Hooks 命名规范）

- Hook 源码放在 index\.ts，采用具名导出（export function）

- 每个 Hook 配套 index\.md 文档，包含基础用法、参数说明、返回值说明

- Hook 遵循 React Hooks 规则，不在循环、条件、嵌套函数中调用

### 现有 Hooks

- useToggle：布尔值状态切换 Hook，用于快速实现开关、切换等功能