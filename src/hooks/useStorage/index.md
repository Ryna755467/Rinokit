# useStorage

响应式本地存储 Hook，封装对 `localStorage / sessionStorage` 的读写操作，自带序列化/反序列化、跨标签页状态同步、异常捕获能力。

:::info{title=自动序列化}
内置对 JSON 格式的序列化 / 反序列化，支持直接存储对象、数组等复杂类型，无需手动转换格式。
:::

:::warning{title=跨标签页同步}
跨标签页同步仅在同域名、同浏览器的不同标签页之间生效，同一标签页内修改存储不会触发该事件。
:::

### 调用示例

:::code-group

```tsx | pure [localStorage]
import { useStorage } from 'rinokit';

const App = () => {
  // 存储用户主题偏好，刷新页面后状态不丢失
  const [theme, setTheme] = useStorage(
    'app-theme',
    'light',
    window.localStorage,
  );

  return (
    <div>
      <p>当前主题：{theme}</p>
      <button onClick={() => setTheme('dark')}>切换暗色主题</button>
      <button onClick={() => setTheme('light')}>切换亮色主题</button>
    </div>
  );
};
```

```tsx | pure [sessionStorage]
import { useStorage } from 'rinokit';

const UserForm = () => {
  // 存储表单草稿，页面关闭后自动清除
  const [formDraft, setFormDraft] = useStorage(
    'form-draft',
    { name: '', phone: '', address: '' },
    window.sessionStorage,
  );

  return (
    <form>
      <input
        value={formDraft.name}
        onChange={(e) =>
          setFormDraft((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="姓名"
      />
      <input
        value={formDraft.phone}
        onChange={(e) =>
          setFormDraft((prev) => ({ ...prev, phone: e.target.value }))
        }
        placeholder="手机号"
      />
    </form>
  );
};
```

:::
<br>

### 函数定义

```typescript
import type { SetState } from '@types';

export const useStorage = <T>(
  key: string,
  initialValue: T,
  storage: Storage,
): readonly [T, SetState<T>]
```

### 参数列表

| 参数                                            | 说明                                                   | 类型      | 默认值 |
| ----------------------------------------------- | ------------------------------------------------------ | --------- | ------ |
| key <Badge type="success">必填</Badge>          | 存储项的键名，全局唯一                                 | `string`  | -      |
| initialValue <Badge type="success">必填</Badge> | 初始值，当存储中不存在对应 key 时会使用该值            | `T`       | -      |
| storage <Badge type="success">必填</Badge>      | 存储实例，window.localStorage 或 window.sessionStorage | `Storage` | -      |

### 返回值

返回一个只读数组，包含以下元素：

| 返回值        | 说明                             |
| ------------- | -------------------------------- |
| `T`           | 当前存储项的值                   |
| `SetState<T>` | 更新存储项值的函数，支持回调函数 |

<br>
