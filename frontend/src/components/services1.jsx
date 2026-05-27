import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import webDevImg from '../assets/webdev.webp';
import appDevImg from '../assets/appdev.webp';
import uiUxImg from '../assets/web&appDev.webp';
import heroImg from '../assets/web&appDev.webp';
import './styles/services1.css';

const tabs = [
  {
    id: 'web',
    label: '🌐 Web Development',
    img: webDevImg,
    title: 'High-Performance Web Development',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    desc1:
      'We craft lightning-fast, SEO-optimised websites and web applications that are built to convert and built to scale. From corporate websites and e-commerce platforms to complex SaaS dashboards, our engineers deliver pixel-perfect results using modern, battle-tested technologies.',
    desc2:
      'Every project starts with a deep understanding of your users and business goals. We design for accessibility, performance, and long-term maintainability — not just a pretty launch day.',
    bullets: [
      'Responsive, mobile-first design for every device',
      'Core Web Vitals optimisation (LCP, FID, CLS)',
      'SEO architecture built into every page from day one',
      'Secure authentication, role-based access & API integrations',
      'Continuous delivery pipelines for rapid, safe updates',
    ],
  },
  {
    id: 'app',
    label: '📱 App Development',
    img: appDevImg,
    title: 'Cross-Platform Mobile Applications',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    desc1:
      'We build beautiful, high-performance mobile apps that feel native on both iOS and Android. Using React Native and Flutter, we deliver a single codebase that doesn\'t compromise on user experience — giving you 80% faster time to market without sacrificing quality.',
    desc2:
      'From consumer-facing apps to complex enterprise tools, we handle everything — UX prototyping, development, app store deployment, and ongoing maintenance — so you can stay focused on your product vision.',
    bullets: [
      'Smooth 60fps animations and native gesture handling',
      'Offline-first architecture with background sync',
      'Push notifications, deep linking & in-app purchases',
      'App Store & Google Play optimisation (ASO)',
      'Crash reporting, analytics & performance monitoring',
    ],
  },
  {
    id: 'ui',
    label: '🎨 UI/UX Design',
    img: uiUxImg,
    title: 'User-Centred UI/UX Design',
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    desc1:
      'Great design is more than aesthetics — it\'s strategy. Our UX designers research your users deeply, map their journeys, and remove friction at every touchpoint. The result is an experience that feels effortless and drives measurable business outcomes.',
    desc2:
      'We deliver full design systems — not just screens — so your developers ship consistently and your brand stays coherent as your product grows. Every component is built for reusability, accessibility, and dark/light mode support.',
    bullets: [
      'User research, personas & journey mapping',
      'Wireframes and interactive Figma prototypes',
      'Full design system with components, tokens & guidelines',
      'Usability testing & iterative improvement loops',
      'WCAG 2.1 AA accessibility compliance',
    ],
  },
];

const highlights = [
  {
    icon: '⚡',
    title: 'Blazing Fast Delivery',
    desc: 'Our agile squads ship working software every two weeks. No months of silence — you see real progress from week one.',
  },
  {
    icon: '🔒',
    title: 'Security by Default',
    desc: 'OWASP top-10 protections, encrypted data at rest, and secure CI/CD pipelines are standard on every engagement — not an add-on.',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    desc: 'We architect for growth from day one. Whether you have 100 users or 10 million, your application will handle the load gracefully.',
  },
  {
    icon: '🎯',
    title: 'Conversion-Focused',
    desc: 'Every design and development decision is tied back to your business metrics — sign-ups, retention, revenue, and NPS.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Pod Model',
    desc: 'You get a named team: a product manager, lead engineer, designer, and QA — all accountable, all communicating with you directly.',
  },
  {
    icon: '🔄',
    title: 'Lifetime Maintenance',
    desc: 'We offer flexible retainer plans for ongoing support, feature development, performance monitoring, and dependency updates.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Scoping',
    desc: 'We start with structured workshops to understand your business goals, user needs, technical constraints, and success metrics. Output: a detailed scope, architecture diagram, and project roadmap with milestones.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Our designers produce wireframes and high-fidelity Figma prototypes for stakeholder sign-off before a single line of code is written. We test key user flows early to catch problems cheaply.',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with a demo at the end of every cycle. You review real, working software — not slide decks. Our engineers write clean, documented, and tested code throughout.',
  },
  {
    num: '04',
    title: 'QA & Performance Testing',
    desc: 'Every feature goes through rigorous manual and automated testing — including cross-browser compatibility, accessibility audits, load testing, and security scanning — before it reaches production.',
  },
  {
    num: '05',
    title: 'Launch & Optimise',
    desc: 'We manage a smooth, zero-downtime deployment and monitor key metrics in the first weeks post-launch. Our team stays engaged to fix issues fast and iterate based on real user data.',
  },
];

