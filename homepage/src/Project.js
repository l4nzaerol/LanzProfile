import React from 'react';

function Project() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project One</h3>
          <p>A web app that helps users manage their tasks effectively.</p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>An e-commerce site built using React and Firebase.</p>
        </div>
        <div className="project-card">
          <h3>Project Three</h3>
          <p>A responsive personal blog with markdown support.</p>
        </div>
      </div>
    </section>
  );
}

export default Project;
