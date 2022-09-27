import React, {useEffect} from "react"
import jwt from 'jsonwebtoken'
import { useHistory  } from 'react-router-dom'


const Dashbord=()=> {

    const history = useHistory();

    async function populateQuote(){
        const req =await fetch('http://localhost:5000/api/quote',{
            headers:{
                'x-access-token':localStorage.getItem('token')
            },
        })
        const data=await req.json()
        console.log(data)
    }
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
            }
            else{
             populateQuote()
            }
        }

    },[])
    return <h1>Welcome to dashboard</h1>

}

export default Dashbord