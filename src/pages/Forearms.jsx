import React from 'react';

const Forearms = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Forearms</h1>
      <ul>
        <li><a href="https://www.youtube.com/link_to_pull_ups" target="_blank" rel="noopener noreferrer">Pull-ups</a></li>
        <li><a href="https://www.youtube.com/link_to_reverse_curls" target="_blank" rel="noopener noreferrer">Reverse Curls</a></li>
        <li><a href="https://www.youtube.com/link_to_biceps_curls" target="_blank" rel="noopener noreferrer">Biceps Curls</a></li>
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

export default Forearms;
