import "./Tech.css";

const renderStars = (count: number) => {
	return (
		<div className="stars">
			{Array.from({ length: count }).map((_, i) => (
				<span
					key={i}
					className="star"
				>
					★
				</span>
			))}
		</div>
	);
};

const TechSkills = () => {
	return (
		<div className="tech-container">
			<div className="tech-background">
				<div className="tech-image"></div>
				<div className="tech-empty-space"></div>
			</div>

			<div className="card">
				<div className="honorable-mentions dark-card">
					<h3>Honorable Mentions</h3>
					<p>
						These are the tools I have used in personal projects,
						and sometimes at work. This mostly ranges from my time
						at University of Auckland and Dev Academy Aotearoa, as
						well as my spare time outside of work.
					</p>

					<ul>
						<li>
							{renderStars(3)}
							<span>Python</span>
						</li>
						<li>
							{renderStars(5)}
							<span>React</span>
						</li>
						<li>
							{renderStars(5)}
							<span>Node.js</span>
						</li>
						<li>
							{renderStars(5)}
							<span>MongoDB Atlas</span>
						</li>
						<li>
							{renderStars(3)}
							<span>Blender</span>
						</li>
						<li>
							{renderStars(4)}
							<span>Figma</span>
						</li>
						<li>
							{renderStars(4)}
							<span>Unity</span>
						</li>
						<li>
							{renderStars(5)}
							<span>Javascript</span>
						</li>
					</ul>
				</div>
				<div className="usual-tech-content">
					<h1 className="tech-title-main">The Usual Tech</h1>
					<p>
						These technologies are what I usually work with
						professionally. I also have exposure to other
						languages/frameworks that are not listed here but rarely
						use them at work. I believe that languages/frameworks
						are simply tools to help build projects, and have no
						real preferences to what I use to craft solutions.
					</p>

					<ul>
						<li>
							<span>C#</span>
							{renderStars(5)}
						</li>
						<li>
							<span>Angular</span>
							{renderStars(5)}
						</li>
						<li>
							<span>Typescript</span>
							{renderStars(5)}
						</li>
						<li>
							<span>HTML</span>
							{renderStars(5)}
						</li>
						<li>
							<span>CSS</span>
							{renderStars(5)}
						</li>
						<li>
							<span>PostgresQL</span>
							{renderStars(5)}
						</li>
						<li>
							<span>AWS</span>
							{renderStars(5)}
						</li>
						<li>
							<span>Git</span>
							{renderStars(5)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TechSkills;
