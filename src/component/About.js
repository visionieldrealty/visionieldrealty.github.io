import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import aboutPage1 from "../assets/img/aboutPage1.png";
import aboutPage2 from "../assets/img/aboutPage2.png";
import aboutPage3 from "../assets/img/aboutPage3.png";
import aboutPage4 from "../assets/img/aboutPage4.png";
import aboutPage5 from "../assets/img/aboutPage5.png";

import visionNmission from "../assets/img/visionNmission.crop.png";

import Aatam from "../assets/img/Aatam.crop.jpg";
import Renuka from "../assets/img/Renuka.jpg";
import Shubham from "../assets/img/Shubham.jpg";

export default function About() {
  const navigator = useNavigate();
  const isMobile = window.innerWidth >= 768;
  const navigate = (p) => {
    navigator(p);
    window.scrollTo(0, 0);
  };
  return (
    <main>
      <div className="flex flex-col bg-gray-600">
        <div className="flex flex-col md:flex-row text-white pt-10">
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={isMobile && { once: true }}
            // transition={isMobile && { duration: 0.6, ease: "easeIn" }}
            className=" px-3 md:px-11 text-custom-2 md-text-custom pb-10 md:pb-20 text-center md:text-left font-light"
          >
            We are <span className="text-orange-custom"> real estate </span>{" "}
            Visionaries
          </motion.div>
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={isMobile && { once: true }}
            // transition={isMobile && { duration: 0.6, ease: "easeIn" }}
            className="md:ml-11 md:mr-5 "
          >
            <motion.div className="text-4xl pb-7 md:pb-11 text-center md:text-left font-light">
              Realty Partners
            </motion.div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0">
              <div className="text-center md:mr-8 md:text-left font-light leading-7">
                At Visionield Realty, we pride ourselves on our commitment to
                excellence, integrity, and innovation. We are not just service
                providers; we are partners in progress, offering comprehensive
                market management and strategic consulting to transform the way
                real estate business is conducted in Vadodara. Our approach
                integrates cutting-edge technology, deep market insights, and
                personalized touch to each project, ensuring our clients'
                ventures stand out in a competitive marketplace.
              </div>
            </div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.img
            // initial={isMobile && { y: -505, opacity: 0 }}
            // whileInView={isMobile && { y: 0, opacity: 1 }}
            // viewport={isMobile && { once: true, margin: "450px 0px 80px 0px" }}
            // transition={
            //   isMobile && {
            //     duration: 0.6,
            //     damping: 60,
            //   }
            // }
            className="w-full md:min-h-full object-cover rounded-custom pt-12 md:pt-5 h-80 md:h-auto"
            src={aboutPage2}
            alt=""
          />
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between md:flex-row px-6 md:pl-10 pt-10 md:pt-40 mb-28 md:mb-48">
        <div className="md:w-5/12 flex flex-col pb-4 md:pb-40 pt-5 md:pt-10 gap-5">
          <motion.div
            initial={isMobile && { opacity: 0 }}
            whileInView={isMobile && { opacity: 1 }}
            viewport={isMobile && { once: true }}
            transition={isMobile && { duration: 0.3, ease: "easeIn" }}
            className="text-5xl md:text-7xl text-center md:text-left font-light"
          >
            Foundations of
            <span className="text-orange-custom"> Dedication </span>- Our Core
            Values
          </motion.div>
          <motion.div
            // initial={isMobile && { opacity: 0 }}
            // whileInView={isMobile && { opacity: 1 }}
            // viewport={isMobile && { once: true }}
            // transition={
            //   isMobile && { delay: 0.2, duration: 0.3, ease: "easeIn" }
            // }
            className="text-lg text-center md:text-left leading-7 font-light mt-6 mb-2 md:w-2/3"
          >
            Collaboration, Excellence, integrity and customer centricness define
            us. At Visionield, our core values shape every aspect of our
            approach.
          </motion.div>
          <div className="mx-auto md:mx-0">
            <motion.button
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={isMobile && { once: true }}
              // transition={
              //   isMobile && { delay: 0.4, duration: 0.3, ease: "easeIn" }
              // }
              onClick={() => navigate("/contact")}
              className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-3xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white items-center"
            >
              REACH US
            </motion.button>
          </div>
        </div>

        <motion.div className="flex flex-col md:pl-10 md:w-7/12 gap-5 mt-10 md:pt-10 md:pr-10 md:mt-0 overflow-y-hidden">
          <motion.div className="flex flex-col md:flex-row gap-5">
            <motion.div
              // initial={isMobile && { y: -400, opacity: 0 }}
              // whileInView={isMobile && { y: 0, opacity: 1 }}
              // viewport={
              //   isMobile && { once: true, margin: "300px 0px 80px 0px" }
              // }
              // transition={
              //   isMobile && { duration: 0.6, ease: "easeIn", damping: 70 }
              // }
              className="md:w-1/2 flex flex-col rounded-custom-3 px-5 py-9 mx-2 md:mx-0 shadow-custom-2"
            >
              <div className="">
                <img className="mx-auto md:mx-0 w-16" src={aboutPage1} alt="" />
              </div>
              <div className="text-center md:text-left font-medium text-4xl pt-4 pb-8">
                Collaboration
              </div>
              <div className="text-lg md:text-left tracking-tight text-center font-light">
                We embrace a collaborative ethos, recognizing the transformative
                potential of teamwork and partnerships. We believe in harnessing
                the collective power of collaboration to achieve shared
                objectives and mutual success. Together, we strive towards
                lasting impact and sustainable growth, fueled by our commitment
                to working harmoniously towards common goals.
              </div>
            </motion.div>
            <motion.div
              // initial={isMobile && { y: -400, opacity: 0 }}
              // whileInView={isMobile && { y: 0, opacity: 1 }}
              // viewport={isMobile && { once: true, margin: "300px 0px 0px 0px" }}
              // transition={
              //   isMobile && {
              //     delay: 0.2,
              //     duration: 0.6,
              //     ease: "easeIn",
              //     damping: 70,
              //   }
              // }
              className="md:w-1/2 flex flex-col rounded-custom-3 px-5 py-9 mx-2 md:mx-0 shadow-custom-2"
            >
              <div className="">
                <img className="mx-auto md:mx-0 w-16" src={aboutPage3} alt="" />
              </div>
              <div className="text-center md:text-left font-medium text-4xl pt-4 pb-8">
                Excellence
              </div>
              <div className="text-lg md:text-left tracking-tight text-center font-light">
                At Visionield Realty, excellence is more than a goal—it's our
                standard. We are relentless in our pursuit of superior
                performance and quality, setting and surpassing industry
                benchmarks with every endeavor. Every project is a testament to
                our unwavering commitment to excellence in all aspects of our
                work.
              </div>
            </motion.div>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-5 md:pb-14">
            <motion.div
              // initial={isMobile && { y: 400, opacity: 0 }}
              // whileInView={isMobile && { y: 0, opacity: 1 }}
              // viewport={isMobile && { once: true, margin: "0px 0px 300px 0px" }}
              // transition={
              //   isMobile && { duration: 0.6, ease: "easeIn", damping: 70 }
              // }
              className="md:w-1/2 flex flex-col rounded-custom-3 px-5 py-9 mx-2 md:mx-0 shadow-custom-2"
            >
              <div className="">
                <img className="mx-auto md:mx-0 w-16" src={aboutPage4} alt="" />
              </div>
              <div className="text-center md:text-left font-medium text-4xl pt-4 pb-8">
                Integrity
              </div>
              <div className="text-lg md:text-left tracking-tight text-center font-light">
                Integrity is the cornerstone of our ethos at Visionield Realty.
                We uphold the highest ethical standards, always striving to
                enhance our services and deliver exceptional value to our
                clients. Continuously seeking innovative methods and ideas, we
                ensure transparency, honesty, and trust in all our interactions
              </div>
            </motion.div>
            <motion.div
              // initial={isMobile && { y: 400, opacity: 0 }}
              // whileInView={isMobile && { y: 0, opacity: 1 }}
              // viewport={isMobile && { once: true, margin: "0px 0px 300px 0px" }}
              // transition={
              //   isMobile && {
              //     delay: 0.2,
              //     duration: 0.6,
              //     ease: "easeIn",
              //     damping: 70,
              //   }
              // }
              className="md:w-1/2 flex flex-col rounded-custom-3 px-5 py-9 mx-2 md:mx-0 shadow-custom-2"
            >
              <div className="">
                <img className="mx-auto md:mx-0 w-16" src={aboutPage5} alt="" />
              </div>
              <div className="text-center md:text-left font-medium text-4xl pt-4 pb-8">
                Customer Centric
              </div>
              <div className="text-lg md:text-left tracking-tight text-center font-light">
                Being customer-centric is more than a strategy—it's our guiding
                principle. We prioritize our clients, placing them at the heart
                of everything we do. Tailoring our solutions to their needs, we
                go above and beyond to exceed their expectations and foster
                long-lasting partnerships built on trust and satisfaction.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse mt-40 md:mt-40 gap-12 md:gap-36 px-8 md:px-14 mb-16 md:mb-44">
        <div className="md:w-5/12 my-8">
          <div className="flex flex-col gap-20">
            <motion.div
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={isMobile && { once: true }}
              // transition={isMobile && { duration: 0.3, ease: "easeIn" }}
              className="flex flex-col gap-10"
            >
              <div className="font-medium text-center md:text-left text-3xl md:text-4xl">
                Mission
              </div>
              <div className="text-sm md:text-base text-center md:text-left leading-6">
                Our mission is to revolutionize Vadodara's Residential Real
                Estate Landscape by Bridging Traditional Practices with
                Innovative, Strategic, and Professional Sales and Marketing
                Solutions, Elevating Developers to Navigate through Competitive
                Terrains with Efficacy and Financial Robustness.
              </div>
            </motion.div>
            <motion.div
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={isMobile && { once: true }}
              // transition={isMobile && { duration: 0.3, ease: "easeIn" }}
              className="flex flex-col gap-10"
            >
              <div className="font-medium text-3xl md:text-4xl text-center md:text-left">
                Vision
              </div>
              <div className="text-sm md:text-base text-center md:text-left leading-6">
                Our vision is to empower Vadodara's real estate developers,
                fostering success in a buyer's market through tailored services.
                We integrate modern techniques with traditional ethics,
                advocating transparency, efficacy, and sustainable growth while
                preserving cultural and business integrity.
              </div>
            </motion.div>
            <motion.div
              // initial={isMobile && { opacity: 0 }}
              // whileInView={isMobile && { opacity: 1 }}
              // viewport={isMobile && { once: true }}
              // transition={isMobile && { duration: 0.3, ease: "easeIn" }}
              className="flex flex-col gap-10"
            >
              <div className="font-medium text-3xl md:text-4xl text-center md:text-left">
                Philosophy
              </div>
              <div className="text-sm md:text-base text-center md:text-left leading-6">
                At Visionield Realty, we believe in creating value and enduring
                relationships. With integrity, innovation, and focus on results,
                we bring order to chaos, offering consistent, data-driven
                services that empower informed decisions and set standards of
                professionalism.
              </div>
            </motion.div>
          </div>
        </div>
        <div className="md:w-7/12 h-custom-1 md:h-auto overflow-y-hidden">
          <motion.img
            className="w-full h-custom-3 object-center object-cover rounded-custom-3 md:mt-4"
            src={visionNmission}
            alt=""
          />
        </div>
      </div>
      <div className="mb-16 md:mb-48 bg-white">
        <div
          // initial={isMobile && { opacity: 0 }}
          // whileInView={isMobile && { opacity: 1 }}
          // viewport={isMobile && { once: true }}
          // transition={isMobile && { duration: 0.5, ease: "easeIn" }}
          className="flex flex-col text-center pb-5 md:pb-0 text-5xl px-5 md:text-7xl md:px-80 mb-20"
        >
          The people behind Our Success
        </div>
        <div className="flex flex-col md:flex-row justify-center md:ml-5 mb-2 overflow-y-hidden">
          <div className="md:w-1/3 text-2xl text-center md:text-left mb-4 md:mb-0">
            <motion.img
              // initial={isMobile && { y: -710 }}
              // whileInView={isMobile && { y: 0 }}
              // viewport={
              //   isMobile && { once: true, margin: "0px 0px -100px 0px" }
              // }
              // transition={
              //   isMobile && {
              //     duration: 1,
              //     ease: "easeIn",
              //     damping: 100,
              //   }
              // }
              className="flex flex-col rounded-custom-3 h-custom-2 px-8 pt-6 md:pt-0 md:px-0 md:pr-5 md:pb-4 object-cover"
              src={Aatam}
              alt=""
            />
            Aatam Shah
            <div className="text-lg">Boss</div>
          </div>
          <div className="md:w-1/3 text-2xl text-center md:text-left mb-4 md:mb-0">
            <motion.img
              // initial={{ y: -710 }}
              // whileInView={{ y: 0 }}
              // viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              // transition={{ duration: 1, ease: "easeIn", damping: 100 }}
              className="flex flex-col rounded-custom-3 h-custom-2 px-8 pt-6 md:pt-0 md:px-0 md:pr-5 md:pb-4 object-cover"
              src={Shubham}
              alt=""
            />
            Dean Mayster
            <div className="text-lg">SOCIAL &amp; PPC EXPERT</div>
          </div>
          <div className="md:w-1/3 text-2xl text-center md:text-left mb-4 md:mb-0">
            <motion.img
              // initial={{ y: -710 }}
              // whileInView={{ y: 0 }}
              // viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              // transition={{ duration: 1, ease: "easeIn", damping: 100 }}
              className="flex flex-col rounded-custom-3 h-custom-2 px-8 pt-6 md:pt-0 md:px-0 md:pr-5 md:pb-4 object-cover"
              src={Renuka}
              alt=""
            />
            Dean Mayster
            <div className="text-lg">SOCIAL &amp; PPC EXPERT</div>
          </div>
        </div>
      </div>
    </main>
  );
}
