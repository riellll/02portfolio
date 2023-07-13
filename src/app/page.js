// import Image from 'next/image'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <>
    <section id="hero">
      <Hero/>
    </section>

    <section id="tech-stack">
      <TechStack/>
    </section>

   <section id="about">
      <About/>
    </section>

      <section id="project">
      <Project/>
    </section>

    <section id="contact">
      <Contact/>
    </section>
  </>
  )
}
