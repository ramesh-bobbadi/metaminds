import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import cloudImg from '../assets/cloud.webp';
import compImg from '../assets/comprahensiveitsupport.webp';
import webImg from '../assets/web&appDev.webp';
import './styles/service2.css';

const features = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure & Hosting',
    desc: 'We architect and deploy highly available cloud environments on AWS, Azure, and GCP — purpose-built for your workload. Our infrastructure is elastic, auto-scaling, and monitored 24/7, so you never worry about capacity again.',
    bullets: [
      'Auto-scaling compute and managed databases',
      'Multi-region redundancy & 99.99% SLA',
      'Infrastructure-as-Code (Terraform / CloudFormation)',
    ],
  },
  {
    icon: '🔄',
    title: 'Data Migration & Backup',
    desc: 'Move your workloads to the cloud without disruption. Our zero-downtime migration methodology ensures your critical data is safely transferred, validated, and backed up at every step of the journey.',
    bullets: [
      'Live cutover with zero data loss',
      'Automated incremental backups with point-in-time recovery',
      'Cross-region disaster recovery planning',
    ],
  },
  {
    icon: '🛡️',
    title: 'Cloud Security & Compliance',
    desc: 'Security is built into every layer of our cloud deployments — not bolted on afterward. From identity management to network segmentation, we ensure your data stays protected and your business stays compliant.',
    bullets: [
      'Zero-trust IAM policies & role-based access control',
      'ISO 27001, SOC 2, GDPR, HIPAA alignment',
      'Real-time threat detection & automated remediation',
    ],
  },
  {
    icon: '🚀',
    title: 'Managed Kubernetes & DevOps',
    desc: 'Ship faster with our fully managed Kubernetes clusters and CI/CD pipelines. We handle the complexity of container orchestration so your developers can focus entirely on writing great code.',
    bullets: [
      'EKS / AKS / GKE managed cluster setup',
      'GitOps pipelines with ArgoCD & GitHub Actions',
      'Helm chart management & rolling deployments',
    ],
  },
  {
    icon: '📊',
    title: 'Cloud Analytics & AI Platforms',
    desc: 'Turn raw data into strategic advantage. We build scalable data lakes, real-time analytics pipelines, and AI/ML training environments that integrate seamlessly into your existing cloud stack.',
    bullets: [
      'Serverless data pipelines (Spark, Databricks, BigQuery)',
      'ML model training & deployment at scale',
      'Business intelligence dashboards & real-time alerts',
    ],
  },
  {
    icon: '💰',
    title: 'Cloud Cost Optimisation',
    desc: 'Cloud bills can spiral fast. Our FinOps practice audits your spend, eliminates waste, and right-sizes resources — delivering an average of 35% cost reduction without sacrificing performance.',
    bullets: [
      'Reserved & Spot instance strategy',
      'Automated cost anomaly detection',
      'Monthly FinOps reporting & governance',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Assessment',
    desc: 'We start with a thorough audit of your current infrastructure, applications, and data landscape. We map dependencies, identify risks, and define a clear cloud strategy aligned to your business goals.',
  },
  {
    num: '02',
    title: 'Architecture Design',
    desc: 'Our cloud architects design a resilient, scalable target architecture — choosing the right services, regions, and patterns for your specific requirements, budget, and compliance obligations.',
  },
  {
    num: '03',
    title: 'Phased Migration & Deployment',
    desc: 'We migrate workloads in carefully sequenced phases, running parallel environments and automated validation checks to ensure continuity and give your team confidence at every milestone.',
  },
  {
    num: '04',
    title: 'Optimise & Manage',
    desc: 'Post-migration, we continuously tune performance, security posture, and costs. Our managed services team provides round-the-clock monitoring, incident response, and proactive improvement sprints.',
  },
];

