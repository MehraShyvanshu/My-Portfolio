import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";
import { PremiumHeader } from "./";

export const SkillIcon = ({ icon, name, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-3 gap-2 glass-card rounded-2xl group cursor-default"
    >
      <div className="text-[28px] text-zinc-500 dark:text-zinc-400 group-hover:text-[#db5a51] dark:group-hover:text-[#fab4af] transition-colors duration-300">
        {React.createElement(icon)}
      </div>
      <p className="font-outfit font-medium text-[11px] uppercase tracking-wider text-zinc-500 dark:zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white text-center">
        {name}
      </p>
    </motion.div>
  );
};

const SkillCard = ({ title, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-10 w-full"
    >
      <div className="flex items-center mb-6">
        <div className="h-[2px] w-8 bg-[#db5a51] mr-4 rounded-full opacity-50" />
        <h4 className="font-outfit font-bold text-[22px] tracking-tight text-zinc-900 dark:text-white uppercase">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-3 ss:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {items.map((item, i) => (
          <SkillIcon key={item.id} index={i} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Content = ({ text }) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  if (lines.length <= 1) {
    return (
      <p className="font-outfit font-normal text-[14px] text-zinc-600 dark:text-zinc-400 mt-3 leading-[1.6] pl-4 border-l-2 border-[#db5a51]/20 group-hover:border-[#db5a51]/40 transition-colors">
        {text}
      </p>
    );
  }

  const [header, ...points] = lines;

  return (
    <div className="mt-5 pl-4 border-l-2 border-[#db5a51]/20 group-hover:border-[#db5a51]/40 transition-colors">
      <h5 className="font-outfit font-bold text-[15px] text-zinc-800 dark:text-zinc-200 leading-[22px] mb-3">
        {header}
      </h5>
      <ul className="list-none space-y-3">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-3 font-outfit font-normal text-[14px] text-zinc-600 dark:text-zinc-400 leading-[1.5]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#db5a51] mt-2 flex-shrink-0 animate-pulse-subtle" />
            <span>{point.trim().replace(/^[•\-\*]\s*/, "")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceCard = ({ organisation, logo, positions, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12 w-full glass-card p-6 rounded-3xl group"
    >
      <div className="flex flex-row items-center mb-8">
        <div className="relative">
          <img
            src={logo}
            alt={organisation}
            className="w-[60px] h-[60px] rounded-2xl z-[2] object-cover ring-4 ring-[#db5a51]/5 group-hover:ring-[#db5a51]/20 transition-all duration-500"
          />
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#db5a51] to-[#fab4af] rounded-2xl opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500" />
        </div>
        <div className="ml-5">
            <h4 className="font-outfit font-black text-[24px] tracking-tight dark:text-white text-zinc-900 leading-none">
            {organisation}
            </h4>
            <div className="w-12 h-1 bg-[#db5a51] mt-2 rounded-full opacity-30 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
        </div>
      </div>

      <ol className="relative border-l-2 border-[#db5a51]/10 ml-8 space-y-10 py-2">
        {positions.map((position, i) => (
          <li key={i} className="ml-8 relative">
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#db5a51] shadow-[0_0_15px_rgba(219,90,81,0.5)] border-4 border-white dark:border-[#09090b] z-10" />
            
            <div className="flex flex-col ss:flex-row ss:justify-between ss:items-baseline gap-2">
                <h3 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 font-outfit uppercase tracking-tighter">
                {position.title}
                </h3>
                <span className="text-[12px] font-bold text-[#db5a51] bg-[#db5a51]/10 px-3 py-1 rounded-full font-outfit">
                {position.duration}
                </span>
            </div>
            {position.content.map((info, idx) => (
              <Content key={idx} {...info} />
            ))}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  return (
    <section id="skills" className="section-divider py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-40 right-0 w-80 h-80 bg-[#db5a51]/5 blur-[120px] rounded-full pointer-events-none"
      />

      <PremiumHeader 
        title="Work & Expertise" 
        subtitle="Skills & Experience" 
        highlight="Expertise"
      />

      <div className="flex lg:flex-row flex-col gap-12 lg:gap-20">
        {/* Skills - Left Side on Desktop */}
        <div className="flex-1">
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </div>

        {/* Experience - Right Side on Desktop */}
        <div className="flex-1">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExperience;
