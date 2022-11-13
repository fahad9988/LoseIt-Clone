import React from 'react';
import Nav from '../Components/Nav';
import { Box,Heading,Image,Text,Stack,Button } from '@chakra-ui/react';
import style from "./Question1.module.css";
import Foot from '../Components/Foot';
import { Link } from 'react-router-dom';

const Question1 = () => {
  return (
   <div>
    <Nav/>
    <div className={style.content} >
    <Box w="40%"  pt="100px" >
<Heading mb="90px" >Take the first step towards
a healthier you with Lose It!</Heading>
<Stack direction="row" justifyContent="space-around"  >
 <Box>
<Image src='https://assets.loseit.com/website/onboarding/SetGoal.svg' w="100px" ></Image>
<Text fontSize="sm" >SET YOUR GOALS</Text>
 </Box>
 <Box>
 <Image src='https://assets.loseit.com/website/onboarding/TrackFoods.svg' w="100px" ></Image>
<Text fontSize="sm" >TRACK YOUR FOODS</Text>
 </Box>
 <Box>
 <Image src='https://assets.loseit.com/website/onboarding/LoseWeight.svg' w="100px" ></Image>
<Text fontSize="sm" >LOSE WEIGHT</Text>
 </Box>
</Stack>
    </Box>


    <Box w="40%" h="400px" bg="#f5f5f5" display="flex" flexDirection="column" justifyContent="center" borderRadius="10px" ml="40px" >
   <Heading>Have you counted calories before?</Heading>
   <Link to="/getStarted/Q2" ><button className={style.btn} >Yes</button></Link>
   <Link to="/getStarted/Q2" ><button className={style.btn} >No</button></Link>


    </Box>
    </div>
    <Foot/>
   </div>
  )
}

export default Question1