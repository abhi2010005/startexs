import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const page = () => {
  return (
    <div className='text-white mx-16 mt-20'>
      <div className='grid grid-cols-2 gap-20'>
        <div className=''>
          <h2 className='text-4xl font-serif'>Who we are...🙎‍♂️</h2>
          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et fugit, suscipit in quos obcaecati recusandae quae debitis ut est, architecto, modi aut ipsum iure natus reiciendis officiis dolorum praesentium quia temporibus eius vero omnis? Eius, tenetur molestiae eum dolor officia sed consequatur velit, pariatur similique quae culpa consectetur amet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dignissimos praesentium odit quas? Impedit pariatur voluptas deleniti dignissimos blanditiis facere. Odit nisi, ipsum saepe, dignissimos eaque enim officia voluptas rerum et optio vitae culpa expedita, cupiditate tempora illo dolores. Adipisci cupiditate nisi tempora suscipit laborum obcaecati debitis, qui blanditiis fugit!</p>
        </div>
        <div className='bg-gray-300 flex items-center '>
          <img className='border-2 border-gray-300' src='/next.svg' alt='logo'/>
        </div>
      </div>  
      <h2 className='text-4xl font-serif mt-16'>Brains🤯 Behind Startexs...</h2>
      <div className='flex justify-evenly mt-16 text-center'>
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
          <h2>Abhinav Sharma</h2>
          <p>Full Stack Developer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
            </a>
          </div>
        </div>
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
          <h2>Amit Gupta</h2>
          <p>Frontend Developer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
                <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
                <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
              </a>
          </div>
        </div>
        <div>
          <img className='w-64 h-72 rounded-lg' src='/profile_photo.png'/>
          <h2>Dewang Singh</h2>
          <p>UX/UI Designer</p>
          <div className='flex gap-3 justify-evenly mt-5'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
                <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 bg-blue-700 text-black rounded-md' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='flex justify-around '>
                <FontAwesomeIcon icon={faGithub} className='w-6 h-6 bg-white text-black rounded-md' />
              </a>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default page