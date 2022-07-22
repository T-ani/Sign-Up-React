import React from 'react';
import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
                
            <ul className='nav-ui' >
               
                
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/sign_up">Sign Up</Link></li>
                <li><Link to ="/log_in">Log In</Link></li>
                <div></div>
            </ul>
        </div>
    )
}
export default Nav;