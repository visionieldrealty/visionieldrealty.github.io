import React from "react";
import { useNavigate } from "react-router-dom";

import homePage3 from "../assets/img/homePage3.png";
import homePage4 from "../assets/img/homePage4.png";
import homePage5 from "../assets/img/homePage5.png";
import homePage6 from "../assets/img/homePage6.png";

import servicePage1 from "../assets/img/servicePage1.png";
import servicePage2 from "../assets/img/servicePage2.png";
import servicePage3 from "../assets/img/servicePage3.png";
import servicePage4 from "../assets/img/servicePage4.png";

export default function Services() {
  const navigator = useNavigate();
  const navigate = (p) => {
    navigator(p);
    window.scrollTo(0, 0);
  };
  return (
    <main>
      {/* section-1 */}
      <div className="bg-gray-custom-2 text-white text-center pt-20 pb-12 mb-20">
        <div className="text-6xl md-text-custom pb-10 px-0 sm:px-0">
          Our <span className="text-orange-custom">services</span>
        </div>
        <div className="px-10 md:w-96 md:px-0 mx-auto font-light">
          Immerse Yourself in Our Comprehensive Range of Specialized Services.
        </div>
      </div>
      {/* section-1 => ends */}
      {/* section-2 */}
      <div className="flex flex-col md:flex-row justify-between items-stretch mx-4 md:mx-10 shadow-custom-3 rounded-custom-3 px-7 md:px-12 py-9 md:gap-40 mt-10 md:mt-8">
        <div className="md:w-7/12 flex flex-col gap-10 md:gap-16">
          <div className="flex justify-center md:justify-start items-center md:gap-5">
            <div className="h-16">
              <img className="h-full" src={homePage3} alt="" />
            </div>
            <div className="text-center font-medium text-3xl md:text-4xl">
              Project Branding
            </div>
          </div>
          <div className="text-sm md:text-lg text-center md:text-left leading-6 md:w-11/12">
            Elevate your real estate project's identity with our comprehensive
            branding service. From meticulous logo design to compelling brand
            messaging, we specialize in crafting cohesive brand identities that
            resonate with target audiences, driving recognition and fostering
            project distinction in competitive markets.
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/contact")}
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
            >
              REACH US
            </button>
          </div>
        </div>
        <div className="md:w-5/12 pt-6 h-60 md:h-auto">
          <img
            className="h-full w-full object-cover"
            src={servicePage1}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between h-min mx-4 md:mx-10 shadow-custom-3 rounded-custom-3 px-7 md:px-12 py-9 md:gap-40 mt-10 md:mt-8">
        <div className="md:w-7/12 flex flex-col gap-10 md:gap-16">
          <div className="flex justify-center md:justify-start items-center md:gap-5">
            <div className="h-16">
              <img className="h-full" src={homePage4} alt="" />
            </div>
            <div className="text-center font-medium text-3xl md:text-4xl">
              Marketing Management
            </div>
          </div>
          <div className="text-sm md:text-lg text-center md:text-left leading-6 md:w-11/12">
            Our innovative marketing services for real estate developers
            encompass targeted strategies, harnessing the latest in digital
            platforms and creative campaigns. By elevating brand visibility, and
            attracting qualified leads, we ensure success for every real estate
            project, maximizing its potential in the market.
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/contact")}
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
            >
              REACH US
            </button>
          </div>
        </div>
        <div className="md:w-5/12 pt-6 h-60 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src={servicePage2}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-stretch mx-4 md:mx-10 shadow-custom-3 rounded-custom-3 px-7 md:px-12 py-9 md:gap-40 mt-10 md:mt-8">
        <div className="md:w-7/12 flex flex-col gap-10 md:gap-16">
          <div className="flex justify-center md:justify-start items-center md:gap-5">
            <div className="h-16">
              <img className="h-full" src={homePage5} alt="" />
            </div>
            <div className="text-center font-medium text-3xl md:text-4xl">
              Sales Management
            </div>
          </div>
          <div className="text-sm md:text-lg text-center md:text-left leading-6 md:w-11/12">
            Our comprehensive sales service for real estate developers
            streamlines every aspect of the sales process, from lead generation
            to closing. With a focus on maximizing profitability and project
            success, we ensure efficient operations and optimized outcomes for
            every real estate project.
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/contact")}
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
            >
              REACH US
            </button>
          </div>
        </div>
        <div className="md:w-5/12 pt-6 h-60 md:h-auto">
          <img
            className="h-full w-full object-cover"
            src={servicePage3}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-stretch mx-4 md:mx-10 shadow-custom-3 rounded-custom-3 px-7 md:px-12 py-9 md:gap-40 mt-10 md:mt-8 mb-40">
        <div className="md:w-7/12 flex flex-col gap-10 md:gap-16">
          <div className="flex justify-center md:justify-start items-center md:gap-5">
            <div className="h-16">
              <img className="h-full" src={homePage6} alt="" />
            </div>
            <div className="text-center font-medium text-3xl md:text-4xl">
              Strategic consulting
            </div>
          </div>
          <div className="text-sm md:text-lg text-center md:text-left leading-6 md:w-11/12">
            Unlock the potential of your projects with our strategic consulting
            services. Through comprehensive feasibility studies and analyses, we
            provide informed guidance to developers, empowering them to achieve
            profitable and viable outcomes and navigate the complexities of the
            real estate market with confidence.
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/contact")}
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
            >
              REACH US
            </button>
          </div>
        </div>
        <div className="md:w-5/12 pt-6 h-60 md:h-auto">
          <img
            className="h-full w-full object-cover"
            src={servicePage4}
            alt=""
          />
        </div>
      </div>
      {/* section-2 => ends */}
    </main>
  );
}
