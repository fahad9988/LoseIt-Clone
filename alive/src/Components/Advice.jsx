import React from 'react';
import {HStack,Box,Heading,Text,Image} from "@chakra-ui/react"

const Advice = () => {
  return (
   <Box bg="#183962" p="40px 0px 60px 0px">
    <Heading size="lg" color="white" >Advice from Successful Members</Heading>
   <HStack justifyContent="center" mt="40px" color="white" >
     <Box w="30%" mr="100px" >
      <Image src="https://assets.loseit.com/website/home/Advice_Carla.png" w="200px" display="block" m="auto" />
      <Text>Track every single bite you take. You need to know how you’re doing before dinner. If you don’t, things can get away from you fast."</Text>
     </Box>
     <Box w="30%" >
     <Image src="https://assets.loseit.com/website/home/Advice_Alex.png" w="200px" display="block" m="auto" />
     <Text>Everyday is a battle, and you have to make the choice each morning to fight for your health and wellness"</Text>
     </Box>
    </HStack>
   </Box>
  )
}

export default Advice