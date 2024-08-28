import React from 'react';

const Pectorals = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Pectorals</h1>
      <ul>
        <li><a href="https://www.youtube.com/link_to_bench_press" target="_blank" rel="noopener noreferrer">Bench Press</a></li>
        <li><a href="https://www.youtube.com/link_to_dumbbell_flys" target="_blank" rel="noopener noreferrer">Dumbbell Flys</a></li>
        <li><a href="https://www.youtube.com/link_to_press_ups" target="_blank" rel="noopener noreferrer">Press-ups</a></li>
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

export default Pectorals;
