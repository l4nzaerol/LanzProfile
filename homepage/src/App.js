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
          <h1 style={titleStyle}>👨‍💻 My Developer Portfolio</h1>
          <p style={subtitleStyle}></p>
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
          Lanz Aerol Ardenio | Built with ❤️ in React
        </footer>
      </div>
    </Router>
  );
}

const appStyle = {
  backgroundColor: '#f0f8ff',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '1rem',
};

const titleStyle = {
  fontSize: '2.5rem',
  margin: 0,
  color: '#1e3a8a',
};

const subtitleStyle = {
  fontSize: '1.1rem',
  color: '#555',
};

const navStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  padding: '1rem 2rem',
  marginBottom: '2rem',
  width: '100%',
  maxWidth: '700px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  flexWrap: 'wrap',
  gap: '1rem',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#1e40af',
  fontSize: '1.1rem',
  fontWeight: '500',
  padding: '0.4rem 1rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

const navLinkHoverStyle = {
  ...navLinkStyle,
  backgroundColor: '#1e40af',
  color: '#ffffff',
};

const contentStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '900px',
  marginBottom: '2rem',
};

const footerStyle = {
  fontSize: '0.9rem',
  color: '#777',
  textAlign: 'center',
  marginTop: 'auto',
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
