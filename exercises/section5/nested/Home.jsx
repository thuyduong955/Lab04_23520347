// Section 5.2: Nested Routes - Home Component
// 6. Home với Link đến /users/123
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/users/123">View User 123 Profile</Link>
    </div>
  );
}

export default Home;
