// Section 5.2: Nested Routes & Dynamic Params - main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';

// 1, 2, 3, 4. Router với nested routes và dynamic params
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,        // 2. Root route renders Layout
    children: [                  // 3. Home và About trong children array
      {
        index: true,             // Default child route cho "/"
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "users/:userId",   // 4. Dynamic route
        element: <UserProfile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
