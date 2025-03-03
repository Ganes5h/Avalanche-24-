

import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

function Test() {
  return (
    <div className="test">
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <h1>Welcome to the Particle Test</h1>
        <p>This is a simple test of the particle background.</p>
      </div>
    </div>
  );
}

export default Test;

