import React from 'react';
import { Text,Box,Stack,Image } from '@chakra-ui/react';

const WeightLoss = () => {
 const [data,setData]=React.useState([]);

 React.useEffect(()=>{
    fetch("http://localhost:8080/LossData").then((res)=>{
     return res.json()
    }).then((res)=>{
     console.log(res)
     setData(res)
    })
 },[])
  return (
    <div style={{marginTop:"40px"}}>
     <Text fontSize="3xl" >Weight Loss Made Easy</Text>
    <Stack direction="row" w="70%" m="auto" spacing="20px" mt="30px" >
  {
  data.map((item)=>{
    return <Box backgroundColor="#E1E36B8A" w="30%"  >
     <Text fontSize="xl" fontWeight="bold" color="#ff9400" >{item.flexElement}</Text>
     <Image w="150px" src={item.image} display="block" m="auto" />
     <Text>{item.text}</Text>
    </Box>
  })
  }
    </Stack>
    
    </div>
  )
}

export default WeightLoss