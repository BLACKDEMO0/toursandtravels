import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { GiBattleship } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";

function Amazing() {
  const data = [
    {
      icons: <IoEarthOutline />,
      title: "Amazing Travel",
      description:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.",
    },
    {
      icons: <GiBattleship />,
      title: "Ocean Adventure",
      description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.",
    },
    {
      icons: <IoCarSportOutline />,
      title: "Fast & Furious",
      description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.",
    },
    {
      icons: <IoNewspaperOutline />,
      title: "Daily Updates",
      description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies.",
    },
  ];

  return (
    <div className="grid grid-cols-1 w-11/12 md:grid-cols-2 lg:grid-cols-5  ">
      {data.map((item, index) => (
        <div
          key={index}
          className={`h-80 flex items-center justify-center p-4  ${
            index === 0 ? "bg-sky-500 col-span-2 w/10/12  text-white" : "bg-gray-100"
          }
  
          
          
          `}


          
          
        >
          <div className="text-center text-gray-500 flex flex-col items-center">
            <div  key={index} className={`text-5xl  text-sky-500  h-20   w-20 items-center rounded-full  flex justify-center ${index===0 ? "bg-white rounded-full":"bg-gray-200 rounded-full"}`}>{item.icons}</div>
            <div className="text-xl font-extralight text-black  mt-2">{item.title}</div>
            <div className="mt-2 w-10/12 mx-auto font-light text-center">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Amazing;
