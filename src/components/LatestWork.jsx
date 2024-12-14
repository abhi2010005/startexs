'use client'
import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const works = [
    {
        imgsrc: "/workImage.jpg",
        title: "Latest Work Name",
        service: "E-commers Website",
        duration: "10 - 15 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Latest Work Name1",
        service: "Banking Website",
        duration: "15 - 20 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Latest Work Name2",
        service: "Blogging Website",
        duration: "30 Days"
    },
    {
        imgsrc: "/workImage.jpg",
        title: "Latest Work Name3",
        service: "Healthcare Website",
        duration: "30 Days"
    }
]

const LatestWork = () => {
  return (
    <div>
        <h2 className='text-white text-3xl font-Pixelify font-serif mt-10'>Latest Work...</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {works.map((work)=>{ 
                return <Link href="#" key={work.title} className='' >
                    <div className='md:flex justify-between text-center bg-black text-white border-2 border-gray-800 rounded-2xl m-6 overflow-hidden p-4'>
                        <img src={work.imgsrc} alt='logo' className='object-cover mr-5 rounded-md'/>
                        <div className=''>
                            <h2 className='text-xl md:text-2xl'>{work.title}</h2>
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

export default LatestWork