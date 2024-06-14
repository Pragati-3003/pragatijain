import React, { useEffect, useState } from "react";
import "./projects.css";
import unifiedblood from "../../assets/unifiedblood.png";
import bvsynergy from "../../assets/bvsynergy.png";
import Ecommerce from "../../assets/Ecommerce.png";
const testimonials = [
  {
    info: " A comprehensive community platform fostering seamless communication and collaboration among students, mentors, alumni, and teachers at Banasthali Vidyapith",
    name: "BV SYNERGY",
    title: "Community Platform for the Banasthali Vidyapith",
    url: "https://github.com/Pragati-3003/BV__SYNERGY",
    image: bvsynergy,
  },
  {
    info: "UnifiedBlood revolutionizes blood donation with real-time donor-patient matching, appointment scheduling, and robust communication features, ensuring a seamless and efficient blood donation process and a reliable blood supply for those in need",
    name: "UnifiedBlood",
    title: "Bridging Gaps in Blood Donation Ecosystem",
    url: "https://github.com/Pragati-3003/Unified_Blood",
    image: unifiedblood,
  },
  {
    info: "Developed an engaging e-commerce website with React, Strapi, and Redux Toolkit, implementing dynamic product cart functionality and advanced filtering capabilities through custom hooks for an enhanced user experience.",
    name: "E-commerce Website",
    // title: "Project Manager",
    url: "https://github.com/Pragati-3003/Ecommerce",
    image: Ecommerce,
  },
];

const TestimonialItem = ({ testimonial, isVisible }) => (
  <div className={`testimonial-item ${isVisible ? "visible" : ""}`}>
    <div className="testimonial-quote">
      {/* <span className="quote-icon" >“</span> */}
      <p className="quote">
        {" "}
        <p className="quote-icon" style={{ marginBottom: "-50px" }}>
          “
        </p>{" "}
        {testimonial.info}
      </p>
    </div>
    <div className="testimonial-author">
      <h3>{testimonial.name}</h3>
      <p>{testimonial.title}</p>
      <a style={{ marginTop: "5px" }} href={testimonial.url}>
        Github Repo
      </a>
    </div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Pragati-3003"
      className="moreprojects"
    >
      More Projects
    </a>
  </div>
);

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (index) => {
    setVisibleIndex(index);
  };

  return (
    <>
      <div  id="work" className="testimonial-container">
        <h2 className="testimonial-title">WHAT I BUILT</h2>
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-wrapper"
              style={{
                transform: `translateY(${(index - visibleIndex) * 100}%)`,
              }}
            >
              <TestimonialItem
                testimonial={testimonial}
                isVisible={index === visibleIndex}
              />
            </div>
          ))}
        </div>
        <div className="testimonial-nav">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.author}
              className={index === visibleIndex ? "active" : ""}
              onClick={() => handleNavClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
