import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import aboutMeDev from "../assets/about_me_dev_3d.png";

const highlights = [
  {
    id: "h-1",
    emoji: "⚡",
    label: "Frontend Mastery",
    tech: "React, Angular, TypeScript, NgRx",
  },
  {
    id: "h-2",
    emoji: "⚙️",
    label: "Backend Architecture",
    tech: "Java (Spring Boot), Node.js, Python (FastAPI), Go",
  },
  {
    id: "h-3",
    emoji: "☁️",
    label: "Cloud & infrastructure",
    tech: "AWS, Docker, Microservices",
  },
  {
    id: "h-4",
    emoji: "🔐",
    label: "Systems Security",
    tech: "JWT, OAuth, Secure Coding Practices",
  },
];

const HighlightCard = ({ emoji, label, tech, index }) => (
  <motion.div
    initial={{ x: 40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    viewport={{ once: true }}
    className="flex flex-row items-center p-5 rounded-2xl mb-4 glass-card group cursor-default border-zinc-200/10"
  >
    <div className="w-[52px] h-[52px] bg-[#db5a51]/10 rounded-xl flex items-center justify-center text-[24px] flex-shrink-0 group-hover:bg-[#db5a51]/20 transition-all duration-300">
      <span>{emoji}</span>
    </div>
    <div className="flex flex-col ml-5">
      <span className="font-outfit font-bold text-zinc-900 dark:text-white text-[16px] tracking-tight">
        {label}
      </span>
      <span className="font-outfit font-medium text-zinc-500 dark:text-zinc-400 text-[13px] leading-[1.4] mt-1">
        {tech}
      </span>
    </div>
  </motion.div>
);

const AboutMe = () => {
  return (
    <section id="about" className="section-divider py-20 relative overflow-hidden">
      {/* ── Background decoration ── */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#db5a51]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* ── Heading ── */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-heading w-full font-outfit font-black ss:text-[64px] text-[48px] text-zinc-900 dark:text-white ss:leading-[80px] leading-[60px] tracking-tighter text-center mb-16"
      >
        My Professional <span className="text-[#db5a51]">Journey.</span>
      </motion.h1>

      <div className="flex lg:flex-row flex-col items-center sm:py-12 py-6 gap-16 lg:gap-24">
        {/* ── Left: Image + intro ── */}
        <motion.div
          className="flex-1 flex flex-col justify-start items-center lg:items-start"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Developer illustration */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#db5a51] to-transparent rounded-[40px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
            <img
              src={aboutMeDev}
              alt="Full Stack Developer"
              className="w-full max-w-[450px] rounded-[40px] object-cover relative z-10"
              style={{
                boxShadow: "0 25px 80px -20px rgba(219,90,81,0.4)",
              }}
            />
          </div>

          {/* Intro paragraph */}
          <p className="font-outfit font-medium text-zinc-600 dark:text-zinc-400 text-[18px] leading-[1.6] max-w-[500px] text-center lg:text-left">
            I am a <span className="text-zinc-900 dark:text-white font-bold">Full Stack Innovator</span> driven by the challenge of building scalable, high-performance systems. I specialize in the intersection of <span className="text-[#db5a51] font-bold">Frontend Artistry</span> and <span className="text-[#db5a51] font-bold">Backend Logic</span>.
          </p>

          {/* Quick stats grid */}
          <div className="grid grid-cols-3 gap-8 mt-12 w-full lg:max-w-[500px]">
            {[
              { label: "Experience", value: "3+" },
              { label: "Projects", value: "10+" },
              { label: "Technologies", value: "15+" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="font-outfit font-black text-[32px] text-[#db5a51] tracking-tighter animate-text-glow">
                  {s.value}
                </span>
                <span className="font-outfit font-bold uppercase tracking-widest text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: highlight cards ── */}
        <div className="flex-1 flex flex-col w-full max-w-[550px]">
          <h3 className="font-outfit font-bold text-[24px] mb-8 text-zinc-900 dark:text-white tracking-tight flex items-center gap-3">
             <span className="w-10 h-[1px] bg-[#db5a51]/30" />Core Domains
          </h3>
          {highlights.map((item, index) => (
            <HighlightCard key={item.id} index={index} {...item} />
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-6 glass-card rounded-2xl border-dashed border-[#db5a51]/30"
          >
            <p className="font-outfit font-bold text-[13px] text-zinc-500 dark:text-zinc-400 italic text-center">
              "Building modern software solutions that scale with your ambitions."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
