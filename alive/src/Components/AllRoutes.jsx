import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Question1 from '../Pages/Question1';
import Question2 from '../Pages/Question2';
import Question3 from '../Pages/Question3';
import Question4 from '../Pages/Question4';
import Question5 from "../Pages/Question5";
import Plan from '../Pages/Plan';
import Signup from '../Pages/Signup';

const AllRoutes = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>} ></Route>
     <Route path='/login' element={<Login/>} ></Route>
     <Route path="/getStarted/Q1" element={<Question1/>} ></Route>
     <Route path="/getStarted/Q2" element={<Question2/>} ></Route>
     <Route path="/getStarted/Q3" element={<Question3/>} ></Route>
     <Route path="/getStarted/Q4" element={<Question4/>} ></Route>
     <Route path="/getStarted/Q5" element={<Question5/>} ></Route>
     <Route path="/getStarted/plan" element={<Plan/>} ></Route>
     <Route path="/signup" element={<Signup/>} ></Route>
    </Routes>
  )
}

export default AllRoutes