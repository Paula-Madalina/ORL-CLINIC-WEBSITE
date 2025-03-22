import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flag_of_Romania from "../../assets/Flag_of_Romania.svg";
import DoctorDescription from "../DOCTOR/DoctorDescription.jsx";
import { Link } from 'react-router-dom';
import LOGO from "../../assets/dental_clinic.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
      <div className="header__container">
        <div className='bottom__header'>
          {/* LOGO SECTION */}
          <div className='logo__section'>
            <img src={LOGO} alt="logo" className='logo__picture' />
          </div>

          {/* Burger Menu pentru mobil */}
          <div className="burger-menu">
            <Button onClick={toggleMenu}>
              <MenuIcon style={{fill:"#000"}} />
            </Button>
          </div>

          {/* NAVLINKS SECTION */}
          <div className={`navbar__buttons ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className='navlinks__routing'>Acasa</Link>
            <Link to="/estetica" className='navlinks__routing'>Estetica</Link>
            <Link to="/dantura-fixa-si-turism-dentar" className='navlinks__routing'>Dantura fixa si turism dentar</Link>
            <Link to="/prices" className='navlinks__routing'>Preturi</Link>
            <p className='navlinks__routing'>Despre Noi</p>
          </div>

          {/* SOCIAL MEDIA SECTION */}
          <div className={`social__media ${menuOpen ? 'hide' : ''}`}>
            <div className='social__media__icons'><InstagramIcon /></div>
            <div className='social__media__icons'><FacebookIcon /></div>
            <div className='social__media__icons'><TwitterIcon /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
