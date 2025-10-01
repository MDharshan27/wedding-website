import './../App.css'
import logoImg from '../assets/v.png';

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#countdown">The Wait Ends In</a></li>
                <li><a href="#gallery">Gallery</a></li>
                 <li className="logo">
                    <a href="#hero">
                        <img src={logoImg} alt="V & V Logo" className="logo-img" />
                    </a>
                </li>
                <li><a href="#info">Join us At</a></li>
                <li><a href="#wish">Warm Wishes</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
