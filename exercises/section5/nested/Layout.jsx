// Section 5.2: Nested Routes - Layout Component
// 1. Layout component với navigation bar và Outlet
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Navigation bar */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/users/123">User 123</Link>
      </nav>
      
      <hr />
      
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}

export default Layout;
