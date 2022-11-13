import React from 'react';
import Nav from '../Components/Nav';
import Foot from '../Components/Foot';
import style from './Question3.module.css';
import { Box,Text,Input,Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {AppContext} from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';

const Question5 = () => {
 const [error,setError]=React.useState(false);
const {bday,setBday}=React.useContext(AppContext);
let navigate=useNavigate()

  return (
    <div>
<Nav/>
<div className={style.content}>
<Box m="auto" w="40%" h="375px" bg="#f5f5f5" display="flex" color="#173962" flexDirection="column"  borderRadius="10px"  >
      <Link to="/getStarted/Q4" ><ChevronLeftIcon w="30px" h="30px" display="flex"/></Link>

   <Heading mt="30px" size="lg" >When's your birthday?</Heading>

   <Box mt="18px" mb="50px" >
   <Input w="80%" type="date" bg="white" borderRadius="0px" value={bday}  onChange={(e)=>{setBday(e.target.value)}} />   
   {error&&<Text color="red" >Please enter your Birthday to proceed.</Text>}
   </Box>
   <button className={style.btn} onClick={()=>{
         if(!bday==""){
          navigate("/getStarted/card");
         }else{
          setError(true)
         }
         setBday("");
      
   }}  >Continue</button>
   <Text fontSize="sm" w="80%" m="auto" >To create your personalized weight loss plan, Lose It! uses BMR (Basal Metabolic Rate) to calculate your calorie budget, which requires weight, height, biological sex and age as inputs.</Text>
   </Box>
</div>
<Foot/>
    </div>
  )
}

export default Question5