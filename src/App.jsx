
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'



function App() {


  return (
    <section className="relative h-full w-full bg-[#0f172a]">

      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_90%,rgba(102,51,238,1)_100%)]"></div>

      <div >
        <Navbar ></Navbar>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div
      // style={{
      //   backgroundImage: "url('https://i.ibb.co/BKHwRVYG/home-grad-type-1-1.png'), url('https://i.ibb.co/KpfB8TZT/home-grad-type-2.png')",
      //   backgroundPosition: ' left top , right bottom',
      //   backgroundRepeat: 'no-repeat, no-repeat',
      //   backgroundSize: '50%,50%',
      //   backgroundOrigin: 'border-box',

      // }}
      >
        
        <AboutMe></AboutMe>
      </div>
      <div className='md:my-5 md:py-5 my-3 py-3 max-w-7xl w-full mx-auto'>
        <Skills></Skills>
      </div>
      <div  >
        <Education></Education>
      </div>
      <div >
        <Projects></Projects>
      </div>
      <div className='md:mt-10 md:py-10 mt-3 py-3 max-w-7xl w-full mx-auto'>
        <Contact></Contact>


      </div>


    </section>
  )
}

export default App
