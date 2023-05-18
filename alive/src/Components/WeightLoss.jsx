import React from 'react';
import { Text,Box,Stack,Image } from '@chakra-ui/react';

const data=[
    {
      "flexElement": "Set Your Goals",
      "image": "https://assets.loseit.com/website/home/Home_SetGoal.svg",
      "text": "Tell us what you want to acheive and receive personalized goals.",
      "tablescraper-selected-row": "",
      "tablescraper-selected-row href": ""
    },
    {
      "flexElement": "Track Your Food",
      "image": "https://assets.loseit.com/website/home/Home_TrackFoods.svg",
      "text": "Learn about the foods you’re eating and keep your calories within your daily budget.",
      "tablescraper-selected-row": "",
      "tablescraper-selected-row href": ""
    },
    {
      "flexElement": "Lose Weight",
      "image": "https://assets.loseit.com/website/home/Home_LoseWeight.svg",
      "text": "Reach your goals and continue to set new ones for a happier, healthier you!",
      "tablescraper-selected-row": "",
      "tablescraper-selected-row href": ""
    }
  ]

const WeightLoss = () => {
//  const [data,setData]=React.useState([]);

//  React.useEffect(()=>{
//     fetch("https://loseit.onrender.com/LossData").then((res)=>{
//      return res.json()
//     }).then((res)=>{
//      console.log(res)
//      setData(res)
//     })
//  },[])
  return (
    <div style={{margin:"40px 0px 60px 0px" }}>
     <Text fontSize="3xl" >Weight Loss Made Easy</Text>
    <Stack direction="row" w="70%" m="auto" spacing="20px" mt="30px" >
  {
  data.map((item)=>{
    return <Box backgroundColor="#E1E36B8A" w="30%" p="10px"  >
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