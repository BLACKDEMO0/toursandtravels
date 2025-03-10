import React from 'react'
import Image from 'next/image'
import ImageOne from '../../../../public/homephoto.jpg'

function Banner() {
  return (
    <div className='relative flex justify-center items-center bg-'>
        <Image className='h-screen w-screen bg-gradient-to-t from-cyan-500 to-blue-500 ' src={ImageOne}  alt='picture'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex flex-col justify-center items-center gap-3 text-white z-40'>
      <div className='text-2xl font-extralight'>EXPERIENCE THE</div>
      <div  className='text-5xl font-extralight'>Best Trip Ever</div>
        </div>
    </div>
  )
}

export default Banner