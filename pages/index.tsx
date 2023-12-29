import MobileNavbar from '@/Components/MobileNavbar'
import Navbar from '@/Components/Navbar'
import { useState } from 'react'

const HomePage = () => {

  const [navMobile, SetNavMobile] = useState(false)
  const openNavMobile = () => SetNavMobile(true)
  const closeNavMobile = () => SetNavMobile(false)

  return (
    <div className='overflow-x-hidden'>
      <MobileNavbar closeNav={closeNavMobile} nav={navMobile}/>
      <Navbar openNav={openNavMobile} />  


    </div>
  )
}

export default HomePage