import './App.css';
//import styles from "./App.css";
//import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Service";
import SkillsSection from "./components/Skills/Skills";

import AboutSection from "./components/About/About";
//import ContactSection from "./components/ContactSection/ContactSection";
import ContactFlipCard from './components/ContFlip/ContactFlipCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection/>
      <Services/>
      <Projects />
      <ContactFlipCard/>
      
      
    </div>
  );
}

export default App;

/* 
<Hero />
      <AboutSection />
      <SkillsSection/>
      <Portfolio/>
      <Experience />
      <Services/>
      <Projects />
      <ContactFlipCard/>
      <Contact />
      */
