import { useState, useEffect } from "react";
import "./TimerView.scss";
import { useNavigate } from "react-router-dom";

const TimerView = () => {
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

  return (
    <div className="timer-view">
      <h1>Timer View</h1>
      <p>Time Left: {secondsLeft} seconds</p>
    </div>
  );
};

export default TimerView;
