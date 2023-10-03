import { Routes, Route } from "react-router-dom";
import LoadingView from "../src/componets/LoadingView/LoadingView";
import SetTimerView from "./componets/SetTimerView/SetTimerView";
import AlarmView from "../src/componets/AlarmView/AlarmView";
import PauseView from "../src/componets/PauseView/PauseView";
import DigitalTimerView from "./componets/DigitalTimerView/DigitalTimerView";
import AnalogTimerView from "./componets/AnalogTimerView/AnalogTimerView";

const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<LoadingView />} />
      <Route path="set-timer" element={<SetTimerView />} />
      <Route path="alarm" element={<AlarmView />} />
      <Route path="pause" element={<PauseView />} />
      <Route path="digital-timer" element={<DigitalTimerView />} />
      <Route path="analog-timer" element={<AnalogTimerView />} />
    </Routes>
  );
};

export default RouterComponent;
