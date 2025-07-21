import React, { useState } from 'react';
import FloatingInput from './FloatingInput';
import AnimatedButton from './AnimatedButton';
import { useAuth } from '../hooks/useAuth';

const SignupForm = ({ onSwitch }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState({});
  const { signup } = useAuth();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (userData.password !== userData.confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match' });
      return;
    }
    
    const result = signup({
      username: userData.username,
      email: userData.email,
      password: userData.password
    });
    
    if (result.success) {
      setStatus({ 
        type: 'success', 
        message: 'Account created! You can now login.' 
      });
      setTimeout(() => onSwitch(), 2000);
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
        value={userData.username}
        onChange={handleChange}
      />
      <FloatingInput 
        label="Email"
        name="email"
        type="email"
        value={userData.email}
        onChange={handleChange}
      />
      <FloatingInput 
        label="Password"
        name="password"
        type="password"
        value={userData.password}
        onChange={handleChange}
      />
      <FloatingInput 
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={userData.confirmPassword}
        onChange={handleChange}
      />
      <AnimatedButton type="submit">Sign Up</AnimatedButton>
      <div className="form-footer">
        <button type="button" className="toggle-form" onClick={onSwitch}>
          Already have an account? Login
        </button>
      </div>
    </form>
  );
};

export default SignupForm;