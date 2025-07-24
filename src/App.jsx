import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import DustParticlesBackground from "./components/DustParticlesBackground";

import CursorEffect from "./components/CursorEffect";

export default function App() {
  return (
    <>
      <CursorEffect />
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '90px', position: 'relative'}}>
        {/* DustParticlesBackground должен быть выше AnimatedBackground по z-index */}
        <DustParticlesBackground />
        <AnimatedBackground />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
