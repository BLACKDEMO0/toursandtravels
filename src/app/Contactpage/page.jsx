import React from 'react'
import Image from 'next/image'
import contact from '../../../public/contact.jpg'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa'
import { IoIosSend } from "react-icons/io";
import { AiOutlineGlobal } from 'react-icons/ai'


const Page = () => {

  return (
    <div>
      <div className=" h-screen">

        <div>
          <Image
            src={contact}
            alt="Tour Image"
            layout="fill"
            className='relative'
            objectFit="cover"
          />


          <div className="absolute inset-0 bg-black bg-opacity-50"></div>


          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <div className="text-lg  font-thin">By colorlib.com</div>
            <div className="text-5xl font-extralight  mt-2">Contact Us</div>

          </div>
        </div>




      </div>
      <div className=' h-full  w-10/12 mx-auto mt-10 font-extralight '>
        <div className='text-2xl font-extralight'>Get In Touch</div>
        <div className='flex gap-3 w-[85%] mx-auto justify-between mt-5 '>
          <div className='flex flex-col gap-3'>
            <div >First Name</div>
            <input className='placeholder:px-2 w-[520px] h-12 border border-gray-400' type="text" placeholder='Your firstname' />

          </div>
          <div className='flex flex-col gap-3'>
            <div>Last Name</div>
            <input className=' placeholder:px-2 w-[520px] h-12 border border-gray-400' type="text" placeholder='Your lastname' />

          </div>
        </div>
      <div className='w-[85%] mx-auto flex flex-col gap-2 mt-2'>
        <div className='flex flex-col gap-3'>
          <div>Email</div>
        <input className='placeholder:px-2 w-[100%] h-12 border border-gray-400' type="text" placeholder='Your email address' />
        </div>
     <div className='flex flex-col gap-3'>
      <div>Subject</div>
      <input className='placeholder:px-2  w-[100%] h-12 border border-gray-400' type="text" placeholder='Your subject of this message'/>
     </div>
        <div className='flex flex-col gap-3'>
          <div>Message</div>
        <input className='placeholder:px-2 flex   w-[100%] h-32 border border-gray-400' type="text" placeholder='Say somthing about us' />
        </div>
        
      </div>
     
      </div>
  <div>
  <div className='mt-5 bg-yellow-300 w-40 h-10 flex justify-center items-center rounded-full text-white text-center mx-auto '>Send Message</div>
  <div className='flex flex-col w-8/12 mx-auto font-extralight'>
    <div className='mt-5 text-2xl'>Contact Information</div>
    <div className='flex gap-20 mt-5'>
      <div className='flex gap-2'>
        <div><FaLocationDot /></div>
        <div> 198 West 21th Street,<br />
        Suite 721 New York NY 10016 </div>
      </div>
      <div className='flex gap-2 '>
        <div><FaPhone /></div>
        <div>+977-9763642278</div>
      </div>
      <div className='flex gap-2'>
        <div><IoIosSend/></div>
        <div>karunpanthee@gmail.com</div>
      </div>
      <div className='flex gap-2'>
        <div>
        <AiOutlineGlobal /></div>
        <div>karunpantheenepal.com</div>
      </div>
    </div>
  </div>
  </div>

    </div>


  )
}

export default Page

