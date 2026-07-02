# useEvent

组件事件订阅 Hook，组件挂载时订阅指定事件，组件卸载自动取消订阅，自动管理生命周期。

:::info{title=使用说明}
内部依赖全局 EventEmitter 事件总线，配合 useEffect 实现自动订阅与销毁解绑，避免内存泄漏。
:::

### 调用示例

:::code-group

```tsx | pure [监听事件]
import { useCallback } from 'react';
import { useEvent } from 'rinokit';

const UserInfo = () => {
  const handleLogin = useCallback((userInfo: { name: string; id: number }) => {
    // 具体业务逻辑
  }, []);

  // 监听登录事件
  useEvent('login', handleLogin, [handleLogin]);

  return <div>用户信息组件</div>;
};
```

```tsx | pure [触发事件]
import { EventEmitter } from 'rinokit';

const LoginButton = () => {
  const handleClick = () => {
    // 触发登录事件
    EventEmitter.emit('login', { name: '张三', id: 1001 });
  };

  return <button onClick={handleClick}>登录</button>;
};
```

:::
<br>

### 函数定义

```typescript
import type { AnyFunction } from '@types';

export const useEvent = (eventName: string, callback: AnyFunction, depends: unknown[]) : void
```

### 参数列表

| 参数                                         | 说明                     | 类型          | 默认值 |
| -------------------------------------------- | ------------------------ | ------------- | ------ |
| eventName <Badge type="success">必填</Badge> | 要订阅的全局事件名称     | `string`      | -      |
| callback <Badge type="success">必填</Badge>  | 事件触发时执行的回调函数 | `AnyFunction` | -      |
| depends <Badge type="success">必填</Badge>   | 依赖项列表               | `unknown[]`   | -      |

### 返回值

| 返回值 | 说明   |
| ------ | ------ |
| `void` | 无返回 |

<br>
