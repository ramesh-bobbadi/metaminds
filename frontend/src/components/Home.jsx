import React, { useState } from "react";
import logo from "../assets/mm logo.png";
import bgvideo from "../assets/bgvideo.mp4";
import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [shandle_state, setShandle_state] = useState(false);
  const [navhandle_state,setNavhandle_state] = useState(false);
  const [headhandle_state,SetHeadhandle_state] = useState(false)
  
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
              <li><Link to="/serives">Services</Link></li>
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
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className="logo">
          <img src={logo} style={{ height: "60px", width: "100px" }} />
        </div>
         {navhandle_state?(<Nav/>):shandle_state?<Searchbar/>:(<Headerdata/>)}
      </header>
      <main onClick={()=>navhandle_state?setNavhandle_state(false):shandle_state?setShandle_state(false):true}>
        <aside></aside>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default Home;
