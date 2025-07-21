import React, { useState, useRef } from 'react';

const FloatingInput = ({ label, type = 'text', name, value, onChange }) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  
  return (
    <div className={`floating-input ${focused || value ? 'focused' : ''}`}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
      />
      <label onClick={() => inputRef.current.focus()}>
        {label.split('').map((char, i) => (
          <span 
            key={i} 
            style={{ 
              transitionDelay: `${i * 30}ms`,
              transform: focused || value ? 'translateY(-25px)' : 'none',
              opacity: focused || value ? 1 : 0.7
            }}
          >
            {char}
          </span>
        ))}
      </label>
      <div className="wave-animation"></div>
    </div>
  );
};

export default FloatingInput;