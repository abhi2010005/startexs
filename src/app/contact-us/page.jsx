import React from 'react'

const ContactUs = () => {
  return (
    <div className='text-white mt-20 ml-20'>
      <h2 className='text-4xl'>Tell us more about your project 🖐️✋</h2>
        <div className='w-[50%] grid gap-10'>
          <div className='mt-10 flex justify-between pr-24'>
            <div>
              <h2 className='text-xl'>Client Name:</h2>
              <input className='rounded-md text-md px-3 py-1 text-black' placeholder='eg..John Doe'/>
            </div>
            <div>
              <h2 className='text-xl'>Organization Name</h2>
              <input className='rounded-md text-md px-3 py-1 text-black' placeholder='eg..Startexs Private Ltd.'/>
            </div>
          </div>
          <div>
            <h2 className='text-xl'>Professional Email Id</h2>
            <input className='rounded-md text-md px-3 py-1 text-black' placeholder='eg..john@startexs.com'/>
          </div>
          <div>
            <h2 className='text-xl'>Please share the breif about the project</h2>
            <textarea rows={6} cols={56} className='rounded-md text-md px-3 py-1 text-black' placeholder='Its a web poject of healthcare.'/>
          </div>
        </div>
          <div className='flex gap-8 mt-5'>
            <h2>Get start with STARTEXS</h2>
            <h2>Or mail us at <a href='#' className='text-blue-500'>sales@startexs.com</a></h2>
          </div>
    </div>
  )
}

export default ContactUs