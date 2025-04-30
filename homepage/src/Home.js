import React from 'react';

const Home = () => {
  return (
    <div
      className="home-page"
      style={{
        backgroundColor: '#f9fafb',  // Light neutral background
        color: '#1f2937',            // Soft dark text
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', margin: '0 0 10px' }}>
        Lanz Aerol Ardenio
      </h1>
      <p style={{ fontSize: '1rem', margin: 0 }}>
        3rd Year Student
      </p>
    </div>
  );
};

export default Home;
