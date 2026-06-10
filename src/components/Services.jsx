import { motion } from "motion/react";
import { coreServices } from "../data.js";
import { cardHover, fadeUp, staggerContainer } from "../animations.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="About"
        title="What I build and handle"
        description="Backend systems, APIs, databases, server/domain handling, DevOps, security, testing, and production support."
      />

      <motion.div
        className="service-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
      >
        {coreServices.map((service) => (
          <motion.article className="glass-card service-card" key={service.title} variants={fadeUp} whileHover={cardHover}>
            <span className="card-icon">
              <Icon name={service.icon} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
