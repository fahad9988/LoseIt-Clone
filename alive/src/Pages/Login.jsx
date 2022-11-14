import React from 'react'
import Nav from '../Components/Nav';
import Foot from '../Components/Foot';
import style from './Login.module.css';
import { Box,Text,Input,Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {AppContext} from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {auth,loginUser}=React.useContext(AppContext);
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [emailErr,setEmailErr]=React.useState(false);
  const [passwordErr,setPasswordErr]=React.useState(false);
  let navigate=useNavigate()

  const handleSubmit= async ()=>{

    if (email === "") {
      setEmailErr(true);
      setTimeout(()=>{
       setEmailErr(false)
         },1500)
      return;
     }
     
     if (password=="") {
        setPasswordErr(true);
        setTimeout(()=>{
         setPasswordErr(false)
           },1500)
        return;
     }


    let res = await fetch(`https://loseit.onrender.com/users?email=${email}`);
    try {
      let data_arr = await res.json();
      let data = data_arr[0];
  
      if (data == null) {
        alert("User doesn't Exist");
      } else {
       alert("Logged in Successfully!");
       loginUser()
      navigate("/")
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
<Nav/>
<div className={style.content}>
<Box m="auto" w="40%" bg="#f5f5f5" display="flex" color="#173962" flexDirection="column"  borderRadius="10px" pb="40px"  >
     

   <Heading m="auto" mt="30px" size="lg" w="500px" >Login</Heading>

   <Box mt="25px"  >
   <Input w="60%" type="email" bg="white" borderRadius="0px" placeholder='Email Address' 
   value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
      {emailErr&&<Text color="red" >Please Fill out this Field.</Text>}   
   </Box>

   <Box mt="25px" mb="30px"  >
   <Input w="60%" type="password" bg="white" borderRadius="0px" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />  
   {passwordErr&&<Text color="red" >Please Fill out this Field.</Text>}   
   </Box>

   <button className={style.btn} onClick={handleSubmit} >Login</button>
   <Text mt="20px" >Dont have an Account? <Link to="/signup" ><Text color='#FF9400' >Create one Now!</Text></Link></Text>

   </Box>
</div>
<Foot/>
    </div>
  )
}

export default Login