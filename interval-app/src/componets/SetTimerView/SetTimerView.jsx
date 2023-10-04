import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SetTimerView.scss";
import hamburgerBlack from "../../assets/black.png";
import Dropdown from "../Dropdown/Dropdown";

const SetTimerView = () => {
  const [minutes, setMinutes] = useState(10);
  const [timeLeft, setTimeLeft] = useState(minutes);
  const [isRunning, setIsRunning] = useState(false);
  const [isInterval, setIsInterval] = useState(true);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 60000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setTimeLeft(isInterval ? minutes : 5);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isInterval, minutes]);

  const startTimer = () => {
    setIsRunning(true);
    navigate("/analog-timer", { state: { minutesLeft: minutes } });
  };

  const handleOptionChange = (e) => {
    setIsInterval(e.target.value === "intervals");
  };

  const incrementTime = () => !isRunning && setMinutes((prev) => prev + 1);
  const decrementTime = () =>
    !isRunning && setMinutes((prev) => Math.max(prev - 1, 1));

  return (
    <div className="set-timer-view">
      <nav className="navbar">
        <img
          className="hamburgerBlack"
          src={hamburgerBlack}
          alt="hamburgerBlack"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && <Dropdown />}
      </nav>

      <div className="timeWrapper">
        <p onClick={decrementTime}>
          <i className="arrow left"></i>
        </p>
        <div className="timeConatiner">
          <p className="numbers">{minutes}</p>
          <p className="minutes">minutes</p>
        </div>
        <p onClick={incrementTime}>
          <i className="arrow right"></i>
        </p>
      </div>

      <div className="setTimerOptionsContainer">
        <label>
          <input
            type="radio"
            name="timer-option"
            className="radio-button"
            onChange={handleOptionChange}
            checked={isInterval}
          />
          <span className="custom-radio"></span>
          <span>intervals</span>
        </label>
        <label>
          <input
            type="radio"
            name="timer-option"
            className="radio-button"
            onChange={handleOptionChange}
            checked={!isInterval}
          />
          <span className="custom-radio"></span>
          <span>5 Min Break / Interval</span>
        </label>
        <button className="startTimerButton" onClick={startTimer}>
          {isRunning ? "TIMER RUNNING" : "START TIMER"}
        </button>
      </div>
    </div>
  );
};

export default SetTimerView;
