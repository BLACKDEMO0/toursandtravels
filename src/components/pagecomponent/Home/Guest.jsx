import React from 'react'
import Image from 'next/image'
import guest from '../../../../public/guest.jpg'

function Guest() {
  return (
    <div className='mt-24'>
        <div className='flex flex-col gap-10 '>

            <div className='text-center text-3xl font-extralight'>Our Satisfied Guests says</div>
            <div className='text-center font-extralight' >We love to tell our successful far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts.</div>
            
        </div>




        <div className='text-center'>
            {/* photolai */}
            <div className=' flex flex-col gap-2 mt-10'>
                <div className='w-full flex flex-col gap-2 items-center justify-center'>                 
                   <Image className='h-24 w-24  rounded-full text-center object-cover' src={guest}/>
                    
                
                <div className='font-extralight text-xl'>Morko</div>
                <div className='font-extralight'>Australia</div>
                </div>
                <div>
                  <div className='font-extralight'>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for <br /> the far World of Grammar.</div>
                </div>

             </div> 
            {/* textlai */}
            {/* <div></div> */}
        </div>
    </div>
  )
}

export default Guest