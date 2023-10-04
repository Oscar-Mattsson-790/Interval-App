import { useEffect, useState } from "react";
import Timer from "easytimer.js";
import { useNavigate, useLocation } from "react-router-dom";
import "./AnalogTimerView.scss";
import { useTimer } from "../../contexts/TimerContext";

const AnalogTimerView = () => {
  const { isTimerPaused, pauseTimer } = useTimer();
  const navigate = useNavigate();
  const location = useLocation();
  const [timer] = useState(new Timer());
  const [timeValues, setTimeValues] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    timer.start({
      countdown: true,
      startValues: { minutes: location.state?.minutesLeft || 1 },
    });

    timer.on("secondsUpdated", () => {
      setTimeValues({
        minutes: timer.getTimeValues().minutes,
        seconds: timer.getTimeValues().seconds,
      });
    });

    timer.on("targetAchieved", () => {
      navigate("/alarm");
    });

    return () => timer.stop();
  }, [timer, navigate, location.state?.minutesLeft]);

  useEffect(() => {
    if (timeValues.minutes === 5 && timeValues.seconds === 0) {
      pauseTimer();
      navigate("/pause");
    }
  }, [timeValues, pauseTimer, navigate]);

  const cancelTimer = () => {
    timer.stop();
    navigate("/set-timer");
  };

  const rotate = (360 * timeValues.seconds) / 60;
  return (
    <div className="analog-timer-view">
      <h1>interval</h1>

      {isTimerPaused ? (
        <p>The timer is paused!</p>
      ) : (
        <div className="clock-face">
          <div className="hour-markers"></div>
          <div
            className="hand"
            style={{ transform: `rotate(${rotate}deg)` }}
          ></div>
        </div>
      )}
      <button onClick={cancelTimer}>ABORT TIMER</button>
    </div>
  );
};

export default AnalogTimerView;
