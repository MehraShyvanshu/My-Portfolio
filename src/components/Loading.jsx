import styles from "../style";
import { motion } from "framer-motion";
import ShyvanshuLogo from "../assets/Shyvanshu Mehra Logo.png";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className="fixed inset-0 w-full h-full flex items-center justify-center bg-white dark:bg-[#09090b] z-[1000]"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
        >
            <img src={ShyvanshuLogo} alt="Shyvanshu Mehra" className="w-[100px] h-[100px] object-contain" />
        </motion.div>
        
        {/* Pulsing glow behind logo */}
        <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#db5a51] blur-3xl rounded-full z-0"
        />
      </div>
    </motion.div>
  );
};

export default Loading;
