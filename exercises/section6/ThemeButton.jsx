// Section 6.2: Implementing Context - ThemeButton Component
// 3. Consume Context
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeButton() {
  // Đọc theme từ context
  const theme = useContext(ThemeContext);

  return (
    // Dynamic className dựa trên theme
    <button className={`button-${theme}`}>
      I am a {theme} themed button!
    </button>
  );
}

export default ThemeButton;
