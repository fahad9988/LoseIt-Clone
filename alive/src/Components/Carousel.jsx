import React from 'react'
import CarouselCard from './CarouselCard';
import './Imagecarousel.css';
import {ChevronRightIcon} from "@chakra-ui/icons";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import {Box,Heading,Text} from "@chakra-ui/react";

const data=[
    {
      "image": "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1",
      "title": "Setting Macronutrient Goals: How Many Macros do You Need?"
    },
    {
      "image": "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1",
      "title": "Quick Tips to Make Healthier Decisions"
    },
    {
      "image": "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1",
      "title": "12 Protein-Packed Snacks to Curb Hanger Quick"
    },
    {
      "image": "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1",
      "title": "Is Drinking Seltzer Actually Healthy?"
    },
    {
      "image": "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1",
      "title": "Fun 20-Minute Treadmill Workouts"
    },
    {
      "image": "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1",
      "title": "Seven Strategies for a Better Nights Sleep"
    },
    {
      "image": "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/Intuitive-Eating.png?w=1010&ssl=1",
      "title": "The Secret Behind Intuitive Eating"
    },
    {
      "image": "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/08/Untitled-design-83.png?w=1010&ssl=1",
      "title": "5 Ways You’re Sabotaging Your Weight Loss"
    },
    {
      "image": "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-126.png?w=1010&ssl=1",
      "title": "10 Tips For Making Healthier Choices When Dining Out"
    }
  ]

const Carousel = () => {
// const [data,setData]=React.useState([]);

// React.useEffect(()=>{
    
// fetch("https://loseit.onrender.com/Carousel").then((res)=>{
//  return res.json();
// }).then((res)=>{
//  setData(res)
// })

// },[])

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