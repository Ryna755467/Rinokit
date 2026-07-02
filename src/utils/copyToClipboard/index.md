# copyToClipboard

剪贴板复制工具，异步将文本写入系统剪贴板，返回 `Promise` 标识复制成功 / 失败状态。

:::info{title=错误处理}
内部已捕获所有底层错误，Promise 只会 resolve，无需使用 catch 捕获异常。
:::

:::warning{title=兼容性提示}
依赖浏览器标准剪贴板 API，不支持该接口的环境会直接复制失败。
:::

### 调用示例

:::code-group

```typescript [.then]
import { copyToClipboard } from 'rinokit';

copyToClipboard('需要复制的文本内容').then((success) => {
  if (success) {
    console.log('复制成功');
  } else {
    console.log('复制失败，当前环境不支持剪贴板API或权限不足');
  }
});
```

```typescript [async/await]
import { copyToClipboard } from 'rinokit';

const handleCopy = async () => {
  const result = await copyToClipboard('测试文本');
  if (result) {
    console.log('复制成功');
  } else {
    console.log('复制失败');
  }
};
```

:::
<br>

### 函数定义

```typescript
export const copyToClipboard = (text: string): Promise<boolean>
```

### 参数列表

| 参数                                    | 说明         | 类型     | 默认值 |
| --------------------------------------- | ------------ | -------- | ------ |
| text <Badge type="success">必填</Badge> | 待复制的文本 | `string` | -      |

### 返回值

| 返回值             | 说明                           |
| ------------------ | ------------------------------ |
| `Promise<boolean>` | 必定会 resolve 的 Promise 对象 |

<br>
