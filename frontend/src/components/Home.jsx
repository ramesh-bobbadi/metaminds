import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/mm logo.png";
import heroimage from "../assets/heroimage.webp";
import bgvideo from "../assets/bgvideo.mp4";
import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [shandle_state, setShandle_state] = useState(false);
  const [navhandle_state,setNavhandle_state] = useState(false);
  const [headhandle_state,SetHeadhandle_state] = useState(false)
  const aboutRef = useRef(null);
  const clientCarouselRef = useRef(null);
  const reviewCarouselRef = useRef(null);
  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollCarousel = (carouselRef, direction) => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth * 0.7;
    carouselRef.current.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const autoScroll = (ref) => {
      const interval = setInterval(() => {
        if (ref.current) {
          const amount = ref.current.offsetWidth * 0.7;
          ref.current.scrollBy({ left: amount, behavior: "smooth" });
        }
      }, 4000); // Auto scroll every 4 seconds
      return interval;
    };

    const clientInterval = autoScroll(clientCarouselRef);
    const reviewInterval = autoScroll(reviewCarouselRef);

    return () => {
      clearInterval(clientInterval);
      clearInterval(reviewInterval);
    };
  }, []);
  
  const Headerdata = ()=>{
    return (
         <div className="headersec">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#0f95ef"
              onClick={()=>setShandle_state(true)}
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <button className="contactus">Contact Us</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#0f95ef"
              onClick={()=>setNavhandle_state(true)}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
    )
  }
   const Searchbar =()=>{
    return(
           <div id="opensearch">
            <input type="search" placeholder="What Are Looking For ?" style={{width:"100%",height:"40px",fontSize:"25px",padding:"10px 20px"}}/>
          </div>
    )
   }
   const Nav = ()=>{
    return(
             <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li style={{margin:"0px 10px"}}><Link to="/blogs">Blogs</Link></li>
              <li style={{margin:"0px 35px"}}><Link to="/contactus">ContactUs</Link></li>
              </ul>
         </div>
    )
   }
  return (
    <>
      <header>
        <div className="header-left">
          <div className="logo">
            <img src={logo} style={{ height: "60px", width: "100px" }} />
          </div>
        </div>
        <div className="header-right">
          {navhandle_state ? (<Nav />) : shandle_state ? <Searchbar /> : (<Headerdata />)}
        </div>
      </header>
      <main onClick={() => navhandle_state ? setNavhandle_state(false) : shandle_state ? setShandle_state(false) : true}>
        <section className="hero-section">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={bgvideo} type="video/mp4" />
          </video>
          <div className="hero-overlay">
            <div className="hero-card">
              <div className="hero-image">
                <img src={heroimage} alt="Team collaboration" />
              </div>
              <div className="hero-copy">
                <h1>Engineering Digital Futures</h1>
                <span className="hero-label">Design & Engineering</span>
                <p>Transforming complex ideas into scalable software solutions.</p>
                <p className="hero-subtitle">Where code meets creativity to build secure, enterprise-grade platforms.</p>
                <button className="hero-button" onClick={scrollToAbout}>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us-inshort" ref={aboutRef}>
          <div className="about-panel">
            <span className="section-badge">Who We Are</span>
            <h2>A full-stack IT solutions provider delivering software, cloud, and cybersecurity excellence.</h2>
            <p>We help businesses launch secure digital platforms, modernize operations with cloud engineering, and protect their most critical systems.</p>
            <p>Our team combines product strategy, enterprise development, and cyber resilience to build powerful experiences for the digital age.</p>
          </div>
        </section>

        <section className="services">
          <div className="services-panel">
            <span className="section-badge">What We Offer</span>
            <h2>Solutions That Power Your Digital Transformation</h2>
            <p className="services-subtitle">Responsive, scalable, and secure services designed to accelerate growth across web, mobile, and IT security.</p>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-card__image service-card__image--1">
                  <span>Image 1</span>
                </div>
                <h3>Modern, Scalable Web Platforms</h3>
                <p>We build responsive, high-performance websites tailored for enterprise needs, ensuring speed, security, and scalability.</p>
                <button className="service-button">Learn More →</button>
              </div>
              <div className="service-card">
                <div className="service-card__image service-card__image--2">
                  <span>Image 2</span>
                </div>
                <h3>Cross-Platform Mobile Applications</h3>
                <p>We design and develop secure, user-friendly mobile apps that deliver seamless experiences across iOS and Android.</p>
                <button className="service-button">Learn More →</button>
              </div>
              <div className="service-card">
                <div className="service-card__image service-card__image--3">
                  <span>Image 3</span>
                </div>
                <h3>Secure IT Systems</h3>
                <p>We protect your digital assets with advanced security audits, compliance solutions, and threat prevention strategies.</p>
                <button className="service-button">Learn More →</button>
              </div>
            </div>
            <button className="services-cta">See All Services →</button>
          </div>
        </section>

        <section className="our-track">
          <div className="track-container">
            <div className="track-copy">
              <span className="track-badge">Why We Are the Best</span>
              <h2>Here’s why businesses choose us</h2>
              <div className="track-list">
                <div className="track-item">
                  <div className="track-icon">Icon</div>
                  <div className="track-text">
                    <h3>End-to-End Technology Solutions</h3>
                    <p>From enterprise software and mobile apps to cloud infrastructure and cybersecurity, we deliver complete IT solutions under one roof.</p>
                  </div>
                </div>
                <div className="track-item">
                  <div className="track-icon">Icon</div>
                  <div className="track-text">
                    <h3>Your Goals, Our Priority</h3>
                    <p>We design every solution around your business needs, ensuring scalability, security, and long-term success.</p>
                  </div>
                </div>
                <div className="track-item">
                  <div className="track-icon">Icon</div>
                  <div className="track-text">
                    <h3>Driven by Code, Powered by Trust</h3>
                    <p>We combine cutting-edge technology with proven methodologies to deliver reliable, future-ready platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-logos">
          <div className="client-logos-panel">
            <span className="section-badge">Our Clients</span>
            <h2>Brands That Trust Meta Minds</h2>
            <div className="client-carousel-wrapper">
              <button className="carousel-control left" onClick={() => scrollCarousel(clientCarouselRef, -1)}>
                <span>←</span>
              </button>
              <div className="client-carousel" ref={clientCarouselRef}>
                <div className="carousel-track">
                  {Array.from({ length: 5 }, (_, i) => (
                    <>
                      <div className="carousel-item logo-item-1" key={`logo-1-${i}`}></div>
                      <div className="carousel-item logo-item-2" key={`logo-2-${i}`}></div>
                      <div className="carousel-item logo-item-3" key={`logo-3-${i}`}></div>
                      <div className="carousel-item logo-item-4" key={`logo-4-${i}`}></div>
                      <div className="carousel-item logo-item-5" key={`logo-5-${i}`}></div>
                      <div className="carousel-item logo-item-6" key={`logo-6-${i}`}></div>
                      <div className="carousel-item logo-item-7" key={`logo-7-${i}`}></div>
                      <div className="carousel-item logo-item-8" key={`logo-8-${i}`}></div>
                      <div className="carousel-item logo-item-9" key={`logo-9-${i}`}></div>
                      <div className="carousel-item logo-item-10" key={`logo-10-${i}`}></div>
                    </>
                  ))}
                </div>
              </div>
              <button className="carousel-control right" onClick={() => scrollCarousel(clientCarouselRef, 1)}>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="client-stats">
          <div className="stats-panel">
            <div className="stat-card">
              <span className="stat-icon">✓</span>
              <span>50+</span>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">★</span>
              <span>985</span>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⚡</span>
              <span>99%</span>
              <p>Project Completion Before Deadline</p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🛡</span>
              <span>24/7</span>
              <p>Support Availability</p>
            </div>
          </div>
        </section>

        <section className="client-reviews">
          <div className="reviews-panel">
            <span className="section-badge">Client Reviews</span>
            <h2>What Our Clients Say</h2>
            <div className="client-reviews-wrapper">
              <button className="carousel-control left" onClick={() => scrollCarousel(reviewCarouselRef, -1)}>
                <span>←</span>
              </button>
              <div className="review-carousel" ref={reviewCarouselRef}>
                <div className="reviews-track">
                  {Array.from({ length: 5 }, (_, i) => (
                    <>
                      <div className="review-card" key={`review-1-${i}`}>
                        <p>" Working with your team has been a transformative experience for AgroCat. Your team understood, our requirements, our brand, our products, and the agricultural market perfectly."</p>
                        <strong>— Rapro Agrocat</strong>
                      </div>
                      <div className="review-card" key={`review-2-${i}`}>
                        <p>"Our school had an excellent experience working with your digital platform. From the very beginning, your team understood our requirements, our values, and the importance of presenting an educational institution with clarity and trust."</p>
                        <strong>— Hitham Play School, Principal</strong>
                      </div>
                      <div className="review-card" key={`review-3-${i}`}>
                        <p>"Working with Dhathri Agro Life Sciences on the Dairy Design project was a smooth and professional experience. The project requirements were clearly communicated, and the overall approach was practical, well-structured, and aligned with real dairy industry standards."</p>
                        <strong>— Dhatri Agro Life Sciences</strong>
                      </div>
                       <div className="review-card" key={`review-4-${i}`}>
                        <p>" Working with your digital platform has been an exceptional experience for our jewellery brand. Your team understood the elegance, precision, and premium feel our brand represents, and translated it beautifully into our digital presence."</p>
                        <strong>— Sahasra Jewels World</strong>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <button className="carousel-control right" onClick={() => scrollCarousel(reviewCarouselRef, 1)}>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <h3>Meta Minds</h3>
            <p>At Meta Minds, we engineer secure platforms and craft innovative IT solutions. From software to cloud, we bring your ideas to life.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">📺</a>
              <a href="#">💼</a>
              <a href="#">🐦</a>
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
            <p>📧 support@metamindspvtltd.com</p>
            <p>📞 +91 9494890262</p>
            <p>📍 Plot No.26, Golden Homes, Edupugallu, Kankipadu Mandal, 521151</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Meta Minds Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
