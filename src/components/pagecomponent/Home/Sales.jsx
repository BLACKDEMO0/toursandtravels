import React from 'react';
import Image from 'next/image';

function Sales() {
  return (
    <div className="relative w-full h-96 mt-[6.5rem] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src="/sales.jpg" 
          alt="Sales Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div> 
      </div>

      <div className="relative z-10 text-white text-center p-6">
        <div className="text-yellow-300 font-bold text-3xl sm:text-4xl md:text-5xl">45%</div>
        <div className="text-lg sm:text-xl md:text-2xl font-semibold">OFF SALES</div>
        <p className="mt-2 max-w-md text-sm sm:text-base md:text-lg font-extralight mx-auto">
          Just hurry up! Limited offer. Separated they live in Bookmarksgrove
          right at the coast of the Semantics, a large language ocean.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-extralight text-sm sm:text-base">
            Book Now
          </button>
          <button className="bg-gray-700 px-6 py-3 rounded-full font-extralight text-sm sm:text-base">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sales;
