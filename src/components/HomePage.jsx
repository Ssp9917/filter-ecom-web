import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const HomePage = () => {
  return (
    <div className='w-[1200px] mx-auto '>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default HomePage