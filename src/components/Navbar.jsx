import React from 'react'
import "../app/globals.css"
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around items-center bg-black py-4'>
        {/* <img className='text-white' alt="Logo"></img> */}
        <div
          className="p-1 bg-gradient-to-r from-red-500 via-green-700 to-blue-600 animate-rotate-border bg-[length:200%_200%] rounded-md">
          {/* Inner text container */}
          <div className="bg-black text-center rounded-md px-1">
            <Link href={'/'} className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-blue-600">
              STARTEXS
            </Link>
          </div>
        </div>
        <div className='flex px-3 py-1 text-white'>
          <Link href='/' className='mx-5'>Home</Link>
          <Link href='/about' className='mx-5'>About Us</Link>
          <Link href='/contact-us' className='mx-5'>Contact Us</Link>
        </div>
        <div className='bg-blue-600 rounded-lg'>
          <h3 className='px-3 py-1 text-white'><Link href='/book-call'>Book a Call</Link></h3>
        </div>
      </div>
      <hr className='w-full'/>
    </div>
    
  )
}

export default Navbar;