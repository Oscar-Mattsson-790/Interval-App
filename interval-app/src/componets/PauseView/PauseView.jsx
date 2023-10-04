import "./PauseView.scss";
import pauseLogo from "../../assets/pause.png";
import { useNavigate } from "react-router-dom";

const PauseView = () => {
  const navigate = useNavigate();

  const cancelPauseAndGo = () => {
    navigate("/set-timer");
  };

  return (
    <div className="pause-view">
      <div className="content-container">
        <img className="pauseLogo" src={pauseLogo} alt="pauseLogo" />
        <h1>Pause &amp; breath</h1>
        <p className="time">3.37</p>
      </div>
      <button onClick={cancelPauseAndGo}>NO PAUSE, GO NOW!</button>
    </div>
  );
};

export default PauseView;
