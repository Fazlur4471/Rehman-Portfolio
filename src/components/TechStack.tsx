import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "C", "C++", "C#"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Angular", "Vue", "Tailwind CSS", "Bootstrap", "Redux"],
  },
  {
    title: "Backend & DB",
    items: ["Node.js", "Express.js", "MySQL", "MongoDB", "Firebase", "Django", "Spring Boot"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "RAG/GenAI"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Docker", "AWS S3", "Postman", "Figma"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Use</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border hover:border-primary/30 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
