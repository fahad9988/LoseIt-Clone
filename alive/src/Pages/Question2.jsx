import React from 'react'
import Nav from '../Components/Nav';
import {Box,Heading,Input,Text} from "@chakra-ui/react";
import style from "./Question2.module.css";
import { Link } from 'react-router-dom';
import {ChevronLeftIcon} from "@chakra-ui/icons";
import Foot from '../Components/Foot';
import {AppContext} from "../Context/AppContext";
import { useNavigate } from 'react-router-dom';



const Question2 = () => {
const [error,setError]=React.useState(false);
  const {weight,gWeight,setWeight,setgWeight} = React.useContext(AppContext);
  
  let navigate=useNavigate();
 

  return (
    <div>
     <Nav/>
     <div className={style.content} >
     <Heading color="#173962" m="auto" mt="10px" mb="30px" size="lg" w="500px" >You know the deal! Follow your calorie budget to eat less than you burn and lose weight.</Heading>

     <Box m="auto" w="40%" h="375px" bg="#f5f5f5" display="flex" color="#173962" flexDirection="column"  borderRadius="10px" justifyContent="space-around" >
      <Link to="/getStarted/Q1" ><ChevronLeftIcon w="30px" h="30px" display="flex"/></Link>

   <Heading size="lg" >Current Weight</Heading>

   <Box  >
   <Input w="40%" type="number" bg="white" borderRadius="0px" value={weight} onChange={(e)=>{setWeight(e.target.value)}}  />     <Input w="40%"  value="kg" readOnly  borderRadius="0px" ml="-3px" bg="white" />
   {error&&<Text color="red" >This is an unsupported Weight.</Text>}
   </Box>

   <Heading size="lg" >Goal Weight</Heading>
   
   <Box  >
   <Input w="40%" type="number" bg="white" borderRadius="0px" value={gWeight} onChange={(e)=>{setgWeight(e.target.value)}} />     <Input w="40%"  value="kg" readOnly  borderRadius="0px" ml="-3px" bg="white" />
   {error&&<Text color="red" >This is an unsupported Weight.</Text>}
   </Box>

   <button onClick={()=>{
         if(Number(weight)>23&&Number(gWeight)>23){
          navigate("/getStarted/Q3")
         }else{
          setError(true)
         }
         setWeight("");
         setgWeight("");
   }}   className={style.btn} >Continue</button>
    </Box>
     </div>
 <Foot/>
    </div>
  )
}

export default Question2