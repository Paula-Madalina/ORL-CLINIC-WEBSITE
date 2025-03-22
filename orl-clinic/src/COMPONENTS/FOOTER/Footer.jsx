import React from 'react';
import "./footer.css";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo2 from "../../assets/dental_clinic.png"

function Footer() {
  const handleRedirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/edentifyclinic'; 
  };

  const handleRedirectToInstagram = () => {
    window.location.href = 'https://www.instagram.com/edentifydentalcenter/'; 
  };
  return (
    <div>

      <div className='footer__container'>

        <div className='footer__text'>

          <div className='contact__details'>

            <p className='contact__title'>
              <span className='icon__and__contact'>
                <div style={{fontSize:"16px"}}><EmailIcon/></div>
                <p className='contact__text'>CONTACT</p>
              </span>
            </p>

            <div className='about__contact about__contact__address'>
              <div className='address__container'>
                <div className='address__text'>
                <span className='contact'>Adresa:</span>                <span className='address__value contact__value'>George Missail nr 119 sector 1, Bucuresti </span>
                </div>
                 
              </div>
            </div>

            <div className='about__contact'>
              <div className='phone__container'>
                <div className='phone__text'>
                <span className='contact'>Telefon:</span>              <span className='contact__value'><a href='tel:0760326293' className='phone__value'>0762663557</a></span>
                </div>
              </div>
            </div>

            <div className='about__contact'>
              <div className='email__container'>
                <div className='email__text'>
                <span className='contact'>Email:</span>                 <span className='contact__value'><a href='mailto:office@elenamartin.ro' className='email__value'>receptie.dentify@gmail.com</a></span>
                </div>
              </div>
            </div>

            <div className='about__contact'>
              <div className='schedule__container'>
                <div className='schedule__text '>
                <span className='contact'>Program:</span>                <span className='schedule__value contact__value'>L-V, orele 10:00 – 18:00</span>
                </div>
              </div>
            </div>

          </div>

        
    
          <div className='social__media__buttons'>

            <div className='doctor__name'>E-Dentify</div>

            <div className='social__media__arrangement facebook' onClick={handleRedirectToFacebook}> 
              <div><FacebookIcon/></div>
              <p className='follow_social__media'> Folllow</p>
            </div>

            <div className='social__media__arrangement instagram' onClick={handleRedirectToInstagram}> 
              <div><InstagramIcon/></div>
              <p className='follow_social__media'> Folllow</p>

            </div>
          </div>
    
          <div className="footer__logo">

            <div className='logo__container'>
              <img src={Logo2} alt="Logo" />
            </div>
            
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;
