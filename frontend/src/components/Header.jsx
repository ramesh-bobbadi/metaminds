import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mm logo.png';
import './styles/Header.css';

function Header() {
  const [shandle_state, setShandle_state] = useState(false);
  const [navhandle_state, setNavhandle_state] = useState(false);

  const Headerdata = () => {
    return (
      <div className="headersec">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffd700"
          onClick={() => {
            setShandle_state(true);
            setNavhandle_state(false);
          }}
          className="header-icon"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <Link to="/contactus"><button className="contactus">Contact Us</button></Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffd700"
          onClick={() => {
            setNavhandle_state(true);
            setShandle_state(false);
          }}
          className="header-icon"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    );
  };

  const Searchbar = () => {
    return (
      <div className="header-search">
        <div id="opensearch">
          <input type="search" placeholder="What Are Looking For ?" />
          <button type="button" className="search-close" onClick={() => setShandle_state(false)}>×</button>
        </div>
      </div>
    );
  };

  const Nav = () => {
    return (
      <div className="nav">
        <button type="button" className="nav-close" onClick={() => setNavhandle_state(false)}>×</button>
        <ul>
          <li><Link to="/" onClick={() => setNavhandle_state(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setNavhandle_state(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setNavhandle_state(false)}>Services</Link></li>
          <li><Link to="/careers" onClick={() => setNavhandle_state(false)}>Careers</Link></li>
          <li><Link to="/blogs" onClick={() => setNavhandle_state(false)}>Blogs</Link></li>
          <li><Link to="/contactus" onClick={() => setNavhandle_state(false)}>Contact Us</Link></li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {navhandle_state && (
        <div className="nav-backdrop" onClick={() => setNavhandle_state(false)}></div>
      )}
      {navhandle_state && <Nav />}
      <header className={shandle_state ? 'search-open' : ''}>
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} style={{ height: "60px", width: "100px" }} alt="Meta Minds" />
            </Link>
          </div>
        </div>
        {shandle_state ? (
          <Searchbar />
        ) : (
          <div className="header-right">
            <Headerdata />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
