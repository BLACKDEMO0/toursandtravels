import React from 'react';
import Image from 'next/image';
import one from '../../../../public/one.jpg';
import two from '../../../../public/two.jpg';
import three from '../../../../public/three.jpg';
import four from '../../../../public/four.jpg';

function Mostpopular() {
    const data = [
        {
            photo: one,
            city: "Rome",
            days: 5,
            price: 120
        },
        {
            photo: two,
            city: "Venice",
            days: 5,
            price: 120
        },
        {
            photo: three,
            city: "Palermo",
            days: 5,
            price: 120
        },
        {
            photo: four,
            city: "Milan",
            days: 5,
            price: 120
        }
    ];

    return (
        <div className='mt-20 container mx-auto p-4'>
            <div className='text-center flex flex-col gap-6'>
                <div className='text-3xl font-extralight'>Most Popular Travel Countries</div>
                <div className='font-extralight'>We love to tell our successful far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8"> {/* Adjusted grid-cols */}
                {data.map((val, i) => (
                    <div key={i} className="border rounded-lg shadow-sm">
                        <div className=" relative h-48 w-full ">
                            <Image
                                src={val.photo}
                                alt={val.city}
                                layout="fill"
                                objectFit="cover"
                                className='h-96 w-6'
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                                <h3 className="text-white font-medium">{val.city} - {val.days} DAYS</h3>
                                <p className="text-white text-sm">${val.price}/person</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mostpopular;