import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact"
const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Contact" element = {<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
