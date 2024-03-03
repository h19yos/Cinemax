import React, { useState } from 'react';
import './ContactUs.css';
import axios from '../api/axiosConfig'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Contact Us</h2>
          <input
            type="text"
            className="field"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="field"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="field"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            className="field"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="btn sender" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
