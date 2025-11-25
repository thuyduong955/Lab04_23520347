// Section 8: Capstone Project - Login Page
// 6. useRef Bonus - Auto focus input on mount
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  // 6. useRef cho username input (Bonus)
  const usernameRef = useRef(null);
  
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // 6. useEffect để focus input khi mount (Bonus)
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // Redirect nếu đã authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Gọi login function từ context
    login();
    
    // Navigate đến dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <h1>BlogDash Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            placeholder="Enter username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
