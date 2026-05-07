## useEvent

**React 自定义钩子，用于在组件中使用全局事件总线，自动完成事件监听与卸载，避免内存泄漏。**

---

### 代码演示

```jsx
import { useState } from 'react';
import { useEvent, Event } from 'rinokit';

export default () => {
  const [eventData, setEventData] = useState(null);

  // 事件回调函数
  const handleCustomEvent = (data) => {
    setEventData(data);
    console.log('监听事件触发，接收参数：', data);
  };

  // 触发事件
  const triggerEvent = () => {
    Event.emit('custom-event', { name: 'useEvent', type: 'hook' });
  };

  // 使用 useEvent 自动注册/销毁监听
  useEvent('custom-event', handleCustomEvent, []);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
        lineHeight: 1.6,
      }}
    >
      <button
        onClick={triggerEvent}
        style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: 6,
          backgroundColor: '#4096ff',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background 0.2s',
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        触发 custom-event 事件
      </button>

      <p style={{ fontWeight: 500 }}>
        eventData: {eventData ? JSON.stringify(eventData) : '暂无数据'}
      </p>
    </div>
  );
};
```

---

### API

```javascript
useEvent(eventName: string, callback: EventCallback, depends: unknown[]): void
```

- **eventName: string** - 必选，需要监听的全局事件名称，需与 Event.emit 触发的事件名称保持一致。

- **callback: EventCallback** - 必选，事件触发时执行的回调函数，可接收事件传递的任意参数。

- **depends: unknown[]** - 必选，React 依赖项数组，依赖项变化时，会先移除原有监听，再重新注册新的监听。

*绑定全局事件监听，并在组件卸载或依赖项变化时自动移除监听，简化事件操作流程。*

---

### 类型说明

```typescript
type EventCallback = (...args: unknown[]) => void;
```

*事件回调函数类型（与 Event 工具共用）*

```typescript
type UseEvent = (
  eventName: string,
  callback: EventCallback,
  depends: unknown[],
) => void;
```

*useEvent 钩子类型定义*

---

### 注意事项

- 依赖项数组`depends`需合理配置，若传入空数组，则仅在组件挂载时注册监听、卸载时移除监听。

- 回调函数建议使用稳定引用（如 useCallback 包裹），避免因回调函数引用变化，导致依赖项更新，频繁注册/移除监听。

- 该钩子依赖全局 Event 工具，使用前需确保 Event 工具已正确引入，且事件名称与触发时的名称完全一致。

- 若需停止监听特定事件，无需手动调用 Event.off，组件卸载或依赖项变化时会自动清理。
