import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
            <p className="quote">"The only way to do great work is to love what you do." - Steve Jobs</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
            <p className="footer-info">Let's work together! <a href="#contact" className="contact-link">Contact Me</a></p>
          </footer>
  )
}

export default Footer