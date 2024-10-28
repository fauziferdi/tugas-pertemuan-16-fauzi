import React from "react";
import Navbar from "./layout/navbar/Navbar";
import Header from "./layout/header/Header";

import SectionAbout from "./layout/section/sectionAbout/SectionAbout";
import SectionTeam from "./layout/section/sectionTeam/SectionTeam";
import SectionEnd from "./layout/section/sectionEnd/SectionEnd";
import Footer from "./layout/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SectionAbout />
      <SectionTeam />
      <SectionEnd />
      <Footer />
    </>
  );
}
