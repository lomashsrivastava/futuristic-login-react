import React, { useState } from 'react';

const AnimatedButton = ({ children, onClick, type = 'button' }) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  
  return (
    <button
      type={type}
      className={`holographic-btn ${click ? 'clicked' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClick(true)}
      onMouseUp={() => setClick(false)}
      onClick={onClick}
      style={{
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hover 
          ? `0 0 20px #0ff, inset 0 0 10px rgba(0, 255, 255, 0.5)` 
          : `0 0 10px #0ff, inset 0 0 5px rgba(0, 255, 255, 0.3)`
      }}
    >
      <span className="btn-content">{children}</span>
      <div className="btn-reflection"></div>
    </button>
  );
};

export default AnimatedButton;