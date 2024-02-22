import * as React from 'react';
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {


  return (
    // <div className="App">
    //   <LeftNav />
    //   <Portfolio /> 
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio/>}></Route>
      <Route path ="/about-me" element={<About/>}></Route> 
      <Route path ="/contact-me" element={<Contact/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App
