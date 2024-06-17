import React from 'react';
import './contact.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="contact" className="container">
      <div className="header">
        <h1 className="title">CONTACT ME</h1>
      </div>
      <div className="content">
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="text-container">
            <p className="title">My Address</p>
            <p className="description">Rajasthan, India</p>
          </div>
        </div>
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="text-container">
            <p className="title">Email Me</p>
            <p className="description">jpragati3003@gmail.com</p>
          </div>
        </div>
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <div className="text-container">
            <p className="title">Resume</p>
            <p className="description"><a href="https://drive.google.com/file/d/1yNsue05ZsoWQGWiR2cwZWGMJWfoON0wB/view?usp=sharing">Click Here</a></p>
          </div>
        </div>
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div className="text-container">
            <p className="title">Social Profiles</p>
            <ul className="social-icons">
              <li><a  href="https://leetcode.com/u/Pragati3003/" rel="noopener noreferrer"><img src="https://simpleicons.org/icons/leetcode.svg" alt="LeetCode" className='addcolor'/></a></li>
              <li><a href="https://github.com/Pragati-3003" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/pragati3003/" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="button">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
