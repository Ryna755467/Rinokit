# classNames

类名拼接工具，过滤假值后以空格拼接多个类名为单个字符串，简化条件类名写法。

:::info{title = 过滤规则}
自动过滤 false / null / undefined 空值，仅保留有效字符串并以空格连接。
:::

### 调用示例

支持传入多个字符串、条件布尔值、空值，过滤无效值后拼接为合法的类名字符串。

```typescript
import { classNames } from 'rinokit';

classNames('box', 'mt-4'); // 'box mt-4'

classNames('tag', isRed ? 'tag--red' : false); // 'tag tag--red'
```

### 函数定义

```typescript
export const classNames = (...args: (string | false | null | undefined)[]): string
```

### 参数列表

| 参数                                           | 说明             | 类型                                       | 默认值 |
| ---------------------------------------------- | ---------------- | ------------------------------------------ | ------ |
| ...args <Badge type="warning">可变参数</Badge> | 待拼接的类名列表 | `(string \| false \| null \| undefined)[]` | -      |

### 返回值

| 返回值   | 说明                                         |
| -------- | -------------------------------------------- |
| `string` | 过滤所有假值后，使用空格拼接的完整类名字符串 |

<br>
