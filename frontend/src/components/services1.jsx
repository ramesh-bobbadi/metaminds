import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import webDevImg from '../assets/webdev.webp';
import appDevImg from '../assets/appdev.webp';
import uiUxImg from '../assets/web&appDev.webp';
import './styles/Services1.css';

function Services1() {
  const [selected, setSelected] = useState(null);

  const renderCard = (id, img, title, description, link) => (
    <div key={id} className="service-card" onClick={() => setSelected(id)}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Details →</button>
    </div>
  );

  const renderDetail = (id, title, longText) => (
    <div key={id} className="service-detail">
      <h3>{title} Details</h3>
      <p>{longText}</p>
      <button onClick={() => setSelected(null)}>← Back to Services</button>
    </div>
  );

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: '80vh',
          backgroundColor: '#1D436B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          paddingTop: '120px',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Services</h2>
        {selected ? (
          // show details view for the selected card
          (selected === 'web' && renderDetail('web', 'Web Development', 'We build responsive, high‑performance websites tailored for enterprise needs. Our tech stack includes React, Next.js, and optimized SEO techniques to ensure visibility and speed.')) || 
          (selected === 'app' && renderDetail('app', 'App Development', 'Cross‑platform mobile apps built with React Native and Flutter, delivering seamless UI/UX across iOS and Android while maintaining native performance.')) || 
          (selected === 'ui' && renderDetail('ui', 'UI/UX Design', 'User‑centred design process, from wireframes to high‑fidelity prototypes, focusing on accessibility, brand consistency, and conversion‑optimised layouts.'))
        ) : (
          // show the three cards grid
          <div className="services-grid">
            {renderCard('web', webDevImg, 'Web Development', 'Responsive, high‑performance sites built for enterprise needs.', '/services/web-dev')}
            {renderCard('app', appDevImg, 'App Development', 'Cross‑platform mobile applications with seamless UX.', '/services/app-dev')}
            {renderCard('ui', uiUxImg, 'UI/UX Design', 'Intuitive, user‑centred designs that boost engagement.', '/services/ui-ux')}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Services1;