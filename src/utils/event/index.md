## Event

**全局事件总线工具，用于组件、模块间的跨层级事件通信，支持事件监听、触发与移除。**

---

### 代码演示

```jsx
import { Event } from 'rinokit';

export default () => {
  // 事件回调
  const handleEvent = (data) => {
    console.log('事件触发，接收参数：', data);
  };

  // 注册监听
  const registerEvent = () => {
    Event.on('custom-event', handleEvent);
    console.log('事件监听已注册');
  };

  // 触发事件
  const triggerEvent = () => {
    Event.emit('custom-event', { name: 'Event', type: 'global' });
  };

  // 移除监听
  const removeEvent = () => {
    Event.off('custom-event', handleEvent);
    console.log('事件监听已移除');
  };

  // 公共按钮样式
  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 6,
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.2s',
    fontSize: 14,
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
      }}
    >
      <button
        onClick={registerEvent}
        style={{
          ...buttonStyle,
          background: '#4096ff',
        }}
      >
        注册事件监听
      </button>

      <button
        onClick={triggerEvent}
        style={{
          ...buttonStyle,
          background: '#52c41a',
        }}
      >
        触发自定义事件
      </button>

      <button
        onClick={removeEvent}
        style={{
          ...buttonStyle,
          background: '#faad14',
        }}
      >
        移除事件监听
      </button>
    </div>
  );
};
```

---

### API

```javascript
Event.on(eventName: string, callback: EventCallback): void
```

*注册指定名称的事件监听，同一事件可注册多个回调函数。*

```javascript
Event.off(eventName: string, callback: EventCallback): void
```

*移除指定事件的指定回调函数；若该事件无剩余回调，会自动清理事件缓存。*

```javascript
Event.emit(eventName: string, ...args: unknown[]): void
```

*触发指定名称的事件，并将后续参数传递给所有注册的回调函数。*

---

### 类型说明

```typescript
type EventCallback = (...args: unknown[]) => void;
```

*事件回调函数类型，支持接收任意参数，无返回值。*

---

### 注意事项

- 该工具为全局单例模式，所有引用处共享同一事件池，避免不同业务事件名称冲突。

- 组件销毁前建议调用 off 方法移除监听，防止回调内存泄漏。

- 移除监听时，需传入与注册时相同的回调函数引用（匿名函数无法被正常移除）。

- 触发事件时，若事件未注册监听，不会抛出错误，静默失败。
