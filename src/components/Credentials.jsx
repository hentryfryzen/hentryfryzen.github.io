import { motion } from "motion/react";
import { certifications, education, languages, visaStatus, techIcons } from "../data.js";
import { fadeUp, staggerContainer } from "../animations.js";
import Icon from "./Icon.jsx";
import TechIcon from "./TechIcon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <SectionHeading
        eyebrow="Education & Certifications"
        title="Credentials and tools"
        description="Education, certifications, languages, visa status, and the main tools I use across backend, DevOps, API, and deployment work."
      />

      <div className="credentials-grid">
        <motion.article className="glass-card credential-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="card-icon">
            <Icon name="graduation" />
          </span>
          <h3>Education</h3>
          <p>{education.degree}</p>
          <strong>{education.university}</strong>
          <small>{education.location}</small>
        </motion.article>

        <motion.article className="glass-card credential-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="card-icon">
            <Icon name="certificate" />
          </span>
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article className="glass-card credential-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <span className="card-icon">
            <Icon name="globe" />
          </span>
          <h3>Additional Info</h3>
          <p>Languages: {languages.join(", ")}</p>
          <p>{visaStatus}</p>
        </motion.article>
      </div>

      <motion.div
        className="tools-strip"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
      >
        {techIcons.map((tech) => (
          <motion.div className="tool-chip" key={tech.name} variants={fadeUp} data-cursor="link">
            <TechIcon icon={tech.icon} name={tech.name} />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
