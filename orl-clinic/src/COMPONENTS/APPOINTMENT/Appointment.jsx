import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    numePrenume: '',
    telefon: '',
    email: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trimite formularul folosind emailjs
    emailjs
      .sendForm('service_1xeh4es', 'template_gp35e4c', form.current, {
        publicKey: 'lwM081GjWvFthyn2T',  // Folosește public key-ul tău din EmailJS
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setFormData({
            numePrenume: '',
            telefon: '',
            email: '',
          });  // Resetează formularul după trimitere
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="appointment-container">
      <div className="header">
        <h1>Programează o Consultație</h1>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={handleSubmit}>
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
            <button type="submit" className="send_button">Trimite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
