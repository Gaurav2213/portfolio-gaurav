// components/About.jsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="px-4 py-20 max-w-4xl mx-auto text-center border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        About Me
      </h2>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
        <p>
          I’m a <strong>Full Stack Developer</strong> based in Toronto 🇨🇦, passionate about building
          end-to-end web apps using <strong>Java, Spring Boot, React</strong>, and{" "}
          <strong>cloud-native tools</strong>. I’m currently completing my post-graduate program in{" "}
          <strong>Full Stack Software Development</strong> at Lambton College 🎓 while actively
          expanding my portfolio with real-world projects.
        </p>

        <p>
          Previously, I worked at <strong>Cognizant</strong> as a{" "}
          <strong>Jr.Software Engineer</strong>, where I gained hands-on experience in agile
          environments and learned the value of clean code and collaboration 🤝. I also held leadership
          roles during my Bachelor's journey at <strong>CGC Landran</strong>, where I nurtured my
          interest in backend development and team-driven problem solving.
        </p>

        <p>
          My current work revolves around designing intuitive, responsive, and scalable apps like a{" "}
          <strong>Personal Finance Dashboard</strong> (Java + MySQL), and experimenting with{" "}
          <strong>cloud deployment, Git workflows, and DevOps pipelines</strong>. I’m particularly drawn
          to crafting features that solve everyday problems using clean, reusable logic 💡.
        </p>

        <p>
          Beyond tech, I love movies 🍿, gym sessions 🏋️, and meaningful conversations. Whether it’s
          teaming up on a product or chatting about DSA, I’m always open to connect and grow together!
        </p>
      </div>
    </motion.section>
  );
}
