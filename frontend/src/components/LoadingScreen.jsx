import React, { useEffect, useState } from 'react';
import logo from '../assets/mm logo.png';
import './styles/LoadingScreen.css';

function LoadingScreen({ onFinished }) {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill progress bar smoothly over 1.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 30);

    // Fade out after 1.8 seconds
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1800);

    // Complete the loading callback after exit animation finishes (total 2.4 seconds)
    const finishTimer = setTimeout(() => {
      if (onFinished) onFinished();
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className={`loading-wrapper ${exiting ? 'exit' : ''}`}>
      <div className="particles-overlay"></div>
      
      <div className="loading-content">
        <div className="logo-container">
          <div className="glow-ring double-ring"></div>
          <div className="glow-ring single-ring"></div>
          <img src={logo} className="loading-logo" alt="Meta Minds Logo" />
        </div>
        
        <h1 className="loading-title">
          <span>M</span><span>e</span><span>t</span><span>a</span>&nbsp;
          <span>M</span><span>i</span><span>n</span><span>d</span><span>s</span>&nbsp;
          <span>p</span><span>v</span><span>t</span><span>.</span><span>l</span><span>t</span><span>d</span>
        </h1>
        
        <p className="loading-subtitle">Engineering Digital Futures</p>
        
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
