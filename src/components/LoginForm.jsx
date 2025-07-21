import React, { useState } from 'react';
import FloatingInput from './FloatingInput';
import AnimatedButton from './AnimatedButton';
import { useAuth } from '../hooks/useAuth';

const LoginForm = ({ onSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({});
  const { login } = useAuth();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (result.success) {
      setStatus({ type: 'success', message: 'Login successful!' });
    } else {
      setStatus({ type: 'error', message: result.error });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {status.type && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}
      <FloatingInput 
        label="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FloatingInput 
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AnimatedButton type="submit">Login</AnimatedButton>
      <div className="form-footer">
        <button type="button" className="toggle-form" onClick={onSwitch}>
          Don't have an account? Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;