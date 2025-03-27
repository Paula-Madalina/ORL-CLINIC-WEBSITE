import React from "react";
import { useState } from "react";
import Image from "../../assets/image copy.png"
import "./Prices.css";
import Header from "../HEADER/Header";
import Appointment from "../../COMPONENTS/APPOINTMENT/Appointment"
import Footer from "../FOOTER/Footer";
import ProfilePhoto from "../../assets/newHomeImg.jpg";


const DentalPricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('dintiFicsi');
   

  // Funcții pentru setarea categoriilor
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const services = {
    dintiFicsi: [
      { name: 'Dinti ficsi 4', price: '12.000 Lei' },
      { name: 'Dinti ficsi 6', price: '15.600 Lei' },
      { name: 'Dinti ficsi 8', price: '17.700 Lei' },
      { name: 'Lucrare definitiva metalo-ceramica – 12 dinti', price: '15.000 Lei' },
      { name: 'Lucrare definitiva metalo-ceramica 10 DINTI', price: '12.000 Lei' },
      { name: 'Lucrare provizorie dinti ficsi acrilat', price: '2.000 Lei' },
      { name: 'Lucrare provizorie dinti ficsi PMMA', price: '2.550 Lei' },
      { name: 'Coroana metalo-ceramica', price: '1.700 Lei' },
      { name: 'Coroană pe implant zirconiu suprem', price: '2.000 Lei' },
      { name: 'Coroană zirconiu regular', price: '1.700 Lei' },
      { name: 'Proteză acrilică clasică', price: '1.700 Lei' },
      { name: 'Proteză capse', price: '4.500 Lei' },
      { name: 'Inlay / Onlay', price: '1.200 Lei' }
    ],

    ortodontie: [
      { name: 'Aparat dentar invizibil advanced (nelimitat gutiere)', price: '20.000 Lei' },
      { name: 'Aparat dentar invizibil MINI (10-12 gutiere) ', price: '9.500 Lei' },
      { name: 'Aparat dentar invizibil ONE (20-24 gutiere)', price: '14.200 Lei' },
      { name: 'Aparat dentar metalic / arcadă', price: '2.500 Lei' },
     
    ],
    endodontie: [
      { name: 'Obturatie (carie) cavitate', price: 'de la 397 Lei' },
      { name: 'Retratament endodontic molar de minte', price: '1.800 Lei' },
      { name: 'Retratament endodontic dinte monoradicular', price: '1.300 Lei' },
      { name: 'Retratament endodontic dinte pluriradicular', price: '1.500 Lei' },
      { name: 'Sedare constienta', price: 'de la 1.500 Lei' },
      { name: 'Tratament LASER afte bucale/herpes', price: '250 Lei' },
      { name: 'Tratament de urgenta', price: '250 Lei' },
      { name: 'Tratament endodontic dinte monoradicular', price: '950 Lei' },
      { name: 'Tratament endodontic dinte pluriradicular', price: '1.200 Lei' },
      { name: 'Tratament endodontic molar de minte', price: '1.700 Lei' },
    ],
    alteServicii: [
      { name: 'Consult medic specialist', price: 'GRATUIT' },
      { name: 'BRIGHT & SHINE (Detartraj ultrasunete, periaj profesional, air flow)', price: '600 Lei' },
      { name: 'Albire dentară profesională cu LASER', price: '2.300 Lei' },
      { name: 'Fațete dentare Emax', price: '3.200 Lei' },
      { name: 'Fațetă EMAX (Digital Smile Design) PREMIUM', price: '4.00 Lei' },
      { name: 'Consultatie implantologie', price: 'GRATUIT' },
      { name: 'Implant dentar premium', price: 'de la 2.000 Lei' },
      { name: 'Lucrare definitiva pe implant titan compozit/arcada', price: '17.000 Lei' },
      { name: 'Lucrare definitiva pe implanturi zirconiu/titan', price: '25.000 Lei' }
      
    ]
  }
  return (
    <div className="relative w-full">
      <Header />
  
      {/* Containerul pentru imagine și text */}
      <div className="container">
        {/* Imaginea */}
        <img
          src={ProfilePhoto}
          alt="Background"
          className="image-background"
        />
        
        {/* Textul care apare deasupra imaginii */}
        <div className="text-overlay">
          <h3 className="prices_title">Prețuri</h3>
          <p>Echipa multidisciplinară a clinicii DentOP este organizată astfel încât să ofere servicii stomatologice care acoperă toate specialitățile de la implantologie până la endodonție la microscop și protetică</p>
        </div>
  
        {/* Container pentru butoane */}
        <div className="buttons_container">
          <div className="buttons">
            <button className="price_button" onClick={() => handleCategoryClick('dintiFicsi')}>Dinti Ficși</button>
            <button className="price_button" onClick={() => handleCategoryClick('ortodontie')}>Ortodontie</button>
            <button className="price_button" onClick={() => handleCategoryClick('endodontie')}>Endodontie </button>
            <button className="price_button" onClick={() => handleCategoryClick('alteServicii')}>Alte Servicii</button>
            
          </div>
        </div>
    </div>















      

  

      <div className="services-container">
        {selectedCategory && (
          <div className="service-category">
            <div className="service-items">
              {services[selectedCategory].map((service, index) => (
                <div className="service-item" key={index}>
                  <span>{service.name}</span>
                  <span>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Appointment/>
      <Footer/>
    </div>
  );
};

export default DentalPricing;