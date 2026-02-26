import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div className='w-full h-full relative overflow-x-hidden '> 
          
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact />
          <Footer />
        </div>
  )
}

export default Home;