import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import ppic from "../assets/ppic.jpeg";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => (
  <footer id="contactMe" className="relative py-20 px-6 sm:px-16 overflow-hidden mt-20">
    {/* ── Background decoration ── */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#db5a51]/30 to-transparent" />
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-80 bg-[#db5a51]/5 blur-[120px] rounded-full pointer-events-none" />

    <div className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-16 relative z-10`}>
      <div className={`${layout.sectionInfo}`}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <h2 className="font-outfit font-black text-[42px] tracking-tighter text-zinc-900 dark:text-white leading-tight mb-6">
                Let's Build <span className="text-[#db5a51]">Together.</span>
            </h2>
            <p className="font-outfit font-medium text-zinc-600 dark:text-zinc-400 text-[18px] leading-relaxed max-w-[500px]">
                {aboutMe.tagLine}
            </p>
        </motion.div>

        {/* ── Social Media Tiles ── */}
        <div className="flex flex-wrap gap-4 mt-10">
          {socialMedia.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 flex items-center justify-center rounded-2xl glass-card text-zinc-500 dark:text-zinc-400 hover:text-[#db5a51] dark:hover:text-[#db5a51] shadow-lg"
            >
              {React.createElement(social.icon, { size: 22 })}
            </motion.a>
          ))}
        </div>

        {/* ── Action Buttons ── */}
        <div className="flex flex-wrap gap-4 mt-12 w-full">
          <a href={resumeLink} target="_blank" className="flex-1 min-w-[160px]">
            <button className="w-full py-4 bg-[#db5a51] text-white font-outfit font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#db5a51]/20">
                Resumé
            </button>
          </a>
          <a href={repoLink} target="_blank" className="flex-1 min-w-[160px]">
             <button className="w-full py-4 glass-card font-outfit font-bold dark:text-white text-zinc-900 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 transition-all border-zinc-200/50 dark:border-zinc-800/50">
                Repository
            </button>
          </a>
        </div>
      </div>

      {/* ── Profile Image Column ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:ml-auto flex items-center justify-center relative"
      >
        <div className="relative group">
            <div className="absolute -inset-4 bg-[#db5a51]/20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity" />
            <img
            src={ppic}
            alt="Shyvanshu Mehra"
            className="w-[280px] h-[280px] rounded-[60px] object-cover ring-8 ring-white dark:ring-[#09090b] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 rotate-3 group-hover:rotate-0"
            />
        </div>
      </motion.div>
    </div>

    {/* ── Sub Footer ── */}
    <div className="mt-24 pt-12 border-t border-zinc-200/10 text-center">
      <p className="font-outfit font-bold text-[12px] uppercase tracking-[4px] text-zinc-400 dark:text-zinc-600">
        Crafted with <span className="text-[#db5a51] animate-pulse">Passion</span> by Shyvanshu Mehra &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
