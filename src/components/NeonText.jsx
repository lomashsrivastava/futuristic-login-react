import React from 'react';

const NeonText = ({ children, size = '2rem', color = '#0ff' }) => {
  return (
    <div 
      className="neon-text"
      style={{
        fontSize: size,
        color: color,
        textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
      }}
    >
      {children}
    </div>
  );
};

export default NeonText;