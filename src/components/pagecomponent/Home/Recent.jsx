import React from 'react'
import recent from '.././/../../../public/recent-one.jpg'
import five from '../../../../public/five.jpg'
import six from '../../../../public/six.jpg'
import seven from '../../../../public/seven.jpg'


function Recent() {
    const data =[
        {
            photo:five,
            date:'Feb 22, 2018',
            discription: 'A Definitive Guide to the Best  Dining',
            subdiscription:'Activities'
         

        },
        {
            photo:six,
            date:'Feb 22, 2018',
            discription: 'How These 5 People Found The Path to Their Dream Trip',
            subdiscription:'Activities'
         

        },
        {
            photo:seven,
            date:'Feb 22, 2018',
            discription: 'Our Secret Island Boat Tour Is just for You',
            subdiscription:'Activities'
         

        }
    ]
  return (
<div className='mt-20' >
    <div className='text-center font-extralight flex flex-col gap-6'>
        <div  className=' text-black text-3xl'>Recent Blog</div>
        <div >We love to tell our successful far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts.</div>
    </div>
    <div className='grid grid-cols-2 w-10/12 gap-32 mx-auto justify-between mt-20'>
        <div>
        <img src="/recent-one.jpg" className='h-96 w-full' alt="" />
        </div>
        <div className=''>
            {data.map((item, index)=>(
                <div className='flex gap-3  h-32'>
                 <div>
                 <img className='h-20 w-20 rounded-full' src={item.photo.src} alt="" />
                 </div>
                    <div className='flex flex-col gap-2'>
                        <div className='font-extralight'>{item.date}</div>
                        <div className='text-xl font-extralight'>{item.discription}</div>
                        <div className='font-extralight'>{item.subdiscription}</div>
                    </div>
                </div>

            ))}

            
        </div>
    </div>
</div>
  )
}

export default Recent


{/* <div>
<div>
  <img src={} alt="" />
    <div>
        <div>feb22</div>
        <div>A Definitive Guide to the Best Dining</div>
        <div>Activities</div>
    </div>
</div>
<div></div>
<div></div>
</div> */}