import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Credits from './components/Credits'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Credits />
    </div>
  )
}

export default App
