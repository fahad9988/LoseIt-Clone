import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Box,Text,Image} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider1 = () => {

const [data,setData]=React.useState([]);

React.useEffect(()=>{
   fetch("https://loseit.onrender.com/Slider1").then((res)=>{
    return res.json()
   }).then((res)=>{
    console.log(res);
    setData(res)
   })
},[])

  return (
   <Box bg="#f1f1f1" p="50px 0px 20px 0px">
 <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
   spaceBetween={25}
   slidesPerView={2}
   pagination={{ clickable: true }}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >
  {
   data.map((item)=>{
    return <SwiperSlide>
    <Box w="70%" bg="white" p="30px 0px" m="auto" mb="40px" borderRadius="10px" >
<Image w="150px" src={item.Image} display="block" m="auto" />
<Text fontSize="2xl" >{item.Title}</Text>
<Text fontSize="md" >{item.Desc}</Text>
    </Box>
    </SwiperSlide>
   })
  }
   
   
 </Swiper>
   </Box>
  
  )
}

export default Slider1