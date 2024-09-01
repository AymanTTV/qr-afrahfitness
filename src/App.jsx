import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Deltoids from './pages/Deltoids';
import Biceps from './pages/Biceps';
import Pectorals from './pages/Pectorals';
import UpperAbdominals from './pages/UpperAbdominals';
import LowerAbdominals from './pages/LowerAbdominals';
import Adductors from './pages/Adductors';
import Quadriceps from './pages/Quadriceps';
import Triceps from './pages/Triceps';
import Trapezius from './pages/Trapezius';
import Forearms from './pages/Forearms';
import LatissimusDorsi from './pages/LatissimusDorsi';
import Gluteals from './pages/Gluteals';
import Calves from './pages/Calves';
import Hamstrings from './pages/Hamstrings';
import Obliques from './pages/Obliques';

function App() {
  return (
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
  );
}

export default App;
