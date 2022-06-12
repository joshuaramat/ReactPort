import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header'
import About from './components/About/about';
import Port from './components/Portfolio/port';
import Contact from './components/Contact/contact.js';
import Resume from './components/Resume/resume'
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Port />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
