import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const links = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:slmfazlur@gmail.com", text: "slmfazlur@gmail.com" },
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Fazlur4471", text: "Fazlur4471" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/fazlur-rehman-137933211", text: "Fazlur Rehman" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", href: "tel:+918754214920", text: "+91 8754214920" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
          >
            <div className="text-primary">{link.icon}</div>
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
              <p className="text-foreground text-sm group-hover:text-primary transition-colors">{link.text}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="font-mono text-xs text-muted-foreground">
          © 2025 Fazlur Rehman. Built with React + Tailwind.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
