import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from '../../api/axiosConfig';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const addTokenToHeaders = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signin', credentials);
      const { token } = response.data;
      addTokenToHeaders(token);
      return token;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await handleLogin(credentials);
      console.log('Login successful', token);
      localStorage.setItem('userEmail', credentials.email); // Store email in local storage
      navigate('/profile', { replace: true });
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={styles['input-box']}> 
          <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        </div>
        <div className={styles['input-box']}> 
          <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        <div className={styles['register-link']}>
          <p>Already have an account? <NavLink to="/register">Register</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
