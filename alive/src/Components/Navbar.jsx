import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
const {auth,logoutUser}=React.useContext(AppContext);

  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px 60px"}} >
     <div>
      <Link to="/"><img  src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg" alt="logo"  style={{width:"200px"}} /></Link>
     </div>
     <div style={{paddingTop:"12.5px"}}>
      {auth? <button className={style.btn} style={{padding:"10px 30px",borderRadius:"5px",backgroundColor:"#ff9400",color:"white"}} onClick={()=>{logoutUser()}} >Logout</button>:<Link to="/login"><button className={style.btn} style={{padding:"10px 30px",borderRadius:"5px",backgroundColor:"#ff9400",color:"white"}} >Login</button></Link>}
   
     </div>
    </div>
  )
}

export default Navbar