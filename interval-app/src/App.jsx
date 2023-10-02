import { Routes, Route } from "react-router-dom";
import "./App.sass";
import LoadingView from "./componets/LoadingView/LoadingView";
import SetTimerView from "./componets/SetTimerView/SetTimerView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoadingView />} />
        <Route path="set-timer" element={<SetTimerView />} />
      </Routes>
    </div>
  );
}

export default App;
