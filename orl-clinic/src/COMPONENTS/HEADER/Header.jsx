import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import Flag_of_Romania from "../../assets/Flag_of_Romania.svg";
import DoctorDescription from "../DOCTOR/DoctorDescription.jsx"
import { Link } from 'react-router-dom';
import LOGO from "../../assets/dental_clinic.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Header() {
    // Stare pentru fiecare meniu
    const [anchorElChirurgie, setAnchorElChirurgie] = useState(null);
    const [anchorElDermatologie, setAnchorElDermatologie] = useState(null);
    const [anchorElMedSpa, setAnchorElMedSpa] = useState(null);
    const [anchorElGalerie, setAnchorElGalerie] = useState(null);
  
    // Funcții pentru fiecare meniu
    const handleClickChirurgie = (event) => setAnchorElChirurgie(event.currentTarget);
    const handleCloseChirurgie = () => setAnchorElChirurgie(null);
  
    const handleClickDermatologie = (event) => setAnchorElDermatologie(event.currentTarget);
    const handleCloseDermatologie = () => setAnchorElDermatologie(null);
  
    const handleClickMedSpa = (event) => setAnchorElMedSpa(event.currentTarget);
    const handleCloseMedSpa = () => setAnchorElMedSpa(null);
  
    const handleClickGalerie = (event) => setAnchorElGalerie(event.currentTarget);
    const handleCloseGalerie = () => setAnchorElGalerie(null);
  
    const handleMenuClick = (menuItem) => {
      console.log(`Clicked on ${menuItem}`);
    };

  return (
    <div style={{paddingTop:"130px"}}>
      <div className="header__container">
        
        <div className='bottom__header'>
            {/* LOGO SECTION */}
            <div className='logo__section'>
               <img src={LOGO} alt="logo" className='logo__picture' />
            </div>

            {/* NAVLINKS SECTION */}
            <div className='navbar__buttons'>
                <p className='navlinks__routing'>Acasa</p>
                <p className='navlinks__routing'>Estetica dentara si protetica</p>
                <p className='navlinks__routing'>Dantura fixa si turism dentar</p>
                <p className='navlinks__routing'>Preturi</p>
                <p className='navlinks__routing'>Despre Noi</p>
            </div>

            {/* SOCIAL MEDIA SECTION */}
            <div className='social__media'>
                <div className='social__media__icons'><InstagramIcon/></div>
                <div className='social__media__icons'><FacebookIcon/></div>
                <div className='social__media__icons'><TwitterIcon/></div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
