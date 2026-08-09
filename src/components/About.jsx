import { useReveal } from "../hooks/useReveal";
import "./About.css";

function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <p className="section-label">// 01 — ABOUT</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="section-divider" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm <strong>Allan Suarez</strong>, a passionate full-stack web
            developer who thrives at the intersection of clean code and
            compelling user experiences.
          </p>
          <p>
            My approach combines <strong>technical precision</strong> with
            creative problem-solving. Whether architecting a REST API or
            crafting a pixel-perfect UI, I bring the same obsession for quality
            to every layer of the stack.
          </p>
          <p>
            When I'm not writing code, I'm exploring emerging technologies,
            contributing to open-source, and pushing the boundaries of what web
            applications can do.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-title">// QUICK STATS</div>
          <ul className="about-list">
            <li>Location <span>Philippines 🇵🇭</span></li>
            <li>Availability <span>Open to Work</span></li>
            <li>Focus <span>Full-Stack</span></li>
            <li>Preferred Stack <span>React + Node</span></li>
            <li>Currently Building <span>This Portfolio</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
