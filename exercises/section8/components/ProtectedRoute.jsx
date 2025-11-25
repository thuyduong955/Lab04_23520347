// Section 8: Capstone Project - ProtectedRoute Component
// 3. Protected Routes
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // Nếu authenticated → render Outlet (child routes)
  // Nếu không → redirect về login với replace
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
