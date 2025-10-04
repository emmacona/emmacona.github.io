import React from 'react';
import './cv.css';

function CV() {
  return (
    <div className="cv-container">
      <iframe 
        src="/CV.pdf#zoom=80" 
        className="cv-iframe"
        title="CV"
      >
      </iframe>
    </div>
  );
}

export default CV;
