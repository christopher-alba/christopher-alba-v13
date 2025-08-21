import ShootingStars from "../../shooting-stars/ShootingStars";
import EarthRipples3D from "../../spinning-earth/SpinningEarth";
import "./Landing.css";

export default function LandingSection() {
  return (
    <section className="landing">
      <div className="container">
        {/* Left Ribbon */}
        <div className="left-content-wrapper">
          <div className="ribbon">
            <div className="ribbon-content">
              <span className="code-icon">&lt;/&gt;</span>
            </div>
          </div>
          <div className="left-content">
            <p className="job-title">Software Engineer</p>
            <h1 className="name">
              CHRISTOPHER
              <br />
              ALBA
            </h1>
          </div>
        </div>

        {/* Center Content */}
        <div className="main-text">
          <h2>
            Learning new skills <br /> and growing my <br /> experience.
          </h2>
        </div>

        {/* Learn More (Bottom Left) */}
        <div className="learn-more">
          Learn More <span className="arrow">↓</span>
        </div>
        <ShootingStars />
        <EarthRipples3D />
      </div>
    </section>
  );
}
