import Image from "next/image";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import About from "./components/About";
import ResumeSection from "./components/ResumeSection";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <About />
      <ResumeSection />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
