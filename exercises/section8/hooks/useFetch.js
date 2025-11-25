// Section 8: Capstone Project - useFetch Custom Hook
// 4. Data Fetching & Loading States
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController để cancel fetch khi cleanup
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(url, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json);
        setError(null);
        
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: abort fetch nếu component unmount hoặc URL thay đổi
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
