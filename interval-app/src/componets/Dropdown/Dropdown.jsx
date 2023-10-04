import { useNavigate } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dropdown">
      <div className="menu">
        <ul>
          <li onClick={() => handleNavigation("/analog-timer")}>
            ANALOG TIMER
          </li>
          <li onClick={() => handleNavigation("/digital-timer")}>
            DIGITAL TIMER
          </li>
          <li onClick={() => handleNavigation("/")}>VISUAL TIMER</li>
          <li onClick={() => handleNavigation("/pause")}>TEXT TIMER</li>
          <li onClick={() => handleNavigation("/")}>CIRCLES TIMER</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
