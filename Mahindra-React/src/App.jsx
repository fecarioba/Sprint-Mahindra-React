import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
