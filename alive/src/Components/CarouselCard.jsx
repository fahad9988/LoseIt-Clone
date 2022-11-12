import React from 'react';
import './Mycard.css';
import {Image,Text} from "@chakra-ui/react"
const CarouselCard = ({image,title}) => {
    return (
        <div className='mycard'>
           <Image src={image} />
           <Text>{title}</Text>
        </div>
    )
}

export default CarouselCard