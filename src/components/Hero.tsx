import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_14%/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_14%/0.5)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-primary mb-6 tracking-widest uppercase"
        >
          Full-Stack Developer
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
          Hi, I'm{" "}
          <span className="text-primary">Fazlur</span>
          <span className="text-muted-foreground">.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
        >
          I build things on the internet and
          <br />
          sometimes they even work
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
        >
          scroll down <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-bold text-secondary uppercase tracking-wider mx-4">
              Building ✦ Web ✦ Applications ✦ With ✦ Care ✦&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