function Service2() {
  const pillRef = useRef(null);

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
              <span /> Cloud Services
            </span>
            <h1>
              Enterprise Cloud <span className="highlight">Solutions</span> Built for Growth
            </h1>
            <p className="s2-lead">
              We help ambitious businesses move, modernise, and maximise the cloud. Whether you're
              migrating legacy systems, building cloud-native applications, or optimising runaway
              costs — MetaMinds is your trusted cloud partner from strategy to execution.
            </p>
            <p className="s2-sub">
              With deep expertise across AWS, Azure, and Google Cloud Platform, we design
              infrastructure that is secure by default, always-on, and ready to scale with your
              ambitions.
            </p>
            <div className="s2-cta-row">
              <button className="s2-btn-primary">Get a Free Cloud Audit</button>
              <button className="s2-btn-outline">Explore Services ↓</button>
            </div>
          </div>

          {/* Right – image */}
          <div className="s2-hero-image-wrap">
            <div className="s2-float-pill s2-pill-1">
              <span className="pill-num">99.99%</span>
              Uptime SLA
            </div>
            <img className="s2-hero-img" src={cloudImg} alt="Cloud computing infrastructure" />
            <div className="s2-float-pill s2-pill-2">
              <span className="pill-num">35%</span>
              Avg. Cost Saved
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="s2-stats-bar">
        <div className="s2-stats-inner">
          <div className="s2-stat">
            <h3>200+</h3>
            <p>Cloud migrations delivered</p>
          </div>
          <div className="s2-stat">
            <h3>99.99%</h3>
            <p>Average uptime across all managed environments</p>
          </div>
          <div className="s2-stat">
            <h3>35%</h3>
            <p>Average cloud cost reduction for clients</p>
          </div>
          <div className="s2-stat">
            <h3>24 / 7</h3>
            <p>Dedicated monitoring & incident support</p>
          </div>
        </div>
      </div>

      {/* ── FEATURE CARDS ── */}
      <section className="s2-features">
        <div className="s2-section-head">
          <span className="s2-badge">What We Offer</span>
          <h2>Our Full Cloud Services Portfolio</h2>
          <p>
            From lifting and shifting your first workload to building a sophisticated multi-cloud
            platform, we cover every dimension of enterprise cloud — end to end.
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
          <h2>Cloud Expertise You Can Rely On</h2>
          <p>
            We're not just consultants — we embed with your teams, own outcomes, and stay
            accountable long after go-live.
          </p>
        </div>
        <div className="s2-why-inner">

          <div className="s2-why-row">
            <div className="s2-why-img-wrap">
              <img src={compImg} alt="Comprehensive IT support" />
            </div>
            <div className="s2-why-text">
              <span className="s2-badge">Security-First Approach</span>
              <h2>Your Data is Protected at Every Layer</h2>
              <p>
                Security isn't an add-on — it's woven into every architecture decision we make.
                Our cloud deployments follow zero-trust principles, enforce least-privilege access,
                and ship with automated compliance guardrails so you're always audit-ready.
              </p>
              <p>
                We help you meet stringent regulations — ISO 27001, SOC 2, GDPR, and HIPAA —
                without sacrificing developer velocity or operational agility.
              </p>
              <ul className="s2-check-list">
                <li><span className="checkmark">✓</span>End-to-end encryption at rest and in transit</li>
                <li><span className="checkmark">✓</span>Automated vulnerability scanning & patch management</li>
                <li><span className="checkmark">✓</span>Continuous compliance monitoring with real-time alerts</li>
                <li><span className="checkmark">✓</span>Penetration testing & cloud security posture management</li>
              </ul>
            </div>
          </div>

          <div className="s2-why-row reverse">
            <div className="s2-why-img-wrap">
              <img src={webImg} alt="Cloud development and DevOps" />
            </div>
            <div className="s2-why-text">
              <span className="s2-badge">Developer Experience</span>
              <h2>Ship Faster with Modern DevOps Practices</h2>
              <p>
                Our engineering teams implement GitOps workflows, containerised deployments, and
                fully automated CI/CD pipelines that let your developers merge, test, and deploy
                to production in minutes — not days.
              </p>
              <p>
                From infrastructure-as-code to self-service developer portals, we build an inner
                loop that accelerates innovation while keeping your environments consistent,
                reproducible, and drift-free.
              </p>
              <ul className="s2-check-list">
                <li><span className="checkmark">✓</span>GitOps with ArgoCD, Flux, or GitHub Actions</li>
                <li><span className="checkmark">✓</span>Automated testing gates & staging environments</li>
                <li><span className="checkmark">✓</span>Developer self-service portals & internal tooling</li>
                <li><span className="checkmark">✓</span>Observability stack: logs, metrics, and distributed tracing</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="s2-process">
        <div className="s2-section-head">
          <span className="s2-badge">Our Process</span>
          <h2>How We Deliver Cloud Transformations</h2>
          <p>
            Every engagement follows a battle-tested methodology designed to minimise risk,
            maximise speed, and ensure your team is empowered every step of the way.
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
        <h2>Ready to Move to the Cloud?</h2>
        <p>
          Let's start with a free, no-obligation cloud readiness assessment. Our experts will
          review your current setup and give you a clear, actionable roadmap — at no cost.
        </p>
        <div className="s2-cta-row" style={{ justifyContent: 'center' }}>
          <button className="s2-btn-primary">Book a Free Assessment</button>
          <button className="s2-btn-outline">Talk to an Expert</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Service2;
