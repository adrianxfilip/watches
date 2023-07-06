import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home/Home";
import Collection from "./Components/Collection/Collection";
import Contact from "./Components/Contact/Contact";
import Watch from "./Components/Watch/Watch";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index element={<Home />} />
        <Route path="colectie" element={<Collection />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="watch/:id" element={<Watch />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;