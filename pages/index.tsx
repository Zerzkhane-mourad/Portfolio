import About from '@/Components/About'
import Hero from '@/Components/Hero'
import MobileNavbar from '@/Components/MobileNavbar'
import Navbar from '@/Components/Navbar'
import Projects from '@/Components/Projects'
import Services from '@/Components/Services'
import Skills from '@/Components/Skills'
import { useState } from 'react'

const HomePage = () => {

  const [navMobile, SetNavMobile] = useState(false)
  const openNavMobile = () => SetNavMobile(true)
  const closeNavMobile = () => SetNavMobile(false)

  return (
    <div className='overflow-x-hidden'>

      <MobileNavbar closeNav={closeNavMobile} nav={navMobile} />
      <Navbar openNav={openNavMobile} />
      <Hero />
      <div className='relative z-30'>
        <About />
      </div>
      <Services />
      <Skills />
      <div className='relative z-30'>
        <Projects />
      </div>

    </div>
  )
}

export default HomePage