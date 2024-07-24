import { NavLink } from "react-router-dom";
import img from '../images/sona.jpg'
import './Home.css'

import { FaContao, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import redcircle from '../images/7redcircle.avif'
import zigzag from '../images/zigzag.jpeg'
import dots from '../images/1img.png'
import plus from '../images/plus2.jpg'



const Home = () => {
    return(
        <div>
          <div className="content">

            <div className="img">
                <img src={img} height='400px' width='215px'/>
            </div>
        
                    
            <div className="content-right" >
              <p className="my-name-p">Hii!! Sonali Jatav here.</p>

              {/* <p className="I-am-p">I am a 
                <span className="web-d"> Web Developer.</span>
              </p> */}
                
              <div className="wrapper">
                 <div className="static-txt">I  am a</div>
                 <ul className="dynamic-txts">
                   <li><span>Web Developer.</span></li>
                 </ul>
              </div>
              

              <p className="about-p">I am a software engineering student and here is my portfolio website. Here you'll learn about my journey as a software developer.</p>
              

             
              
              <NavLink to="contactme">
                <button className="btn">Hire Me</button>
              </NavLink>
                
              
              
          <div className="my-contact-info">
            <div >
              <NavLink to= "https://www.linkedin.com/in/sonali-jatav-540b6b202">
                  <FaLinkedin  className="icon"/>
              </NavLink>
            </div>
            
            <div>
              <NavLink to= "https://github.com/Sonalijatav">
                  <FaGithub className="icon"/>
              </NavLink>
            </div>

            <div>
                  <IoMdContact  className="icon"
                  onClick={((contact) => window.location.href='tel:+8103287518')}/>
            </div>
            
            <div>
                  <MdEmail className="icon"
                   onClick={((mail) => window.location.href='mailto:sonalijatav972@gmail.com')}/>
            </div>
          
            <div>
                  <button className="resume"
                   onClick={((mail) => window.location.href='https://drive.google.com/file/d/1xJmzozq5YmdPPnsyMc9eJqkGzaVGcSxk/view?usp=drive_link')} >My Resume </button>
              </div>

            

          </div>
              
            </div>
          </div>
          


          <div className="last">
            <p className="my-bottom-name">Sonali Jatav</p>
            <div></div>
          </div>

        </div>
    )
}

export default Home;