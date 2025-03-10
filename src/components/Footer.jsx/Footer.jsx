import React from "react";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function Footer() {
  const data = [
    {
      title: "Tour Agency",
      description:
        "Facilis ipsum reprehendent nemo molestias. Aut cum mollitio reprehendent. Eos cumque dicta adipisci architecto culpa amet.",
      links: [
        { text: <LiaFacebookF />, url: "#" },
        { text: <FaTwitter />, url: "#" },
        { text: <FaLinkedin />, url: "#" },
        { text: <AiOutlineGlobal />, url: "#" },
      ],
    },
    {
      title: "Book Now",
      links: [
        { text: "Flight", url: "#" },
        { text: "Hotels", url: "#" },
        { text: "Tour", url: "#" },
        { text: "Car Rent", url: "#" },
        { text: "Beach & Resorts", url: "#" },
        { text: "Cruises", url: "#" },
      ],
    },
    {
      title: "Top Deals",
      links: [
        { text: "Edina Hotel", url: "#" },
        { text: "Quality Suites", url: "#" },
        { text: "The Hotel Zephyr", url: "#" },
        { text: "Da Vinci Villa", url: "#" },
        { text: "Hotel Epikk", url: "#" },
      ],
    },
    {
      title: "Blog Post",
      links: [
        {
          text: "The Ultimate Packing List For Female Travelers",
          url: "#",
        },
        {
          text: "How These 5 People Found The Path to Their Dream Trip",
          url: "#",
        },
        {
          text: "A Definitive Guide to the Best Dining and Drinking Venues in the City",
          url: "#",
        },
      ],
    },
    {
      title: "Contact Information",
      links: [
        { text: "291 South 21th Street, Suite 721 New York NY 10016", url: "#" },
        { text: "+1 255 2355 98", url: "#" },
        { text: "karunpanthee@gmail.com", url: "#" },
        { text: "karunpanthee.com", url: "#" },
      ],
    },
  ];

  return (
    <div className="bg-gray-600 py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {data.map((val) => (
          <div key={val.title} className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">{val.title}</h3>
            {val.description && <p className="text-gray-400 text-sm">{val.description}</p>}
            <div className="flex flex-col gap-2">
              {val.links.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-400 text-sm hover:text-white transition duration-300"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center mt-8 space-x-4 lg:hidden">
        {data[0].links.map((item, index) => (
          <a key={index} href={item.url} className="text-gray-400 text-xl hover:text-white transition duration-300">
            {item.text}
          </a>
        ))}
      </div>

    
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Tour Agency. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
