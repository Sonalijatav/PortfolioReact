import './Projects.css'
import tictactoe from '../images/tictactoe.png'
import icecream from '../images/icecream.png'
import simon from '../images/simon.png'
import randomGifs from '../images/randomGifs.png'
import shoppingCart from '../images/shoppingCart.png'
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";


const Projects = ()  => {
    return (
        <div>
            <div className="heading-project">
              <h1>Projects</h1>
            </div>

            <div className='projects'>

              <div className='project-cards'>
                <div className='image'>
                  <img src={icecream}></img>
                </div>

                <div className='project-name'>
                  <p>Frosty Food Website</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to='https://github.com/Sonalijatav/FrostyFood.git'>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>
                 <div>
                    <NavLink to='https://sonalijatav.github.io/FrostyFood/FrostyFood/2%20assignment/'>
                       <p>Live</p>
                    </NavLink>
                 </div>
                 

                </div>
              </div>
                 
              <div className='project-cards'>
                <div className=''>
                  <img src={randomGifs}></img>
                </div>

                <div className='project-name'>
                  <p>Random Gifs Generator</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>REACT</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to='https://github.com/Sonalijatav/RandomGifsGenerator.git'>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>

                </div>
              </div>


              <div className='project-cards'>
                <div className=''>
                  <img src={shoppingCart}></img>
                </div>

                <div className='project-name'>
                  <p>Shopping Cart</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>REACT</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to='https://github.com/Sonalijatav/myshoppingcart.git'>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>

                </div>
              </div>



              <div className='project-cards'>
                <div className=''>
                  <img src={tictactoe}></img>
                </div>

                <div className='project-name'>
                  <p>Tic-Tac-Toe</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JS</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to='https://github.com/Sonalijatav/Tic-Tac-Toe.git'>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>
                 <div>
                    <NavLink to='https://sonalijatav.github.io/Tic-Tac-Toe/'>
                       <p>Live</p>
                    </NavLink>
                 </div>

                </div>
              </div>



              <div className='project-cards'>
                <div className=''>
                  <img src={simon}></img>
                </div>

                <div className='project-name'>
                  <p>Simon Game</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JS</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to='https://github.com/Sonalijatav/SimonGame.git'>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>
                 <div>
                    <NavLink to='https://sonalijatav.github.io/SimonGame/7.4simonGame.html'>
                       <p>Live</p>
                    </NavLink>
                 </div>

                </div>
              </div>



              



{/* 
              <div className='project-cards'>
                <div className=''>
                  <img src={icecream}></img>
                </div>

                <div className='project-name'>
                  <p>Frosty Food Website</p>
                </div>

                <div className='tech-stack-heading'>
                  <p>Tech Stack</p>
                </div>
                <div className='tech-stack-name'>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                    
                <div className='check'>
                    <div>
                        <p>Check here</p>
                    </div>
                   
                 <div>
                    <NavLink to=''>
                       <FaGithub className="github-icon"/>
                    </NavLink>
                 </div>

                </div>
              </div> */}
              



              
    
            </div>


        </div>
    )

};

export default Projects;