import { useState, useEffect } from "react";
import "./DigitalTimerView.scss";
import { useNavigate } from "react-router-dom";

const DigitalTimerView = () => {
  const [minutesLeft, setMinutesLeft] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timerID = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutesLeft((prevMinutes) => prevMinutes - 1);
          return 59;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    if (minutesLeft === 0 && secondsLeft === 0) {
      navigate("/alarm");
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);
  }, [minutesLeft, secondsLeft, navigate]);

  const cancelTimer = () => {
    navigate("/set-timer");
  };

  const displaySeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

  return (
    <div className="digital-timer-view">
      <h1>interval</h1>
      <p className="time">
        {minutesLeft}:{displaySeconds}
      </p>
      <button onClick={cancelTimer}>ABORT TIMER</button>
    </div>
  );
};

export default DigitalTimerView;
