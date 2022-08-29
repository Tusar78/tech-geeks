import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
