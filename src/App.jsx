import ReactLenis from "lenis/react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";
import SkillSummary from "./sections/SkillSummary";
import About from "./sections/About";

function App() {
  return (
    // Lenis just makes the scrolling smoother
    <ReactLenis
      root
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <SkillSummary />
      <Skills />
      <About />
    </ReactLenis>
  );
}

export default App;
