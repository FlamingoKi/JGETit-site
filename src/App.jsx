import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '90px'}}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
