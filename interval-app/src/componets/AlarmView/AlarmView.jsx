import "./Alarmview.scss";
import bellLogo from "../../assets/notification.png";

const AlarmView = () => {
  return (
    <div className="alarm-view">
      <div className="content-container">
        <img className="bellLogo" src={bellLogo} alt="bellLogo" />
        <h1>Times up!</h1>
      </div>
      <button>SET NEW TIMER</button>
    </div>
  );
};

export default AlarmView;
