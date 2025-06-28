import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';
import Background from './components/Background';


export default function App() {
  return (
     <div className='h-screen w-full '>
      <Background />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={  <Home />}
        />
        <Route
          path="/gallery"
          element={  <Gallery />}
        />
        <Route
          path="/services"
          element={  <Services />}
        />
         <Route
          path="/aboutus"
          element={  <Aboutus />}
        />
        <Route path="*" 
        element={<NotFound />} 
        />
        {/* Add more routes as needed */}
      </Routes>
     
    </div>
    
  );
}
