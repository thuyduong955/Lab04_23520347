// Section 8: Capstone Project - PostDetail Page
// 5. Dynamic Routes & useParams
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function PostDetail() {
  // Sử dụng useParams để lấy postId từ URL
  const { postId } = useParams();
  
  // Sử dụng useFetch để fetch post cụ thể
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Success state - render post detail
  return (
    <div className="post-detail">
      <Link to="/dashboard">← Back to Dashboard</Link>
      
      {post && (
        <>
          <h1>{post.title}</h1>
          <p className="post-body">{post.body}</p>
          <small>Post ID: {post.id} | User ID: {post.userId}</small>
        </>
      )}
    </div>
  );
}

export default PostDetail;
