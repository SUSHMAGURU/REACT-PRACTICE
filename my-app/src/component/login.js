import React, { useState } from 'react'

function Login() {
const[email,setEmail] = useState('')
const [password, setPassword] = useState('')

async function loginUser(event){
  event.preventDefault()

  const response =await fetch('http://localhost:5000/login',{
    method:"POST",
    headers:{
      'Content-Type': "application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  })

const data = await response.json()
if(data.user){
  alert('Login Succesfully')
  window.location.href='/dashbord'
}
else{
  alert('Please check the credentials')
}
console.log('data',data)
}

  return (
    <div>
     <h1>Login</h1>
     <form onSubmit = {loginUser}>
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
       <input type="submit" value="Login" />
     </form>
    </div>
  );
}

export default Login;
