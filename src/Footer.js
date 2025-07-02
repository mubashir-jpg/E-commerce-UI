
import React from 'react';


export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p className="footer-text">Hello everyone, this is me</p>

       
        <div className="social-links my-3">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> 
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-4">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}