import { useHistory } from "react-router-dom";
import "./LoadingView.sass";

const LoadingView = () => {
  const history = useHistory();

  const navigateToSetTimer = () => {
    history.push("/set-timer");
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
