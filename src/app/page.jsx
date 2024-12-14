import React from 'react'
import "./globals.css"
import Service from '@/components/Service';
import LatestWork from '@/components/LatestWork';
const page = () => {
  return (
    <div className='mx-16 mt-20'>
        <div className='grid grid-cols-2 bg-slte-400 mb-10'>
          <div className='text-white'>
            <div className='bg-gradient-to-r from-green-600 to-green-400 rounded-xl px-3 w-52 text-center flex items-center'>
              <img className='w-4 h-4 rounded-sm mr-1' src='/green-tick.jpg' alt=''/>
              <h2 className=''>
              Available to work</h2>
            </div>
            <h1 className='bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text text-5xl uppercase font-semibold mt-2'>Empowering your <br/> vision with Startexs</h1>
            <p className='mt-2'>At Startexs, we tranform your idea in to reality. Through innovative solutions tailored to your need. Join us on a jurney</p>
          </div>
          <div className='bg-slate-100'>
            <video className='object-cover' autoPlay loop muted>
                <source src="/backvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Service/>
        <LatestWork/>
    </div>
  )
}

export default page;