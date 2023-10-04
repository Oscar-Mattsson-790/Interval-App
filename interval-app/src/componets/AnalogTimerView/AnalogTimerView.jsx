import { useState, useEffect } from "react";
import "./AnalogTimerView.scss";
import { useNavigate, useLocation } from "react-router-dom";

const AnalogTimerView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [secondsLeft, setSecondsLeft] = useState(
    (location.state?.minutesLeft || 1) * 60
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    if (secondsLeft === 0) {
      navigate("/alarm");
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);
  }, [secondsLeft, navigate]);

  const cancelTimer = () => {
    navigate("/set-timer");
  };

  const rotate = (360 * secondsLeft) / 60;

  return (
    <div className="analog-timer-view">
      <h1>interval</h1>
      <div className="clock-face">
        <div className="hour-markers"></div>
        <div
          className="hand"
          style={{ transform: `rotate(${rotate}deg)` }}
        ></div>
      </div>
      <button onClick={cancelTimer}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogTimerView;
