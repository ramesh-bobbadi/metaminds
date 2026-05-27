import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backgroundVideo from '../assets/background-video.mp4';
import aboutHeroImg from '../assets/about_hero.png';
import './styles/About.css';

function About() {
  const targetSectionRef = useRef(null);

  const scrollToContent = () => {
    targetSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <video autoPlay loop muted playsInline className="about-bg-video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="about-hero-overlay"></div>
          
          <div className="about-hero-card reveal">
            <div className="about-hero-content">
              <h1>Discover <span className="highlight">Our Story</span></h1>
              <p>
                At Meta Minds, we engineer digital futures. We combine custom software design, 
                secure cloud architectures, and proactive cybersecurity strategies to build 
                enterprise-ready digital platforms that empower global organizations to scale with trust.
              </p>
              <button className="about-scroll-button" onClick={scrollToContent}>
                Our Vision & Mission &darr;
              </button>
            </div>
            <div className="about-hero-image">
              <img src={aboutHeroImg} alt="Meta Minds Team collaboration and engineering" />
            </div>
          </div>
        </section>

        {/* Mission, Vision, and Values Section */}
        <section ref={targetSectionRef} className="about-section">
          <div className="about-section-container">
            <span className="about-badge reveal">Our Core</span>
            <h2 className="reveal">Guided By Innovation, Anchored In Trust</h2>
            
            <div className="mvv-grid">
              {/* Mission Card */}
              <div className="mvv-card reveal">
                <div className="mvv-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver scalable, resilient, and cutting-edge digital infrastructure 
                  for high-growth enterprises and startups alike, translating technical complexity 
                  into exceptional value and seamless business capabilities.
                </p>
              </div>

              {/* Vision Card */}
              <div className="mvv-card reveal">
                <div className="mvv-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the global benchmark for high-performance software engineering, 
                  establishing a ecosystem where innovation is coupled with maximum data protection, 
                  shaping a secure and interconnected future.
                </p>
              </div>

              {/* Values Card */}
              <div className="mvv-card reveal">
                <div className="mvv-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Our Values</h3>
                <ul className="values-list">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Excellence in Execution
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Client-Centric Product Strategy
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Cybersecurity First Mindset
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Absolute Trust & Integrity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leaders Section */}
        <section className="about-section">
          <div className="about-section-container">
            <span className="about-badge reveal">Leadership</span>
            <h2 className="reveal">The Minds Behind The Innovation</h2>
            
            <div className="leaders-grid">
              {/* Leader 1 */}
              <div className="leader-card reveal">
                <div className="leader-avatar-container">
                  <div className="leader-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3>Saikumar Reddy</h3>
                <div className="leader-role">CEO & Founder</div>
                <p className="leader-desc">Visionary leader driving Meta Minds' mission to engineer bulletproof digital solutions and secure architectures.</p>
              </div>

              {/* Leader 2 */}
              <div className="leader-card reveal">
                <div className="leader-avatar-container">
                  <div className="leader-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3>Alex Mercer</h3>
                <div className="leader-role">Chief Technology Officer</div>
                <p className="leader-desc">High-performance technologist directing software architectures, microservices, and AI integrations.</p>
              </div>

              {/* Leader 3 */}
              <div className="leader-card reveal">
                <div className="leader-avatar-container">
                  <div className="leader-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3>Sarah Jenkins</h3>
                <div className="leader-role">VP of Cybersecurity</div>
                <p className="leader-desc">Cyber resilience pioneer enforcing threat-prevention policies, security audits, and global compliance strategies.</p>
              </div>

              {/* Leader 4 */}
              <div className="leader-card reveal">
                <div className="leader-avatar-container">
                  <div className="leader-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3>Elena Rostova</h3>
                <div className="leader-role">Head of Cloud Engineering</div>
                <p className="leader-desc">Cloud migration specialist overseeing secure multi-cloud automation, DevOps scaling, and site reliability systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Call To Action Section */}
        <section className="about-section" style={{ paddingBottom: "120px" }}>
          <div className="about-section-container">
            <span className="about-badge reveal">Join Our Journey</span>
            <h2 className="reveal">Ready to Shape the Future?</h2>
            
            <div className="cta-grid">
              {/* Talents CTA */}
              <div className="cta-card cta-talent reveal">
                <div className="cta-card-content">
                  <h3>Join Our Team</h3>
                  <p>
                    Are you a passionate developer, cybersecurity expert, or cloud specialist looking for your next challenge? 
                    Thrive in an environment of excellence, collaboration, and rapid professional growth.
                  </p>
                </div>
                <Link to="/careers" className="cta-btn cta-btn-talent">
                  View Career Openings &rarr;
                </Link>
              </div>

              {/* Clients CTA */}
              <div className="cta-card cta-client reveal">
                <div className="cta-card-content">
                  <h3>Partner With Us</h3>
                  <p>
                    Ready to build custom, secure, and enterprise-grade technology? Contact our advisory team today 
                    to schedule an architecture consultation or vulnerability audit.
                  </p>
                </div>
                <Link to="/contactus" className="cta-btn cta-btn-client">
                  Schedule a Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;