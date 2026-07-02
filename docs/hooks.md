---
title: Hooks
---

# Hooks

这里是所有自定义 Hooks 的说明文档，markdown 参考结构如下：

:::info{title=提示信息}
这是一条提示信息。
:::

### 调用示例

这是一条调用示例。

```tsx | pure
import { useAnyHook } from 'rinokit';
```

### 函数定义

```typescript
export const useAnyHook = (...args: unknown[]) : unknown
```

### 参数列表

| 参数                                           | 说明               | 类型        | 默认值 |
| ---------------------------------------------- | ------------------ | ----------- | ------ |
| ...args <Badge type="warning">可变参数</Badge> | 动态传递的参数列表 | `unknown[]` | -      |

### 返回值

| 返回值    | 说明 |
| --------- | ---- |
| `unknown` | -    |

<br>
