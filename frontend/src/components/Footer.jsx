import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.webp';
import twitterIcon from '../assets/twitter.webp';
import instagramIcon from '../assets/instagram.webp';
import linkedinIcon from '../assets/linkedin.webp';
import youtubeIcon from '../assets/youtube.webp';
import locationicon from '../assets/location.webp';
import emailicon from '../assets/email.webp';
import phoneicon from '../assets/calling.webp';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <h3>Meta Minds</h3>
          <p>At Meta Minds, we engineer secure platforms and craft innovative IT solutions. From software to cloud, we bring your ideas to life.</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" title="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" title="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policies</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>IT Infrastructure</li>
            <li>Cyber Security</li>
            <li>Mobile Development</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p className="footer-contact-item"><img src={emailicon} alt="Email" /> <span>support@metamindspvtltd.com</span></p>
          <p className="footer-contact-item"><img src={phoneicon} alt="Phone" /> <span>+91 9494890262</span></p>
          <p className="footer-contact-item"><img src={locationicon} alt="Location" /> <span>Plot No.26, Golden Homes, Edupugallu, Kankipadu Mandal, 521151</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Meta Minds Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
