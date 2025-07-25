import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Reviews from "./sections/Reviews";
import Contacts from "./sections/Contacts";

export default function Main() {
  return (
    <main style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0}}>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contacts />
    </main>
  );
}
