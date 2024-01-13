import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Tech from './components/Tech/Tech'
import Projects from './components/Projects/Project'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import '@mantine/carousel/styles.css';
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Tech />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
