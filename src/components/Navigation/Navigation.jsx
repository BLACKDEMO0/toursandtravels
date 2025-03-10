import Link from 'next/link'
import React from 'react'




const Navigation = () => {
  return (
    <div>
      <div className=' flex fixed  top-0 z-50 w-full mt-10 text-center items-center justify-center '>
        {/* <div>
       
      </div> */}
        <div className='w-11/12 flex justify-between mx-auto '>
          <div>
            <div className='text-2xl text-white font-extralight' >TOUR</div>

          </div>
          <div className='flex gap-10  text-white font-extralight'>
            <Link href="/" className='hover:text-yellow-300 delay-75 transition-all duration-700 '> <div>Home </div></Link>
            <Link href="/Tourspage" className='hover:text-yellow-300  delay-75 transition-all duration-700'> <div>Tours</div></Link>
            <Link href="/Hotelspage" className='hover:text-yellow-300  delay-75 transition-all duration-700'> <div>Hotels</div></Link>
            <Link href="/Servicepage" className='hover:text-yellow-300  delay-75 transition-all duration-700'>  <div>Services</div></Link>
            <Link href="/Blogpage" className='hover:text-yellow-300  delay-75 transition-all duration-700'><div>Blog</div></Link>
            <Link href="/Aboutpage" className='hover:text-yellow-300  delay-75 transition-all duration-700'><div>About</div></Link>
            <Link href="/Contactpage" className='hover:text-yellow-300  delay-75 transition-all duration-700'><div>Contact</div></Link>



          </div>


        </div>

      </div>

    </div>

  )
}

export default Navigation