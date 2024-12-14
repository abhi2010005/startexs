'use client'
import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const works = [
    {
        imgsrc: "/workImage.jpg",
        title: "Frontend Development",
        service: "Reactjs/Nextjs",
        duration: "10 - 15 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Backend Development",
        service: "Nodejs/SpringBoot",
        duration: "15 - 20 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Android Development",
        service: "Java/Kotlin",
        duration: "35 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Full Stack Web Development",
        service: "MERN/ Reactjs+SpringBoot / WordPress",
        duration: "30 Days"
    }
]

const Service = () => {
  return (
    <div>
        <h2 className='text-white text-3xl font-Pixelify font-serif mb-6'>Service...</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mx-4'>
            {works.map((work)=>{ 
                return <Link href="#" key={work.title} className='bg-black  rounded-2xl overflow-hidden border-2 border-gray-800' >
                    <div className='text-center text-white p-7 hover:scale-105 ease-in-out duration-300'>
                        <img src={work.imgsrc} alt='logo' className='w-full object-cover mr-5 rounded-md'/>
                        <div className='mt-4'>
                            <h2 className='text-xl md:text-2xl font-myFont'>{work.title}</h2>
                            <h3>{work.service}</h3>
                            <p>{work.duration}</p>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    </div>
    
  )
}

export default Service;
