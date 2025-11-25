// Section 5.2: Dynamic Routes - UserProfile Component
// 5. UserProfile component sử dụng useParams
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Đọc userId từ URL
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile for User: {userId}</h1>
    </div>
  );
}

export default UserProfile;
