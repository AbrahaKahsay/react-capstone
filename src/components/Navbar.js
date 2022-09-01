import { NavLink } from 'react-router-dom';
import HomeL from '../images/home.png';
import Mic from '../images/mic.png';
import Settings from '../images/settings.png';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <NavLink to="/"><img className="icons" src={HomeL} alt="home" /></NavLink>
      <div className="back">
        <h2>Crypto Market</h2>
      </div>
      <div className="mic-set">
        <img className="icons" src={Mic} alt="mic" />
        <img className="icons" src={Settings} alt="settings" />
      </div>
    </nav>
  );
}

export default Navbar;
