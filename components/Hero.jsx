// components/Hero.jsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Hi, I'm <span className="text-blue-600">Gaurav Sharma</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
        Full Stack Developer | Java & React Enthusiast 💻
      </h2>
      <p className="max-w-xl text-gray-600 text-sm md:text-base">
        Based in Toronto CA — Learning full stack @ Lambton. Passionate about building modern apps using Java, Spring Boot, React, and cloud-native tools. Always up for tech talks, music, and side projects!
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/Gaurav2213"
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
          target="_blank" rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/gs-4b39491b9"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500"
          target="_blank" rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="/GauravSharmaSofDev.pdf"
          className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100"
          target="_blank" rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
