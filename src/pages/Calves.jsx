import React from 'react';

const Calves = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Calves</h1>
      <ul>
        <li><a href="https://www.youtube.com/link_to_calf_raises" target="_blank" rel="noopener noreferrer">Calf Raises</a></li>
        <li><a href="https://www.youtube.com/link_to_squats" target="_blank" rel="noopener noreferrer">Squats</a></li>
        <li><a href="https://www.youtube.com/link_to_dead_lifts" target="_blank" rel="noopener noreferrer">Dead Lifts</a></li>
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

export default Calves;
