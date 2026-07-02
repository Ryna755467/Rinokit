# Skeleton

通用骨架屏组件，自动感知传入的模版元素尺寸，生成完全匹配的骨架屏占位，无需手动配置宽高，适配任意自定义布局。

:::info{title="骨架屏渲染"}
骨架屏会继承对应元素的类名，以加载相匹配的 CSS 样式。
:::

### 调用示例

直接传入要占位的内容模版，`Skeleton` 会自动识别模版内元素的尺寸和结构，生成对应骨架屏。

```tsx | pure
<Skeleton template={skeTemplate} count={skeCount} />
```

:::code-group

```tsx | pure [静态模版]
// 组件外部定义的常量
const skeTemplate = (
  <a className={prefix('item')}>
    <div className={prefix('item__title')}>
      <p>title</p>
    </div>
    <div className={prefix('item__desc')}>
      <p>0.0分</p>
      <p>共0页</p>
    </div>
  </a>
);
```

```tsx | pure [动态模版]
// 依赖内部状态进行条件渲染
const skeTemplate = useMemo(() => {
  return (
    <a className={prefix('item')}>
      <div
        className={prefix('item__imgContainer')}
        data-skeleton-class="image"
      ></div>
      <div className={prefix('item__title')}>title</div>
      {hasDesc && (
        <div className={prefix('item__desc')}>
          <span>0.0分</span>
          <span>共0页</span>
        </div>
      )}
      {hasViewNum && <div className={prefix('item__viewNum')}>0阅读</div>}
    </a>
  );
}, [hasDesc, hasViewNum]);
```

:::
<br>

**渲染效果**
<img src="@assets/skeleton.png" style="width: 90%; margin: 12px auto;"/>

### 参数列表

| 参数                                        | 说明                           | 类型           | 默认值 |
| ------------------------------------------- | ------------------------------ | -------------- | ------ |
| template <Badge type="success">必填</Badge> | 要生成骨架屏的内容模版         | `ReactElement` | -      |
| count <Badge type="info">可选</Badge>       | 渲染骨架屏的份数，适合列表场景 | `number`       | 1      |

### 扩展属性

给 `template` 内的元素添加以下属性，可自定义骨架样式：

| 属性                                                | 说明                                 | 类型                   | 默认值 |
| --------------------------------------------------- | ------------------------------------ | ---------------------- | ------ |
| data-skeleton-class <Badge type="info">可选</Badge> | 骨架屏元素类别                       | `'image'` \| `'input'` | -      |
| className <Badge type="info">可选</Badge>           | 自定义类名，会透传到生成的骨架元素上 | `string`               | -      |

<br>
