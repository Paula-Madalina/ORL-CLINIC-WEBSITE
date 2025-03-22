import React, { useState } from 'react';
import './Preturi.css';

const Preturi = () => {
  // Datele pentru servicii și prețuri
  const servicii = {
    dintiFicsi: [
      { denumire: 'Dinti ficsi 4', pret: '12.000 lei' },
      { denumire: 'Dinti ficsi 6', pret: '15.600 lei' },
      { denumire: 'Dinti ficsi 8', pret: '17.700 lei' },
    ],
    implantologie: [
      { denumire: 'Implant dentar premium', pret: 'de la 2.000 lei' },
      { denumire: 'Sinus Lift', pret: '3.500 lei' },
      { denumire: 'Aditie de os 1-2 dinti', pret: '1.500 lei' },
    ],
    proteza: [
      { denumire: 'Proteza acrilica clasica', pret: '1.700 lei' },
      { denumire: 'Proteza Capsa', pret: '4.500 lei' },
    ],
    terapie: [
      { denumire: 'Tratament LASER afte bucale/herpes', pret: '250 lei' },
      { denumire: 'Tratament de urgenta', pret: '250 lei' },
    ],
  };

  const [categorieSelectata, setCategorieSelectata] = useState('dintiFicsi');

  return (
    <div className="preturi-container">
      <h1>Prețuri</h1>
      <div className="butoane-categorii">
        <button onClick={() => setCategorieSelectata('dintiFicsi')}>Dinti Ficsi</button>
        <button onClick={() => setCategorieSelectata('implantologie')}>Implantologie</button>
        <button onClick={() => setCategorieSelectata('proteza')}>Proteza</button>
        <button onClick={() => setCategorieSelectata('terapie')}>Terapie</button>
      </div>
      <div className="lista-servicii">
        <h2>{categorieSelectata.toUpperCase()}</h2>
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

export default Preturi;