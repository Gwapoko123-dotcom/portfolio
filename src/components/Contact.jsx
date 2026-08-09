import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your preferred email service (EmailJS, Resend, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <p className="section-label">// 04 — CONTACT</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider" />

      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Have a project in mind or want to collaborate? I'm always open to
            interesting opportunities and conversations.
          </p>
          <div className="contact-links">
            <a href="mailto:allan@email.com" className="contact-link-item">
              <div className="contact-link-icon">@</div>
              <div>
                <div className="contact-link-text">Email</div>
                <div className="contact-link-sub">allan@email.com</div>
              </div>
            </a>
            <a href="https://github.com/allansuarez" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="contact-link-icon">&lt;/&gt;</div>
              <div>
                <div className="contact-link-text">GitHub</div>
                <div className="contact-link-sub">github.com/allansuarez</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/allansuarez" target="_blank" rel="noreferrer" className="contact-link-item">
              <div className="contact-link-icon">in</div>
              <div>
                <div className="contact-link-text">LinkedIn</div>
                <div className="contact-link-sub">linkedin.com/in/allansuarez</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-input"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-input"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            {sent ? "MESSAGE SENT ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
