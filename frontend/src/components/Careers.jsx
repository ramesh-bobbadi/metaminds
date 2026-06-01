import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/Careers.css';
import careersHeroImg from '../assets/hero.webp';

function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for applying! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      resume: null
    });
    e.target.reset(); // Reset file input
  };

  return (
    <>
      <Header />
      <main className="careers-page">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="careers-hero-content">
            <h1>Careers at Meta Minds</h1>
            <h2>Join us in building secure, scalable, and innovative technology.</h2>
            <p>
              At Meta Minds, we're not just writing code — we're shaping digital
              transformation. Our team thrives on solving complex challenges,
              building enterprise-grade solutions, and delivering technology that
              empowers businesses worldwide. If you're passionate about innovation,
              collaboration, and excellence, this is where your journey begins.
            </p>
            <button className="careers-hero-button" onClick={() => document.getElementById('join-team-section').scrollIntoView({ behavior: 'smooth' })}>
              View Jobs &rarr;
            </button>
          </div>
          <div className="careers-hero-image">
            <img src={careersHeroImg} alt="Engineers working together" />
          </div>
        </section>

        {/* Join Our Team Section */}
        <section id="join-team-section" className="join-team-section">
          <h2>join Our Team</h2>
          <div className="join-team-form-container">
            <form className="join-team-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Applying For</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a role</option>
                  <option value="App Dev">App Developer</option>
                  <option value="Web Dev">Web Developer</option>
                  <option value="Cyber Security">Cyber Security Specialist</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resume">Resume / CV</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Careers;