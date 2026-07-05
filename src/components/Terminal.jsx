import { motion } from "motion/react";

export default function Terminal({ variant = "hero" }) {
  const isHero = variant === "hero";

  return (
    <motion.div
      className={`terminal-card ${isHero ? "hero-terminal" : ""}`}
      initial={{ opacity: 0, x: isHero ? 42 : 0, y: isHero ? 0 : 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        boxShadow: "0 28px 90px rgba(14, 165, 233, 0.18)",
      }}
    >
      {!isHero && (
        <div className="terminal-heading">
          <h2>Developer Terminal</h2>
        </div>
      )}

      <div className="terminal-top">
        <div className="window-dots" aria-hidden="true">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
        </div>
        <span>hentry@portfolio:~</span>
        <small>zsh</small>
      </div>

      <div className={`terminal-body ${isHero ? "" : "compact"}`}>
        {isHero ? (
          <pre>
            <code>
{`hentry@portfolio:~$ whoami
web-developer --php --laravel --symfony

hentry@portfolio:~$ cat profile.json
{
  "location": "Dubai, UAE",
  "experience": "6+ years",
  "backend": ["PHP", "Laravel", "Symfony", "Core PHP"],
  "database": ["PostgreSQL", "MySQL"],
  "devops": ["Docker", "Azure DevOps", "Nginx"],
  "focus": ["APIs", "Automation", "Data Pipelines"]
}

hentry@portfolio:~$ status
available_for_opportunities = true

hentry@portfolio:~$ `}
              <span className="cursor">█</span>
            </code>
          </pre>
        ) : (
          <pre>
            <code>
{`hentry@portfolio:~$ ls projects
affiliate-platform  jiosnap  tie-catalyst
aussiebum  tnq-payments  dho-buytiq

hentry@portfolio:~$ npm run hire
> Opening contact form...
> Connecting...
> Success! Let's build secure backend systems.

hentry@portfolio:~$ `}
              <span className="cursor">█</span>
            </code>
          </pre>
        )}
      </div>
    </motion.div>
  );
}
