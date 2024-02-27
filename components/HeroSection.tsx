"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/invest2.png"
            alt=""
            width={500}
            height={500}
            
          />
        </div>
        <div className="md:mt-2 md:w-3/5 text-right">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">استثمر</h1>
        <p className="text-lg mt-4 mb-6 md:text-2xl">
            نحن {" "}
            <span className="font-semibold text-teal-600">
              منصة تسهل{" "}
            </span>
            جمع التطبيقات والمنصات التي تساعد كل مستثمر وتسهل له دروبه وخطواته في مكان واحد، كما أننا نسمح للشركات بأن تعرض فرصها ونسمح للمستثمر بالاشتراك في نشرتنا الدورية
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
           اكتشف الفرص
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
  ) 
}

export default HeroSection
