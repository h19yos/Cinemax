// Register.js
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css'; // Import CSS module

export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', email: '', password: '', cpassword: '', roles: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    let errors = {};
    let valid = true;
    if (!user.email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) errors.email = 'Invalid email format';
    if (!user.password) errors.password = 'Password is required';
    else if (user.password.length < 4 || user.password.length > 10) errors.password = 'Password must be 4-10 characters long';
    if (!user.cpassword || user.cpassword !== user.password) errors.cpassword = 'Passwords do not match';
    setErrors(errors);
    Object.keys(errors).forEach((key) => {
      if (errors[key]) valid = false;
    });
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:8080/auth/signup', user);
        alert(response.data.message);
        navigate('/login', { replace: true });
      } catch (error) {
        console.error('Registration error', error);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.register}>
        <h1>Register</h1>
        <div className={styles['input-box']}>
          <input type="username" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
        </div>
        <div className={styles['input-box']}>
          <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles['input-box']}>
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles['input-box']}>
          <input type="password" name="cpassword" placeholder="Confirm Password" value={user.cpassword} onChange={handleChange} />
          {errors.cpassword && <p className={styles.error}>{errors.cpassword}</p>}
        </div>
        <select className={styles['custom-select']} name="roles" value={user.roles} onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Register</button>
        <div className={styles['login-link']}>
          <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
