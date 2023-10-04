import "./PauseView.scss";
import pauseLogo from "../../assets/pause.png";

const PauseView = () => {
  return (
    <div className="pause-view">
      <div className="content-container">
        <img className="pauseLogo" src={pauseLogo} alt="pauseLogo" />
        <h1>Pause &amp; breath</h1>
        <p className="time">3.37</p>
      </div>
      <button>NO PAUSE, GO NOW!</button>
    </div>
  );
};

export default PauseView;
