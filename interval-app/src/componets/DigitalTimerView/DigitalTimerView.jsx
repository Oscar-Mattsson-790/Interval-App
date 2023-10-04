import { useState, useEffect } from "react";
import "./DigitalTimerView.scss";
import { useNavigate } from "react-router-dom";

const DigitalTimerView = () => {
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

  return (
    <div className="digital-timer-view">
      <h1>interval</h1>
      <p>{secondsLeft}</p>
      <button onClick={cancelTimer}>ABORT TIMER</button>
    </div>
  );
};

export default DigitalTimerView;
