// Section 1.3: The Cleanup Function - MouseTracker Component
import { useEffect } from 'react';

function MouseTracker() {
  useEffect(() => {
    // Setup: Thêm event listener
    const handleMouseMove = (e) => {
      console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: Remove event listener để tránh memory leak
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array - chỉ setup một lần khi mount

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Mở Console để xem vị trí chuột</p>
    </div>
  );
}

export default MouseTracker;
