// Section 5.1: Basic Setup - main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import createBrowserRouter và RouterProvider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';

// 2 & 3. Tạo router configuration với 2 routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]);

// Render RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
