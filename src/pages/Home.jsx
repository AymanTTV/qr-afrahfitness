// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add specific styles for the home page

const Home = () => {
  return (
    <div className="home-page">
      <h1>Which muscle are you interested in?</h1>
      <div className="muscle-buttons">
        <Link to="/deltoids" className="muscle-button">Deltoids</Link>
        <Link to="/biceps" className="muscle-button">Biceps</Link>
        <Link to="/pectorals" className="muscle-button">Pectorals</Link>
        <Link to="/upperabdominals" className="muscle-button">Upper Abdominals</Link>
        <Link to="/lowerabdominals" className="muscle-button">Lower Abdominals</Link>
        <Link to="/adductors" className="muscle-button">Adductors</Link>
        <Link to="/quadriceps" className="muscle-button">Quadriceps</Link>
        <Link to="/triceps" className="muscle-button">Triceps</Link>
        <Link to="/trapezius" className="muscle-button">Trapezius</Link>
        <Link to="/forearms" className="muscle-button">Forearms</Link>
        <Link to="/latissimusdorsi" className="muscle-button">Latissimus Dorsi</Link>
        <Link to="/gluteals" className="muscle-button">Gluteals</Link>
        <Link to="/calves" className="muscle-button">Calves</Link>
        <Link to="/hamstrings" className="muscle-button">Hamstrings</Link>
      </div>
    </div>
  );
};

export default Home;
