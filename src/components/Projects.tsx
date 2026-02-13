import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Instagram Clone",
    description: "A full-stack social media platform replicating Instagram features with 15+ secure REST APIs.",
    tech: ["React.js", "Node.js", "Express", "MySQL", "Docker", "AWS S3"],
    github: "https://github.com/Fazlur4471",
  },
  {
    title: "AdaptivQ",
    description: "AI-powered adaptive quiz and mock interview platform with RAG backend integration.",
    tech: ["React.js", "TypeScript", "Flask", "RAG", "Tailwind CSS", "Vite"],
    github: "https://github.com/Fazlur4471",
  },
  {
    title: "Thermal Image Classification",
    description: "Deep learning models for crop leaf health detection achieving up to 92% accuracy.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNN"],
    github: "https://github.com/Fazlur4471",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Projects</h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
