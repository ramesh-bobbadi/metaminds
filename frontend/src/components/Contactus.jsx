import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import contactUsBg from '../assets/contactUs.webp';
import './styles/Contactus.css';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call here
  };

  // Calculate section overlay transform - the entire section moves up and rotates
  const heroHeight = 420 + 100 + 80; // hero min-height + padding
  const sectionTransformY = Math.max(-heroHeight, -scrollY * 0.6);
  const rotationX = Math.max(0, Math.min(scrollY * 1, 2));
  const scaleValue = Math.min(0.99, 1 + scrollY * 0.0001);

  return (
    <>
      <Header />
      <div className="contactus-page-wrapper">
        <div
          className="contactus-hero"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(11, 25, 55, 0.35), rgba(7, 17, 34, 0.55)), url(${contactUsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="contactus-header">
            <h1>Contact <span className="highlight">US</span></h1>
            <p>Let's have a talk Build the Future Together</p>
          </div>
        </div>

        <section
          className="contactus-section"
          style={{
            transform: `translateY(${sectionTransformY}px) perspective(1200px) rotateX(${rotationX}deg) scale(${scaleValue})`,
            opacity: Math.min(1, 0.85 + scrollY * 0.003)
          }}
        >
          <div className="contactus-container">
            <div className="contactus-left">
              <div className="help-box">
                <h2>How can we help you?</h2>
                <p>Ready to transform your ideas into powerful digital solutions? At Meta Minds, we specialize in software development, cloud infrastructure, cybersecurity and IT consulting — delivering technology that adapts to your business needs.</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.726667320168!2d80.43001231484312!3d16.5105701884464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f73c9cc4db7d%3A0x764c19f9ca7ad1ad!2sPlot%20No.%2026%2C%20Golden%20Homes%2C%20Edupugallu%2C%20Kankipadu%20Mandal%2C%20Andhra%20Pradesh%20521151!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="contactus-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">Submit →</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;