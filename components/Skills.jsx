// components/Skills.jsx

const skills = {
  "Languages": ["Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  "Frontend": ["React.js", "Vue.js", "Bootstrap", "Tailwind CSS"],
  "Backend": ["Spring Boot", "Spring MVC", "Node.js", "Express.js"],
  "Database": ["MySQL", "Oracle", "MongoDB", "Mongoose"],
  "Tools & DevOps": ["Git", "GitHub", "Postman", "JIRA", "Docker", "Kubernetes", "CI/CD", "Jenkins"],
  "Cloud & Microsoft": ["Azure", "PowerShell", "Microsoft 365"]
};

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map(skill => (
                <li
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
