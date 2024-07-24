
import { NavLink, Route, Routes } from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'


function App() {

  return (
    <>
      <h1></h1>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>

      
      {/* <Projects/>
      <Skills/>
      <ContactMe/> */}

    </>
  )
}

export default App
