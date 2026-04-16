import { motion } from "framer-motion";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} relative overflow-visible`}
    >
      {/* ── Left Side: Text Content ── */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center py-[6px] px-4 bg-zinc-100/10 dark:bg-zinc-800/30 backdrop-blur-sm rounded-[10px] mb-6 border border-zinc-200/10"
        >
          <p className="font-outfit font-medium text-[14px] uppercase tracking-[2px] text-zinc-600 dark:text-zinc-400">
            Available for <span className="text-[#db5a51] animate-pulse">new opportunities</span>
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 font-outfit font-bold ss:text-[84px] text-[58px] text-zinc-900 dark:text-white ss:leading-[90px] leading-[70px] tracking-tight"
          >
            Hi there!
            <br className="sm:block hidden" /> I am
          </motion.h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <LetsConnect />
          </div>
        </div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-outfit font-black ss:text-[80px] text-[56px] ss:leading-[100px] leading-[75px] w-full relative group"
        >
          <span className="text-gradient drop-shadow-sm select-none">
            {aboutMe.name}
          </span>
          {/* Subtle name glow on hover */}
          <div className="absolute inset-0 bg-[#db5a51]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${styles.paragraph} text-zinc-700 dark:text-dimWhite max-w-[500px] mt-8 text-[18px] leading-[1.6]`}
        >
          {aboutMe.intro}
        </motion.p>


      </div>

      {/* ── Right Side: Animation ── */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-[5] w-full h-full max-w-[600px] drop-shadow-2xl">
          <Lottie {...defaultOptions} />
        </div>
        
        {/* Modern decorative gradient backgrounds */}
        <div className="absolute z-[0] w-[60%] h-[60%] top-0 pink__gradient opacity-20 filter blur-[150px]" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient opacity-10" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-20" />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
