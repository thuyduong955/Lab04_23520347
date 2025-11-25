// Section 6.2: Implementing Context - App Component
// 2. Provide Context
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  // State cho theme
  const [theme, setTheme] = useState('light');

  // Toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    // Wrap với Provider và truyền value
    <ThemeContext.Provider value={theme}>
      <div className={`app-${theme}`}>
        <h1>Theme Switcher App</h1>
        <button onClick={toggleTheme}>
          Toggle Theme (Current: {theme})
        </button>
        
        {/* Deeply nested component structure */}
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
