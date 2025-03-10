import React from "react";
import Image from "next/image";
import ImageOne from "../../../../public/six.jpg";

function Testimonial() {
  return (
    <div className="relative h-96 mt-20">
      {/* Background Image */}
      <Image
        className="absolute inset-0  h-full object-cover"
        src={ImageOne}
        alt="Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4 text-center">
        <h2 className="text-3xl font-extralight">Sign Up for a Newsletter</h2>
        <p className="mt-2 font-extralight">Sign up for our mailing list to get the latest updates and offers.</p>

        {/* Input Section */}
        <div className="mt-4 flex items-center">
          <input
            type="email"
            className="px-4 py-2 border border-gray-300 rounded-l-full placeholder:font-extralight roun text-black"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-300 text-white rounded-r-full px-4 py-2 font-extralight ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
































































// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// const Testimonial = () => {
//     const [email, setEmail] = useState('');
//     const [subscribed, setSubscribed] = useState(false);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);

//         if (!email) {
//             setError("Please enter your email address.");
//             return;
//         }

//         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
//             setError("Please enter a valid email address.");
//             return;
//         }

//         try {
//             // Simulate API call (replace with your actual API call)
//             await new Promise(resolve => setTimeout(resolve, 1000));
//             setSubscribed(true);
//             setEmail(''); // Clear the input field
//         } catch (err) {
//             setError("An error occurred. Please try again later.");
//             console.error("Subscription error:", err);
//         }
//     };

//     return (
//         <div className="relative h-96 w-full">
//             <Image
//                 src="/six.jpg" // Replace with your image path in the public directory
//                 alt="Background Image"
//                 layout="fill"
//                 objectFit="cover"
//                 quality={100} // Adjust as needed
//             />
//             <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center text-white">
//                     <h2 className="text-4xl font-bold mb-4">Sign Up for a Newsletter</h2>
//                     <p className="text-lg mb-8">Sign up for our mailing list to get latest updates and offers.</p>

//                     {!subscribed ? (
//                         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md mx-auto">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full sm:w-2/3 px-4 py-3 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-1/3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
//                             >
//                                 Subscribe
//                             </button>
//                             {error && <p className="text-red-500 mt-2">{error}</p>}
//                         </form>
//                     ) : (
//                         <p className="text-2xl">Thank you for subscribing!</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;