import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-image">{/* Left side image */}</div>
      {/* Right side content */}
      <div className="about-content">
        <div className="about-inner-container">
          <div className="about-text-container">
            <p className="about-job">I work at TAG Digital, Auckland NZ.</p>

            <p className="about-text secondary">
              Focused on creating efficient, scalable solutions for complex
              problems. With an emphasis on reducing technical debt and
              designing systems that support long-term business goals, I aim to
              deliver clean and maintainable code.
            </p>
            <p className="about-text ">
              By placing user experience at the forefront of my decisions, I
              ensure that projects not only meet technical requirements but also
              create intuitive, enjoyable, and accessible solutions. This
              ensures business driven design and development.
            </p>
          </div>
          <h2 className="about-title">
            About <br /> me.
          </h2>
        </div>
      </div>
    </section>
  );
}
