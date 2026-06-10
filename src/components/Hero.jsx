import { motion } from "motion/react";
import { contact, stats } from "../data.js";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, tapSoft } from "../animations.js";
import Icon from "./Icon.jsx";
import TechIcon from "./TechIcon.jsx";

const heroIconChips = [
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
  { name: "Symfony", icon: "symfony" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "REST APIs", icon: "code" },
];

export default function Hero() {
  return (
    <section className="hero-design4 section" id="home">
      <motion.div
        className="hero-shell"
        variants={staggerContainer}
        initial="show"
        animate="show"
      >
        <div className="hero-bg-code" aria-hidden="true">
          <span>php artisan queue:work</span>
          <span>docker compose up -d</span>
          <span>SELECT * FROM product_feeds</span>
          <span>nginx -t && systemctl reload nginx</span>
        </div>

        <motion.div className="hero-content" variants={fadeLeft}>
          <motion.div className="availability" variants={fadeUp}>
            <span className="pulse-dot" />
            <span>AVAILABLE</span>
            <span>•</span>
            <span>{contact.location}</span>
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Hello,
            <span>I'm {contact.displayName}</span>
          </motion.h1>

          <motion.p className="hero-copy" variants={fadeUp}>
            Web Developer with <strong>5+ years</strong> of experience building secure,
            scalable and high-performance web applications. Specialized in{" "}
            <strong>PHP, Laravel, Symfony, REST APIs, PostgreSQL</strong>, and DevOps.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              data-cursor="magnetic"
              data-cursor-label="Hire"
              whileTap={tapSoft}
            >
              Hire Me
              <span aria-hidden="true">→</span>
            </motion.a>

            <motion.a
              href="#projects"
              className="btn btn-secondary"
              data-cursor="magnetic"
              data-cursor-label="Projects"
              whileTap={tapSoft}
            >
              View Projects
              <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>

          <div className="app-icon-row">
            {heroIconChips.map((tech) => (
              <div className="app-icon-card" key={tech.name} data-cursor="link">
                <TechIcon icon={tech.icon} name={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="workspace-visual" variants={fadeRight}>
          <div className="floating-tech-labels">
            {[
              ["API", "api"],
              ["PHP", "code"],
              ["SQL", "database"],
              ["Docker", "server"],
            ].map(([label, icon], index) => (
              <span
                key={label}
                className={`float-label float-label-${index + 1}`}
              >
                <Icon name={icon} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="hero-stats">
          {stats.map((item) => (
            <div className="hero-stat-card" key={item.label}>
              <span>
                <Icon name={item.icon} />
              </span>
              <div>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-terminal-bar">
          <div className="terminal-dots">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </div>
          <p>
            <strong>hentry@portfolio:~$</strong> Building robust backend systems that power businesses.
            <i />
          </p>
          <div className="terminal-actions">
            <span>—</span>
            <span>↗</span>
            <span>×</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
