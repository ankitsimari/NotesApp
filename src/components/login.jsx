import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useState(false)

    const handleLogin = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/user/login",{email,password}).then((res)=>{
            console.log(res.data);
            localStorage.setItem("token",res.data.Token)
            setAuth(true)
        }).catch((err)=>{
            setAuth(false)
        })
        setEmail("")
        setPassword("")
    }

    const handleLogout = (e)=>{
        axios.get("http://localhost:8080/user/logout").then((res)=>{
            console.log(res);
            setAuth(false)
        }).catch((err)=>{
            setAuth(true)
        })
    }

    // to get notes

    if(auth){
        const token = localStorage.getItem("token");
        const authToken = `Bearer ${token}`;

        const config = {
            headers:{
                Authorization: authToken
            }
        }
        axios.get("http://localhost:8080/notes/",config).then((res)=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    console.log(auth)
    
  return (
    <div  >
    <form action="" className='w-100 m-auto mt-5' onSubmit={handleLogin}>
        <input type="email" className='form-control m-2' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" className='form-control m-2' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" className='form-control m-2 btn btn-danger' />
    </form>
    <button onClick={handleLogout} className='w-100 m-2 btn btn-danger'>Logout</button>

    <div>
        
    </div>
</div>
  )
}
