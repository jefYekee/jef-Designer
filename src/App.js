import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { Analytics } from '@vercel/analytics/react';
import './assest/fonts/fonts.css';
import  Testimonials  from "./components/Testimonials";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Body>
          <Analytics />

          {/* 1. Hero */}
          <HeroSection />

          {/* 2. Projects */}
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          {/* 3. About */}
          <About />

          {/* 4. Skills */}
          <Skills />

          {/* 5. Testimonials */}
          <Testimonials />

          {/* 6. Contact */}
          <Contact />

          <Footer />

          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;