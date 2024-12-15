'use client'
import React, { useState } from 'react'
import "./globals.css"
import Service from '@/components/Service';
import LatestWork from '@/components/LatestWork';
import HeroText from '@/components/HeroText';
const Home = () => {

  const [isAnimating, setIsAnimating] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 5000); // Change duration based on your preference
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mx-16 mt-20'>
        <div className='grid grid-cols-2 bg-slte-400 mb-10'>
          <div className='text-white'>
            <div className='bg-gradient-to-r from-green-600 to-green-400 rounded-xl px-3 w-52 text-center flex items-center'>
              <img className='w-4 h-4 rounded-sm mr-1' src='/green-tick.jpg' alt=''/>
              <h2 className=''>
              Available to work</h2>
            </div>
            {/* <h1 className='bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text text-5xl uppercase font-semibold mt-2'>Empowering your <br/> vision with Startexs</h1> */}
            <HeroText />
            <p className='mt-2'>At Startexs, we transform your ideas into reality. Through cutting-edge innovation and solutions tailored to your unique needs, we empower businesses to achieve their true potential. Partner with us to unlock new possibilities, elevate your brand, and drive success with precision and creativity. Join us on a journey where your vision meets our expertise, and together, we&apos;ll build a future that inspires.</p>
          </div>
          <div className=''>
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

export default Home;