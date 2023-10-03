import { useState, useEffect } from "react";
import "./AnalogTimerView.scss";
import { useNavigate } from "react-router-dom";

const AnalogTimerView = () => {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const navigate = useNavigate();

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
      <h1>Analog Timer View</h1>
      <div className="clock-face">
        <div
          className="hand"
          style={{ transform: `rotate(${rotate}deg)` }}
        ></div>
      </div>
      <button onClick={cancelTimer}>Cancel Timer</button>
    </div>
  );
};

export default AnalogTimerView;
