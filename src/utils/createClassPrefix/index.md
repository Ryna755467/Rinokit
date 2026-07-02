# createClassPrefix

BEM 类名生成工具，用于批量生成同根前缀的 CSS 类名，减少重复代码。

:::info{title=BEM}
BEM 是采用「块\_\_元素--修饰符」命名格式、用于规范 CSS 类名的组件化命名规范。
:::

### 调用示例

传入根类名前缀即可生成类名拼接函数，不传参数直接返回根前缀，传入子类名自动拼接为 `根前缀__子类名` 的 BEM 格式。

```tsx | pure
import { createClassPrefix } from 'rinokit';

const prefix = createClassPrefix('card');

export default () => {
  return (
    <div className={prefix()}>
      <div className={prefix('content')}>
        <div className={prefix('content__title')}>title</div>
      </div>
    </div>
  );
};
```

### 函数定义

```typescript
export const createClassPrefix = (prefix: string): (className?: string) => string
```

### 参数列表

| 参数                                      | 说明                       | 类型     | 默认值 |
| ----------------------------------------- | -------------------------- | -------- | ------ |
| prefix <Badge type="success">必填</Badge> | 根类名前缀，不能为空字符串 | `string` | -      |

### 返回值

| 返回值                           | 说明         |
| -------------------------------- | ------------ |
| `(className?: string) => string` | 类名拼接函数 |

<br>
