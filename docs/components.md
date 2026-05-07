---
title: Components
---

## Components 总览

此目录包含所有 UI 组件。

### 使用说明

所有组件可直接从包名统一引入：

```tsx
import { Foo } from 'rinokit';

export default () => {
  return <Foo title="示例组件" />;
};
```

### 组件规范

- 每个组件独立目录，目录名与组件名一致（首字母大写）

- 组件源码放在 index\.tsx，采用默认导出（export default）

- 每个组件配套 index\.md 文档，包含用法演示、API 说明

- 组件支持 props 类型定义，确保类型安全

### 现有组件

- Foo：示例组件，用于演示组件基础用法
