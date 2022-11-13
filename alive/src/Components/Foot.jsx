import React from 'react';
import {Box,Text} from "@chakra-ui/react";

const Foot = () => {
  return (
    <Box pb="15px" bg="#183962" color="white" pt="7px" position="fixed" bottom="0px" zIndex="1" w="100%">
     <Text>Copyright 2008-2022 FitNow, Inc, All Rights Reserved</Text>
     <Text color="blue" >Privacy | Terms of Service</Text>
     <Text color="blue" >Do Not Sell My Personal Information</Text>
     <Text  >Lose It! is among the federally registered trademarks of FitNow, Inc., and may not be used by third parties without explicit permission.</Text>
    </Box>
  )
}

export default Foot