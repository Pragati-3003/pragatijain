import React from "react";
import "./about.css";
const About = () => {
  return (
    <section  id="about" style={{backgroundColor:"#0d0c0c"}} className="about-me flex flex-col justify-center min-h-svh space-y-4 max-w-4xl px-10 mx-auto">
      <div className="space-y-4" style={{ opacity: 0.80698 }}>
        <h3 className="   text-uppercase text-xl tracking-[0.6rem] box">
          About Me
        </h3>

        <p
          style={{ color: "wheat" }}
          className="text-4xl sm:text-5xl child-gradient box font-semibold"
        >
          I am
          <strong style={{ color: "#eb5939" }}> Pragati Jain</strong>, a
          Frontend Web Developer crafting captivating user interfaces and
          seamless experiences.With a blend of creativity and technical mastery,
        </p>
      </div>
      <a href="https://drive.google.com/file/d/1yNsue05ZsoWQGWiR2cwZWGMJWfoON0wB/view?usp=sharing">RESUME</a>
    </section>
  );
};

export default About;
