import React from 'react';
import './Estetica.css'; // Fișierul CSS pentru stilizare

import Image1 from "../../assets/fatete.png"
import Image2 from "../../assets/coroane.png"
import Image3 from "../../assets/implant.png"
import Image4 from "../../assets/albire.png"
import Image5 from "../../assets/parodontologie.png"


import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules"; 


import SurmeiDr from '../../assets/surmeiDR.png'; 
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';
import Appointment from '../APPOINTMENT/Appointment';

const servicii = [
  { img: Image1, title: "Fațete Dentare", desc: "O soluție rapidă pentru un zâmbet alb, perfect aliniat." },
  { img: Image2, title: "Coroane Dentare", desc: "Restaurarea dinților deteriorați cu coroane durabile și estetice." },
  { img: Image3, title: "Implanturi Dentare", desc: "Soluția perfectă pentru înlocuirea dinților pierduți." },
  { img: Image4, title: "Albire Dentară", desc: "Albire profesională pentru un zâmbet strălucitor." },
  { img: Image5, title: "Conturarea Gingivală", desc: "Reconturare estetică a liniei gingivale pentru o simetrie perfectă." }
];

const Estetica = () => {
  
  
  return (
    <div>
      <Header/>
        {/* Secțiunea de titlu și introducere */}
        <section className="hero-section">
          <h1>Estetica Dentară și Protetică</h1>
        </section>
      <div className="estetica-protetica">
        

        <section>
          <h3>Serviciile Noastre de Protetică și Estetică Dentară</h3>
        </section>
  
        {/* Secțiunea cu servicii */}
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}  // 1 slide pe rând
        navigation
        autoplay={{ delay: 3000 }}
        loop
        centeredSlides={true}  // Center the slides
        breakpoints={{
          320: {
            slidesPerView: 1,  // 1 slide pe ecrane mici
          },
          768: {
            slidesPerView: 2,  // 2 slide-uri pe tablete
          },
          1024: {
            slidesPerView: 3,  // 3 slide-uri pe ecrane mari
          },
  }}
>
  {servicii.map((service, index) => (
    <SwiperSlide key={index}>
      <div className="slide">
        <img src={service.img} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  
        {/* Secțiunea cu beneficii */}
        <section className="beneficii-section">
          <h2>De ce să ne Alegi?</h2>
          <ul>
            <li>Expertiză Medicală: Echipa noastră de medici dentiști cu experiență vastă.</li>
            <li>Tehnologie Modernă: Utilizăm cele mai avansate echipamente și tehnici.</li>
            <li>Rezultate Naturale: Abordare estetică personalizată pentru un zâmbet natural.</li>
            <li>Materiale de Calitate: Utilizăm doar materiale premium pentru rezultate durabile.</li>
            <li>Îngrijire Personalizată: Fiecare pacient beneficiază de un plan de tratament adaptat nevoilor sale.</li>
          </ul>
        </section>
  
        {/* Secțiunea despre Dr. Elena Surmei */}
        <section className="doctor-section">
          <div className="doctor-info">
            <h2> Dr. Elena Surmei – <span className='specializare__doctor'>Medic Specialist Protetică și Estetică Dentară</span></h2>
            <p>
              Dr. Elena Surmei este un specialist de renume în protetica și estetica dentară, cu o vastă experiență în redarea sănătății și frumuseții zâmbetului pacienților. Cu o abordare bazată pe precizie, inovație și empatie, Dr. Surmei este dedicată creării de soluții personalizate care îmbină funcționalitatea cu estetica deosebită.
            </p>
            <p>
              Dr. Elena Surmei a absolvit Facultatea de Medicină Dentară și și-a completat formarea prin specializări avansate în protetica dentară și estetică dentară în centre de prestigiu naționale și internaționale. Pasiunea pentru perfecționarea continuă o determină să participe constant la cursuri de formare și conferințe de specialitate, pentru a se menține la curent cu cele mai recente inovații și tehnici din domeniu.
            </p>
          </div>
          <div className="doctor-image">
            <img src={SurmeiDr} alt="Dr. Elena Surmei" />
          </div>
        </section>
  
        {/* Secțiunea cu pașii procedurilor */}
        <section className="proceduri-section">
          <h2>Cum Funcționează</h2>
          <div className="procedura">
            <h3>Fațete Dentare</h3>
            <p>Consultanță inițială, măsurători, preparare dantură, fixare fațete.</p>
          </div>
          <div className="procedura">
            <h3>Coroane Dentare</h3>
            <p>Evaluare, modelare, aplicare temporară, coroana permanentă.</p>
          </div>
          <div className="procedura">
            <h3>Albire Dentară</h3>
            <p>Curățare inițială, aplicare gel de albire, finalizare.</p>
          </div>
        </section>
      </div>
      <Appointment/>
      <Footer/>
    </div>
  );
};

export default Estetica;