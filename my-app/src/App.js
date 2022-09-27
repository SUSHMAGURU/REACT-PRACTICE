import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/login'
import Register from './component/register'
import Dashbord from "./component/dashbord";

const App = () =>{
    return <div>
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Dashbord" element={<Dashbord/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}


export default App