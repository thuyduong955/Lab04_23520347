// Section 3.2: Loading and Error States - PostFetcher Component
import { useState, useEffect } from 'react';

function PostFetcher() {
  // 1. Tạo 3 state variables
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect để fetch data khi component mount
  useEffect(() => {
    const fetchPost = async () => {
      // Set loading true trước request (good practice cho re-fetching)
      setLoading(true);
      
      try {
        // 3a. Try block: make request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Kiểm tra HTTP errors (fetch không tự reject)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // On success: setData và clear error
        setData(result);
        setError(null);
        
      } catch (err) {
        // 3b. Catch block: setError và clear data
        setError(err);
        setData(null);
        
      } finally {
        // 3c. Finally block: setLoading false trong mọi trường hợp
        setLoading(false);
      }
    };

    fetchPost();
  }, []); // Empty array - fetch một lần khi mount

  // 4. Conditional rendering
  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Success state - render data
  if (data) {
    return <h1>{data.title}</h1>;
  }

  return null;
}

export default PostFetcher;
