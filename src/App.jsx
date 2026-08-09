import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import "./App.css";

function App() {
  // Cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Particles />
      <div id="cursor-glow" className="cursor-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>ALLAN SUAREZ</span> &nbsp;—&nbsp; FULL-STACK DEVELOPER &nbsp;—&nbsp; <span>© 2025</span>
      </footer>
    </>
  );
}

export default App;
