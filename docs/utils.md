---
title: Utils
---

## Utils 总览

此目录包含所有通用工具函数。

### 使用说明

所有工具函数可直接从包名统一引入：

```tsx
import { formatDate } from 'rinokit';

export default () => {
  const currentTime = formatDate(Date.now());
  return <div>当前时间：{currentTime}</div>;
};
```

### 工具函数规范

- 每个工具函数模块独立目录，目录名与核心函数名一致

- 工具函数放在 index\.ts，采用具名导出（支持单个目录多个工具函数）

- 每个模块配套 index\.md 文档，包含用法演示、参数说明、返回值说明

- 工具函数纯逻辑、无副作用，不依赖 React 环境，可单独复用

### 现有工具函数

- formatDate：时间格式化工具，支持自定义格式化规则（默认 YYYY\-MM\-DD HH:mm:ss）
