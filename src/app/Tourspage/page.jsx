import React from 'react'
import Image from 'next/image'
import tour from '../../../public/tour.jpg'
import { MdOutlineStar } from 'react-icons/md'
import photoone from '../../../public/tourpageone.jpg'
import phototwo from '../../../public/tourpagetwo.jpg'
import photothree from '../../../public/tourpagethree.jpg'
import photofour from '../../../public/tourpagefour.jpg'
import photofive from '../../../public/tourpagefive.jpg'
import photosix from '../../../public/tourpagesix.jpg'

const Page = () => {
  const data = [
    {
      photo: photoone,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    },
    {
      photo: phototwo,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    },
    {
      photo: photothree,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    },
    {
      photo: photofour,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    },
    {
      photo: photofive,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    },
    {
      photo: photosix,
      star: <MdOutlineStar />,
      startcount: 5,
      rate: '893 Views',
      place: "Family Tour in Greece",
      city: 'Athens, Greece',
      Night: '$120/night'

    }
  ]
  const datastar = (a, b) => {
    let data = []
    for (let i = 0; i < b; i++) {
      data.push({})

    }
    return data;

  }
  return (
    <div className="flex flex-col gap-9 ">
      <div className='h-screen relative'>
        <Image
          src={tour}
          alt="Tour Image"
          layout="fill"
          className='relative'
          objectFit="cover"
        />


        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="text-lg  font-thin">By colorlib.com</div>
          <div className="text-5xl font-extralight  mt-2">Find Tours</div>


        </div>
      </div>
      <div className='flex flex-col gap-3 text-center '>
        <div className='text-3xl font-extralight'>Best destination</div>
        <div className='font-extralight'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className='grid grid-cols-3 w-11/12 mx-auto  '>

        {data.map((item, index) => (
          <div key={index} className='h-fit' >
            <img src={item.photo.src} className='h-72' />
            <div className='flex  '>
              {
                datastar(item.star, item.startcount).map((val, i) => {
                  return (
                    <div className='text-yellow-500 text-sm font-extralight'>{item.star}</div>

                  )
                })
              }
              <div className='text-sm font-extralight'>{item.rate}</div>
            </div>
            <div className='text-2xl font-extralight'>{item.place}</div>
            <div className='text-sm font-extralight'>{item.city}</div>

          </div>
        ))}
      </div>

    </div>


  )
}

export default Page














