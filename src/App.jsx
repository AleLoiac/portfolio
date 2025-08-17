import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
