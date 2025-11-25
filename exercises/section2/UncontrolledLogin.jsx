// Section 2.1: DOM Reference - UncontrolledLogin Component
import { useRef } from 'react';

function UncontrolledLogin() {
  // 1. Tạo usernameRef
  const usernameRef = useRef(null);

  // 4. handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    
    // Alert giá trị từ input thông qua ref
    alert(`Username: ${usernameRef.current.value}`);
  };

  return (
    // 2. Render form với input và button
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        {/* 3. Attach ref vào input */}
        <input 
          type="text" 
          id="username"
          ref={usernameRef} 
          placeholder="Enter username"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default UncontrolledLogin;
