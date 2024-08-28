// src/components/MusclePage.jsx
import React from 'react';
import './MusclePage';

const MusclePage = ({ title, exercises }) => {
  return (
    <div className="muscle-page">
      <h1>{title}</h1>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
      <footer>
        <div className="whatsapp-support">
          Need help? <a href="https://wa.me/252619443333" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
        </div>
        <p>afrahfitness 2024 | all rights reserved.</p>
      </footer>
    </div>
  );
};

export default MusclePage;
