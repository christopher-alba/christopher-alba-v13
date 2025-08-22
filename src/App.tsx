import Navbar from "./components/navbar/Navbar";
import About from "./components/sections/about/About";
import LandingSection from "./components/sections/landing/Landing";
import SkillsServices from "./components/sections/skills/Skills";

function App() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Navbar />
      <LandingSection />
      <About />
      <SkillsServices />
    </div>
  );
}

export default App;
