import { motion } from "motion/react";
import { projects } from "../data.js";
import { cardHover, fadeUp, staggerContainer } from "../animations.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Company projects I worked on"
        description="Current and previous company projects from affiliate marketing, events, Android support, e-commerce, payment automation, healthcare, and admin systems."
      />

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {projects.map((project, index) => (
          <motion.article className="glass-card project-card" key={project.title} variants={fadeUp} whileHover={cardHover}>
            <div className="project-top">
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-icon">
                <Icon name={project.icon} />
              </span>
            </div>
            <h3>{project.title}</h3>
            <strong>{project.company}</strong>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
