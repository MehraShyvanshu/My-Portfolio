import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import aiLogAnalyzerImg from "../assets/ai-log-analyzer.png";
import fileUploadImg from "../assets/golang-file-upload.jpg";
import agricultureDroneImg from "../assets/agriculture-drone.jpg";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiReact,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PremiumHeader } from "./";

const languageIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  Go: SiGo,
  HTML: SiHtml5,
  CSS: SiCss3,
  "C++": SiCplusplus,
  PHP: SiPhp,
  React: SiReact,
  Arduino: SiArduino,
};

const Project = (props) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ 
        y: -12,
        rotateX: -5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="glass-card p-6 flex flex-col rounded-3xl h-full group perspective-[1000px]"
    >
      {/* ── Project Image & Header ── */}
      <div className="relative mb-6">
        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/10 mb-4 group-hover:border-[#db5a51]/30 transition-colors">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.src = "https://opengraph.githubassets.com/1/MehraShyvanshu/My-Portfolio";
            }}
          />
        </div>
        
        {/* Decorative Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-[#db5a51] to-transparent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full" />
      </div>

      <div className="flex-1">
        <h2 className="text-[22px] font-outfit font-black tracking-tight dark:text-white text-zinc-900 mb-2 truncate group-hover:text-[#db5a51] transition-colors">
          {props.title}
        </h2>

        {/* ── Tech Stack ── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {props.stack && props.stack.length > 0 ? (
            props.stack.slice(0, 3).map((tech) => (
              <span key={tech.id} className="px-3 py-1 rounded-full text-[10px] font-outfit font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                {tech.name}
              </span>
            ))
          ) : (
            props.language && (
                <span className="px-3 py-1 rounded-full text-[10px] font-outfit font-bold uppercase tracking-wider bg-[#db5a51]/10 text-[#db5a51] border border-[#db5a51]/20">
                    {props.language}
                </span>
            )
          )}
        </div>

        <p className="font-outfit font-normal text-zinc-500 dark:text-zinc-400 text-[14px] leading-[1.6] line-clamp-3 mb-6">
          {props.content}
        </p>
      </div>

      {/* ── Links ── */}
      <div className="flex items-center gap-4 mt-auto pt-5 border-t border-zinc-100 dark:border-zinc-800/50">
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#db5a51] transition-all duration-300"
          >
            <AiFillGithub size={20} />
            <span className="font-outfit font-bold text-[12px] uppercase">Repo</span>
          </a>
        )}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#db5a51] transition-all duration-300 ml-auto"
          >
            <span className="font-outfit font-bold text-[12px] uppercase">Demo</span>
            <BsArrowUpRight size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [allProjects, setAllProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://api.github.com/users/MehraShyvanshu/repos?sort=updated&per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("API rate limit");
        return res.json();
      })
      .then((data) => {
        const combined = [...projects];
        const normalize = (s) => s.toLowerCase().replace(/[-_]/g, "").replace("master", "");

        data.forEach((repo) => {
          if (repo.fork) return;
          const isDuplicate = combined.some(p => {
            const matchName = normalize(p.title) === normalize(repo.name);
            const matchUrl = p.github?.toLowerCase().includes(repo.name.toLowerCase());
            return matchName || matchUrl;
          });

          if (!isDuplicate) {
            let projectImage = `https://opengraph.githubassets.com/1/MehraShyvanshu/${repo.name}`;
            if (repo.name === 'AI-Log-Analyzer') projectImage = aiLogAnalyzerImg;
            if (repo.name === 'File-Upload-System-using-Golang') projectImage = fileUploadImg;
            if (repo.name === 'Agriculture-Based-Drone-using-Arduino') projectImage = agricultureDroneImg;

            combined.push({
              id: repo.id,
              title: repo.name,
              github: repo.html_url,
              link: repo.homepage || "",
              content: repo.description || "Experimental repository and open-source contribution.",
              image: projectImage,
              language: repo.language,
              stack: []
            });
          }
        });

        setAllProjects(combined);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAllProjects(projects);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section-divider py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-[#fab4af]/5 blur-[140px] rounded-full pointer-events-none"
      />

      <PremiumHeader 
        title="Digital Workspace" 
        subtitle="Recent Projects" 
        highlight="Workspace"
      />

      <div className="py-8">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 text-[#db5a51]">
            <div className="w-12 h-12 border-4 border-zinc-200 border-t-[#db5a51] rounded-full animate-spin mb-4" />
            <div className="animate-pulse font-outfit font-bold uppercase tracking-widest text-[12px]">Analyzing Repositories...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <Project key={project.id || index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
