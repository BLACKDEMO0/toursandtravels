import React from 'react'
import { BsAirplane } from "react-icons/bs"; 
import { LiaHotelSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { IoBoatOutline } from "react-icons/io5";
function Boxes() {
  return (
    <div className='absolute  w-10/12 mx-auto grid grid-cols-12  left-0 right-0  bottom-0 z-50 gap-1 '>
      <div className='bg-gray-700 text-white flex w-full gap-2 text-center items-center justify-center   '>
        <div><BsAirplane /></div>
        <div>Flight</div>
      </div>
      <div className='bg-yellow-300 h-12 w-full flex text-center items-center justify-center  gap-1 '>
        <div><LiaHotelSolid/></div>
        <div>Hotel</div>
      </div>
      <div className='bg-yellow-300 h-12 w-full flex text-center items-center justify-center  gap-1'>
        <div><IoCarSportOutline /></div>
       <div className='flex '>
       <div>Car </div>
       <div>Rent</div>
       </div>
      </div>
      <div className='bg-yellow-300 h-12 w-full flex text-center items-center justify-center  gap-1'>
        <div><IoBoatOutline /></div>
        <div> Cruises</div>
      </div>
    </div>
  )
}

export default Boxes