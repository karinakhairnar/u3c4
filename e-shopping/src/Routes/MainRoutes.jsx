import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import { Products } from '../components/Products';
import { CategoryCard } from '../components/CategoryCard';
const MainRoutes = () => {
  return (
    <div>
      {/* Navbar and all the routes */}

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<CategoryCard />} />
      </Routes>
    </div>
  );
};
export { MainRoutes };
