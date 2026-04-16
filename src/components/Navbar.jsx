import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import ShyvanshuLogo from "../assets/Shyvanshu Mehra Logo.png";
import { navLinks } from "../constants";
import { scrollToSection } from "../../lib/helperFunctions";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`w-full flex justify-between items-center transition-all duration-500 py-3 ${scrolled ? "py-2" : "py-4"}`}>
      {/* ── Logo ── */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-[110]"
      >
        <a href="#home" className="flex items-center gap-2">
          <img src={ShyvanshuLogo} alt="Shyvanshu Mehra" className="w-[45px] h-[45px] object-contain" />
          <span className="font-outfit font-bold text-[18px] dark:text-white text-zinc-900 tracking-tight ss:block hidden">
            SHYVANSHU
          </span>
        </a>
      </motion.div>

      {/* ── Desktop Desktop Links ── */}
      <div className="flex items-center justify-end flex-1">
        <ul className="list-none sm:flex hidden justify-center items-center px-6 py-2 glass-card rounded-full border-zinc-200/50 dark:border-zinc-800/50">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-outfit font-medium cursor-pointer text-[14px] px-4
              text-zinc-600 dark:text-zinc-400 hover:text-[#db5a51] dark:hover:text-[#db5a51] transition-all duration-300`}
              onClick={() => scrollToSection(nav.id)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        {/* ── Theme Toggle ── */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer ml-6 p-2.5 rounded-full glass-card hover:bg-white dark:hover:bg-zinc-800 transition-all border-zinc-200/50 dark:border-zinc-800/50 shadow-sm" 
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <FiSun size={18} className="text-zinc-300 group-hover:text-yellow-400" />
          ) : (
            <FiMoon size={18} className="text-zinc-600" />
          )}
        </motion.div>

        {/* ── Mobile Menu Toggle ── */}
        <div className="sm:hidden flex items-center ml-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer invert dark:invert-0 z-[110]"
            onClick={() => setToggle((prev) => !prev)}
          />

          <AnimatePresence>
            {toggle && (
               <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="fixed inset-0 h-screen w-screen bg-white/90 dark:bg-black/95 backdrop-blur-xl z-[100] flex flex-col justify-center items-center"
               >
                 <ul className="list-none flex flex-col items-center gap-8">
                    {navLinks.map((nav) => (
                      <motion.li
                        key={nav.id}
                        whileHover={{ scale: 1.1 }}
                        className="font-outfit font-bold text-[32px] text-zinc-900 dark:text-white"
                        onClick={() => {
                          scrollToSection(nav.id);
                          setToggle(false);
                        }}
                      >
                        {nav.title}
                      </motion.li>
                    ))}
                 </ul>
               </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
