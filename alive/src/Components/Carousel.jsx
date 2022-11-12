import React from 'react'
import CarouselCard from './CarouselCard';
import './Imagecarousel.css';
import {ChevronRightIcon} from "@chakra-ui/icons";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Box,Heading,Text} from "@chakra-ui/react";


const Carousel = () => {
const [data,setData]=React.useState([]);

React.useEffect(()=>{
    
fetch("http://localhost:8080/Carousel").then((res)=>{
 return res.json();
}).then((res)=>{
 setData(res)
})

},[])

    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <Box>
            <Heading mt="40px" color="#183962" size="lg" >A Balanced Approach to Weight Loss</Heading>
            <Heading mt="10px" color="#808284" size="md" >Get motivated with these nutrition and wellness tips and user success stories!</Heading>
<div className="product-carousel" style={{marginTop:"20px"}} >
            <button className="pre-btn" onClick={btnpressprev}><ChevronLeftIcon h="50px" w="50px" color="#ff9400" /></button>
            <button className="next-btn" onClick={btnpressnext}><ChevronRightIcon h="50px" w="50px" color="#ff9400" /></button>


            <div className="product-container">
               {
                data.map((item)=>{
                 return <CarouselCard {...item} />
                })
               }
            </div>
        </div>
        </Box>
        
    )
}

export default Carousel