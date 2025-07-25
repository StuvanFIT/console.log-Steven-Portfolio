import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
