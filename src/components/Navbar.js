import { NavLink } from 'react-router-dom';
import HomeL from '../images/home.png';
import Mic from '../images/mic.png';
import Settings from '../images/settings.png';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="back">
        <img className="icons" src={HomeL} alt="home" />
      </div>
      <NavLink className="detail" to="/"><h2>Crypto Market</h2></NavLink>
      <div className="mic-set">
        <img className="icons" src={Mic} alt="mic" />
        <img className="icons" src={Settings} alt="settings" />
      </div>
    </nav>
  );
}

export default Navbar;
