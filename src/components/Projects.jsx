import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const PROJECTS = [
  {
    id: "01",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, secure payments, and an admin dashboard with analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    id: "02",
    title: "Task Management App",
    description:
      "Real-time collaborative project management tool with drag-and-drop boards, notifications, and team workspaces.",
    tags: ["React", "Express", "PostgreSQL"],
    demo: "#",
    repo: "#",
  },
  {
    id: "03",
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js API template with auth, rate limiting, logging, and full test coverage.",
    tags: ["TypeScript", "REST API", "Docker"],
    demo: "#",
    repo: "#",
  },
];

function ProjectCard({ id, title, description, tags, demo, repo }) {
  return (
    <div className="project-card">
      <div className="project-img">
        <div className="project-img-grid" />
        <div className="project-img-placeholder">{id}</div>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {tags.map((t) => (
            <span className="project-tag" key={t}>{t}</span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <a href={demo} className="project-link">Live Demo →</a>
          <a href={repo} className="project-link">GitHub →</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section" ref={ref}>
      <p className="section-label">// 03 — PROJECTS</p>
      <h2 className="section-title">Featured Work</h2>
      <div className="section-divider" />
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
