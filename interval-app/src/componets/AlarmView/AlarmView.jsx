import "./Alarmview.scss";
import bellLogo from "../../assets/notification.png";
import { useNavigate } from "react-router-dom";

const AlarmView = () => {
  const navigate = useNavigate();

  const goToSetTimer = () => {
    navigate("/set-timer");
  };

  return (
    <div className="alarm-view">
      <div className="content-container">
        <img className="bellLogo" src={bellLogo} alt="bellLogo" />
        <h1>Times up!</h1>
      </div>
      <button onClick={goToSetTimer}>SET NEW TIMER</button>
    </div>
  );
};

export default AlarmView;
