import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./components/About/about";
import Nav from "./components/Nav/nav";
import Port from "./components/Portfolio/port";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Port />} />
        </Routes>
      </main>
      <footer />
    </BrowserRouter>
  );
}

export default App;
