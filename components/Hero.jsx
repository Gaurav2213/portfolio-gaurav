import Image from "next/image"; // assuming you're using Next.js
//import profilePic from "../public/gaurav-profile.png"; // replace with your actual image path
import profilePic from "../public/DP.webp";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-6 py-20 bg-gradient-to-b from-white to-slate-100">
      {/* Profile Image */}
      <div className="w-40= h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
        <Image
          src={profilePic}
          alt="Gaurav Sharma"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
  Code. <span className="text-blue-600">Build</span>. <span className="text-blue-600">Create</span>!
</h1>
<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
  I’m <span className="text-blue-600">Gaurav Sharma</span>
</h1>


        <p className="text-gray-600 text-base md:text-lg mb-6">
          I build clean, scalable, and cloud-ready applications using Java, Spring Boot, and React — turning ideas into impact. Let’s build something great together!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
  href="/tech/GauravSharmaSofDev.pdf"
  className="bg-blue-100 text-blue-800 px-6 py-2 rounded-md hover:bg-blue-200 font-medium"
  target="_blank" rel="noopener noreferrer"
>
  Resume
</a>
        </div>
      </div>
    </section>
  );
}
