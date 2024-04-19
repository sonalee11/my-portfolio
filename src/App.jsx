import React from 'react'
import Navbar from './componenets/Navbar';
import About from "./componenets/About"
import Projects from './componenets/Projects';
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
       <Route path='/projects' element={<Projects />}/>
       <Route path='/resume' element={<Resume />}/>
     </Routes>
   </BrowserRouter>
  </>
  )
}

export default App