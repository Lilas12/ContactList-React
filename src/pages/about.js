import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_content">
        <p>
          This demo website is developer by Devrabic. The best arabic coommunity
          for web development
        </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}

export default About;
