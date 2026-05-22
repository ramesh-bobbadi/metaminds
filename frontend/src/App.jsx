import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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
import Services1 from './components/services1'
import Services2 from './components/service2'
import Services3 from './components/service3'
import GoToTop from './components/GoToTop'

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
      <Route path='/services1' element={<Services1/>}/>
      <Route path='/services2' element={<Services2/>}/>
      <Route path='/services3' element={<Services3/>}/>
    </Routes>
    <GoToTop />
    </BrowserRouter>
    </>
  )
}


export default App

