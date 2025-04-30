import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div style={containerStyle}>
      <div style={formContainer}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <h2>Thank you, {formData.name}!</h2>
            <p>Your message has been sent.</p>
            <button onClick={handleReset} style={buttonStyle}>
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Contact</h2>

            <label style={labelStyle}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />

            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- Styles ---

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  fontFamily: 'sans-serif',
};

const formContainer = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  width: '100%',
  maxWidth: '400px',
  borderRadius: '6px',
  border: '1px solid #ddd',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '0.3rem',
  fontSize: '0.9rem',
  color: '#333',
};

const inputStyle = {
  padding: '0.6rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '0.6rem',
  backgroundColor: '#3aab6e',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default Contact;
