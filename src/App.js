import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NeonText from './components/NeonText';
import './styles/futuristic.css';
import './styles/animations.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="futuristic-app">
      <ParticleBackground />
      <div className="auth-container">
        <div className="holographic-card">
          <NeonText size="2.5rem">
            {showLogin ? 'Future Portal' : 'Create Account'}
          </NeonText>
          
          {showLogin ? (
            <LoginForm onSwitch={() => setShowLogin(false)} />
          ) : (
            <SignupForm onSwitch={() => setShowLogin(true)} />
          )}
          
          <div className="terminal-line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;