import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";
import { PremiumHeader } from "./";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

const FeatureCard = ({ icon, title, degree, duration, index }) => (
  <motion.div
    initial={{ x: 40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.55, delay: index * 0.12 }}
    viewport={{ once: true }}
    className={`flex flex-row p-6 rounded-3xl ${
      index === educationList.length - 1 ? "mb-0" : "mb-6"
    } glass-card group items-center`}
  >
    {/* Icon circle */}
    <div
      className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-zinc-200/10 group-hover:border-[#db5a51]/30 transition-all duration-300 overflow-hidden"
    >
      <img src={icon} alt={title} className="w-[85%] h-[85%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>

    {/* Text */}
    <div className="flex-1 flex flex-col ml-6">
      <h4 className="font-outfit font-black text-zinc-900 dark:text-white text-[20px] tracking-tight leading-none mb-2 group-hover:text-[#db5a51] transition-colors">
        {title}
      </h4>
      <p className="font-outfit font-bold text-zinc-500 dark:text-zinc-400 text-[15px] mb-3">
        {degree}
      </p>
      <div className="flex items-center gap-2">
         <span className="w-2 h-2 rounded-full bg-[#db5a51] animate-pulse" />
         <span className="font-outfit font-bold text-[11px] uppercase tracking-widest text-[#db5a51]/80">{duration}</span>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="section-divider py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-1/4 w-64 h-64 bg-[#db5a51]/5 blur-[100px] rounded-full pointer-events-none"
      />

      <PremiumHeader 
        title="Academic Journey" 
        subtitle="Education" 
        highlight="Journey"
      />

      <div className={`${layout.sectionReverse} gap-12`}>
        {/* Lottie */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${layout.sectionImgReverse} relative`}
        >
          <div className="w-[80%] max-w-[400px] relative z-[4] drop-shadow-[0_0_30px_rgba(219,90,81,0.2)]">
            <Lottie {...defaultOptions} />
          </div>
          <div className="absolute z-[3] -left-1/4 top-0 w-[60%] h-[60%] rounded-full white__gradient opacity-10" />
        </motion.div>

        {/* Cards */}
        <div className={`${layout.sectionInfo} flex-col`}>
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
