import React from 'react'
import "../app/globals.css"
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around bg-black py-4'>
        <img className='text-white' alt="Logo"></img>
        <div className='flex px-3 py-1 text-white'>
          <a href='/' className='mx-5'>Home</a>
          <a href='/about' className='mx-5'>About Us</a>
          <a href='/contactus' className='mx-5'>Contact Us</a>
        </div>
        <div className='bg-blue-600 rounded-lg'>
          <h3 className='px-3 py-1 text-white'><a href='/book-call'>Book a Call</a></h3>
        </div>
      </div>
      <hr className='w-full'/>
    </div>
    
  )
}

export default Navbar;