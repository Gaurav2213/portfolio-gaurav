"use client";
import {
  FaReact,
  FaJava,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiJavascript,
} from "react-icons/si";

const techIcons = [
  { name: "React", icon: <FaReact size={28} /> },
  { name: "Java", icon: <FaJava size={28} /> },
  { name: "Docker", icon: <FaDocker size={28} /> },
  { name: "AWS", icon: <FaAws size={28} /> },
  { name: "Node.js", icon: <FaNodeJs size={28} /> },
  { name: "MongoDB", icon: <SiMongodb size={28} /> },
  { name: "MySQL", icon: <SiMysql size={28} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={28} /> },
  { name: "JavaScript", icon: <SiJavascript size={28} /> },
  { name: "HTML5", icon: <FaHtml5 size={28} /> },
  { name: "CSS3", icon: <FaCss3Alt size={28} /> },
  { name: "Python", icon: <FaPython size={28} /> },
  { name: "Git", icon: <FaGitAlt size={28} /> },
  { name: "Linux", icon: <FaLinux size={28} /> },
];

export default function TechStack() {
  return (
    <section
      className="py-20 text-center"
      style={{
        background: "linear-gradient(135deg, #f5f8ff 0%, #e8f0ff 100%)",
      }}
    >
      <h2 className="text-3xl font-bold text-[#0038a8] mb-10">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8  gap-8 place-items-center">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              boxShadow: "0 8px 20px rgba(101, 99, 255, 0.3)",
              color: "#fff",
            }}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
