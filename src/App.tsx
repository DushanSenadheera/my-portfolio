import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Tech from './components/Tech/Tech'
import Projects from './components/Projects/Project'
import Blogs from './components/Blogs/Blogs'
import {GetInTouch} from './components/Contact/GetInTouch'
import Footer from './components/Footer/Footer'
import '@mantine/carousel/styles.css';
import './App.scss'
import About from './components/About/About'
import Services from './components/Services/Services'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Tech />
      <About/>
      <Services />
      <Projects />
      <Blogs />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
