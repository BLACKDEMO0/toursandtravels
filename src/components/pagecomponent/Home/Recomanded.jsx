import React from 'react'
import hotelf from '../../../../public/hotelone.jpg'
import hotels from '../../../../public/hoteltwo.jpg'
import hotelt from '../../../../public/hotelthree.jpg'
import { MdOutlineStar } from "react-icons/md";

function Recomanded() {
  const data = [
    {
      image: hotelf,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '535 Views',
      name: 'Hotel Edition',
      place: 'New York',
      discriptiom: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      Night: '$120/night'
    },
    {
      image: hotels,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '683 Views',
      name: 'Hotel Mola',
      place: 'Australia',
      discriptiom: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      Night: '$120/night'
    },
    {
      image: hotelt,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      name: 'Hotel Malien',
      place: 'UK london',
      discriptiom: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      Night: '$120/night'
    }
  ];

  const datastar = (a, b) => {
    let data = []
    for (let i = 0; i < b; i++) {
      data.push({})
    }
    return data;
  }

  return (
    <div className='flex flex-col gap-20 mt-20 relative'>
      <div className='flex flex-col gap-6'>
        <div className='text-black text-3xl font-extralight text-center'>Recommended Hotels</div>
        <div className='font-extralight text-center'>We love to tell our successful far far away, behind the word mountains, far from the <br />countries Vokalia and Consonantia, there live the blind texts.</div>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-10'>
        {data.map((item, index) => (
          <div className='flex flex-col'>
            <div className='relative'>
              <div className='h-12 w-24 bottom-0 text-center flex items-center justify-center absolute bg-sky-500 text-white font-semibold'>
                {item.Night}
              </div>
              <img src={item.image.src} className='h-72 object-cover' alt="" />
            </div>

            <div className='flex'>
              {datastar(item.star, item.startcount).map((val, i) => (
                <div key={i} className='text-yellow-500 font-extralight'>{item.star}</div>
              ))}
            </div>
            <div className='text-sm font-extralight'>{item.rate}</div>
            <div className='text-2xl font-extralight'>{item.name}</div>
            <div className='text-sm font-extralight'>{item.place}</div>
            <div className='font-extralight'>{item.discriptiom}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recomanded;
