import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Pokedex from '../pages/pokedex';

function RoutesProvider() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
}

export default RoutesProvider;