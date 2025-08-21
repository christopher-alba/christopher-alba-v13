import React from "react";
import "./ShootingStars.css";

interface Meteor {
  top: number;
  left: number;
  length: number;
  angle: number;
  speed: number;
  delay: number;
  opacity: number;
  distance: number;
}

const MeteorShower: React.FC<{ count?: number }> = ({ count = 40 }) => {
  const meteors: Meteor[] = Array.from({ length: count }).map(() => {
    const angle = 230 + 90; // keep the same angle for all meteors
    const distance = 2000 + Math.random() * 400; // travel further for larger area
    return {
      top: -25, // start slightly off-screen top to 40% down
      left: -10 + Math.random() * 120, // start slightly off-screen left to right
      length: 50 + Math.random() * 150,
      angle,
      speed: 1.5 + Math.random() * 2, // slightly longer duration
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.7,
      distance,
    };
  });

  return (
    <div className="meteor-shower-container">
      {meteors.map((meteor, i) => {
        const rad = (meteor.angle * Math.PI) / 180;
        const x = -Math.cos(rad) * meteor.distance;
        const y = -Math.sin(rad) * meteor.distance;

        return (
          <div
            key={i}
            className="meteor-wrapper"
            style={
              {
                top: `${meteor.top}%`,
                left: `${meteor.left}%`,
                animationDuration: `${meteor.speed}s`,
                animationDelay: `${meteor.delay}s`,
                "--move-x": `${-x}px`,
                "--move-y": `${y}px`,
                "--color":
                  Math.random() < 0.5
                    ? `hsl(${180 + Math.random() * 60}, ${
                        30 + Math.random() * 30
                      }%, ${75 + Math.random() * 15}%)` // pastel blues
                    : `hsl(${20 + Math.random() * 20}, ${
                        30 + Math.random() * 30
                      }%, ${75 + Math.random() * 15}%)`, // pastel oranges
              } as React.CSSProperties
            }
          >
            <div
              className="meteor"
              style={{
                height: `${meteor.length}px`,
                transform: `rotate(${meteor.angle}deg)`,
                opacity: meteor.opacity,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MeteorShower;
