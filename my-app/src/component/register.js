import React, { useState } from 'react'


function Register() {
  const [name,setName] =useState('');
const[email,setEmail] = useState('')
const [password, setPassword] = useState('')

async function registerUser(event){
  event.preventDefault()

  const response =await fetch('http://localhost:5000/api/register',{
    method:"POST",
    headers:{
      'Content-Type': "application/json"
    },
    body:JSON.stringify({
      name,
      email,
      password
    })
  })

const data = response.json()
console.log('data',data)
}

  return (
    <div>
     <h1>Register</h1>
     <form onSubmit = {registerUser}>
       <input value={name} //name="name"
       onChange={(e)=>setName(e.target.value)}
       type="text"
       placeholder='Name'
       />
      <br />
      <input value={email} // name="value"
       onChange={(e)=>setEmail(e.target.value)}
       type="text"
       placeholder='Email'
       />
       <br />
        <input value={password} //name="password"
       onChange={(e)=>setPassword(e.target.value)}
       type="text"
       placeholder='Password'
       />
       <br />
       <input type="submit" value="Register" />
     </form>
    </div>
  );
}

export default Register;
