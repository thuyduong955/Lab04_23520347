// Section 5.1: Basic Setup - Home Component
// 4 & 5. Home component với Link đến /about
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default Home;
