import React from 'react';
import Header from './Header';
import Footer from './Footer';

function services2() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', backgroundColor: '#1D436B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', paddingTop: '120px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Cyber Security</h2>
        <p style={{ maxWidth: '600px', textAlign: 'center', color: '#cbd5e1', fontSize: '1.2rem', padding: '0 20px' }}>
          Welcome to the Cyber Security service page. Details about threat detection, proactive safeguarding, and audits will appear here.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default services2;