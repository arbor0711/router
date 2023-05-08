import Homepage from "./components/Homepage"
import AboutMe from "./components/AboutMe"
import './App.css' 

function App(){
  return(
    <>
    <nav className="nav">
      <a href="/">Home</a>
      <a href="#">About me</a>
    </nav>
    <Homepage />
    <AboutMe />
    </>
  )
}

export default App