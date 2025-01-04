
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Navbar from './components/navbar'
import Skills from './components/Skills'



function App() {


  return (
    <section >
      <div className='max-w-7xl w-full mx-auto'>
        <Navbar></Navbar>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div className='md:my-10 md:py-10 my-3 py-3 max-w-7xl w-full mx-auto'>
        <AboutMe></AboutMe>
      </div>
      <div className='md:my-10 md:py-10 my-3 py-3 max-w-7xl w-full mx-auto'>
        <Skills></Skills>
      </div>
      <div className='md:my-10 md:py-10 my-3 py-3 max-w-7xl w-full mx-auto'>
        <Contact></Contact>
      </div>

    </section>
  )
}

export default App
