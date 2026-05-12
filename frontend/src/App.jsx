import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Careers from './components/Careers'
import Blogs from './components/Blogs'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
