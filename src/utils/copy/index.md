## copyText

**浏览器剪贴板复制工具函数，用于将指定文本复制到系统剪贴板，支持异步操作，返回复制结果状态，兼容现代浏览器剪贴板 API。**

---

### 代码演示

```jsx
import { useState } from 'react';
import { copyToClipboard } from 'rinokit';

export default () => {
  const [copyText, setCopyText] = useState('rinokit - 高效实用的工具库');
  const [copyStatus, setCopyStatus] = useState('');

  // 执行复制操作
  const handleCopy = async () => {
    const success = await copyToClipboard(copyText);
    if (success) {
      setCopyStatus('复制成功');
      setTimeout(() => setCopyStatus(''), 2000);
    } else {
      setCopyStatus('复制失败');
      setTimeout(() => setCopyStatus(''), 2000);
    }
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
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={copyText}
          onChange={(e) => setCopyText(e.target.value)}
          style={{
            padding: '8px 12px',
            width: '300px',
            border: '1px solid #e5e7eb',
            borderRadius: 6,
            marginRight: 12,
            fontSize: 14,
          }}
        />
        <button
          onClick={handleCopy}
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: 6,
            backgroundColor: '#4096ff',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontSize: 14,
          }}
        >
          复制文本
        </button>
      </div>

      {copyStatus && (
        <p
          style={{
            color: copyStatus.includes('成功') ? '#52c41a' : '#fa541c',
            fontWeight: 500,
          }}
        >
          {copyStatus}
        </p>
      )}
    </div>
  );
};
```

---

### API

```javascript
copyToClipboard(text: string): Promise<boolean>
```

_异步复制指定文本到系统剪贴板，通过 Promise 返回复制结果，成功返回 true，失败返回 false，无报错抛出。_

- **text: string** - 必选，需要复制到剪贴板的文本内容，若传入非字符串类型，会自动转换为字符串（空字符串也可正常复制）。

_返回值：Promise\&lt;boolean\&gt;，Promise 成功状态下，resolve 结果为 true 表示复制成功，false 表示复制失败（如浏览器不支持、无剪贴板权限等）。_

## 类型说明

```typescript
type CopyToClipboard = (text: string) => Promise<boolean>;
```

_接收字符串类型参数，返回一个 Promise 对象，Promise 最终 resolve 布尔值表示复制结果。_

## 注意事项

- 该函数依赖浏览器 `navigator.clipboard.writeText` API，仅支持现代浏览器（Chrome 66+、Firefox 63+、Edge 79+ 等），低版本浏览器会直接返回 false。

- 剪贴板操作受浏览器安全策略限制，http 协议（非 https）环境下，部分浏览器会禁止剪贴板操作，导致复制失败。

- 函数为异步操作，需使用 await 或 .then() 接收复制结果，直接调用无法获取返回值。

- 若传入非字符串类型（如数字、对象等），会自动通过 toString() 转换为字符串后复制，可能导致预期外的文本结果。

- 复制失败时（如浏览器不支持、权限不足），函数不会抛出错误，仅返回 false，可根据返回结果提示用户手动复制。
