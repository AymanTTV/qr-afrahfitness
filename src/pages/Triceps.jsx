import React from 'react';

const Triceps = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Triceps</h1>
      <ul>
        <li><a href="https://www.youtube.com/link_to_triceps_dips" target="_blank" rel="noopener noreferrer">Triceps Dips</a></li>
        <li><a href="https://www.youtube.com/link_to_triceps_extensions" target="_blank" rel="noopener noreferrer">Triceps Extensions</a></li>
        <li><a href="https://www.youtube.com/link_to_triceps_pulldowns" target="_blank" rel="noopener noreferrer">Triceps Pulldowns</a></li>
      </ul>
      <footer style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
        <a href="https://wa.me/252619443333" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
      </footer>
      <footer style={{ position: 'fixed', bottom: '0', width: '100%', textAlign: 'center' }}>
        afrahfitness 2024 | all rights reserved.
      </footer>
    </div>
  );
};

export default Triceps;
