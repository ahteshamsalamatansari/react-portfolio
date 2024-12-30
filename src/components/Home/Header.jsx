import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
            <h1 className='px-4' >
              <Link to="/"/>
              <img width={95} height={95} src= {logo} alt="" />
            </h1>
            <div className='relative md:justify-self-center'>
              <button className='menu-btn md:hidden' onClick={()=>setNavOpen((prev)=>!prev)}>
                <span className='material-symbols-rounded'>
                  {navOpen?'close':'menu'}
                </span>
              </button>
              <Navbar navOpen={navOpen}/>
            </div>
            <Link to = "/contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>
              Contact Me 
            </Link>
        </div>
    </header>
  )
}

export default Header