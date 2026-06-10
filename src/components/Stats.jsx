import { motion } from "motion/react";
import Icon from "./Icon.jsx";
import { stats } from "../data.js";
import { fadeUp, staggerContainer } from "../animations.js";

export default function Stats() {
  return (
    <motion.section
      className="stats-section section"
      aria-label="Portfolio statistics"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="stats-panel">
        {stats.map((item) => (
          <motion.div className="stat-item" key={item.label} variants={fadeUp}>
            <motion.span
              className={`stat-icon ${item.tone}`}
              aria-hidden="true"
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <Icon name={item.icon} />
            </motion.span>
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
