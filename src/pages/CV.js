import React from 'react';

function CV() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <iframe 
        src="/CV.pdf#zoom=120" 
        width="90%" 
        height="1000px" 
        title="CV"
        style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
      >
      </iframe>
    </div>
  );
}

export default CV;
