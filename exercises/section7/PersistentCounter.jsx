// Section 7.2: Using useLocalStorage - PersistentCounter Component
// 5. Sử dụng hook để tạo persistent counter
import useLocalStorage from './useLocalStorage';

function PersistentCounter() {
  // Sử dụng hook để tạo persistent counter
  const [count, setCount] = useLocalStorage('myCounter', 0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Persistent Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <p><small>Refresh the page - count will persist!</small></p>
    </div>
  );
}

export default PersistentCounter;
