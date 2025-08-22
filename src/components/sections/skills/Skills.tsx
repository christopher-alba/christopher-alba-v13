import "./Skills.css";

export default function SkillsServices() {
  return (
    <section className="skills-section">
      <div className="skills-bg-blue"></div>
      <div className="skills-bg-dark">
        {/* Title */}
        <h2 className="skills-title">Skills & Services</h2>

        {/* Skills content */}
        <div className="skills-content">
          <p>
            <span className="skills-heading">UX + UI Design</span>
            <br />
            <span className="skills-text">
              I am able to design simple user experiences for applications that
              gives exceptional user experiences. This can sometimes involve
              designing seamless user interfaces for web/desktop/mobile
              applications.
            </span>
          </p>

          <p>
            <span className="skills-heading">Software Design</span>
            <br />
            <span className="skills-text">
              Whether it's the frontend or backend side of applications, I can
              design their architecture based on requirements; this can involve
              startup environments or enterprise-level solutions.
            </span>
          </p>

          <p>
            <span className="skills-heading">Database Architecture</span>
            <br />
            <span className="skills-text">
              I am knowledgeable and experienced on both relational and
              non-relational database, and can help design their structure to
              help you with simple data needs.
            </span>
          </p>

          <p>
            <span className="skills-heading">Coding</span>
            <br />
            <span className="skills-text">
              Having experience coding at the hardware level from university,
              and at the software abstraction level in my career, I am familiar
              in coding with low-level and high-level languages.
            </span>
          </p>
        </div>
      </div>

     
    </section>
  );
}
