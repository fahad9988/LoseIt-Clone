import React from 'react';
import Navbar from '../Components/Navbar';
import style from "./Home.module.css";
import { Text } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import WeightLoss from '../Components/WeightLoss';
import Slider1 from '../Components/Slider1';
import Stats from '../Components/Stats';
import Advice from '../Components/Advice';
import Carousel from '../Components/Carousel';
import Android from "../Components/Android";
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
     <Navbar/>
  <div className={style.bg} >
    <div style={{display:"flex",justifyContent:"center"}} >
     <div style={
      {marginRight:"90px"}
     }>
      <img src="https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png" alt="mobile" style={{width:"250px"}} />
     </div>
     <div style={{textAlign:"left"}}>
      <Text fontWeight="bold" textAlign="left" fontSize="6xl"  >Top Rated <br /> Weight Loss Plan</Text>
      <Text fontSize="xl" textAlign="left" >Track the foods you love and lose weight</Text>

      <Link to="getStarted/Q1" ><button  style={{padding:"15px 30px",borderRadius:"5px",backgroundColor:"#183962",color:"white",marginTop:"20px"}} >Sign Up for Free</button></Link>
     </div>
    </div>
  </div>
  <WeightLoss/>
  <Slider1/>
  <Stats/>
  <Advice/>
  <Carousel/>
  <Android/>
  <Footer/>
    </div>
  )
}

export default Home