import LoadingScreen from "@/components/loading-screen";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
