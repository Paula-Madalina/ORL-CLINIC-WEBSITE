import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import Flag_of_Romania from "../../assets/Flag_of_Romania.svg";
import DoctorDescription from "../DOCTOR/DoctorDescription.jsx"
import { Link } from 'react-router-dom';
import LOGO from "../../assets/LOGO.png"
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
    <div>
      <div className="header__container">
        <div className='top__header'>
          <div className='doctor__specializations'>
            <div className='doctor__name'>
              <Link to="/aboutMe"  className='doctor__name__text'><p>Elena Martin</p></Link>
            </div>
            <div className='first__specialization__container'>
            <Button
                className='first__specialization__button'
                aria-controls={anchorElChirurgie ? 'chirurgie-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElChirurgie)}
                onClick={handleClickChirurgie}
                endIcon={<ArrowDropDownIcon />}
              >
                Chirurgie
              </Button>
              <Menu
                 id="chirurgie-menu"
                 anchorEl={anchorElChirurgie}
                 open={Boolean(anchorElChirurgie)}
                 onClose={handleCloseChirurgie}
              >
                <MenuItem onClick={() => handleMenuClick('Chirurgia_Sanului')}>Chirurgia Sanului</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Chirurgia_Faciala')}>Chirurgia Faciala</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Chirurgia_Siluetei')}>Chirurgia Siluetei</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Informatii_Generale')}>Informatii Generale</MenuItem>
              </Menu>
            </div>

            <div className='second__specialization__container'>
            <Button
                className='second__specialization__button'
                aria-controls={anchorElDermatologie ? 'dermatologie-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElDermatologie)}
                onClick={handleClickDermatologie}
                endIcon={<ArrowDropDownIcon />}
              >
                Dermatologie
              </Button>
              <Menu
                id="dermatologie-menu"
                anchorEl={anchorElDermatologie}
                open={Boolean(anchorElDermatologie)}
                onClose={handleCloseDermatologie}
              >
                <MenuItem onClick={() => handleMenuClick('Dermatologie_Estetica')}>Dermatologie Estetica</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Dermatologie_Generala')}>Dermatologie Generala</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Lasere')}>Lasere</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Softwave_Tratament_Anti_Aging')}>Softwave-Tratament Anti-aging</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Morpheus8')}>Morpheus8</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Consult_3D')}>Consult 3D</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Informatii_Generale')}>Informatii Generale</MenuItem>
              </Menu>
            </div>

            <div className='third__specialization__container'>
            <Button
                className='third__specialization__button'
                aria-controls={anchorElMedSpa ? 'medspa-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElMedSpa)}
                onClick={handleClickMedSpa}
                endIcon={<ArrowDropDownIcon />}
              >
                Med Spa
              </Button>
              <Menu
                id="medspa-menu"
                anchorEl={anchorElMedSpa}
                open={Boolean(anchorElMedSpa)}
                onClose={handleCloseMedSpa}
              >
                <MenuItem onClick={() => handleMenuClick('Exozomi')}>Exozomi</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Clear_Brilliant')}>Clear + Brilliant</MenuItem>
                <MenuItem onClick={() => handleMenuClick('NuEra Tight')}>NuEra Tight</MenuItem>
                <MenuItem onClick={() => handleMenuClick('PRX_T_lady')}>PRX-T lady</MenuItem>
              </Menu>
            </div>


            <div className='fourth__specialization__container'>
            <Button
                className='fourth__specialization__button'
                aria-controls={anchorElGalerie ? 'galerie-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElGalerie)}
                onClick={handleClickGalerie}
                endIcon={<ArrowDropDownIcon />}
              >
                Galerie
              </Button>
              <Menu
                id="galerie-menu"
                anchorEl={anchorElGalerie}
                open={Boolean(anchorElGalerie)}
                onClose={handleCloseGalerie}
              >
                <MenuItem onClick={() => handleMenuClick('Estetica_faciala')}>Estetica faciala</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Estetica_sanului')}>Estetica sanului</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Estetica_siluetei')}>Estetica siluetei</MenuItem>
                <MenuItem onClick={() => handleMenuClick('Testimoniale')}>Testimoniale</MenuItem>
              </Menu>
            </div>

            
          </div>

          <div className='change__language__and__telephone'>
            <div className="change__language">
              <div className='flag__container'>
                <a href='http://google.com'><img src={Flag_of_Romania} alt="RomaniaFlag" className='romania__flag'/></a>
              </div>
            </div>
            <div className='phone__container'>
                <div className='phone__number'>
                    <p>Telefon: 0760436103</p>
                </div>
            </div>
          </div>
        </div>
        <div className='bottom__header'>
            {/* LOGO SECTION */}
            <div className='logo__section'>
               <img src={LOGO} alt="logo" className='logo__picture' />
            </div>

            {/* NAVLINKS SECTION */}
            <div className='navbar__buttons'>
                <p>Acasa</p>
                <p>Testimoniale</p>
                <p>#HappyPatients</p>
                <p>Pentru Medici</p>
                <p>Echipa</p>
                <p>Preturi</p>
                <p>Magazin Online</p>
                <p>Blog</p>
            </div>

            {/* SOCIAL MEDIA SECTION */}
            <div className='social__media'>
                <div><InstagramIcon/></div>
                <div><FacebookIcon/></div>
                <div><TwitterIcon/></div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
