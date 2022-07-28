import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
