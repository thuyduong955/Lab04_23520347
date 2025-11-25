// Section 5.2: Nested Routes - About Component
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleGoHome}>Go Back Home</button>
    </div>
  );
}

export default About;
