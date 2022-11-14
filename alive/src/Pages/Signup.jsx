import React from 'react';
import Nav from '../Components/Nav';
import Foot from '../Components/Foot';
import style from './Signup.module.css';
import { Box,Text,Input,Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {AppContext} from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';


const  Signup =() => {

 const {bday,weight,gWeight,height,gender}=React.useContext(AppContext);
 const [email,setEmail]=React.useState("");
 const [password,setPassword]=React.useState("");
 const [name,setName]=React.useState("");
 const [emailErr,setEmailErr]=React.useState(false);
 const [passwordErr,setPasswordErr]=React.useState(false);
 const [nameErr,setNameErr]=React.useState(false);
 let navigate=useNavigate()

 const handleSubmit=()=>{

  let userData = {
   firstname: name,
   email: email,
   password: password,
   verification_code: "",
   birthDay:bday,
   weight,
   gWeight,
   height,
   gender,

 };

 if (userData.firstname === "") {
  setNameErr(true);
  setTimeout(()=>{
setNameErr(false)
  },1500)
  return;
}

if (userData.email === "") {
 setEmailErr(true);
 setTimeout(()=>{
  setEmailErr(false)
    },1500)
 return;
}

if (userData.password.length < 6) {
   setPasswordErr(true);
   setTimeout(()=>{
    setPasswordErr(false)
      },1500)
   return;
}

fetch("https://loseit.onrender.com/users").then((res)=>{
 return res.json()
}).then((res)=>{
 let isExist = false;
 res.forEach(function (el) {
   if (el.email == userData.email) {
     isExist = true;
     alert("User Exists already. Please Login.")
     return;
   }
 });
 if (isExist == false) {
  addUser(userData)
 }

})

    
 }

 let addUser = async (userData) => {
  let res = await fetch("https://loseit.onrender.com/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    let data = await res.json();
    console.log(data);
    navigate("/login")
  } catch (err) {
    console.log(err);
  }
};

 


  return (
    <div>
<Nav/>
<div className={style.content}>
<Box m="auto" w="40%" bg="#f5f5f5" display="flex" color="#173962" flexDirection="column"  borderRadius="10px" pb="40px"  >

   <Heading m="auto" mt="30px" size="lg" w="500px" >Create an account to save your plan.</Heading>

   <Box mt="25px"  >
   <Input w="60%" type="text" bg="white" borderRadius="0px" placeholder='First Name' value={name} onChange={(e)=>{setName(e.target.value)}} />  
   {nameErr&&<Text color="red" >Please provide a first name.</Text>} 
   </Box>
   <Box mt="25px"  >
   <Input w="60%" type="email" bg="white" borderRadius="0px" placeholder='Email' 
   value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
      {emailErr&&<Text color="red" >Please provide a valid Email Address.</Text>}   
   </Box>
   <Box mt="25px" mb="30px"  >
   <Input w="60%" type="password" bg="white" borderRadius="0px" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />  
   {passwordErr&&<Text color="red" >Your password must be atleast 6 characters.</Text>}   
   </Box>
   <button className={style.btn} onClick={handleSubmit} >Get Started</button>
   </Box>
</div>
<Foot/>
    </div>
  )
  }

export default Signup;