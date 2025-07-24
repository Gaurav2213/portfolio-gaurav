// app/page.js or page.jsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id="Home"><Hero /></section>
      <section id="About"><About /></section>
      <section id ="TeckStack"><TechStack/></section>
      <section id="Projects"><Projects /></section>
      <section id="Timeline"><Timeline /></section>
      <section id="Contact"><Contact /></section>
    </div>
  );
}
