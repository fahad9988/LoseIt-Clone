import React from 'react';
import style from "./Android.module.css";
import { Heading,Box,Image,Stack } from '@chakra-ui/react';

const Android = () => {
  return (
    <div className={style.getStarted} >
<Heading  size="lg">Get Started on Mobile</Heading>
<Stack direction="row" justifyContent="center" spacing="20px" mt="25px" >
<Box >
 <a href="https://apps.apple.com/app/lose-it/id297368629"><Image src="https://assets.loseit.com/website/home/Download_Apple.svg"  w="250px"></Image></a>
 </Box>
 <Box>
 <a href="https://play.google.com/store/apps/details?id=com.fitnow.loseit&">
 <Image src="https://assets.loseit.com/website/home/Download_GooglePlay.svg" w="275px" ></Image>
 </a>

</Box>
</Stack>

    </div>
  )
}

export default Android