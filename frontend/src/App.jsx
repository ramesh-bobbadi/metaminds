import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import AxiosInstance from './components/Axios'

function App() {
  const [count, setCount] = useState(0)
  const[liveupdates,setLiveupdates] = useState([])

  function GetDate(){
    AxiosInstance.get('Liveupdates/').then(res=>{setLiveupdates(res.data)})
  }

  useEffect(()=>{
     GetDate()
  },[])

  return (
    <>
     {liveupdates.map(item=>(<li key={item.id}>{item.title}</li>))}
     <center>ramesh</center>
    </>
  )
}


export default App
