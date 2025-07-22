// components/Timeline.jsx

const timelineData = [
  {
    title: "Junior Software Engineer",
    company: "Cognizant Technology Solutions, India",
    date: "Aug 2023 – Oct 2023",
      startDate: "2023-08",

    description:
      "Worked in an agile environment to refactor legacy codebases, improve system reliability, and enhance client UI/UX using React.js and Bootstrap. Practiced pair programming and contributed to improved uptime and faster issue resolution.",
  },
  {
    title: "Software Engineer Trainee",
    company: "Cognizant Technology Solutions, India",
    date: "Aug 2022 – Aug 2023",
      startDate: "2022-08",

    description:
      "Developed and tested enterprise applications with Java, Spring Boot, and React. Focused on data integrity, relational database standards, and implemented ITSM incident workflows to boost system efficiency.",
  },
  {
    title: "Gen'C Intern (Full Stack Java Developer)",
    company: "Cognizant Technology Solutions, India",
    date: "Feb 2022 – Jul 2022",
      startDate: "2022-02",
    description:
      "Built and deployed the GRIZ FIT web app using Spring Boot and React. Implemented CI/CD pipelines with Jenkins & Kubernetes and integrated microservices, improving deployment speed by 25%.",
  },
  {
    title: "Postgraduate – Full Stack Software Development",
    company: "Lambton College, Toronto, Canada",
    date: "Jan 2024 – Oct 2025",
      startDate: "2024-01",
    description:
      "Focused on full-stack technologies like Java, React, SQL, DevOps, and cloud computing. Achieved Dean's Honour Award in Summer 2024 for academic excellence.",
  },
  {
    title: "Bachelor of Technology – Information Technology",
    company: "Chandigarh Group of Colleges / Punjab Technical University",
    date: "Jun 2019 – Jun 2022",
      startDate: "2019-06",
    description:
      "Specialized in Java, data structures, DBMS, and AI. Participated in technical events and led student initiatives at the annual Parivartan tech fest.",
  },
];

const sortedTimeline = [...timelineData].sort((a, b) => {
  const dateA = a.startDate || '';
  const dateB = b.startDate || '';
  return dateB.localeCompare(dateA);
});
export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Timeline</h2>
      <div className="max-w-4xl mx-auto relative border-l-2 border-blue-500 pl-6">
       {sortedTimeline.map((item, index) => (
  <div key={index} className="relative pl-6 mb-12">
    <div className="absolute -left-[15px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
    <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
    <p className="text-sm text-gray-500">{item.company}</p>
    <p className="text-sm italic text-gray-400 mb-2">{item.date}</p>
    <p className="text-gray-700">{item.description}</p>
  </div>
))}
      </div>
    </section>
  );
}
