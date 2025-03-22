import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    numePrenume: '',
    telefon: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datele formularului:', formData);
    setFormData({
      numePrenume: '',
      telefon: '',
      email: '',
    });
  };

  return (
    <div className="appointment-container">
      <div className="header">
        <h1>Programează o Consultație</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="numePrenume"
              placeholder="Nume, Prenume*"
              value={formData.numePrenume}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon*"
              value={formData.telefon}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Trimite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
