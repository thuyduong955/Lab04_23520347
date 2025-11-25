// Section 8: Capstone Project - Dashboard Page
// 4. Data Fetching & Loading States
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { logout } = useAuth();
  
  // Sử dụng useFetch hook để fetch posts
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Success state - render list of posts
  return (
    <div className="dashboard">
      <header>
        <h1>BlogDash Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </header>
      
      <h2>Posts</h2>
      <ul className="posts-list">
        {posts && posts.slice(0, 20).map(post => (
          <li key={post.id}>
            {/* Link đến dynamic route */}
            <Link to={`/dashboard/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
