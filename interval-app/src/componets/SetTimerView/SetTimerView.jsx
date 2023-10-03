import { useState } from "react";
import "./SetTimerView.scss";

const SetTimerView = () => {
  const [minutes, setMinutes] = useState("");

  return (
    <div className="set-timer-view">
      <label htmlFor="timer">Set Timer (Minutes):</label>
      <input
        id="timer"
        type="number"
        className="timer-input"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
    </div>
  );
};

export default SetTimerView;
