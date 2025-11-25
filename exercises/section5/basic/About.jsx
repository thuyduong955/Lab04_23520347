// Section 5.1: Basic Setup - About Component
// 4 & 6. About component với button sử dụng useNavigate
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Programmatic navigation về home
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleGoHome}>Go Back Home</button>
    </div>
  );
}

export default About;
