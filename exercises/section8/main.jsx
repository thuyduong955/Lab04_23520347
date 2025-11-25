// Section 8: Capstone Project - BlogDash main.jsx
// 1. React Router Setup
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';
import './styles/App.css';

// 1. Router setup với 3 routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    // Protected routes wrapper
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/post/:postId",  // Dynamic route
        element: <PostDetail />
      }
    ]
  }
]);

// Wrap toàn bộ app trong AuthProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
