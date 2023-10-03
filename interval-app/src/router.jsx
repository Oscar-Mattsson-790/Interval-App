import { Routes, Route } from "react-router-dom";
import LoadingView from "./componets/LoadingView/LoadingView";
import SetTimerView from "./componets/SetTimerView/SetTimerView";
import AlarmView from "./componets/AlarmView/AlarmView";
import PauseView from "./componets/PauseView/PauseView";
import TimerView from "./componets/AnalogTimerView/TimerView";

const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<LoadingView />} />
      <Route path="set-timer" element={<SetTimerView />} />
      <Route path="alarm" element={<AlarmView />} />
      <Route path="pause" element={<PauseView />} />
      <Route path="timer" element={<TimerView />} />
    </Routes>
  );
};

export default RouterComponent;
