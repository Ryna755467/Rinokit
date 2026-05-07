## useStorage

**React 自定义钩子，用于便捷操作 localStorage/sessionStorage，自动同步存储数据与组件状态，支持跨标签页数据同步，包含异常处理，避免存储操作报错。**

---

### 代码演示

```jsx
import { useStorage } from 'rinokit';

export default () => {
  // 操作localStorage，初始值为空对象，key为userInfo
  const [userInfo, setUserInfo] = useStorage('userInfo', {}, localStorage);

  // 操作sessionStorage，初始值为0，key为count
  const [count, setCount] = useStorage('count', 0, sessionStorage);

  // 更新localStorage数据
  const updateUserInfo = () => {
    setUserInfo({ name: 'rinokit', age: 1, desc: '自定义钩子工具' });
  };

  // 更新sessionStorage数据
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#f5f7fa',
        lineHeight: 1.6,
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={updateUserInfo}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#4096ff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
            marginRight: 12,
          }}
        >
          更新 localStorage 数据
        </button>
        <p style={{ marginTop: 12, fontWeight: 500 }}>
          localStorage.userInfo:{' '}
          {userInfo ? JSON.stringify(userInfo) : '暂无数据'}
        </p>
      </div>

      <div>
        <button
          onClick={incrementCount}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#52c41a',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
            marginRight: 12,
          }}
        >
          累加 sessionStorage 计数
        </button>
        <p style={{ marginTop: 12, fontWeight: 500 }}>
          sessionStorage.count: {count}
        </p>
      </div>
    </div>
  );
};
```

---

### API

```javascript
useStorage<T>(key: string, initialValue: T, storage: Storage): [T, (value: T | ((prev: T) => T)) => void]
```

_绑定存储键值对，自动同步组件状态与存储数据，支持跨标签页监听存储变化，自动处理存储和读取异常，返回状态值与更新函数。_

- **key: string** - 必选，存储的键名，用于标识存储数据，同一存储对象（localStorage/sessionStorage）中键名需唯一。

- **initialValue: T** - 必选，初始值，当存储中无对应键名数据时，使用该值作为组件初始状态，支持任意可序列化的数据类型（对象、数组、基本类型等）。

- **storage: Storage** - 必选，指定存储对象，仅支持 `localStorage` 或 `sessionStorage`。

_返回值：数组 [value, setValue]，value 为当前存储的状态值，setValue 为状态更新函数，支持直接传入新值或接收前值返回新值的函数。_

---

### 类型说明

```typescript
type UseStorage = <T>(
  key: string,
  initialValue: T,
  storage: Storage,
) => [T, (value: T | ((prev: T) => T)) => void];
```

_useStorage 钩子类型定义_

---

### 注意事项

- 存储的数据必须是可序列化的（如对象、数组、字符串、数字等），无法存储函数、Symbol、Date 等不可序列化类型（会自动转换为字符串，可能导致数据异常）。

- 指定的 storage 只能是 localStorage 或 sessionStorage，传入其他对象会导致存储操作失败，控制台会输出对应错误信息。

- 支持跨标签页数据同步：同一浏览器下，一个标签页修改存储数据后，其他使用相同 key 和 storage 的组件会自动同步更新状态。

- 内置异常处理：当存储满、权限不足等导致存储/读取失败时，会在控制台输出错误信息，且组件状态不会异常崩溃，仍使用初始值或当前值。

- 更新状态时，setValue 支持函数式更新（如 setCount((prev) => prev + 1)），适用于需要依赖前状态更新的场景。
