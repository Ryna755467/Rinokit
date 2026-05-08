# useToggle

This is an example hook for toggle boolean state.

```jsx
import { useToggle } from 'rinokit';

export default () => {
  const [state, toggle] = useToggle();

  return (
    <button
      onClick={toggle}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {state ? 'Hide' : 'Show'}
    </button>
  );
};
```
