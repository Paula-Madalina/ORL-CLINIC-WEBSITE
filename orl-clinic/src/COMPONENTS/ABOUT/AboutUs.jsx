import React from 'react';
import './AboutUs.css';
import drAlex from "../../assets/man-dr.png";
import surmeiDR from "../../assets/surmeiDR.png";
import Header from '../HEADER/Header';
import Echipa from "../ECHIPA/Echipa";
import Appointment from '../APPOINTMENT/Appointment';
import Footer from '../FOOTER/Footer';

const AboutUs = () => {
  return (
    <div className="despre-noi">
      {/* Header fixat */}
      <Header/>

      {/* Secțiuni Despre Noi */}
      <section className="section-about">
        <Echipa/>
      </section>


      <section class="despre-noi">
  <div class="despre-container">
    <p class="intro-text">
      La eDENTIFY, ne ghidăm după un set de valori fundamentale care ne definesc fiecare acțiune și decizie. Aceste valori reflectă angajamentul nostru față de excelență, integritate și îngrijire centrată pe pacient.
    </p>

    <div class="valoare-container">
      <div class="valoare">
        <h3>Excelență în Îngrijire</h3>
        <p>Ne străduim să oferim cea mai înaltă calitate a îngrijirii dentare...</p>
      </div>

      <div class="valoare">
        <h3>Integritate și Transparență</h3>
        <p>Credem în construirea unor relații bazate pe încredere și onestitate...</p>
      </div>

      <div class="valoare">
        <h3>Îngrijire Centrată pe Pacient</h3>
        <p>Pacienții noștri sunt întotdeauna pe primul loc...</p>
      </div>

      <div class="valoare">
        <h3>Inovație Continuă</h3>
        <p>Suntem dedicați inovării și îmbunătățirii constante...</p>
      </div>

      <div class="valoare">
        <h3>Respect și Empatie</h3>
        <p>Respectul și empatia sunt pilonii interacțiunii noastre cu pacienții...</p>
      </div>

      <div class="valoare">
        <h3>Responsabilitate Socială</h3>
        <p>Ne asumăm responsabilitatea de a contribui la binele comunității...</p>
      </div>
    </div>

    <div class="misiune">
      <h3>Misiunea Noastră</h3>
      <p>
        Scopul nostru este să transformăm fiecare vizită într-o experiență plăcută și fără stres, concentrându-ne pe confortul și satisfacția pacienților noștri. Credem că un zâmbet sănătos și frumos poate schimba vieți, iar echipa noastră este aici pentru a vă ajuta să obțineți zâmbetul pe care îl meritați.
      </p>
    </div>

    <div class="contact">
      <h3>Vă așteptăm la eDENTIFY!</h3>
      <p>La eDENTIFY, ne dedicăm să vă oferim îngrijire dentară de excepție într-un mediu prietenos și profesionist. Contactați-ne pentru a programa o consultație și pentru a descoperi cum valorile noastre fundamentale ne diferențiază.</p>
    </div>
  </div>
</section>


      
  <Appointment/>
  <Footer/>
</div>
    
  );
};

export default AboutUs;
