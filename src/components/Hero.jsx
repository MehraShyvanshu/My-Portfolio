import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={`flex md:flex-row flex-col ${styles.paddingY} relative overflow-hidden group/hero`}
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <motion.div 
          className="absolute inset-0 spotlight-glow opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
          style={{
            "--x": useSpring(mouseX, { damping: 50, stiffness: 400 }),
            "--y": useSpring(mouseY, { damping: 50, stiffness: 400 }),
          }}
        />
      </div>

      {/* ── Left Side: Text Content ── */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
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
