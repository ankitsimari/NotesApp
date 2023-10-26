import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

const handleSubmit = (e)=>{
  e.preventDefault();
  axios.post("https://notesapi-ng85.onrender.com/user/signup",{username,email,password}).then((res)=>{
    console.log(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}


  return (
    <div  >
      
        <form action="" className='w-100 m-auto mt-5' onSubmit={handleSubmit}>
            <input type="text" className='form-control m-2' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="email" className='form-control m-2' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className='form-control m-2' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='form-control m-2 btn btn-danger' />
        </form>
    </div>
  )
}
