import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
 return (
  <div style={{padding:"10px 10px"}} >
   <div>
    <Link to="/"><img  src="https://assets.loseit.com/website/corporate/LoseIt_Logo_NoTagline_FullColor.svg" alt="logo"  style={{width:"220px"}} /></Link>
   </div>
  </div>
)
}

export default Nav