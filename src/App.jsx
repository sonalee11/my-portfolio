import React from 'react'
import Navbar from './componenets/Navbar';
import About from "./componenets/About"
import ProjectsPage from './Pages/ProjectsPage';
import Resume from './componenets/Resume';
import Home from './componenets/Home';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>

   <BrowserRouter> 
       <Navbar />
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/projects' element={<ProjectsPage />}/>
       <Route path='/resume' element={<Resume />}/>
     </Routes>
   </BrowserRouter>
  </>
  )
}

export default App