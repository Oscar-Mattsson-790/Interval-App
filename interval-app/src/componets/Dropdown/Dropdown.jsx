import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Dropdown.scss";
import hamburgerBlack from "../../assets/black.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const hideOnRoutes = ["/pause", "/alarm", "/"];

  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <img
        className="hamburgerBlack"
        src={hamburgerBlack}
        alt="hamburgerBlack"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="menu">
          <ul>
            <li onClick={() => handleNavigation("/analog-timer")}>
              ANALOG TIMER
            </li>
            <li onClick={() => handleNavigation("/digital-timer")}>
              DIGITAL TIMER
            </li>
            <li onClick={() => handleNavigation("/")}>VISUAL TIMER</li>
            <li onClick={() => handleNavigation("/")}>TEXT TIMER</li>
            <li onClick={() => handleNavigation("/")}>CIRCLES TIMER</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
