import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from './Project';
import './App.css';

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>👨‍💻 Developer Portfolio</h1>
        </header>

        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li><NavLinkWithHover to="/">Home</NavLinkWithHover></li>
            <li><NavLinkWithHover to="/about">About</NavLinkWithHover></li>
            <li><NavLinkWithHover to="/skills">Skills</NavLinkWithHover></li>
            <li><NavLinkWithHover to="/project">Projects</NavLinkWithHover></li>
            <li><NavLinkWithHover to="/contact">Contact</NavLinkWithHover></li>
          </ul>
        </nav>

        <main style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>

        <footer style={footerStyle}>
          <p>Lanz Aerol Ardenio | Built with ❤️ in React</p>
        </footer>
      </div>
    </Router>
  );
}

const appStyle = {
  background: 'linear-gradient(135deg, #f0f4f8, #d9e5f0)', // Gradient background for a smooth feel
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif', // Elegant font
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#2a4365', // Dark blue for sophistication
  margin: 0,
  fontWeight: '700',
};

const navStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '1.2rem 2rem',
  marginBottom: '2rem',
  width: '100%',
  maxWidth: '750px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Light shadow for floating effect
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  gap: '1.8rem',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#2a4365',  // Dark blue text
  fontSize: '1.1rem',
  fontWeight: '500',
  padding: '0.6rem 1.4rem',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth animation for hover
};

const navLinkHoverStyle = {
  ...navLinkStyle,
  backgroundColor: '#0066ff',
  color: '#ffffff',
  transform: 'scale(1.05)', // Slight zoom effect on hover
};

const contentStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  width: '100%',
  maxWidth: '750px',
  transition: 'all 0.3s ease', // Smooth transition for interactions
};

const footerStyle = {
  fontSize: '0.9rem',
  color: '#888',
  textAlign: 'center',
  marginTop: 'auto',
  padding: '1rem',
  borderTop: '1px solid #e2e8f0', // Thin border to separate footer
};

const NavLinkWithHover = ({ to, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      to={to}
      style={hovered ? navLinkHoverStyle : navLinkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

export default App;
