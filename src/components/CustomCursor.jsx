import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

const PARTICLE_LIMIT = 14;

function supportsFinePointer() {
  if (typeof window === "undefined") return false;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return hasFinePointer && !prefersReducedMotion;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const particleId = useRef(0);
  const lastParticleAt = useRef(0);
  const hoveredElement = useRef(null);

  const rawX = useMotionValue(-120);
  const rawY = useMotionValue(-120);

  const x = useSpring(rawX, { stiffness: 420, damping: 32, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 420, damping: 32, mass: 0.45 });

  useEffect(() => {
    const canRun = supportsFinePointer();
    setEnabled(canRun);

    if (!canRun) {
      document.body.classList.remove("custom-cursor-enabled");
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const moveCursor = (event) => {
      setIsVisible(true);
      const target = event.target.closest?.("[data-cursor]");

      if (hoveredElement.current && hoveredElement.current !== target) {
        hoveredElement.current.style.transform = "";
      }

      hoveredElement.current = target;

      if (!target) {
        setVariant("default");
        setLabel("");
        rawX.set(event.clientX);
        rawY.set(event.clientY);
      } else {
        const mode = target.dataset.cursor || "hover";
        setVariant(mode);
        setLabel(target.dataset.cursorLabel || "");

        if (mode === "magnetic") {
          const rect = target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const pull = 0.42;

          rawX.set(event.clientX + (centerX - event.clientX) * pull);
          rawY.set(event.clientY + (centerY - event.clientY) * pull);

          const moveX = (event.clientX - centerX) * 0.08;
          const moveY = (event.clientY - centerY) * 0.08;
          target.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        } else {
          rawX.set(event.clientX);
          rawY.set(event.clientY);
        }
      }

      const now = performance.now();
      if (now - lastParticleAt.current > 30) {
        lastParticleAt.current = now;
        const id = particleId.current++;

        setParticles((items) => [
          ...items.slice(-(PARTICLE_LIMIT - 1)),
          {
            id,
            x: event.clientX,
            y: event.clientY,
            size: Math.random() * 7 + 5,
          },
        ]);

        window.setTimeout(() => {
          setParticles((items) => items.filter((item) => item.id !== id));
        }, 620);
      }
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("blur", hideCursor);
      if (hoveredElement.current) hoveredElement.current.style.transform = "";
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`custom-cursor custom-cursor--${variant}`}
        style={{ x, y }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: variant === "magnetic" ? 1.62 : variant === "link" ? 1.28 : 1,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {label && <span>{label}</span>}
      </motion.div>

      <motion.div
        className="custom-cursor-dot"
        style={{ x: rawX, y: rawY }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />

      <div className="cursor-particles" aria-hidden="true">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="cursor-particle"
            initial={{ opacity: 0.72, scale: 1, x: particle.x, y: particle.y }}
            animate={{
              opacity: 0,
              scale: 0,
              x: particle.x + (Math.random() - 0.5) * 42,
              y: particle.y + (Math.random() - 0.5) * 42,
            }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            style={{ width: particle.size, height: particle.size }}
          />
        ))}
      </div>
    </>
  );
}
