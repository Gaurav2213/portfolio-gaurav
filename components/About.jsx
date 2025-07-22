// components/About.jsx

export default function About() {
  return (
    <section className="py-20 px-4 bg-white text-center text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          I'm a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> currently studying Full Stack Software Development at Lambton College in Toronto 🇨🇦. I specialize in building robust web applications using technologies like Java, Spring Boot, React, and MySQL.
        </p>
        <p className="mb-4">
          Previously, I worked at Cognizant as a Junior Software Engineer , where I contributed to both frontend and backend projects, enhanced legacy systems, and practiced agile methodologies like Scrum and pair programming.
        </p>
        <p className="mb-4">
          I enjoy tackling real-world problems, collaborating in teams, and continuously learning new tech tools — whether it's DevOps, cloud platforms, or modern frameworks. Outside of code, I enjoy music 🎧, and side projects that challenge my creativity.
        </p>
      </div>
    </section>
  );
}
