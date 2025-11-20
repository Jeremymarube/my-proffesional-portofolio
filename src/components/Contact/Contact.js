'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thanks for reaching out! I will get back to you soon.');
    setFormData(initialState);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Am open to collaborations,projects, or simply connecting with like-minded professionals. Let's create something impactful together.</p>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;

