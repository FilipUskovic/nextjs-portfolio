"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown } from "react-icons/hi";
import Image from "next/image"


const HomeSection = () => {
  return (
  
     <section id="home">
     <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
       <div className="md:mt-2 md:w-1/2">
       <Image
            src="/mee.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
       </div>
       <div className="md:mt-2 md:w-3/5">
         <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Filip Ušković!</h1>
         <p className="text-lg mt-4 mb-6 md:text-2xl">
         <TypeAnimation
  style={{ fontSize: '2rem' , whiteSpace: 'pre-line', height: '195px', display: 'block' }}
  sequence={[
    `Full Stack Developer\nTech Enthusiast\n Almost 2 years of professional experience\
    
`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
    1000,
    '',
  ]}
  repeat={Infinity}
/>
         </p>
         <Link
           to="projects"
           className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
           activeClass="active"
           spy={true}
           smooth={true}
           offset={-100}
           duration={500}
         >
           Projects
         </Link>
       </div>
     </div>
     <div className="flex flex-row items-center text-center justify-center ">
       <Link
         to="about"
         activeClass="active"
         spy={true}
         smooth={true}
         offset={-100}
         duration={500}
       >
         <HiArrowDown size={35} className="animate-bounce" />
       </Link>
     </div>
   </section>
  );
};

export default HomeSection;
