# EventEmitter

事件总线工具，提供事件订阅、取消订阅、事件派发能力，适用于组件间解耦通信。

:::info{title=事件总线}
事件总线基于 Map 存储事件与回调函数映射，支持同一事件绑定多个回调，派发时依次执行所有绑定的回调函数。
:::

:::warning{title=全局单例}
当前为全局唯一事件总线，所有文件导入的 EventEmitter 共享事件订阅列表；
:::

### 调用示例

通过 on 订阅事件、emit 触发事件、off 移除指定回调，支持传参给回调函数。

```tsx | pure
import { EventEmitter } from 'rinokit';

const handleRefresh = (msg: string) => {
  console.log('接收刷新消息：', msg);
};

// 订阅 refresh 事件
EventEmitter.on('refresh', handleRefresh);

// 派发事件并传参给回调
EventEmitter.emit('refresh', '页面需要重新加载');

// 取消对应事件的回调订阅
EventEmitter.off('refresh', handleRefresh);

// 取消订阅后，派发不会执行回调
EventEmitter.emit('refresh', '测试');
```

### 函数定义

```typescript
declare const EventEmitter: {
  on: (eventName: string, callback: AnyFunction) => void;
  off: (eventName: string, callback: AnyFunction) => void;
  emit: (eventName: string, ...args: unknown[]) => void;
};
```

### 参数列表

**EventEmitter.on**

| 参数                                         | 说明                     | 类型          | 默认值 |
| -------------------------------------------- | ------------------------ | ------------- | ------ |
| eventName <Badge type="success">必填</Badge> | 事件名称                 | `string`      | -      |
| callback <Badge type="success">必填</Badge>  | 事件触发后执行的回调函数 | `AnyFunction` | -      |

**EventEmitter.off**

| 参数                                         | 说明               | 类型          | 默认值 |
| -------------------------------------------- | ------------------ | ------------- | ------ |
| eventName <Badge type="success">必填</Badge> | 取消订阅的事件名称 | `string`      | -      |
| callback <Badge type="success">必填</Badge>  | 需要移除的回调函数 | `AnyFunction` | -      |

**EventEmitter.emit**

| 参数                                           | 说明                     | 类型        | 默认值 |
| ---------------------------------------------- | ------------------------ | ----------- | ------ |
| eventName <Badge type="success">必填</Badge>   | 需要触发的事件名称       | `string`    | -      |
| ...args <Badge type="warning">可变参数</Badge> | 传递给回调函数的参数列表 | `unknown[]` | -      |

### 返回值

**EventEmitter.on**

| 返回值 | 说明   |
| ------ | ------ |
| `void` | 无返回 |

**EventEmitter.off**

| 返回值 | 说明   |
| ------ | ------ |
| `void` | 无返回 |

**EventEmitter.emit**

| 返回值 | 说明   |
| ------ | ------ |
| `void` | 无返回 |

<br>
