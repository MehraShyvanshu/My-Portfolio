import React from "react";
import { motion } from "framer-motion";

const PremiumHeader = ({ title, subtitle, highlight }) => {
  const words = title.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="section-heading w-full mb-16 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap justify-center font-outfit font-black ss:text-[64px] text-[40px] text-zinc-900 dark:text-white ss:leading-[80px] leading-[50px] tracking-tighter text-center"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className={`mr-3 ${highlight === word ? "text-[#db5a51]" : ""}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-outfit font-medium text-zinc-500 dark:text-zinc-400 mt-4 text-[16px] uppercase tracking-[4px]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default PremiumHeader;
