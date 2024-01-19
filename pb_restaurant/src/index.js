import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/index.css';
import App from './Components/App';
import Nav from './Components/Nav';
import About from'./Components/About';
import Footer from './Components/footer';
import PageNotFind from './Components/PageNotFind';
import BookingPage from './Components/BookingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Nav/><Nav/><Nav/><Nav/><Nav/>
     <Routes>
      <Route path='/' element={<App />} />
      <Route path='BookingPage' element={<BookingPage />} />
      <Route path='About' element={<About/>}/>
      <Route path='PageNotFind' element ={<PageNotFind/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
);

reportWebVitals();
