// import Image from 'next/image'
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <main className="grid mb-24 md:mb-28">
        <section id="hero">
          <Hero />

          {/* <TechStack /> */}
        </section>

        <section id="about">
          <About />
        </section>

        <section id="project">
          <Project />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
