// Section 7.2: Create useLocalStorage Custom Hook
import { useState } from 'react';

// 1. Create the hook
function useLocalStorage(key, initialValue) {
  // 2. useState với initial value function
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Thử lấy item từ localStorage
      const item = window.localStorage.getItem(key);
      
      // Nếu tồn tại, parse và return
      // Nếu không, return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Nếu error, return initialValue
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  // 3. Tạo setter function mới wrap setStoredValue
  const setValue = (value) => {
    try {
      // Cho phép value là function (như useState setter)
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      
      // Update state
      setStoredValue(valueToStore);
      
      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  // 4. Return array giống useState
  return [storedValue, setValue];
}

export default useLocalStorage;
