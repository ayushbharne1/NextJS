import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[10vh] bg-yellow-600 flex items-center justify-center text-3xl gap-x-16'>
        <h1>NavBar</h1>
        <input type="text" className='px-4 py-2 rounded-sm border-2 border-white focus:outline-none focus:border-white bg-transparent text-lg text-white' />
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/services'>Sevices</Link>
        <Link href='/more'>More</Link>
    </div>
  )
}

export default Navbar