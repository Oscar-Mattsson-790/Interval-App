import { useNavigate } from "react-router-dom";
import "./LoadingView.scss";

const LoadingView = () => {
  const navigate = useNavigate();

  const navigateToSetTimer = () => {
    navigate("/set-timer");
  };

  return (
    <div className="loading-view">
      <div className="logo" onClick={navigateToSetTimer}>
        <h1>Your Logo</h1>
        <p>Your Slogan</p>
      </div>
    </div>
  );
};

export default LoadingView;
