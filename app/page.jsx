// app/page.js or page.jsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";

import ContactForm from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <ContactForm/>
    </div>
  );
}
