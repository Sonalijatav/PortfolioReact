import {NavLink} from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import './Navbar.css'
const Navbar = () =>{
    return(
        <div className='nav'>
             {/* <NavLink>
                <div>
                  <IoMdHome />
                </div>
             </NavLink> */}
                    
             <p className='portfolio'>Portfolio</p>

             <div className='nav-p'>
             <NavLink to="/" className='nav-link'>
                 <p>Home</p>
             </NavLink>
             <NavLink to="/projects"  className='nav-link'>
                 <p>Project</p>
             </NavLink>
             <NavLink to="/skills"  className='nav-link'>
                 <p>Skills</p>
             </NavLink>
             <NavLink to="/contactme" className='nav-link'>
                 <p>Contact Me</p>
             </NavLink>

             </div>

        </div>
    )
}

export default Navbar;