import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Admin from "./admin";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/product/:id" element={} /> */}
        {/* <Route path="/admin/product/:id" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
