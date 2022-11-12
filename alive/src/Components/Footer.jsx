import React from 'react';
import {Box,HStack,Text,Heading} from "@chakra-ui/react";
import {FaFacebook,FaInstagram,FaTwitterSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <Box pb="60px" bg="#183962" color="white" pt="50px" >
     <Heading mt="0px" mb="30px" >Lose It!</Heading>
     <HStack w="50%" justifyContent="space-around" m="auto" >
<Box textAlign="left" >
 <Text>How It Works</Text>
 <Text>Premium</Text>
 <Text>Lose It! Blog</Text>
 <Text>Help Center</Text>
</Box>
<Box textAlign="left">
<Text>Press & Media Kit</Text>
 <Text>Contact Us</Text>
 <Text>Partners & API</Text>
 <Text>Share Your Story</Text>
</Box>
<Box textAlign="left">
<Text>About Us</Text>
 <Text>Careers</Text>
 <Text>Diversity</Text>
 <Text>Accessibility Statement </Text>
</Box>
     </HStack>
     <Box display="flex"  justifyContent="center" mt="30px" mb="25px" >
<FaFacebook style={{width:"25px",height:"25px",marginRight:"20px"}}  />
<FaInstagram style={{width:"25px",height:"25px",marginRight:"20px"}}  />
<FaTwitterSquare style={{width:"25px",height:"25px",marginRight:"20px"}}  />
     </Box>
     <Text>Copyright 2008-2022 FitNow, Inc, All Rights Reserved</Text>
     <Text>Privacy | Terms of Service</Text>
     <Text>Do Not Sell My Personal Information</Text>
     <Text mt="10px" >Lose It! is among the federally registered trademarks of FitNow, Inc., and may not be used by third parties without explicit permission.</Text>
    </Box>
  )
}

export default Footer