function Services1() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.state && location.state.activeTab) {
      return location.state.activeTab;
    }
    return 'web';
  });

  const active = tabs.find((t) => t.id === activeTab);

  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  // Scroll-reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.s1-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('s1-revealed')),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="s1-page">
      <Header />

      {/* ── HERO ── */}
      <section className="s1-hero">
        <div className="s1-hero-inner">

          {/* Left – text */}
          <div className="s1-hero-text">
            <span className="s1-badge">
              <span className="dot" /> Web &amp; App Development
            </span>
            <h1>
              We Build <span className="highlight">Digital Products</span> That People Love
            </h1>
            <p className="s1-lead">
              From sleek marketing websites to complex enterprise applications, MetaMinds
              designs and engineers digital experiences that look stunning, perform flawlessly,
              and grow with your business.
            </p>
            <p className="s1-sub">
              Our full-stack teams combine world-class design thinking with engineering
              rigour — delivering products on time, on budget, and above expectations.
            </p>
            <div className="s1-cta-row">
              <button className="s1-btn-primary">Start a Project</button>
              <button className="s1-btn-outline">See Our Work ↓</button>
            </div>
          </div>

          {/* Right – image */}
          <div className="s1-hero-image-wrap">
            <div className="s1-float-pill s1-pill-1">
              <span className="pill-num">150+</span>
              Projects Delivered
            </div>
            <img className="s1-hero-img" src={heroImg} alt="Web and App Development" />
            <div className="s1-float-pill s1-pill-2">
              <span className="pill-num">98%</span>
              Client Satisfaction
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="s1-stats-bar">
        <div className="s1-stats-inner">
          <div className="s1-stat">
            <h3>150+</h3>
            <p>Digital products shipped</p>
          </div>
          <div className="s1-stat">
            <h3>98%</h3>
            <p>Client satisfaction score</p>
          </div>
          <div className="s1-stat">
            <h3>3×</h3>
            <p>Faster launch vs. in-house teams</p>
          </div>
          <div className="s1-stat">
            <h3>5 yrs</h3>
            <p>Average client relationship length</p>
          </div>
        </div>
      </div>

      {/* ── TABBED SERVICE DETAIL ── */}
      <section className="s1-tabs-section">
        <div className="s1-section-head">
          <span className="s1-badge"><span className="dot" /> Our Specialisations</span>
          <h2>Everything You Need to Build &amp; Scale</h2>
          <p>
            Whether you need a stunning website, a powerful mobile app, or a design system
            that scales — we have the expertise to deliver it end to end.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="s1-tab-btns">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`s1-tab-btn${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active tab panel */}
        <div className="s1-tab-panel">
          <img className="s1-tab-img" src={active.img} alt={active.title} />
          <div className="s1-tab-content">
            <div className="s1-tag-row">
              {active.tags.map((tag) => (
                <span className="s1-tech-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <h3>{active.title}</h3>
            <p>{active.desc1}</p>
            <p>{active.desc2}</p>
            <ul className="s1-check-list">
              {active.bullets.map((b, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <button className="s1-btn-primary">Get a Free Quote →</button>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GRID ── */}
      <section className="s1-highlights">
        <div className="s1-section-head">
          <span className="s1-badge"><span className="dot" /> Why Choose Us</span>
          <h2>The MetaMinds Difference</h2>
          <p>
            We don't just write code — we partner with you to solve real business problems and
            create lasting competitive advantage through technology.
          </p>
        </div>
        <div className="s1-cards-grid">
          {highlights.map((h, i) => (
            <div className="s1-card" key={i}>
              <div className="s1-card-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="s1-process">
        <div className="s1-section-head">
          <span className="s1-badge"><span className="dot" /> Our Process</span>
          <h2>How We Build Great Products</h2>
          <p>
            A transparent, collaborative process from kickoff to launch — and beyond.
            You always know what's happening, what's next, and why.
          </p>
        </div>
        <div className="s1-process-steps">
          {steps.map((s, i) => (
            <div className="s1-step" key={i}>
              <div className="s1-step-num">{s.num}</div>
              <div className="s1-step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="s1-cta-banner">
        <h2>Ready to Build Something Great?</h2>
        <p>
          Tell us about your project. Our team will get back to you within 24 hours with
          a tailored approach and a transparent, fixed-price estimate.
        </p>
        <div className="s1-cta-row" style={{ justifyContent: 'center' }}>
          <button className="s1-btn-primary">Start Your Project</button>
          <button className="s1-btn-outline">View Case Studies</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services1;