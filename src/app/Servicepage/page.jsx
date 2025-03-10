import React from 'react'
import Image from 'next/image'
import service from '../../../public/service.jpg'
import Amazing from '@/components/pagecomponent/Home/Amazing'

const Page = () => {
  return (
    <main className="h-lvh w-full relative ">
     
      <div className="relative h-full w-full">
        <Image
          src={service}
          alt="Tour Image"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
     
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="text-lg font-thin">By colorlib.com</div>
          <div className="text-5xl font-extralight mt-2">Our Services</div>
        </div>
      </div>
<div></div>
     
      <div className="h-screen w-full">
        <Amazing />
      </div>
    </main>
  )
}

export default Page










