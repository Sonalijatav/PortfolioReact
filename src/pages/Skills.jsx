import python from '../images/python.png'
import cpp from '../images/c++.png'
import css from '../images/css-icon-png-0.jpg'
import html from '../images/htmlicon.png'
import react from '../images/react1.png'
import javascript from '../images/js.png'
import './Skills.css'

const Skills = ()  => {
    return (
      <div>
        <div className='skill-container'>

          <div className='skill-content'>
            <div className='tech-stack'>
                <h1 className='m'>M<span>e and</span></h1>
                <p>MyTech Stack</p>
            </div>

            <div className='skill-p'>
                <p>Here are my skills.</p>
                <p>Desire to learn new skills and technologies.</p>
                 <p>Passionate for tech skills.</p>
            </div>
          </div>



          <div className='skill-img'>
            <img src={html}/>
            <img src={css}/>
            <img src={javascript}/>
            <img src={cpp}/>
            <img src={python}/>
            <img src={react}/>
          </div>

          

        </div>

        <div className='skill-last'>
            <h1>Skills</h1>
          </div>
      </div>
    )

};

export default Skills;