import React from 'react';
import './Estetica.css'; // Fișierul CSS pentru stilizare
import Image1 from '../../assets/implant.png'; 
import Image2 from '../../assets/implant.png'; // Exemplu de imagine pentru coroane dentare
import Image3 from '../../assets/implant.png'; // Exemplu de imagine pentru implanturi
import Image4 from '../../assets/implant.png'; // Exemplu de imagine pentru albire dentară
import Image5 from '../../assets/implant.png'; // Exemplu de imagine pentru conturarea gingivală
import SurmeiDr from '../../assets/surmeiDR.png'; // Imaginea doctorului
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';
import Appointment from '../APPOINTMENT/Appointment';

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
          <p>Serviciile Noastre de Protetică și Estetică Dentară</p>
        </section>
  
        {/* Secțiunea cu servicii */}
        <section className="servicii-section">
          <div className="serviciu">
            <img src={Image1} alt="Fațete Dentare" />
            <h2>Fațete Dentare</h2>
            <p>O soluție rapidă pentru un zâmbet alb, perfect aliniat.</p>
          </div>
          <div className="serviciu">
            <img src={Image2} alt="Coroane Dentare" />
            <h2>Coroane Dentare</h2>
            <p>Restaurarea dinților deteriorați cu coroane durabile și estetice.</p>
          </div>
          <div className="serviciu">
            <img src={Image3} alt="Implanturi Dentare" />
            <h2>Implanturi Dentare</h2>
            <p>Soluția perfectă pentru înlocuirea dinților pierduți.</p>
          </div>
          <div className="serviciu">
            <img src={Image4} alt="Albire Dentară" />
            <h2>Albire Dentară</h2>
            <p>Albire profesională pentru un zâmbet strălucitor.</p>
          </div>
          <div className="serviciu">
            <img src={Image5} alt="Conturarea Gingivală" />
            <h2>Conturarea Gingivală</h2>
            <p>Reconturare estetică a liniei gingivale pentru o simetrie perfectă.</p>
          </div>
        </section>
  
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
            <h2>Dr. Elena Surmei – Medic Specialist Protetică și Estetică Dentară</h2>
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