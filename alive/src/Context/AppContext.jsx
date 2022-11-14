import React from "react";

export const AppContext=React.createContext();


export default function AppContextProvider({children}){
const [weight,setWeight]=React.useState("");
const [gWeight,setgWeight]=React.useState("");
const [height,setHeight]=React.useState("");
const [gender,setGender]=React.useState("");
const [bday,setBday]=React.useState("");
const [auth,setAuth]=React.useState(false);

const loginUser=()=>{
    setAuth(true);
}


const logoutUser=()=>{
    setAuth(false);
}


const handleGender=(val)=>{
    setGender(val)
}
const handleWeight=(val)=>{
    setWeight(val)
}
const handlegWeight=(val)=>{
    setgWeight(val)
}
const handleHeight=(val)=>{
    setHeight(val)
}
const handleBday=(val)=>{
    setBday(val)
}


 return <AppContext.Provider value={{weight,handleWeight,gWeight,handlegWeight,height,handleHeight,gender,handleGender,bday,handleBday,auth,loginUser,logoutUser}}>
     {children}
 </AppContext.Provider>
}