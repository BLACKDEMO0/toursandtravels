import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
function Blackbox() {
  return (
    <div className='bg-gray-700 h-52 flex justify-center items-center '>
      <div className='w-11/12 mx-auto grid grid-cols-5 gap-5 '>
        <div className='flex flex-col gap-2'>
          <div className='text-white'>Where:</div>
          <input className='w-full h-11 bg-gray-700 border-2 outline-none border-gray-600 bottom-1 placeholder:px-5' type="text" placeholder='Search location' />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-white'>Check-In:</div>
          <div className='flex border-2 px-4 items-center border-gray-600'>
            <input  className='w-full h-11 bg-gray-700  outline-none bottom-1 ' type="text" placeholder='Check-in date' />
            <label htmlFor='checkout'>
              <FaCalendarAlt className='text-gray-400' />
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-white'>Check-out:</div>
          <input className='w-full h-11 bg-gray-700 border-2 outline-none border-gray-600 bottom-1 placeholder:px-5' type="text" placeholder='Check-out date' />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-white'>Guest :</div>
          <input className='w-full h-11 bg-gray-700 border-2 outline-none border-gray-600 bottom-1 placeholder:px-5' type="text" placeholder='Search location' />
        </div>
        <div className=' flex items-end w-full'>
          <div className='text-gray-700 bg-yellow-300 text-center h-11 w-full flex justify-center items-center rounded-full'>Find flights</div>
        </div>
      </div>
    </div>
  )
}

export default Blackbox