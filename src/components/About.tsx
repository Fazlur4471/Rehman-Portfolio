import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "Full-stack developer",
    description: "Skilled in React.js, Node.js, SQL/NoSQL, and cloud platforms. Building scalable applications with clean, maintainable code.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Based in",
    description: "Chennai, India",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Education",
    description: "B.Tech CSE @ SRM Institute of Science and Technology (GPA: 7.55)",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Areas of work",
    description: "UI · Backend APIs · Database Systems · AI/ML Integration",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Full-stack developer interested in
          <br />
          <span className="text-muted-foreground">clean UI and solid systems</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 text-primary mb-3">
              {card.icon}
              <span className="font-mono text-xs uppercase tracking-wider">{card.label}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
