import React, { useState } from 'react';
import './Prices.css'; // Asigură-te că ai un fișier CSS pentru stilizare
import Header from '../HEADER/Header';
import ImageDental from "../../assets/image copy.png";

const PricesPage = () => {
  const servicii = {
    albireDentara: [
      { denumire: 'Albire dentara profesionala cu LASER', pret: '2.300 lei' },
    ],
    aparateDentare: [
      { denumire: 'Aparat dentar invizibil advanced (nelimitat gutiere)', pret: '20.000 lei' },
      { denumire: 'Aparat dentar invizibil MINI (10 -12 gutiere)', pret: '9.500 lei' },
      { denumire: 'Aparat dentar invizibil one (20 – 24 gutiere)', pret: '14.200 lei' },
      { denumire: 'Aparat dentar metalic / arcada', pret: '2.500 lei' },
    ],
    consultatii: [
      { denumire: 'Consult medic specialist', pret: 'GRATUIT' },
      { denumire: 'Consultatie implantologie (examen clinic, interpretare imagistica, plan de tratament personalizat)', pret: 'GRATUIT' },
    ],
    coroane: [
      { denumire: 'Coroana metalo ceramica', pret: '1.700 lei' },
      { denumire: 'Coroana pe implant zirconiu suprem', pret: '2.000 lei' },
      { denumire: 'Coroana Zirconiu regular', pret: '1.700 lei' },
    ],
    dintiFicsi: [
      { denumire: 'Dinti ficsi 4', pret: '12.000 lei' },
      { denumire: 'Dinti ficsi 6', pret: '15.600 lei' },
      { denumire: 'Dinti ficsi 8', pret: '17.700 lei' },
    ],
    fateteDentare: [
      { denumire: 'Fatete dentare Emax', pret: '3.200 lei' },
      { denumire: 'Fateta EMAX (Digital Smile design) PREMIUM', pret: '4.000 lei' },
    ],
    implantologie: [
      { denumire: 'Implant dentar premium', pret: 'de la 2.000 lei' },
    ],
    alteServicii: [
      { denumire: 'Inlay / Onlay', pret: '1.200 lei' },
      { denumire: 'Lucrare definitiva metalo-ceramica – 12 dinti', pret: '15.000 lei' },
      { denumire: 'Lucrare definitiva metalo-ceramica 10 DINTI', pret: '12.000 lei' },
      { denumire: 'Lucrare definitiva pe implant titan compozit/ arcada', pret: '17.000 lei' },
      { denumire: 'Lucrare definitiva pe implanturi zirconiu/titan', pret: '25.000 lei' },
      { denumire: 'Lucrare provizorie dinti ficsi acrilat', pret: '2.000 lei' },
      { denumire: 'Lucrare provizorie dinti ficsi pmma', pret: 'de la 2.550 lei' },
      { denumire: 'Obturatie (carie) cavitate', pret: 'de la 397 lei' },
      { denumire: 'Proteza acrilica clasica', pret: '1.700 lei' },
      { denumire: 'Proteza Capse', pret: '4.500 lei' },
      { denumire: 'Retratament endodontic dinte cu configuratie anatomica speciala, sub control microscopic (molar de minte)', pret: '1.800 lei' },
      { denumire: 'Retratament endodontic dinte monoradicular realizat sub control microscopic (include obturatia de canal)', pret: '1.300 lei' },
      { denumire: 'Retratament endodontic dinte pluriradicular realizat sub control microscopic (include obturatia de canal)', pret: '1.500 lei' },
      { denumire: 'Sedare constienta', pret: 'de la 1.500 lei' },
      { denumire: 'Tratament LASER afte bucale/herpes', pret: '250 lei' },
      { denumire: 'Tratament de urgenta (accidente/traumatisme, abcese, infectii, drenaj endodontic)', pret: '250 lei' },
      { denumire: 'Tratament endodontic dinte cu configuratie anatomica speciala, sub control microscopic (molar de minte)', pret: '1.700 lei' },
      { denumire: 'Tratament endodontic dinte monoradicular realizat sub control microscopic (include obturatia de canal)', pret: '950 lei' },
      { denumire: 'Tratament endodontic dinte pluriradicular realizat sub control microscopic (include obturatia de canal)', pret: '1.200 lei' },
    ],
  };

  const [categorieSelectata, setCategorieSelectata] = useState('albireDentara');

  return (
    <div className="prices-page">
        <Header />
        <div className='hero_img'>
            <img src={ImageDental} alt="Dental Clinic" />
            <div className="hero-overlay">
                <h1 className='title'>Prețuri</h1>
            </div>
        </div>
        <div className="categorii-butoane">
            {Object.keys(servicii).map(categorie => (
                <button key={categorie} onClick={() => setCategorieSelectata(categorie)}>
                    {categorie.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </button>
            ))}
        </div>
        <div className="servicii-list">
            <h2>{categorieSelectata.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Denumire</th>
                        <th>Pret (Lei)</th>
                    </tr>
                </thead>
                <tbody>
                    {servicii[categorieSelectata].map((serviciu, index) => (
                        <tr key={index}>
                            <td>{serviciu.denumire}</td>
                            <td>{serviciu.pret}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default PricesPage;
