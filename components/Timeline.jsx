'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineData = [
  {
    title: "Junior Software Engineer",
    company: "Cognizant Technology Solutions, India",
    date: "Aug 2023 – Oct 2023",
    startDate: "2023-08",
    logo: "/logos/cognziantLogo.jpeg",
    description:
      "Refactored legacy codebases and improved UI/UX using React.js and Bootstrap. Collaborated through pair programming in agile teams, boosting reliability and client satisfaction.",
  },
  {
    title: "Software Engineer Trainee",
    company: "Cognizant Technology Solutions, India",
    date: "Aug 2022 – Aug 2023",
    startDate: "2022-08",
    logo: "/logos/cognziantLogo.jpeg",
    description:
      "Built and tested enterprise applications using Java and Spring Boot. Enhanced data integrity and resolved ITSM tickets, reducing issue resolution time by 30%.",
  },
  {
    title: "Gen'C Intern (Full Stack Java Developer)",
    company: "Cognizant Technology Solutions, India",
    date: "Feb 2022 – Jul 2022",
    startDate: "2022-02",
    logo: "/logos/cognziantLogo.jpeg",
    description:
      "Developed a full-stack fitness web app using Spring Boot and React. Set up CI/CD pipelines with Jenkins and Kubernetes, improving deployment speed by 25%.",
  },
  {
    title: "Postgraduate – Full Stack Software Development",
    company: "Lambton College, Toronto, Canada",
    date: "Jan 2024 – Oct 2025",
    startDate: "2024-01",
    logo: "/logos/LambtonLogo.png",
    description:
      "Focused on Java, React, DevOps, and cloud computing. Received Dean's Honour Award for academic excellence in Summer 2024.",
  },
  {
    title: "Bachelor of Technology – Information Technology",
    company: "Chandigarh Group of Colleges / PTU",
    date: "Jun 2019 – Jun 2022",
    startDate: "2019-06",
    logo: "/logos/CGC.jpeg",
    description:
      "Built strong foundations in Java, DBMS, and data structures. Led student teams and participated in AI and software development activities.",
  },
];

const sortedTimeline = [...timelineData].sort((a, b) =>
  b.startDate.localeCompare(a.startDate)
);

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Career Timeline</h2>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="absolute left-5 top-0 w-1 bg-blue-500 rounded"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />

        <div className="pl-12">
          {sortedTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false }}
              className="relative mb-12 hover:shadow-lg hover:bg-white transition-all duration-300 rounded-md p-4"
            >
              <div className="absolute left-2 top-5 w-4 h-4 bg-blue-500 rounded-full shadow-md z-10"></div>

              <div className="flex items-center gap-3 mb-1 ml-4">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={28}
                  height={28}
                  className="rounded-full object-contain"
                />
                <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 ml-4">{item.company}</p>
              <p className="text-sm italic text-gray-400 mb-2 ml-4">{item.date}</p>
              <p className="text-gray-700 ml-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
