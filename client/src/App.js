
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './Components/Signup';
import Login from "./Components/Login"
import Homepage from './Components/Homepage';
import Usertable from "./Components/Usertable";
import Admintable from "./Components/Admintable"


function App() {
 
  return (
  <div className="App">
   <BrowserRouter>
   <Routes>
    
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Homepage />} />
    <Route path="/user/:id" element={<Usertable />} />
    <Route path="/admin" element={<Admintable />} />
   

   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
