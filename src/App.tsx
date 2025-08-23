import Navbar from "./components/navbar/Navbar";
import About from "./components/sections/about/About";
import LandingSection from "./components/sections/landing/Landing";
import SkillsServices from "./components/sections/skills/Skills";
import TechSkills from "./components/sections/tech/Tech";

function App() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Navbar />
      <LandingSection />
      <About />
      <SkillsServices />
      <TechSkills />
    </div>
  );
}

export default App;
