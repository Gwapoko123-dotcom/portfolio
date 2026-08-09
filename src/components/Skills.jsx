import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    label: "// FRONTEND",
    skills: [
      { name: "React / Vite", pct: 90 },
      { name: "JavaScript / ES6+", pct: 88 },
      { name: "HTML / CSS", pct: 95 },
      { name: "TypeScript", pct: 75 },
    ],
  },
  {
    label: "// BACKEND",
    skills: [
      { name: "Node.js / Express", pct: 85 },
      { name: "REST APIs", pct: 87 },
      { name: "MongoDB", pct: 80 },
      { name: "PostgreSQL", pct: 72 },
    ],
  },
  {
    label: "// TOOLS & DEVOPS",
    skills: [
      { name: "Git / GitHub", pct: 90 },
      { name: "Docker", pct: 65 },
      { name: "Vite / Webpack", pct: 80 },
      { name: "Linux / CLI", pct: 75 },
    ],
  },
];

function SkillCategory({ label, skills }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cardRef.current
            ?.querySelectorAll(".skill-bar-fill")
            .forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.pct + "%";
              }, 200);
            });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-category" ref={cardRef}>
      <div className="skill-category-label">{label}</div>
      {skills.map(({ name, pct }) => (
        <div className="skill-item" key={name}>
          <div className="skill-name-row">
            <span className="skill-name">{name}</span>
            <span className="skill-pct">{pct}%</span>
          </div>
          <div className="skill-bar-bg">
            <div
              className="skill-bar-fill"
              data-pct={pct}
              style={{ width: "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section" ref={ref}>
      <p className="section-label">// 02 — SKILLS</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-divider" />
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCategory key={cat.label} {...cat} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
