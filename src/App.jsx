import React, { useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import styles from "./style";
import {
  AboutMe,
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  BlogPosts,
  Loading,
} from "./components";
import Certifications from "./components/Certifications";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initial theme check
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  React.useEffect(() => {
    // We set this to 0 in production to ensure bots (like Vercel) 
    // see the content immediately for screenshots and SEO.
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 w-full overflow-hidden transition-colors duration-300">
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#db5a51] to-[#fab4af] origin-left z-[500]"
        style={{ scaleX }}
      />

      {/* ── Background Glows ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-blob top-[-10%] left-[-10%] opacity-30 dark:opacity-40" />
        <div className="glow-blob bottom-[20%] right-[-10%] opacity-20 dark:opacity-30" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, #fab4af 0%, transparent 70%)' }} />
        <div className="glow-blob top-[40%] left-[50%] opacity-10 dark:opacity-20" style={{ animationDelay: '-10s', background: 'radial-gradient(circle, #e6837c 0%, transparent 70%)' }} />
      </div>
      
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {/* ── Navbar ── */}
            <div className={`fixed top-0 w-full z-[100] backdrop-blur-md bg-white/70 dark:bg-[#09090b]/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300`}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
            </div>

            {/* Compensate for fixed navbar */}
            <div className="pt-24 lg:pt-28" />

            {/* ── Hero ── */}
            <div className={`${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            {/* ── Main content: all sections in one unified container ── */}
            <div className={`${styles.flexCenter} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                <AboutMe />
                <SkillsAndExperience />
                <Education />
                <Certifications />
                <Projects />
                <BlogPosts enabled={false} />
              </div>
            </div>

            <Footer />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
