import React from 'react';
import Nav from '../Components/Nav';
import style from "./Question4.module.css";
import {Box,Heading,Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Foot from '../Components/Foot';
import { AppContext } from '../Context/AppContext';

const Question4 = () => {
const {gender,setGender} = React.useContext(AppContext);

  return (
    <div>
<Nav/>
<div className={style.content} >
<Box w="40%" h="400px" bg="#f5f5f5" display="flex" flexDirection="column"  borderRadius="10px" ml="40px"  >
<Link to="/getStarted/Q3" ><ChevronLeftIcon w="30px" h="30px" display="flex"/></Link>
   <Heading size="lg" mt="20px" mb="20px" >Select your biological sex:</Heading>
   <Link to="/getStarted/Q5" ><button className={style.btn} onClick={()=>{
    setGender("female")
   }} >Female</button></Link>
   <Link to="/getStarted/Q5" ><button className={style.btn} onClick={()=>{
    setGender("male")
   }} >Male</button></Link>
   <Text fontSize="sm" w="80%" m="auto" >To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate your calorie budget, which requires weight, height, biological sex and age as inputs.</Text>

    </Box>
</div>
<Foot/>
    </div>
  )
}

export default Question4