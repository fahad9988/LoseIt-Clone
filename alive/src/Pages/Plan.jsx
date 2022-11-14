import React from 'react';
import Nav from '../Components/Nav';
import Foot from '../Components/Foot';
import style from './Plan.module.css';
import { Box,Text,Image,Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {AppContext} from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';

const Plan = () => {
const {bday,weight,gWeight,height,gender}=React.useContext(AppContext);
let navigate=useNavigate();
let calorie;
let age=bday[0]+bday[1]+bday[2]+bday[3];
let currentYear=new Date().getFullYear();
let n_age=Number(currentYear)-Number(age);
let w=Number(weight)-Number(gWeight)

if(gender=="male"){
calorie=66.47+(13.75*Number(gWeight))+(5.003*Number(height))-(6.755*n_age)
calorie=calorie.toFixed()
}else if(gender=="female"){
  calorie=655.1+(9.563*Number(gWeight))+(1.850*Number(height))-(4.676*n_age)
  calorie=calorie.toFixed()
}


  return (
    <div>
<Nav/>
<div className={style.content}>
<Box m="auto" w="40%"  bg="#f5f5f5" display="flex" color="#173962" flexDirection="column"  borderRadius="10px" pb="30px" >
      <Link to="/getStarted/Q5" ><ChevronLeftIcon w="30px" h="30px" display="flex"/></Link>

   <Heading mt="30px" size="lg" w="400px" m="auto" >Your personal weight loss plan is ready.</Heading>

   <Box  m="auto" mt="30px" mb="50px"  >
   <Box display="flex" mb="20px" >
    <Box mr="20px"><Image w="50px" src="https://assets.loseit.com/website/onboarding/PlanWatermelon.svg" ></Image></Box>
    <Box>
      <Text>Daily Calorie Budget:</Text>
      <Text fontSize="lg" textAlign="left" fontWeight="bold" >{calorie} calories</Text>
    </Box>
   </Box>
   <Box display="flex" mb="20px" >
   <Box mr="20px" ><Image w="50px" src='https://assets.loseit.com/website/onboarding/PlanAward.svg' ></Image></Box>
    <Box>
      <Text>Total Weight Loss:</Text>
      <Text fontSize="lg" fontWeight="bold" textAlign="left" >{w} Kilograms</Text>
    </Box>
   </Box>
   <Box display="flex" >
   <Box mr="20px" ><Image w="50px" src='https://assets.loseit.com/website/onboarding/PlanCalendar.svg' ></Image></Box>
    <Box>
    <Text>Weekly Weight Loss</Text>
    <Text fontSize="lg" textAlign="left" fontWeight="bold" >3/4 Kilograms</Text>
    </Box>
   </Box>
   
   </Box>
   <button className={style.btn} onClick={()=>{navigate("/signup")}} >Get Lose It!</button>
   </Box>
</div>
<Foot/>
    </div>
  )
}

export default Plan