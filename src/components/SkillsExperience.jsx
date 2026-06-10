import { motion } from "motion/react";
import { experience, skillGroups } from "../data.js";
import { fadeUp, staggerContainer } from "../animations.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function SkillsExperience() {
  return (
    <>
      <section className="section" id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="Complete technical skill set"
          description="Grouped directly from my resume so hiring teams can quickly scan what I can handle."
        />

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillGroups.map((group) => (
            <motion.article className="glass-card skill-card" key={group.title} variants={fadeUp}>
              <div className="skill-card-title">
                <span className="card-icon small">
                  <Icon name={group.icon} />
                </span>
                <h3>{group.title}</h3>
              </div>

              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="Production backend, APIs, full-stack features, server-side workflows, integrations, and deployment ownership."
        />

        <div className="timeline">
          {experience.map((job, index) => (
            <motion.article
              className="timeline-item"
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="timeline-dot" />
              <time>{job.period}</time>
              <div className="glass-card timeline-content">
                <h3>{job.role}</h3>
                <strong>{job.company} · {job.location}</strong>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
