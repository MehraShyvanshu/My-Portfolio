import React from "react";
import styles, { layout } from "../style";
import { certification } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/certification-animation.json";
import { motion } from "framer-motion";
import { PremiumHeader } from "./";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

const CertCard = ({ icon, title, organisation, duration, content1, index }) => (
  <motion.div
    initial={{ x: 40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.55, delay: index * 0.12 }}
    viewport={{ once: true }}
    className={`flex flex-row p-6 rounded-3xl ${
      index === certification.length - 1 ? "mb-0" : "mb-6"
    } glass-card group items-center border-zinc-200/10 hover:border-[#db5a51]/30`}
  >
    {/* Icon circle */}
    <div
      className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-zinc-200/10 group-hover:border-[#db5a51]/30 transition-all duration-300"
    >
      <img
        src={icon}
        alt={organisation}
        className="w-[80%] h-[80%] object-contain rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col ml-6">
      <h4 className="font-outfit font-black text-zinc-900 dark:text-white text-[18px] leading-tight mb-1 group-hover:text-[#db5a51] transition-colors">
        {title}
      </h4>
      <p className="font-outfit font-bold text-zinc-500 dark:text-zinc-400 text-[14px] mb-3">
        {organisation}
      </p>
      
      <div className="flex items-center gap-2 mb-3">
         <span className="w-2 h-2 rounded-full bg-[#db5a51] animate-pulse" />
         <span className="font-outfit font-bold text-[11px] uppercase tracking-widest text-[#db5a51]/70">{duration}</span>
      </div>

      {content1 && (
        <p className="font-outfit font-medium text-zinc-500 dark:text-zinc-400 text-[13px] leading-relaxed line-clamp-2">
          {content1}
        </p>
      )}
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certification" className="section-divider py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-40 right-1/4 w-80 h-80 bg-[#db5a51]/5 blur-[120px] rounded-full pointer-events-none"
      />

      <PremiumHeader 
        title="Expert Credentials" 
        subtitle="Certifications" 
        highlight="Credentials"
      />

      <div className={`${layout.section} gap-12`}>
        {/* Cards */}
        <div className={`${layout.sectionInfo} flex-col`}>
          {certification.map((cert, index) => (
            <CertCard key={index} index={index} {...cert} />
          ))}
        </div>

        {/* Lottie */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${layout.sectionImg} relative`}
        >
          <div className="w-[90%] max-w-[450px] relative z-[5] drop-shadow-[0_0_30px_rgba(219,90,81,0.2)]">
            <Lottie {...defaultOptions} />
          </div>
          <div className="absolute z-[3] -left-1/4 top-0 w-[60%] h-[60%] rounded-full white__gradient opacity-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
