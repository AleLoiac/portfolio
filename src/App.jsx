import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Skills from "./sections/Skills";
import SkillSummary from "./sections/SkillSummary";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SkillSummary />
      <Skills />
    </div>
  );
}

export default App;
