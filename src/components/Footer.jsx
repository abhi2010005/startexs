import React from 'react'
// import "../../../../public/backvideo.mp4"
import "../app/globals.css"


const Footer = () => {
  return (
    <div>
      <div className='flex bg-black align-bottom ml-16'>
        <div className='font-semibold bg-gradient-to-br from-red-500 to-purple-500 
        bg-clip-text text-transparent text-5xl uppercase w-[50%] mt-20 leading-normal'>
            <h2 className='pt-10'>Subscribe for <br/> new letter & <br/> daily updates</h2>
        </div>
        <hr className='h-2 bg-slate-500'/>
        <div className='w-full flex justify-end'>
            <video className='' autoPlay loop muted>
                <source src="/backvideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
      <div className='text-white text-center'>
        <h2>@copyright startexs 2024</h2>
      </div>
    </div>
    
  )
}

export default Footer;