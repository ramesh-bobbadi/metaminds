import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import cloud from '../assets/cloud.webp';
import cyber from '../assets/cyber.webp';
import webAppDev from '../assets/web&appDev.webp';
import './styles/Services.css';

function Services() {
  // --- State & Handlers for Bottom Carousel ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const autoPlayRef = useRef();

  const carouselItems = [
    {
      title: "Web Development",
      desc: "Our web developers engineer custom web and responsive application solutions. We deliver a robust web presence designed to accelerate your user acquisition.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#webGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
          <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth="3" />
          <line x1="12" y1="6" x2="12.01" y2="6" strokeWidth="3" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      ),
      link: "/contactus?service=web-development"
    },
    {
      title: "Mobile-Application",
      desc: "With our microscopic detailing and scrupulous strategies, our erudite developers design and deploy stunning creative Android and iOS native mobile applications.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#phoneGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
          <path d="M9 5h6" />
        </svg>
      ),
      link: "/contactus?service=mobile-application"
    },
    {
      title: "UI/UX Design",
      desc: "Delivering intuitive wireframes, stunning layouts, and seamless visual journeys centered completely around customer satisfaction and user behaviors.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#uiuxGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="uiuxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 8A4 4 0 1 0 12 16A4 4 0 1 0 12 8Z" />
          <path d="M4.93 4.93L19.07 19.07" />
        </svg>
      ),
      link: "/contactus?service=ui-ux-design"
    },
    {
      title: "Cyber Security",
      desc: "Deploying high-end threat detection protocols, continuous audits, and data privacy algorithms to shield your active web platforms from intrusions.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#cyberGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M12 14v4" />
        </svg>
      ),
      link: "/contactus?service=cyber-security"
    },
    {
      title: "Managed Cloud",
      desc: "Managed Cloud Services we provide to our customers with the goal of offloading their infrastructure management, automating deployment pipelines, and ensuring 99.99% uptime.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#cloudGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <path d="M12 12v6" />
          <path d="M9 15l3-3 3 3" />
        </svg>
      ),
      link: "/contactus?service=managed-cloud"
    },
    {
      title: "Enterprise Consulting",
      desc: "Align your technology roadmap with business outcomes. We provide high-impact architecture audits, performance tuning, and technical due-diligence.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#consultGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="consultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      link: "/contactus?service=enterprise-consulting"
    },
    {
      title: "DevOps & Integration",
      desc: "Automate your infrastructure provisioning, continuous integration pipelines, containerized orchestration, and system logs aggregation.",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#devopsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z" />
          <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      ),
      link: "/contactus?service=devops-integration"
    }
  ];

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1100) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel Navigation
  const maxIndex = carouselItems.length - itemsToShow;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay implementation
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    if (!isHovered) {
      const interval = setInterval(play, 4500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <>
      <Header />
      <main className="services-page-wrapper">


        {/* --- Hero Introduction Section --- */}
        <section className="services-section">
          <div className="badge-container">
            <span className="services-badge">Our Services</span>
          </div>
          <h1 className="services-title">
            We Provide Perfect <span>IT Solutions</span> For Your Business
          </h1>
          <p className="services-subtitle-desc">
            Meta Minds delivers enterprise-grade software development, cloud computing, cyber security, and robust UI/UX programs designed to keep your business operating securely and beautifully.
          </p>

          {/* --- Grid of 8 Service Cards --- */}
          <div className="grid-8-container">
            {/* 1. Software Development */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <path d="M10 8l-2 2 2 2M14 8l2 2-2 2" />
                </svg>
              </div>
              <h3 className="grid-card-title">Software Development</h3>
              <p className="grid-card-desc">We build bespoke application systems customized to solve unique organizational bottlenecks.</p>
            </div>

            {/* 2. IT Maintenance */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="1.5" />
                  <rect x="2" y="14" width="20" height="8" rx="1.5" />
                  <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                  <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
                  <path d="M18 6h.01M18 18h.01" strokeWidth="3" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="grid-card-title">IT Maintenance</h3>
              <p className="grid-card-desc">Continuous server checks, patch application, and systems optimization to guarantee peak throughput.</p>
            </div>

            {/* 3. Cloud Computing */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3 className="grid-card-title">Cloud Computing</h3>
              <p className="grid-card-desc">Secure hybrid-cloud migration, AWS/GCP architecture design, and automated cluster scaling.</p>
            </div>

            {/* 4. Network Integration */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="3" />
                  <circle cx="5" cy="19" r="3" />
                  <circle cx="19" cy="19" r="3" />
                  <line x1="8.5" y1="7.5" x2="15.5" y2="7.5" />
                  <line x1="5" y1="16" x2="10.5" y2="7.5" />
                  <line x1="19" y1="16" x2="13.5" y2="7.5" />
                </svg>
              </div>
              <h3 className="grid-card-title">Network Integration</h3>
              <p className="grid-card-desc">Seamless VPN tunnels, secure SD-WAN mesh setups, and robust local/wide area network links.</p>
            </div>

            {/* 5. Cyber Security */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              </div>
              <h3 className="grid-card-title">Cyber Security</h3>
              <p className="grid-card-desc">Penetration testing, real-time threat auditing, data encryption key management, and compliance.</p>
            </div>

            {/* 6. App Location */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="grid-card-title">App Location</h3>
              <p className="grid-card-desc">Sophisticated GPS tracking software, high-precision geofencing, and real-time mapping solutions.</p>
            </div>

            {/* 7. Digital Marketing 
                        <div className="grid-card">
                            <div className="grid-card-icon-wrap">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                    <path d="M12 6v6l4 2" />
                                    <path d="M18.5 5.5l-2.5 2.5" />
                                </svg>
                            </div>
                            <h3 className="grid-card-title">Digital Marketing</h3>
                            <p className="grid-card-desc">Data-backed search marketing, optimized conversion tunnels, and continuous traffic scaling programs.</p>
                        </div>*/}

            {/* 8. Product Analysis */}
            <div className="grid-card">
              <div className="grid-card-icon-wrap">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className="grid-card-title">Product Analysis</h3>
              <p className="grid-card-desc">Detailed analytics tracking user heatmaps, flow dropoffs, and conversion rate optimizations (CRO).</p>
            </div>
          </div>
        </section>

        {/* --- Section: "Our Top Services" Showcase (Spotlights) --- */}
        <section className="services-section">
          <div className="badge-container">
            <span className="services-badge">Our Top Services</span>
          </div>
          <h2 className="services-title">
            We Ensure You Have <span>Every Functionality</span> You Need
          </h2>
          <p className="services-subtitle-desc">
            Unlock modern capability with custom-tailored technological architectures engineered by our lead specialists.
          </p>

          <div className="showcase-container">
            {/* Showcase Card 1: Application & Web Development */}
            <div className="showcase-row">
              <div className="showcase-info">
                <span className="showcase-subtitle">Bespoke Digital Journeys</span>
                <h3 className="showcase-row-title">Application & Web Development</h3>
                <p className="showcase-desc">
                  Our development specialists engineer premium native Android & iOS mobile applications, custom web platforms, and intuitive UI/UX design systems. We translate complex business requirements into elegant, robust, and highly scalable software solutions built to accelerate your brand's growth.
                </p>
                <Link to="/services1">
                  <button className="showcase-btn">
                    Read More
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="showcase-visual">
                <img src={webAppDev} alt="Application & Web Development" className="showcase-img" />
              </div>
            </div>

            {/* Showcase Card 2: Cyber Security */}
            <div className="showcase-row reversed">
              <div className="showcase-visual">
                <img src={cyber} alt="Cyber Security" className="showcase-img" />
              </div>
              <div className="showcase-info">
                <span className="showcase-subtitle">Proactive Safeguarding</span>
                <h3 className="showcase-row-title">Cyber Security</h3>
                <p className="showcase-desc">
                  Our defense systems incorporate AI-driven vulnerability scanners, real-time intrusion monitoring networks, and continuous encryption protocols. We elevate your risk posture across active web servers, database endpoints, and employee network nodes.
                </p>
                <Link to="/services3">
                  <button className="showcase-btn">
                    Read More
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Showcase Card 3: Cloud & Analytics */}
            <div className="showcase-row">
              <div className="showcase-info">
                <span className="showcase-subtitle">Operational Performance</span>
                <h3 className="showcase-row-title">Cloud & Analytics</h3>
                <p className="showcase-desc">
                  Offload the manual complexity of server configurations. We program custom automated deployment pipelines (CI/CD) and design floating analytics monitors that capture database bottlenecks and user behaviors before they impact performance.
                </p>
                <Link to="/services2">
                  <button className="showcase-btn">
                    Read More
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="showcase-visual">
                <img src={cloud} alt="Cloud & Analytics" className="showcase-img" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: Premium Services Carousel --- */}
        <section className="services-section">
          <div className="badge-container">
            <span className="services-badge">Interactive Portfolio</span>
          </div>
          <h2 className="services-title">
            Explore Our <span>Diverse Capabilities</span>
          </h2>
          <p className="services-subtitle-desc">
            Use the controls or let the carousel auto-scroll to browse our core software and integration services one by one.
          </p>

          <div className="carousel-outer-wrapper">
            <div
              className="carousel-viewport"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)`,
                  width: `${(carouselItems.length / itemsToShow) * 100}%`
                }}
              >
                {carouselItems.map((item, idx) => (
                  <div
                    className="carousel-card"
                    key={idx}
                    style={{ width: `calc(${100 / carouselItems.length}% - 20px)` }}
                  >
                    <div className="carousel-card-icon">
                      {item.icon}
                    </div>
                    <h3 className="carousel-card-title">{item.title}</h3>
                    <p className="carousel-card-desc">{item.desc}</p>
                    <Link to={item.link} className="carousel-card-link">
                      Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Panels */}
            <div className="carousel-controls">
              <button className="carousel-arrow" onClick={prevSlide} aria-label="Previous service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>

              <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button className="carousel-arrow" onClick={nextSlide} aria-label="Next service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Services;