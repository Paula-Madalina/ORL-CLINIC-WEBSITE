import React from 'react';
import ProfilePhoto from "../../assets/profile2.jpg";
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
        <img src={ProfilePhoto} alt="ProfilePhoto" className="background__image" />

        <div className="overlay__content">
          <div className="text__block">
            <h2>Dantură Fixă pe implanturi dentare</h2>
            <p>Clinică acreditată de Asociația Stomatologilor. Specializați în Chirurgie Orală și Implantologie</p>
            <button>VEZI DETALII DANTURĂ FIXĂ</button>
          </div>

          <div className="text__block">
            <h2>Singura clinică din România acreditată de ZAGA CENTER</h2>
            <p>DentOP este singura clinică din România acreditată de rețeaua internațională ZAGA CENTER cu sediul în Barcelona</p>
            <button>DETALII ACREDITARE INTERNAȚIONALĂ</button>
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
          <p>
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
          <p>
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
