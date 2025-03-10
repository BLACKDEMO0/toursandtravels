import React from 'react';
import one from '../../../../public/one.jpg';
import two from '../../../../public/two.jpg';
import three from '../../../../public/three.jpg';
import four from '../../../../public/four.jpg';
import five from '../../../../public/five.jpg';
import six from '../../../../public/six.jpg';
import seven from '../../../../public/seven.jpg';
import eight from '../../../../public/eight.jpg';

function Destination() {
  const data = [
    { image: one },
    { image: two },
    { image: three },
    { image: four },
    { image: five },
    { image: six },
    { image: seven },
    { image: eight },
  ];

  return (
    <div>
      <div className="text-center flex flex-col gap-6 m-20">
        <div className="text-3xl font-extralight text-black mt-2">Popular Destinations</div>
        <div className="font-extralight">
          We love to tell our successful far far away, behind the word mountains, far from the <br />
          countries Vokalia and Consonantia, there live the blind texts.
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {data.map((item, index) => (
          <img
            key={index}
            className="h-72 w-full object-cover"
            src={item.image.src}
            alt={`destination-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Destination;
