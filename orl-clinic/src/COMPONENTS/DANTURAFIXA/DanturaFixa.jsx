import React from 'react';
import './DanturaFixa.css'; // Fișierul CSS pentru stilizare
import consult from '../../assets/consult.png'; 
import Profile from '../../assets/profile2.jpg'; 
import Plans from '../../assets/plans.jpg'; 
import Image2 from '../../assets/implant.png'; // Exemplu de imagine pentru implanturi
import Image3 from '../../assets/implant.png'; // Exemplu de imagine pentru lucrarea finală
import DoctorImage from '../../assets/man-dr.png'; // Imaginea doctorului
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';
import Appointment from '../APPOINTMENT/Appointment';
import ProfilePhoto from "../../assets/newHomeImg.jpg";

const DanturaFixa = () => {
  return (

    <div>
              <Header/>


              <div className="hero_container">
                <img src={ProfilePhoto} alt="ProfilePhoto" className="background__image" />
              
                <div className="overlay_content">
                  <div className="text___block">
                    <h1 style={{ fontSize: "40px" }}>Dinti Ficș</h1>
                    <h2><i style={{color:"red"}}>Zâmbet Nou în 24 de Ore!</i></h2>
                    <p>Pentru Cine este Recomandată Această Procedură?</p>

                    <p>
                    Nu există „candidatul perfect”, ci doar „planul de tratament perfect”! Fiecare pacient este unic, iar tratamentul se adaptează în funcție de nevoile specifice.
                    </p>
                  </div>
                </div>
              </div>



              
  
      <div className="dinti-ficsi">
        {/* Secțiunea de titlu și introducere */}
        
        {/* Secțiunea cu cine este recomandată procedura */}
        <section className="recomandari-section">
          <h2>Procedura „Dinți Ficși într-o Zi” este ideală pentru:</h2>
          <ul>
            <li>Pacienții care și-au pierdut toți dinții sau doar o parte din ei.</li>
            <li>Cei care au doar câțiva dinți rămași, dar care nu mai pot fi salvați.</li>
            <li>Persoanele care poartă proteze mobile și doresc o soluție fixă și confortabilă.</li>
          </ul>
        </section>
  
        {/* Secțiunea cu pașii procedurii */}
        <section className="procedura-section">
          <h2>În Ce Constă Procedura de Implant „Dinți Ficși într-o Zi”?</h2>
          <div className="procedura-steps">
            <div className="step">
              <img src={consult} alt="Consult Inițial" />
              <h3>Consult Inițial</h3>
              <p>Realizarea unei radiografii panoramice, consult clinic, discuție cu medicul implantolog și realizarea unui CT dentar.</p>
            </div>
            <div className="step">
              <img src={Plans} alt="Planificarea Intervenției" />
              <h3>Planificarea Intervenției</h3>
              <p>Medicul stabilește planul de tratament, în funcție de necesitățile tale și de constatările clinice.</p>
            </div>
            <div className="step">
              <img src={Profile} alt="Intervenția Chirurgicală" />
              <h3>Intervenția Chirurgicală</h3>
              <p>Extractia dinților existenți (dacă este necesar), adiții osoase (dacă este cazul), inserarea implanturilor (4-6).</p>
            </div>
          </div>
        </section>
  
        {/* Secțiunea cu avantajele procedurii */}
        <section className="avantaje-section">
          <h2>Avantajele Procedurii „Dinți Ficși într-o Zi”</h2>
          <ul>
            <li>Rapiditate: Dantura fixă și funcțională în doar 24 de ore.</li>
            <li>Confort Maxim: Procedură minim invazivă, realizată sub anestezie, fără durere.</li>
            <li>Estetică și Funcționalitate: Soluție permanentă care îmbină estetica și funcționalitatea.</li>
            <li>Tehnologie de Ultimă Generație: Utilizăm implanturi premium.</li>
            <li>Planificare Personalizată: Fiecare pacient beneficiază de un plan de tratament adaptat nevoilor sale.</li>
          </ul>
        </section>
  
        {/* Secțiunea despre siguranța procedurii */}
        <section className="siguranta-section">
          <h2>Este cu Adevărat Sigură Procedura de Implant Dentar într-o Zi?</h2>
          <p>
            Da! Procedura „Dinți Ficși într-o Zi” este sigură și eficientă datorită utilizării:
          </p>
          <ul>
            <li>Tehnologiei Avansate: Computer tomograf pentru planificare precisă.</li>
            <li>Materialelor Premium: Implanturi cu fiabilitate dovedită, biocompatibile și rezistente.</li>
            <li>Echipei Specializate: Medici cu experiență vastă în implantologie și chirurgie dentară.</li>
          </ul>
        </section>
  
        {/* Secțiunea despre Dr. Alexandru Polonic */}
        <section className="doctor-section">
          <div className="doctor-info">
            <h2>Dr. Alexandru Polonic – <span className='specializare__doctor'>Specialist Dento-Alveolar</span></h2>
            <p>
              Dr. Alexandru Polonic este un specialist în chirurgie dento-alveolară, recunoscut pentru expertiza sa în domeniul implantologiei și chirurgiei orale. Cu o experiență vastă în tratamentele complexe de reconstrucție dentară, Dr. Polonic este dedicat îmbunătățirii sănătății orale și estetice a pacienților săi prin tehnici moderne și soluții personalizate.
            </p>
            <p>
              Absolvent al Facultății de Medicină Dentară, Dr. Polonic și-a continuat pregătirea prin cursuri de specializare în chirurgie dento-alveolară și implantologie în țară și în străinătate. El este pasionat de cercetare și inovare în stomatologie, participând activ la conferințe internaționale și cursuri de perfecționare.
            </p>
          </div>
          <div className="doctor-image">
            <img src={DoctorImage} alt="Dr. Alexandru Polonic" />
          </div>
        </section>
  
        {/* Secțiunea cu statistici */}
        <section className="statistici-section">
          <h2>Statistici Impresionante</h2>
          <div className="statistici-grid">
            <div className="statistica">
              <h3>🦷 Peste 2500 Arcade reabilitate</h3>
              <p>Prin Dantura Fixa pe implanturi dentare.</p>
            </div>
            <div className="statistica">
              <h3>🦷 25000 Implanturi dentare inserate</h3>
              <p>Cu succes și satisfacție ridicată.</p>
            </div>
            <div className="statistica">
              <h3>🦷 Peste 30000 de pacienți fericiți</h3>
              <p>Care și-au regăsit zâmbetul.</p>
            </div>
          </div>
        </section>
  
        {/* Secțiunea cu riscuri și recomandări */}
        <section className="riscuri-section">
          <h2>Care Sunt Riscurile?</h2>
          <p>
            Ca orice procedură medicală, există riscuri, însă acestea sunt minime și bine controlate:
          </p>
          <ul>
            <li>Costuri Ridicate: Este o investiție semnificativă, dar beneficii de durată.</li>
            <li>Disconfort Post-operator: Ușor disconfort temporar după intervenție, gestionat cu analgezice.</li>
            <li>Risc de Infecție: Risc redus, minimizat prin respectarea strictă a protocoalelor de sterilizare și igienă.</li>
          </ul>
        </section>
        
      </div>
      <Appointment/>
      <Footer/>
    </div>
    
  );
};

export default DanturaFixa;