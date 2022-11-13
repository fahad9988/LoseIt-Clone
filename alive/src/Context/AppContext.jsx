import React from "react";

export const AppContext=React.createContext();


export default function AppContextProvider({children}){
const [weight,setWeight]=React.useState("");
const [gWeight,setgWeight]=React.useState("");
const [height,setHeight]=React.useState("");
const [gender,setGender]=React.useState("");
const [bday,setBday]=React.useState("");


 return <AppContext.Provider value={{weight,gWeight,setWeight,setgWeight,height,setHeight,gender,setGender,bday,setBday}}>
     {children}
 </AppContext.Provider>
}