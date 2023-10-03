import { useNavigate } from "react-router-dom";
import "./LoadingView.scss";
import logo from "../../assets/Screenshot 2023-10-03 at 09.04.20.png";

const LoadingView = () => {
  const navigate = useNavigate();

  const navigateToSetTimer = () => {
    navigate("/set-timer");
  };

  return (
    <div className="loading-view">
      <div className="logo" onClick={navigateToSetTimer}>
        <img className="IntervalLogo" src={logo} alt="IntervalLogo" />
        <h1>INTERVAL</h1>
        <p>For all your timing needs</p>
      </div>
    </div>
  );
};

export default LoadingView;
