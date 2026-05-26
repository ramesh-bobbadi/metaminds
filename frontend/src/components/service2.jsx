import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import cyberImg from '../assets/cybersecurity.webp';
import compImg from '../assets/comprahensiveitsupport.webp';
import webImg from '../assets/web&appDev.webp';
import './styles/service2.css';

const features = [
  {
    icon: '🔍',
    title: 'Threat Detection & Response',
    desc: 'We monitor your infrastructure 24/7/365 to detect, isolate, and neutralize advanced threats before they impact your operations. Our expert Security Operations Center (SOC) acts as your digital shield.',
    bullets: [
      '24/7/365 managed detection & response (MDR)',
      'Security Information & Event Management (SIEM)',
      'Rapid incident containment & forensic analysis',
    ],
  },
  {
    icon: '🛡️',
    title: 'Network & Infrastructure Security',
    desc: 'Secure your boundary and internal traffic against unauthorized access. We implement robust next-gen firewalls, zero-trust network access (ZTNA), and secure web gateways to seal off all threat vectors.',
    bullets: [
      'Zero-Trust Network Access (ZTNA) frameworks',
      'Next-generation firewalls & IDS/IPS systems',
      'Secure SD-WAN and micro-segmentation',
    ],
  },
  {
    icon: '💻',
    title: 'Endpoint & Device Protection',
    desc: 'Protect all entry points — laptops, servers, mobile devices, and IoT endpoints — from malicious software. Our advanced XDR platforms detect and stop ransomware and zero-day exploits in real time.',
    bullets: [
      'Endpoint Detection & Response (EDR) agents',
      'Automated ransomware containment & quarantine',
      'Mobile device management (MDM) policies',
    ],
  },
  {
    icon: '🎯',
    title: 'Penetration Testing & Auditing',
    desc: 'Identify your structural weaknesses before cybercriminals do. We conduct aggressive penetration tests, vulnerability scans, and security posture assessments to give you complete visibility into your exposure.',
    bullets: [
      'Black-box, white-box, and gray-box penetration tests',
      'Automated daily external & internal vulnerability scanning',
      'Actionable remediation planning & advisory reports',
    ],
  },
  {
    icon: '🔒',
    title: 'Data Privacy & Encryption',
    desc: 'Keep your sensitive customer and proprietary files safe wherever they travel or rest. We deploy advanced cryptography, data loss prevention (DLP) solutions, and secure, immutable backup systems.',
    bullets: [
      'AES-256 data-at-rest & TLS data-in-transit encryption',
      'Data Loss Prevention (DLP) rules and classification',
      'Ransomware-proof, immutable offsite backup vaults',
    ],
  },
  {
    icon: '📋',
    title: 'GRC & Security Governance',
    desc: 'Navigate complex security frameworks with ease. We align your organization with major standards like SOC 2, ISO 27001, HIPAA, and GDPR — ensuring you satisfy audits and earn your clients\' complete trust.',
    bullets: [
      'SOC 2 Type II and ISO 27001 readiness & advisory',
      'Internal security policies & compliance training',
      'Vendor risk assessments & third-party auditing',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Vulnerability Audit',
    desc: 'We start with a thorough audit of your current systems, network configurations, software dependencies, and employee security habits to map out vulnerabilities and catalog your critical digital assets.',
  },
  {
    num: '02',
    title: 'Security Blueprint & Architecture',
    desc: 'Our cybersecurity architects design a custom defense-in-depth framework tailored specifically to your risk profile, budget, and compliance obligations — establishing a strict zero-trust posture.',
  },
  {
    num: '03',
    title: 'System Hardening & Deployment',
    desc: 'We implement advanced threat mitigation systems, enforce strict IAM policies, lock down endpoints, secure your web gateways, and run simulated exploit tests to verify your hardened environment.',
  },
  {
    num: '04',
    title: 'Continuous SOC Monitoring',
    desc: 'Post-deployment, we feed telemetry into our SOC for 24/7/365 active monitoring. We perform regular security sprints, conduct automated scans, and adapt your defenses to counter emerging global threats.',
  },
];

function Service2() {
  // Simple scroll-reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.s2-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('s2-revealed')),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="s2-page">
      <Header />

      {/* ── HERO ── */}
      <section className="s2-hero">
        <div className="s2-hero-inner">

          {/* Left – text */}
          <div className="s2-hero-text">
            <span className="s2-badge">
              <span /> Cybersecurity Services
            </span>
            <h1>
              Enterprise Cyber <span className="highlight">Security</span> Built for Absolute Protection
            </h1>
            <p className="s2-lead">
              We shield your ambitious business from modern threat actors and advanced persistent threats. Whether you need to secure your cloud environments, defend your endpoints, establish SOC monitoring, or satisfy complex compliance audits — MetaMinds is your dedicated cyber defense partner.
            </p>
            <p className="s2-sub">
              With deep expertise in threat intelligence, digital forensics, and proactive defense, we engineer resilient security systems that are always vigilant, automated, and ready to block attack vectors before they disrupt your business.
            </p>
            <div className="s2-cta-row">
              <button className="s2-btn-primary">Request a Security Audit</button>
              <button className="s2-btn-outline">Explore Protections ↓</button>
            </div>
          </div>

          {/* Right – image */}
          <div className="s2-hero-image-wrap">
            <div className="s2-float-pill s2-pill-1">
              <span className="pill-num">24/7/365</span>
              Active SOC monitoring
            </div>
            <img className="s2-hero-img" src={cyberImg} alt="Enterprise cybersecurity operations" />
            <div className="s2-float-pill s2-pill-2">
              <span className="pill-num">100%</span>
              Zero-Trust posture
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="s2-stats-bar">
        <div className="s2-stats-inner">
          <div className="s2-stat">
            <h3>500K+</h3>
            <p>Daily cyber threats blocked</p>
          </div>
          <div className="s2-stat">
            <h3>&lt; 15 mins</h3>
            <p>Average incident response time</p>
          </div>
          <div className="s2-stat">
            <h3>100%</h3>
            <p>Security compliance audit pass rate</p>
          </div>
          <div className="s2-stat">
            <h3>24 / 7</h3>
            <p>SOC continuous threat hunting</p>
          </div>
        </div>
      </div>

      {/* ── FEATURE CARDS ── */}
      <section className="s2-features">
        <div className="s2-section-head">
          <span className="s2-badge">What We Protect</span>
          <h2>Our Complete Cyber Security Portfolio</h2>
          <p>
            From threat monitoring and incident response to data privacy and GRC, we offer end-to-end cyber defense strategies designed to bulletproof your entire digital footprint.
          </p>
        </div>
        <div className="s2-cards-grid">
          {features.map((f, i) => (
            <div className="s2-card" key={i}>
              <div className="s2-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <ul>
                {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="s2-why">
        <div className="s2-section-head">
          <span className="s2-badge">Why MetaMinds</span>
          <h2>Cybersecurity Expertise You Can Trust</h2>
          <p>
            We're not just passive observers — we embed with your engineering teams, establish security best practices, and stand ready to defend your business 24/7.
          </p>
        </div>
        <div className="s2-why-inner">

          <div className="s2-why-row">
            <div className="s2-why-img-wrap">
              <img src={compImg} alt="Comprehensive Cybersecurity Protection" />
            </div>
            <div className="s2-why-text">
              <span className="s2-badge">Zero-Trust Paradigm</span>
              <h2>Your Digital Assets Secured at Every Layer</h2>
              <p>
                We assume breaches can happen, which is why we enforce continuous verification of credentials, endpoints, and requests. Our implementations follow zero-trust principles, enforce strict least-privilege policies, and ship with automated configuration guardrails.
              </p>
              <p>
                We build solid, resilient defense shields that satisfy stringent regulations — including ISO 27001, SOC 2, GDPR, and HIPAA — without hindering your developer velocity.
              </p>
              <ul className="s2-check-list">
                <li><span className="checkmark">✓</span>End-to-end data encryption at rest and in transit</li>
                <li><span className="checkmark">✓</span>Automated vulnerability scanning & real-time remediation</li>
                <li><span className="checkmark">✓</span>Continuous network segmentation & access containment</li>
                <li><span className="checkmark">✓</span>Penetration testing & continuous cloud security checks</li>
              </ul>
            </div>
          </div>

          <div className="s2-why-row reverse">
            <div className="s2-why-img-wrap">
              <img src={webImg} alt="Human Firewall Training" />
            </div>
            <div className="s2-why-text">
              <span className="s2-badge">Human Firewall</span>
              <h2>Empower Your Organization &amp; Build a Security Culture</h2>
              <p>
                Social engineering remains a primary entry point for modern corporate breaches. We complement robust technical controls with automated phishing training, compliance awareness programs, and strategic GRC advisory.
              </p>
              <p>
                From executive tabletop drills to regular internal simulations, we transform your employees from a primary vulnerability into your strongest line of defense.
              </p>
              <ul className="s2-check-list">
                <li><span className="checkmark">✓</span>Automated, realistic email phishing simulation drills</li>
                <li><span className="checkmark">✓</span>Bite-sized, engaging employee awareness training</li>
                <li><span className="checkmark">✓</span>Executive policy design &amp; virtual CISO (vCISO) services</li>
                <li><span className="checkmark">✓</span>Incident response plan creation &amp; tabletop exercises</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="s2-process">
        <div className="s2-section-head">
          <span className="s2-badge">Our Defense Process</span>
          <h2>How We Bulletproof Your Infrastructure</h2>
          <p>
            Every engagement follows a rigorous, battle-tested methodology designed to assess your current exposure, plug your gaps, and maintain a vigilant, secure state.
          </p>
        </div>
        <div className="s2-process-steps">
          {steps.map((s, i) => (
            <div className="s2-step" key={i}>
              <div className="s2-step-num">{s.num}</div>
              <div className="s2-step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="s2-cta-banner">
        <h2>Ready to Secure Your Business?</h2>
        <p>
          Let's start with a comprehensive, no-obligation security posture assessment. Our experts will identify critical gaps in your setup and provide an actionable, high-priority defense roadmap — completely free.
        </p>
        <div className="s2-cta-row" style={{ justifyContent: 'center' }}>
          <button className="s2-btn-primary">Book a Free Security Assessment</button>
          <button className="s2-btn-outline">Talk to an Expert</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Service2;
