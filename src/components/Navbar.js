import { NavLink } from 'react-router-dom';
import Back from '../images/back.png';
import Mic from '../images/mic.png';
import Settings from '../images/settings.png';

function Navbar() {
  return (
    <nav className='nav-container'>
        <div className="back">
            <img className='icons' src={Back} alt="back" />
        </div>
        <NavLink className='detail' to="/"><h2>Cryptomarket</h2></NavLink>
        <div className='mic-set'>
            <img className='icons' src={Mic} alt="mic" />
            <img className='icons' src={Settings} alt="settings" />
        </div>
    </nav>
  )
}

export default Navbar