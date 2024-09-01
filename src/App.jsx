import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component

// Lazy load other components
const Deltoids = lazy(() => import('./pages/Deltoids'));
const Biceps = lazy(() => import('./pages/Biceps'));
const Pectorals = lazy(() => import('./pages/Pectorals'));
const UpperAbdominals = lazy(() => import('./pages/UpperAbdominals'));
const LowerAbdominals = lazy(() => import('./pages/LowerAbdominals'));
const Adductors = lazy(() => import('./pages/Adductors'));
const Quadriceps = lazy(() => import('./pages/Quadriceps'));
const Triceps = lazy(() => import('./pages/Triceps'));
const Trapezius = lazy(() => import('./pages/Trapezius'));
const Forearms = lazy(() => import('./pages/Forearms'));
const LatissimusDorsi = lazy(() => import('./pages/LatissimusDorsi'));
const Gluteals = lazy(() => import('./pages/Gluteals'));
const Calves = lazy(() => import('./pages/Calves'));
const Hamstrings = lazy(() => import('./pages/Hamstrings'));
const Obliques = lazy(() => import('./pages/Obliques'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deltoids" element={<Deltoids />} />
          <Route path="/biceps" element={<Biceps />} />
          <Route path="/pectorals" element={<Pectorals />} />
          <Route path="/obliques" element={<Obliques />} />
          <Route path="/upperabdominals" element={<UpperAbdominals />} />
          <Route path="/lowerabdominals" element={<LowerAbdominals />} />
          <Route path="/adductors" element={<Adductors />} />
          <Route path="/quadriceps" element={<Quadriceps />} />
          <Route path="/triceps" element={<Triceps />} />
          <Route path="/trapezius" element={<Trapezius />} />
          <Route path="/forearms" element={<Forearms />} />
          <Route path="/latissimusdorsi" element={<LatissimusDorsi />} />
          <Route path="/gluteals" element={<Gluteals />} />
          <Route path="/calves" element={<Calves />} />
          <Route path="/hamstrings" element={<Hamstrings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
