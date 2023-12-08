import React, {useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import BookingPage from "./Components/BookingPage";
import About from './About';
import Home from './Home';
import Testimonials from './testimonials';
import Specials from './Specials';
import Footer from './footer';
import './styles.css';

const App = () => {

  return (
    <div>    
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='/specials' element={<Specials />} />
        <Route path="bookingPage" element = {<BookingPage/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
