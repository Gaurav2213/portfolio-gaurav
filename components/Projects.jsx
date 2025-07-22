// components/Projects.jsx

const projects = [
  {
    title: "Personal Finance Dashboard",
    description:
      "A Java-based dashboard to manage income, visualize spending, and track budgets using JDBC, MySQL, and HTML/CSS.",
    tech: ["Java", "JDBC", "MySQL", "HTML", "JavaScript"],
    link: "https://github.com/Gaurav2213/PersonalFinanceDashboard",
  },
  {
    title: "Computer Storage E-Commerce",
    description:
      "A MERN-based e-commerce platform to purchase HDDs/SSDs with role-based login, admin dashboard, and order management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/Gaurav2213/computer-storage-ecommerce-app",
  },
  {
    title: "GRIZ FIT – Gym Management System",
    description:
      "Full-stack gym management platform built using Spring Boot and React. Includes CI/CD with Jenkins and Kubernetes.",
    tech: ["Spring Boot", "React", "MySQL", "CI/CD", "Docker"],
    link: "#", // update with your repo or deployment link
  },
  {
    title: "Road Repair Feedback App (Mobile Appz)",
    description:
      "Geospatial civic platform with real-time reporting, Mapbox, ML heatmaps, and Flask backend.",
    tech: ["React", "Node", "Flask", "Mapbox", "MongoDB"],
    link: "#",
  },
  {
  title: "Spotify Clone - Vibrant Media Player",
  description:
    "A front-end-only Spotify-inspired music player using HTML, CSS, and JavaScript. Features playlist UI, media controls, responsive design, and audio playback.",
  tech: ["HTML5", "CSS3", "JavaScript", "SVG", "Fetch API"],
  link: "https://github.com/Gaurav2213/-Basic-Spotify-Clone",
}
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
