import React from 'react'
import Image from 'next/image'
import about from '../../../public/about.jpg'


const Page = () => {
  
  return (
    <div className=" h-screen w-screen">

     <div>
     <Image 
        src={about} 
        alt="Tour Image"
        layout="fill"
        className='relative'
        objectFit="cover"
      />

  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <div className="text-lg  font-thin">By colorlib.com</div>
        <div className="text-5xl font-extralight  mt-2">About Us</div>
     
      </div>

     </div>
   
      <div>doeojd</div>
      
    </div>
    
    
  )
}

export default Page














