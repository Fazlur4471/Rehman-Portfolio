import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Presidio Solutions Pvt Ltd",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Built a full-stack Instagram clone with JWT auth, supporting 100+ mock users with 75% code coverage.",
      "Integrated AWS S3 + Cloudinary for media, containerized with Docker — 40% deployment efficiency boost.",
      "Optimized API response times by 20% through code reviews and cross-functional collaboration.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Well Codestudio Pvt Ltd",
    period: "May 2025 – Jun 2025",
    bullets: [
      "Optimized responsive React.js + Tailwind CSS components, reducing load times by 30%.",
      "Collaborated in team projects, demonstrating strong teamwork and communication.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "1Stop",
    period: "Aug 2024 – Sep 2024",
    bullets: [
      "Designed and developed two SPAs and a task management system with React.js, HTML, CSS, Bootstrap.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where I've worked</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-8 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
