import { useState, useEffect } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const landing = document.querySelector(".landing");
      if (!landing) return;

      const rect = landing.getBoundingClientRect();

      // When top of landing goes above screen, switch to fixed
      if (rect.top <= -70) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`side-nav ${isFixed ? "fixed" : ""}`}>
      <ul>
        <li>LANDING</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>TECHNOLOGIES</li>
        <li>CAREER</li>
        <li>EDUCATION</li>
      </ul>
    </nav>
  );
}
