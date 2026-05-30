import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Careers from './components/Careers'
import Blogs from './components/Blogs'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Registration from './components/Registration'
import Services1 from './components/services1'
import Services2 from './components/service2'
import Services3 from './components/service3'
import GoToTop from './components/GoToTop'
import LoadingScreen from './components/LoadingScreen'

function AppContent({ showLoading, setShowLoading }) {
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Every time client-side route changes, trigger a short gold transition loader
    if (!showLoading) {
      setRouteLoading(true);
      const timer = setTimeout(() => {
        setRouteLoading(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {showLoading && <LoadingScreen onFinished={() => setShowLoading(false)} />}
      {routeLoading && (
        <div className="route-loader-overlay">
          <div className="gold-orbit-spinner"></div>
        </div>
      )}
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/services1' element={<Services1/>}/>
        <Route path='/services2' element={<Services2/>}/>
        <Route path='/services3' element={<Services3/>}/>
      </Routes>
      <GoToTop />
    </>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <BrowserRouter>
      <AppContent showLoading={showLoading} setShowLoading={setShowLoading} />
    </BrowserRouter>
  );
}

export default App;

