import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import homePage1 from "../assets/img/homePage1.png";
import homePage2 from "../assets/img/homePage2.png";
import homePage3 from "../assets/img/homePage3.png";
import homePage4 from "../assets/img/homePage4.png";
import homePage5 from "../assets/img/homePage5.png";
import homePage6 from "../assets/img/homePage6.png";

import Aatam from "../assets/img/Aatam.crop.jpg";

export default function Home() {
  const navigator = useNavigate();
  const navigate = (p) => {
    navigator(p);
    window.scrollTo(0, 0);
  };

  const isMobile = window.innerWidth >= 768;

  // console.log(isMobile);

  return (
    <main>
      <div className="flex flex-col md:flex-row text-white bg-gray-600 overflow-hidden">
        <div className="pt-16 md:w-7/12">
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={isMobile && { once: true }}
            // transition={isMobile && { duration: 1, ease: "easeIn" }}
            className="px-11 text-6xl md-text-custom pb-20 text-center md:text-left font-light"
          >
            Skyrocket your Real Estate{" "}
            <span className="text-orange-custom">Marketing & Sales </span> with
            us.
          </motion.div>
          <motion.div
            // initial={isMobile && { y: 200 }}
            // whileInView={isMobile && { y: 0 }}
            // viewport={isMobile && { once: true, margin: "150px 0px 150px 0px" }}
            // transition={isMobile && { duration: 0.4, ease: "easeIn" }}
            className="flex flex-col md:flex-row justify-center items-center bg-gray-custom-2 pb-32 md:pb-40 pt-7 gap-10"
          >
            <motion.div
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={
              //   isMobile && { once: true, margin: "150px 0px 150px 0px" }
              // }
              // transition={
              //   isMobile && { duration: 0.4, delay: 0.2, ease: "easeIn" }
              // }
              className="text-md leading-7 w-2/3 font-light"
            >
              Visionield Realty stands at the forefront of revolutionizing real
              estate market management. We specialize in providing comprehensive
              services to developers, landowners, and investors, focusing on
              optimizing the marketing and sales of real estate projects.
            </motion.div>
            <div className="self-center">
              <button
                className="transition duration-200 ease-in-out border-solid border-2 rounded-3xl px-6 py-3 w-max hover:bg-white hover:text-slate-700"
                onClick={() => navigate("/about")}
              >
                ABOUT US
              </button>
            </div>
          </motion.div>
        </div>
        <div className="md:w-5/12 bg-gray-custom-2 md-bg-gray-600">
          <motion.img
            // initial={isMobile && { x: 500 }}
            // whileInView={isMobile && { x: 0 }}
            // viewport={isMobile && { once: true }}
            // transition={
            //   isMobile && { type: "tween", duration: 1, ease: "easeIn" }
            // }
            className="w-full h-80 md:min-h-full object-cover rounded-custom"
            src={homePage1}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row-reverse px-10 pt-20 md:pt-40 gap-10 md:gap-20">
        <div className="md:w-5/12 flex flex-col pb-4 md:pb-40 pt-5 md:pt-10 gap-5 md:gap-10">
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={
            //   isMobile && { once: true, margin: "-150px 0px -150px 0px" }
            // }
            transition={isMobile && { duration: 0.4, ease: "easeIn" }}
            className="text-6xl md:text-7xl text-center md:text-left font-light"
          >
            Crafting{" "}
            <span className="text-orange-custom">
              {" "}
              Marketing and Sales Solutions{" "}
            </span>{" "}
            for Real Estate Projects:
          </motion.div>
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={isMobile && { once: true }}
            // transition={isMobile && { duration: 0.4, ease: "easeIn" }}
            className="text-lg leading-7 font-light"
          >
            We specialize in dynamic marketing and sales solutions for real
            estate projects, crafting tailored strategies to ignite growth and
            maximize success for our real estate developer clients.
          </motion.div>
          <div className="">
            <motion.button
              initial={isMobile && { opacity: 0 }}
              whileInView={isMobile && { opacity: 1 }}
              viewport={isMobile && { once: true }}
              transition={
                isMobile && { duration: 0.4, delay: 0.4, ease: "easeIn" }
              }
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-3xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
              onClick={() => navigate("/services")}
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className="md:w-7/12">
          <img
            className="w-full h-80 md:min-h-full object-cover rounded-custom-2"
            src={homePage2}
            alt=""
          />
        </div>
      </div>
      <div className="w-full bg-white">
        <motion.div
          // initial={isMobile && { opacity: 0 }}
          // whileInView={isMobile && { opacity: 1 }}
          // viewport={isMobile && { once: true, margin: "-250px 0px -250px 0px" }}
          // transition={isMobile && { duration: 0.4, ease: "easeIn" }}
          className="text-6xl md:text-7xl text-center font-normal pt-40 pb-20"
        >
          What we do?
        </motion.div>
        <motion.div
          // opacity={0}
          // initial={isMobile && { opacity: 0 }}
          // whileInView={isMobile && { opacity: 1 }}
          // viewport={isMobile && { once: true }}
          // transition={isMobile && { duration: 0.4, ease: "easeIn" }}
          className="flex flex-col md:flex-row justify-between items-center px-10 gap-6 overflow-hidden pb-16"
        >
          {/*Cards*/}
          <motion.div
            // initial={isMobile && { y: 400 }}
            // whileInView={isMobile && { y: 0 }}
            // viewport={isMobile && { once: true, margin: "-40px 0px 340px 0px" }}
            // transition={
            //   isMobile && {
            //     duration: 0.8,
            //     stiffness: 30,
            //     damping: 40,
            //     ease: "easeInOut",
            //   }
            // }
            className="md:mt-20 md:w-1/4 flex flex-col shadow-custom rounded-custom-3 py-10 px-4"
          >
            <div className="">
              <img className="mx-auto w-16" src={homePage3} alt="" />
            </div>
            <div className="text-center font-medium text-4xl py-8">
              Project Branding
            </div>
            <div className="text-lg tracking-tight text-center font-light">
              Elevate your real estate project's identity with our branding
              service. From logo design to brand messaging, we craft cohesive
              brand identities that resonate with target audiences and enhance
              project recognition.
            </div>
            <div
              onClick={() => navigate("/services")}
              className="text-center text-lg pt-8 hover:pl-3 delay-100 duration-100 cursor-pointer"
            >
              <span className="underline underline-offset-2">LEARN MORE</span>{" "}
              <span className="text-3xl">→</span>{" "}
            </div>
          </motion.div>
          <motion.div
            // initial={isMobile && { y: -590 }}
            // whileInView={isMobile && { y: 0 }}
            // viewport={isMobile && { once: true, margin: "650px 0px 0px 0px" }}
            // transition={
            //   isMobile && {
            //     duration: 0.8,
            //     stiffness: 30,
            //     damping: 40,
            //     ease: "easeInOut",
            //   }
            // }
            className="md:w-1/4 flex flex-col shadow-custom rounded-custom-3 py-10 px-4"
          >
            <div className="">
              <img className="mx-auto w-16" src={homePage4} alt="" />
            </div>
            <div className="text-center font-medium text-4xl py-8">
              Marketing Management
            </div>
            <div className="text-lg tracking-tight text-center font-light">
              Our innovative marketing services for real estate developers
              leverage targeted strategies, digital platforms, and creative
              campaigns to elevate brand visibility, attract qualified leads,
              and drive sales.
            </div>
            <div
              onClick={() => navigate("/services")}
              className="text-center text-lg pt-8 delay-100 duration-100 hover:pl-3 cursor-pointer"
            >
              {" "}
              <span className="underline underline-offset-2">
                LEARN MORE
              </span>{" "}
              <span className="text-3xl">→</span>{" "}
            </div>
          </motion.div>
          <motion.div
            // initial={isMobile && { y: 400 }}
            // whileInView={isMobile && { y: 0 }}
            // viewport={isMobile && { once: true, margin: "-40px 0px 340px 0px" }}
            // transition={
            //   isMobile && {
            //     duration: 0.8,
            //     stiffness: 30,
            //     damping: 40,
            //     ease: "easeInOut",
            //   }
            // }
            className="md:mt-20 md:w-1/4 flex flex-col shadow-custom rounded-custom-3 py-10 px-4"
          >
            <div className="">
              <img className="mx-auto w-16" src={homePage5} alt="" />
            </div>
            <div className="text-center font-medium text-4xl py-8">
              Sales Management
            </div>
            <div className="text-lg tracking-tight text-center font-light">
              Our comprehensive sales service for real estate developers
              streamlines the entire sales process, from lead generation to
              closing, ensuring maximum profitability and success for each real
              estate project.
            </div>
            <div
              onClick={() => navigate("/services")}
              className="text-center text-lg pt-8 delay-100 duration-100 hover:pl-3 cursor-pointer"
            >
              {" "}
              <span className="underline underline-offset-2">
                LEARN MORE
              </span>{" "}
              <span className="text-3xl">→</span>{" "}
            </div>
          </motion.div>
          <motion.div
            // initial={isMobile && { y: -590 }}
            // whileInView={isMobile && { y: 0 }}
            // viewport={isMobile && { once: true, margin: "650px 0px 0px 0px" }}
            // transition={
            //   isMobile && {
            //     duration: 0.8,
            //     stiffness: 30,
            //     damping: 40,
            //     ease: "easeInOut",
            //   }
            // }
            className="md:w-1/4 flex flex-col shadow-custom rounded-custom-3 py-10 px-4"
          >
            <div className="">
              <img className="mx-auto w-16" src={homePage6} alt="" />
            </div>
            <div className="text-center font-medium text-4xl py-8">
              Strategic Consulting
            </div>
            <div className="text-lg tracking-tight text-center font-light">
              We provide strategic consulting for real estate projects,
              conducting in-depth feasibility studies and analyses. Our goal is
              to guide developers toward profitable and viable outcomes with
              informed strategies.
            </div>
            <div
              onClick={() => navigate("/services")}
              className="text-center text-lg pt-8 delay-100 duration-100 hover:pl-3 cursor-pointer"
            >
              {" "}
              <span className="underline underline-offset-2">
                LEARN MORE
              </span>{" "}
              <span className="text-3xl">→</span>{" "}
            </div>
          </motion.div>
          {/*Cards -> end*/}
        </motion.div>
        <div className="bg-white flex flex-col md:flex-row justify-between pt-20 md:pt-52 px-10 gap-4 pb-40 overflow-y-hidden">
          <div className="flex flex-col md:w-7/12 pt-16 gap-10">
            <motion.div
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={
              //   isMobile && { once: true, margin: "-150px 0px -150px 0px" }
              // }
              // transition={isMobile && { duration: 0.4, ease: "easeIn" }}
              className="text-6xl md:text-7xl text-center md:text-left font-normal"
            >
              Meet the people behind Our Success
            </motion.div>
            <div className="self-center md:self-start">
              <motion.button
                initial={isMobile && { opacity: 0 }}
                whileInView={isMobile && { opacity: 1 }}
                viewport={
                  isMobile && { once: true, margin: "-150px 0px -150px 0px" }
                }
                transition={
                  isMobile && { duration: 0.4, delay: 0.3, ease: "easeIn" }
                }
                className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-3xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white"
                onClick={() => navigate("/about")}
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col md:w-5/12 gap-6">
            <div className="overflow-hidden">
              <motion.img
                // initial={isMobile && { y: -585, opacity: 0 }}
                // whileInView={isMobile && { y: 0, opacity: 1 }}
                // viewport={
                //   isMobile && { once: true, margin: "350px 0px -50px 0px" }
                // }
                // transition={
                //   isMobile && {
                //     delay: 0.3,
                //     duration: 0.7,
                //     damping: 60,
                //   }
                // }
                className="h-custom-3 object-cover rounded-custom-2"
                src={Aatam}
                alt=""
              />
            </div>
            <div>
              <div className="text-4xl font-semibold text-center">
                Aatam Shah
              </div>
              <div className="text-lg font-medium text-center">
                Founder &amp; Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
