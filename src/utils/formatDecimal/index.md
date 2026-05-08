# formatDecimal

This is an example util for format decimal number.

```jsx
import { useState } from 'react';
import { formatDecimal } from 'rinokit';

export default () => {
  const [num, setNum] = useState(123.456);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <button
        onClick={() => setNum(num + 100.123)}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
        }}
      >
        Click Change Number
      </button>

      <label>Default: {formatDecimal(num)}</label>
      <label>1 digit: {formatDecimal(num, 1)}</label>
    </div>
  );
};
```
