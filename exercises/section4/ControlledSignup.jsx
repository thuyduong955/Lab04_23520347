// Section 4.1: Controlled Components - ControlledSignup Component
import { useState } from 'react';

function ControlledSignup() {
  // 1. Single state object cho form data
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '' 
  });

  // 3c. Single handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Dynamically update correct key dựa trên name attribute
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 4. onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form Data:', formData);
  };

  return (
    // 2. Form với 2 input fields
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"                    // 3b. name attribute matching state key
          value={formData.email}          // 3a. value tied to state
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"                 // 3b. name attribute matching state key
          value={formData.password}       // 3a. value tied to state
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>
      
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default ControlledSignup;
