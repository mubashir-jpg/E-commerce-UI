import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Maincontant from './Maincontant';

export default function Navbar(props) {
  const [theme, setTheme] = useState('light');  

  const darkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('bg-dark', theme === 'dark');
    document.body.classList.toggle('bg-light', theme === 'light');
  }, [theme]);

  return (
    <div className={`my-3 navbar-container`}>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} shadow-sm`}>
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
         
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-primary me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary">Sign Up</button>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>

  
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              onClick={darkMode} 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault"
              checked={theme === 'dark'} 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </nav>

    
      <Slide />
      <Maincontant />
    </div>
  );
}