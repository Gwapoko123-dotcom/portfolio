import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const counterRefs = {
    projects: useRef(null),
    years: useRef(null),
    tech: useRef(null),
  };

  useEffect(() => {
    const targets = { projects: 20, years: 3, tech: 15 };
    const animateCounter = (el, target) => {
      const duration = 1500;
      const start = performance.now();
      const update = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(ease * target) + "+";
        if (t < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          Object.entries(counterRefs).forEach(([key, ref]) => {
            if (ref.current) animateCounter(ref.current, targets[key]);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    const section = document.getElementById("hero");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">

      {/* ── LEFT: content ── */}
      <div className="hero-left">
        <p className="hero-intro">SYSTEM ONLINE</p>

        <h1 className="hero-name">
          ALLAN
          <br />
          <span className="glitch">SUAREZ</span>
        </h1>

        <h2 className="hero-subtitle">
          a <span className="highlight">Full-Stack</span> Web Developer
        </h2>

        <p className="hero-description">
          I build immersive, high-performance web applications — from
          pixel-perfect frontends to scalable backends. Turning complex problems
          into elegant digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-view">View My Work</a>
          <a href="#contact" className="btn-contact">Contact Me</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value" ref={counterRefs.projects}>0+</div>
            <div className="stat-label">PROJECTS</div>
          </div>
          <div className="stat">
            <div className="stat-value" ref={counterRefs.years}>0+</div>
            <div className="stat-label">YEARS EXP</div>
          </div>
          <div className="stat">
            <div className="stat-value" ref={counterRefs.tech}>0+</div>
            <div className="stat-label">TECHNOLOGIES</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: decorative orb ── */}
      <div className="hero-right">
        <div className="hero-deco">
          <div className="hero-deco-bracket tl" />
          <div className="hero-deco-bracket tr" />
          <div className="hero-deco-bracket bl" />
          <div className="hero-deco-bracket br" />
          <div className="hero-deco-ring" />
          <div className="hero-deco-ring2" />
          <div className="hero-deco-orb">
            <div className="hero-deco-scan" />
            <div className="hero-deco-text">
              FULL<br />STACK<br />DEV
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
