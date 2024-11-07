import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Example of social icons
import "./contact.css"
const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-heading">Get In Touch</h1>
        <p className="contact-subheading">
          I’m always open to discussing new projects or creative opportunities!
        </p>
      </div>

      <div className="contact-body">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Write your message..." />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="social-links">
          <h2 className="social-heading">Let's Connect!</h2>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
