import React from 'react'
import Navbar from '../components/Navbar'
import UserDisplay from '../components/UserDisplay'

function Home() {
  return (
    <div className='relative'>
      <Navbar />
      <UserDisplay />
    </div>
  )
}

export default Home