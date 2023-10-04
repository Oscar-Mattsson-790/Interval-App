import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const pauseTimer = () => setIsTimerPaused(true);
  const resumeTimer = () => setIsTimerPaused(false);

  return (
    <TimerContext.Provider value={{ isTimerPaused, pauseTimer, resumeTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTimer = () => useContext(TimerContext);
