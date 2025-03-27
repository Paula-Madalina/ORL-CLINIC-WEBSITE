import React from 'react';
import ProfilePhoto from "../../assets/GOODIMG.jpg";
import AboutUsPhoto from "../../assets/dental_reception.jpg";
import DrSurmei from "../../assets/surmeiDR.png";
import "./homesection.css"; 
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';
import Appointment from "../APPOINTMENT/Appointment";
import Carousel from "../CAROUSEL/Carousel";
import Echipa from "../ECHIPA/Echipa";


function Homepage() {
  return (
    <div className="hero__section">
      <Header/>
      <div className="hero__image">
        <div><img src={ProfilePhoto} alt="ProfilePhoto" className="background__image" /></div>

        <div className="overlay__content">
          {/* <div className="text__block">
            <h2>Dantură Fixă pe implanturi dentare</h2>
            <p>Clinică acreditată de Asociația Stomatologilor. Specializați în Chirurgie Orală și Implantologie</p>
            <button className='hero__buttons'><a href='/dantura-fixa-si-turism-dentar' className='hero_links'>VEZI DETALII DANTURĂ FIXĂ</a></button>
          </div> */}

          {/* <div className="text__block">
          <h2>Perfecțiunea zâmbetului prin estetica dentară</h2>
            <p>Redă strălucirea și armonia zâmbetului tău cu tratamente moderne de estetică dentară.</p>
            <button className='hero__buttons'><a href='/estetica' className='hero_links'>DESCOPERĂ ESTETICA DENTARĂ</a></button>
          </div> */}

          <div className='text__block__welcome'>
            <h2 className='hero__welcome'>Bine ați venit la clinica <p className='dental_name'>E-Dentify</p></h2>
            <p className='p_welcome'><i>Echipa multidisciplinară de medici specialiști abordează fiecare caz individual, oferind cele mai bune soluții de tratament, cu rezultate optime.</i></p>
          </div>
        </div>
      </div>

      <div className="about-us">
      <header>
        <h1>Despre Noi</h1>
      </header>
      <section className="mission">
        <div className="text-left">
          <h2>Misiunea și povestea eDentify</h2>
          <p className='hero_text'>
            eDentify este o clinică dentară specializată în chirurgie dentară și estetică protetică, dedicată redării zâmbetului perfect fiecărui pacient. Sub conducerea Dr. Elena Surmei, un medic stomatolog cu expertiză avansată în estetică dentară, clinica oferă soluții personalizate pentru cazuri complexe, inclusiv împlanturi dentare, reconstrucții estetice și proteică avansată.
          </p>
        </div>
        <div className="image-right">
          <img src={AboutUsPhoto} alt="Clinica eDentify" />
        </div>
      </section>
      <section className="mission-doctor">
        <div className="image-left">
          <img src={DrSurmei} alt="Dr. Elena Surmei" className='dr_photo'/>
        </div>
        <div className="text-right">
          <p className='hero_text'>
            Cu o abordare modernă și empatică, Dr. Surmei și echipa sa combină tehnologia de ultimă generație cu o grijă deosebită pentru confortul și satisfacția pacientului. La Edentify, transformăm sănătatea dentară în artă!
          </p>
        </div>
      </section>
      <section className="founder">
        <h3>Dr. Surmei Elena</h3>
        <p>Co-Founder</p>
      </section>
    </div>
    <Appointment/>
    <Carousel/>
    <Echipa/> <br /><br /><br /> <br />
    <Footer/>
    </div>
  );
}


export default Homepage;
