import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/index.css';
import App from './Components/App';
import Nav from './Components/Nav';
import About from'./Components/About';
import Footer from './Components/footer';
import PageNotFind from './Components/PageNotFound';
import BookingPage from './Components/BookingPage';
import {HashRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter hashType="hashbang">
  <Nav/>
     <Routes>
      <Route path='/' element={<App />} />
      <Route path='BookingPage' element={<BookingPage />} />
      <Route path='About' element={<About/>}/>
      <Route path='PageNotFound' element ={<PageNotFind/>}/>
    </Routes>
  <Footer/>
  </HashRouter>
);

reportWebVitals();
