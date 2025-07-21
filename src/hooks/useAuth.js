import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('futuristic-auth');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('futuristic-auth', JSON.stringify(users));
  }, [users]);
  
  const signup = (userData) => {
    if(users.find(u => u.username === userData.username)) {
      return { error: 'Username already exists' };
    }
    
    const newUser = { ...userData, joined: new Date().toISOString() };
    setUsers([...users, newUser]);
    return { success: true };
  };
  
  const login = (username, password) => {
    const user = users.find(u => 
      u.username === username && u.password === password
    );
    
    if(user) {
      setCurrentUser(user);
      return { success: true, user };
    }
    return { error: 'Invalid credentials' };
  };
  
  const logout = () => {
    setCurrentUser(null);
  };
  
  return { currentUser, signup, login, logout };
};