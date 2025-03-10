import React from 'react'
import Image from 'next/image'
import hotel from '../../../public/hotel.jpg'


const Page = () => {
  
  return (
    <div className=" h-lvh w-full ">

     <div>
     <Image 
        src={hotel} 
        alt="Tour Image"
        layout="fill"
        className='relative'
        objectFit="cover"
      />

  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <div className="text-lg  font-thin">By colorlib.com</div>
        <div className="text-5xl font-extralight  mt-2">Find Hotel</div>
     
      </div>
     </div>
   
      <div></div>
      
    </div>
    
    
  )
}

export default Page

