import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Packages from './components/Packages'
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import SocialMedia from "./components/SocialMedia/index.js";
import styled from "styled-components";
import Certificates from "./components/Certificates"
import { Analytics } from '@vercel/analytics/react';
// src/index.js or src/App.js
import './assest/fonts/fonts.css';




const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  // 💡 CHANGE HERE: Setting initial state to FALSE to start in Light Theme
  const [darkMode, setDarkMode] = useState(false); 
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Body>
        <Analytics />
          <HeroSection />
          <Wrapper>
          
            <Skills />
          {/* Need to add Team Work As Partner */}
            {/* <Experience /> */}
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            {/* <Education /> */}
            {/* <Certificates /> */}
            {/* <Packages /> */}
            {/* <SocialMedia /> */}
            <Contact />
          </Wrapper>
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