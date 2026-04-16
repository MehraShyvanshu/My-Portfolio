import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-10 gap-8`}>
    {stats.map((stat, index) => (
      <motion.div 
        key={stat.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center flex-row group" 
      >
        <h4 className="font-outfit font-black xs:text-[45px] text-[35px] text-zinc-900 dark:text-white leading-none tracking-tighter group-hover:text-[#db5a51] transition-colors duration-300">
          {stat.value}
        </h4>
        <p className="font-outfit font-bold xs:text-[18px] text-[14px] uppercase tracking-[4px] text-[#db5a51]/70 ml-4">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </section>
);

export default Stats;