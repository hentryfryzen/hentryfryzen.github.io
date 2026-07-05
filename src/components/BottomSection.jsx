import { motion } from "motion/react";
import { contact } from "../data.js";
import { fadeUp, tapSoft } from "../animations.js";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function BottomSection() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build reliable backend systems"
        description="Available for backend, full-stack, API integration, automation, server/domain handling, and production support opportunities."
      />

      <motion.div
        className="glass-card contact-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.title} ({contact.subtitle}) · {contact.location}</p>

          <div className="contact-lines">
            <a href={`mailto:${contact.email}`} data-cursor="link">
              <Icon name="mail" />
              {contact.email}
            </a>
            <a href="tel:+971566059005" data-cursor="link">
              <Icon name="phone" />
              {contact.phoneUae}
            </a>
            <a href="tel:+918248375355" data-cursor="link">
              <Icon name="phone" />
              {contact.phoneIndia}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="link">
              <Icon name="linkedin" />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" data-cursor="link">
              <Icon name="github" />
              GitHub
            </a>
          </div>
        </div>

        <div className="contact-actions">
          <motion.a
            className="btn btn-whatsapp big"
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            data-cursor-label="WhatsApp"
            whileTap={tapSoft}
          >
            <Icon name="whatsapp" />
            WhatsApp Me
          </motion.a>

          <motion.a
            className="btn btn-primary big"
            href={`mailto:${contact.email}?subject=Backend%20Developer%20Opportunity`}
            data-cursor="magnetic"
            data-cursor-label="Email"
            whileTap={tapSoft}
          >
            <Icon name="mail" />
            Send Email →
          </motion.a>

          <motion.a
            className="btn btn-secondary big"
            href={contact.cv}
            download
            data-cursor="magnetic"
            data-cursor-label="CV"
            whileTap={tapSoft}
          >
            <Icon name="download" />
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
