import Homepage from "./components/Homepage"
import AboutMe from "./components/AboutMe"
import './App.css' 
import { Route, Routes, Link } from "react-router-dom"

function App(){
  return(
    <>
    <nav className="nav">
      <Link to="/" >Home</Link>
      <Link to="/about-me">About Me</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
    </>
  )
}

export default App