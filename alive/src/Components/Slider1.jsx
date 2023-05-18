import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Box,Text,Image} from "@chakra-ui/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data=[
  {
    "Image": "https://assets.loseit.com/website/home/Features_WaterTracking.svg",
    "Title": "Water Tracking",
    "Desc": "Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    "Image": "https://assets.loseit.com/website/home/Features_Macros.svg",
    "Title": "Macro Tracking",
    "Desc": "Set personalized macronutrient goals to ensure you’re getting enough protein, carbs, and more."
  },
  {
    "Image": "https://assets.loseit.com/website/home/Features_DeviceIntegration.svg",
    "Title": "Device Integration",
    "Desc": "Connect Apple Health and Google Fit for easy exercise tracking."
  },
  {
    "Image": "https://assets.loseit.com/website/home/Features_PatternsReports.svg",
    "Title": "Patterns & Reports",
    "Desc": "Get reports on your behaviors and progress straight to your inbox."
  },
  {
    "Image": "https://assets.loseit.com/website/home/Features_Barcode.svg",
    "Title": "Scanner Feature",
    "Desc": "Use your camera to scan package barcodes for quick tracking or create new foods with the nutrition label auto-fill."
  },
  {
    "Image": "https://assets.loseit.com/website/home/Features_SnapIt.svg",
    "Title": "Smart Camera",
    "Desc": "Use your camera to take a picture of your food and allow Lose It! technology to help you log it."
  }
]

const Slider1 = () => {

// const [data,setData]=React.useState([]);

// React.useEffect(()=>{
//    fetch("https://loseit.onrender.com/Slider1").then((res)=>{
//     return res.json()
//    }).then((res)=>{
//     console.log(res);
//     setData(res)
//    })
// },[])

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