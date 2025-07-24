'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "FreshOrgano Grocery E-Commerce",
    description:
      "A fully responsive front-end e-commerce site for browsing and purchasing organic grocery items. Includes categorized listings (Bakery, Pantry, Dairy), recipe integrations, cart functionality, and Google Maps-based contact page. Built with HTML, CSS, and JavaScript to provide a seamless user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Google Maps API"],
    link: "https://github.com/Gaurav2213/FreshOrgano",
    image: "/project/grocery.png",
  },
  {
    title: "Crowdsourced Road Repair App (MobileAppz)",
    description:
      "Civic feedback platform that lets users report damaged roads in real time. Solves the problem of delayed municipal responses by integrating geotagged reports, admin approvals, and heatmap-based analysis to detect high-traffic issues. Enhanced with Redis caching for faster map data retrieval.",
    tech: ["React", "Node.js", "Flask", "Mapbox", "MongoDB", "Redis"],
    link: "https://github.com/Rahulraj888/MobileAppzFrontend",
    image: "/project/CrowdSource.png",
  },
  {
    title: "Computer Storage E-Commerce",
    description:
      "A full-stack MERN e-commerce platform for purchasing HDDs and SSDs. Features role-based authentication, shopping cart, admin dashboard, product reviews, and order tracking. Built as part of a Full Stack JavaScript course project.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux", "Bootstrap"],
    link: "https://github.com/Gaurav2213/computer-storage-ecommerce-app",
    image: "/project/computerEcommerce.png",
  },
  {
    title: "Spotify Clone - Vibrant Media Player",
    description:
      "A responsive front-end music player inspired by Spotify, built with HTML, CSS, and vanilla JS. Features media controls, dynamic song loading, and mobile-friendly UI.",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG", "Fetch API"],
    link: "https://github.com/Gaurav2213/-Basic-Spotify-Clone",
    image: "/project/HomePage.png",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button (no hover effect) */}
              <div className="mt-auto pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded transition duration-300"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
