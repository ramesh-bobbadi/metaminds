import React, { useEffect, useRef, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import heroimage from "../assets/heroimage.webp";
import bgvideo from "../assets/bgvideo.mp4";
import clintcentricicon from "../assets/clintcentricapproch.webp";
import comprahensiveitsupporticon from "../assets/comprahensiveitsupport.webp";
import inventionandreliablityicon from "../assets/invention&reliablity.webp";
import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const aboutRef = useRef(null);
  const clientCarouselRef = useRef(null);
  const reviewCarouselRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([]);
  const [showTopButton, setShowTopButton] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const logoIds = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    // Lazy load the heavy background video after component mounts to guarantee a lag-free visual landing
    const timer = setTimeout(() => {
      setVideoSrc(bgvideo);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollCarousel = (carouselRef, direction) => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth * 0.7;
    carouselRef.current.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const autoScrollReview = (ref) => {
      const interval = setInterval(() => {
        if (ref.current) {
          const amount = ref.current.offsetWidth * 0.7;
          ref.current.scrollBy({ left: amount, behavior: "smooth" });
        }
      }, 4000); // Auto scroll every 4 seconds
      return interval;
    };

    const reviewInterval = autoScrollReview(reviewCarouselRef);

    return () => {
      clearInterval(reviewInterval);
    };
  }, []);

  useEffect(() => {
    const carousel = clientCarouselRef.current;
    if (!carousel) return;

    const initPosition = () => {
      const total = carousel.scrollWidth;
      const segment = total / 3;
      if (segment > 0) {
        carousel.scrollLeft = segment;
      }
    };

    let rafId;
    const step = 0.55;
    const animate = () => {
      if (!carousel) return;
      carousel.scrollLeft += step;
      const total = carousel.scrollWidth;
      const segment = total / 3;
      if (carousel.scrollLeft >= segment * 2) {
        carousel.scrollLeft -= segment;
      }
      rafId = requestAnimationFrame(animate);
    };

    initPosition();
    rafId = requestAnimationFrame(animate);
    window.addEventListener('resize', initPosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', initPosition);
    };
  }, []);

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
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const carousel = clientCarouselRef.current;
    if (!carousel) return;

    const resetPosition = () => {
      const total = carousel.scrollWidth;
      const segment = total / 3;
      if (carousel.scrollLeft < segment * 0.5) {
        carousel.scrollLeft += segment;
      } else if (carousel.scrollLeft > segment * 2.5) {
        carousel.scrollLeft -= segment;
      }
    };

    const handleScroll = () => {
      resetPosition();
    };

    const initPosition = () => {
      const total = carousel.scrollWidth;
      const segment = total / 3;
      if (segment > 0) {
        carousel.scrollLeft = segment;
      }
    };

    initPosition();
    carousel.addEventListener('scroll', handleScroll);
    const resizeObserver = new ResizeObserver(initPosition);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [clientCarouselRef]);

  return (
    <>
      <Header />


      <main>
        <section className="hero-section">
          <div className="bg-video-placeholder" style={{ opacity: videoLoaded ? 0 : 1 }}></div>
          {videoSrc && (
            <video
              autoPlay
              loop
              muted
              playsInline
              onCanPlayThrough={() => setVideoLoaded(true)}
              className="bg-video"
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease' }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          <div className="hero-overlay">
            <div className="hero-card reveal">
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
          <div className="about-panel reveal">
            <span className="section-badge">Who We Are</span>
            <h2>A full-stack IT solutions provider delivering software, cloud, and cybersecurity excellence.</h2>
            <p>We help businesses launch secure digital platforms, modernize operations with cloud engineering, and protect their most critical systems.</p>
            <p>Our team combines product strategy, enterprise development, and cyber resilience to build powerful experiences for the digital age.</p>
            <button className="about-cta"><Link to="/About">Learn More About Us →</Link></button>
          </div>
        </section>

        <section className="services">
          <div className="services-panel">
            <span className="section-badge">What We Offer</span>
            <h2>Solutions That Power Your Digital Transformation</h2>
            <p className="services-subtitle">Responsive, scalable, and secure services designed to accelerate growth across web, mobile, and IT security.</p>
            <div className="services-grid">
              <div className="service-card reveal">
                <div className="service-card__image service-card__image--1">
                  <span>Image 1</span>
                </div>
                <h3>Modern, Scalable Web Platforms</h3>
                <p>We build responsive, high-performance websites tailored for enterprise needs, ensuring speed, security, and scalability.</p>
                <Link to="/services1" state={{ activeTab: 'web' }} className="service-button">Learn More →</Link>
              </div>
              <div className="service-card reveal">
                <div className="service-card__image service-card__image--2">
                  <span>Image 2</span>
                </div>
                <h3>Cross-Platform Mobile Applications</h3>
                <p>We design and develop secure, user-friendly mobile apps that deliver seamless experiences across iOS and Android.</p>
                <Link to="/services1" state={{ activeTab: 'app' }} className="service-button">Learn More →</Link>
              </div>
              <div className="service-card reveal">
                <div className="service-card__image service-card__image--3">
                  <span>Image 3</span>
                </div>
                <h3>Secure IT Systems</h3>
                <p>We protect your digital assets with advanced security audits, compliance solutions, and threat prevention strategies.</p>
                <Link to="/services2" className="service-button">Learn More →</Link>
              </div>
            </div>
            <Link to="/services" className="services-cta">See All Services →</Link>
          </div>
        </section>

        <section className="our-track">
          <div className="track-container">
            <div className="track-copy">
              <span className="track-badge">Why We Are the Best</span>
              <h2>Here’s why businesses choose us</h2>
              <div className="track-list">
                <div className="track-item reveal">
                  <div className="track-icon"><img src={inventionandreliablityicon} alt="Invention and reliability icon" /></div>
                  <div className="track-text">
                    <h3>End-to-End Technology Solutions</h3>
                    <p>From enterprise software and mobile apps to cloud infrastructure and cybersecurity, we deliver complete IT solutions under one roof.</p>
                  </div>
                </div>
                <div className="track-item reveal">
                  <div className="track-icon"><img src={clintcentricicon} alt="Client centric approach icon" /></div>
                  <div className="track-text">
                    <h3>Your Goals, Our Priority</h3>
                    <p>We design every solution around your business needs, ensuring scalability, security, and long-term success.</p>
                  </div>
                </div>
                <div className="track-item reveal">
                  <div className="track-icon"><img src={comprahensiveitsupporticon} alt="Comprehensive IT support icon" /></div>
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
          <div className="client-logos-panel reveal">
            <span className="section-badge">Our Clients</span>
            <h2>Brands That Trust Meta Minds</h2>
            <div className="client-carousel-wrapper">
              <button className="carousel-control left" onClick={() => scrollCarousel(clientCarouselRef, -1)}>
                <span>←</span>
              </button>
              <div className="client-carousel" ref={clientCarouselRef}>
                <div className="carousel-track">
                  {[...logoIds, ...logoIds, ...logoIds].map((logo, index) => (
                    <div className={`carousel-item logo-item-${logo}`} key={`logo-${logo}-${index}`} />
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
            <div className="stat-card reveal">
              <span className="stat-icon">✓</span>
              <span>50+</span>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-icon">★</span>
              <span>985</span>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-icon">⚡</span>
              <span>99%</span>
              <p>Project Completion Before Deadline</p>
            </div>
            <div className="stat-card reveal">
              <span className="stat-icon">🛡</span>
              <span>24/7</span>
              <p>Support Availability</p>
            </div>
          </div>
        </section>

        <section className="client-reviews">
          <div className="reviews-panel reveal">
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
                        <p>"Working with your team has been a transformative experience for AgroCat.</p>
                        <p>Your team understood our requirements, our brand, our products, and the agricultural market perfectly."</p>
                        <strong>— Rapro Agrocat</strong>
                      </div>
                      <div className="review-card" key={`review-2-${i}`}>
                        <p>"Our school had an excellent experience working with your digital platform.</p>
                        <p>From the very beginning, your team understood our requirements, our values, and the importance of presenting an educational institution with clarity and trust."</p>
                        <strong>— Hitham Play School, Principal</strong>
                      </div>
                      <div className="review-card" key={`review-3-${i}`}>
                        <p>"Working with Dhathri Agro Life Sciences on the Dairy Design project was a smooth and professional experience.</p>
                        <p>The project requirements were clearly communicated, and the overall approach was practical, well-structured, and aligned with real dairy industry standards."</p>
                        <strong>— Dhatri Agro Life Sciences</strong>
                      </div>
                       <div className="review-card" key={`review-4-${i}`}>
                        <p>"Working with your digital platform has been an exceptional experience for our jewellery brand.</p>
                        <p>Your team understood the elegance, precision, and premium feel our brand represents, and translated it beautifully into our digital presence."</p>
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
      <Footer />
    </>
  );
}

export default Home;
