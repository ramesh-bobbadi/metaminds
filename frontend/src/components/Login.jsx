import React, { useEffect, useRef, useState } from 'react'
import AxiosInstance from './Axios'
import { useNavigate } from 'react-router-dom'
function Login() {

    const navigate = useNavigate()
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const[userdata,setUserdata] = useState([])
    useEffect(()=>{
       AxiosInstance.get('userregister/')
       .then(res=>setUserdata(res.data))
       .catch(error=> console.error('Failed to fetch the data',error))
    },[])
    
 const submithadler = (event)=>{
  event.preventDefault();
  userdata.filter(item=>{
    if(item.username === username.toString() && item.password === password){
        return (
            navigate('/registration')
        )
    }
  })
 }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <form onSubmit={submithadler} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',height:'40vh'}}>
            <input type='text' onChange={(event)=>{setUsername(event.target.value)}} placeholder='username'/>
            <input type='password' onChange={password} placeholder='enter the password' onChange={(event)=>setPassword(event.target.value)}/>
            <input type='submit' value='login'/>
        </form>
    </div>
  )
}
export default Login;