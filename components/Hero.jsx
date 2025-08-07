"use client"
"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profilePic from "../public/DP.webp";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 sm:px-6 py-20 bg-gradient-to-b from-white to-slate-100">

      {/* Profile Image with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 relative rounded-full overflow-hidden shadow-lg border-4 border-blue-600"
      >
        <Image
          src={profilePic}
          alt="Gaurav Sharma"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>

      {/* Text Section with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center md:text-left max-w-xl"
      >

        {/* Typing greeting + static name */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex flex-col md:flex-row items-center md:gap-2 text-center md:text-left">
          <span>
            <Typewriter
              words={[
                'नमस्ते, मैं हूं',
                'hello, I’m',
                'bonjour, je suis',
              ]}
              loop={1} // One-time loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
          <span className="text-blue-600 mt-1 md:mt-0">Gaurav Sharma</span>
        </h1>

        {/* Tagline Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
          Code. <span className="text-blue-600">Build</span>. <span className="text-blue-600">Create</span>!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-lg mb-6 px-2 sm:px-0">
          I build clean, scalable, and cloud-ready applications using Java, Spring Boot, and React — turning ideas into impact. Let’s build something great together!
        </p>

        {/* Animated CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/Gaurav2213"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/gs-4b39491b9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            LinkedIn
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/tech/GauravSharmaSofDev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-200 font-medium"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
