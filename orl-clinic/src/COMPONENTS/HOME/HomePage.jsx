import React from 'react';
import ProfilePhoto from "../../assets/profilePhoto.jpg";
import "./homesection.css"; 



function Homepage() {
  return (
    <div>

      <div className='profile__photo__container'>
        <img src={ProfilePhoto} alt="ProfilePhoto" className='profile__photo'/>
      </div>

      <div className='hero__title'>
        <h1 style={{fontWeight:"normal"}}>Dr. Elena <span style={{ color: 'red' }}>Martin</span> – Medic Specialist <span style={{ color: 'red' }}>Chirurgie Plastică</span>, <span style={{ color: 'red' }}>Estetică</span> și  <span style={{ color: 'red' }}>Microchirurgie Reconstructivă</span>
        </h1>
      </div>

      <div className="hero__content">
        <p>Chirurgie plastică – un domeniu la care am visat de mică. Încă de când eram copil, am fost atrasă de tot ce este frumos, armonios, plăcut estetic. Am cunoscut de-a lungul vieții persoane care erau superbe în ochii mei, oameni extraordinari de buni și speciali, care, însă, se ascundeau.</p>
        <p>Fie că era vorba de un defect genetic, o modificare fizică în urma unui accident sau pur și simplu o opinie negativă, am văzut mereu oameni care ascundeau toată frumusețea (interioară și exterioară) de care dispuneau, din cauza unui simplu „defect”.</p>
        <p>Atunci am știut că îmi doresc să devin medic, că am o chemare pentru chirurgie plastică – pentru că știu că în urma unei intervenții (adesea minim invazivă) pot aduce la lumină o persoană care merită văzută, pentru toată frumusețea ei.</p>
        <p>Și pentru că în acest domeniu experiența și educația sunt pilonii principali pentru rezultate de succes, mi-am dedicat tot timpul învățării. Am început prin a-mi susține lucrarea de licență în domeniul microchirurgiei, arie a chirurgiei plastice ce implică finețe, precizie și talent.</p>
        <p>Am continuat pregătirea în clinici și spitale de specialitate de referință din Europa și SUA. Cursurile și stagiile de pregătire din cadrul Mayo Clinic (cel mai bine cotat spital din America) și Cleveland Clinic mi-au oferit expunere către tehnici inovative în chirurgie plastică și estetică.</p>
        <p>Ulterior am avut șansa de a perfecționa si a rafina tehnicile de chirurgie plastică în clinici de renume din Bruxelles, Miami și Paris, în domeniul augmentării mamare minim invazive, esteticii faciale, corporale și chirurgia mâinii.</p>
        <p>Din dorința de progres am optat pentru susținerea examenului și obținerea Diplomei Europene în Chirurgie Plastică, Estetică și Microchirurgie Reconstructivă la Bruxelles, examen susținut în 2 etape.</p>
        <p>Tehnicile de estetică facială nechirurgicală (injectări de acid hialuronic și toxina botulinica) au fost rafinate în cadrul participărilor la numeroase congrese și workshopuri internaționale – la Royal College of Surgeons (London), Paris, Monaco, Los Angeles și San Diego.</p> 
        <p>Satisfacția clienților mei este ceea ce mă motivează să învăț în continuare, să investesc timp și resurse în perfecționarea continuă a tehnicilor folosite. Și, desigur, atunci când văd că o persoană își lasă, în sfârșit, adevărata frumusețe sa fie expusă – atunci știu că am ales corect să practic chirurgie plastică!</p>
      </div>
    </div>
  )
}

export default Homepage;
