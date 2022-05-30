import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home"
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header />
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
      <footer />
    </BrowserRouter>
  );
}

export default App;
