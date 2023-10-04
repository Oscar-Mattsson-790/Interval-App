import { useEffect, useState } from "react";
import Timer from "easytimer.js";
import { useNavigate, useLocation } from "react-router-dom";
import "./AnalogTimerView.scss";

const AnalogTimerView = () => {
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

  const cancelTimer = () => {
    timer.stop();
    navigate("/set-timer");
  };

  const rotate = (360 * timeValues.seconds) / 60;

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
