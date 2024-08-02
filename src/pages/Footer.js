import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import footerImg from "../assets/img/Home-Banner-6.jpg";
import fullLogo from "../assets/img/fullLogo.png";
import linkedinLogo from "../assets/img/linkedinLogo.png";

export default function Footer() {
  const navigator = useNavigate();
  const isMobile = window.innerWidth >= 768;
  const navigate = (p) => {
    navigator(p);
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <footer className="flex flex-col md:flex-row justify-between text-white md:gap-14 items-stretch bg-gray-600 md:h-custom md:max-h-screen">
        <div className="px-6 py-8 md:p-10 md:w-5/12 flex flex-col gap-10 ">
          <motion.div
            initial={isMobile && { opacity: 0 }}
            whileInView={isMobile && { opacity: 1 }}
            viewport={isMobile && { once: true }}
            transition={
              isMobile && { duration: 0.3, type: "tween", ease: "easeInOut" }
            }
            className="text-5xl md:text-7xl text-center md:text-left font-normal"
          >
            Ready to
            <span className="text-orange-custom"> take your projects </span>
            to next level?
          </motion.div>
          <motion.div
            initial={isMobile && { opacity: 0 }}
            whileInView={isMobile && { opacity: 1 }}
            viewport={isMobile && { once: true, margin: "-50px 0px -50px 0px" }}
            transition={
              isMobile && {
                duration: 0.4,
                delay: 0.2,
                type: "tween",
                ease: "easeInOut",
              }
            }
            className="text-lg leading-7 font-light"
          >
            Reach out to us today! We're here to answer all your questions and
            provide expert guidance on our tailored services for your project.
          </motion.div>
          <div className="flex justify-center md:justify-start">
            <motion.button
              onClick={() => navigate("/contact")}
              initial={isMobile && { opacity: 0 }}
              whileInView={isMobile && { opacity: 1 }}
              viewport={
                isMobile && { once: true, margin: "-20px 0px -20px 0px" }
              }
              transition={
                isMobile && {
                  duration: 0.4,
                  delay: 0.4,
                  type: "tween",
                  ease: "easeInOut",
                }
              }
              className="transition duration-200 ease-in-out border-solid border-2 font-semibold border-white rounded-5xl px-12 py-4 w-max hover:bg-white hover:text-black text-white"
            >
              CONTACT US
            </motion.button>
          </div>
        </div>
        <div className="md:w-7/12">
          <img
            className="w-full md:h-full object-cover rounded-custom-4 h-custom-2"
            src={footerImg}
            alt=""
          />
        </div>
      </footer>
      <footer className="bg-gray-custom-2">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-stretch flex-col ">
                <div className="flex justify-center text-white ">
                  <img src={fullLogo} className="h-40 md:mx-auto"></img>
                </div>
                <p className="max-w-md mx-auto mt-2 text-lg leading-relaxed text-center text-gray-400">
                  Envisioning Excellence
                </p>
              </div>
            </div>
            <div className="grid grid-cols-0 gap-8 sm:grid-cols-1 lg:col-span-2 md:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">About Us</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/about")}
                      >
                        Company Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/about")}
                      >
                        Values
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/about")}
                      >
                        Meet the Team
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Our Services</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/services")}
                      >
                        Project Branding
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/services")}
                      >
                        Marketing Management
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/services")}
                      >
                        Sales Management
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white transition hover:text-white/75 cursor-pointer"
                        onClick={() => navigate("/services")}
                      >
                        Strategic consulting
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="flex items-center justify-center sm:justify-start gap-1.5 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white shrink-0 cursor-text"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-white transition group-hover:text-white/75">
                        contact@visionieldrealty.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center sm:justify-start gap-1.5 group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white shrink-0 cursor-text"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-white transition group-hover:text-white/75">
                        +91 6359429294
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white shrink-0 cursor-text"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <address className="-mt-0.5 not-italic text-white">
                      12, Kalpana Flats, B/H Narmada Guest House, Race Course
                      Rd, Vadodara 390007.
                    </address>
                  </li>
                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <ul className="flex justify-center gap-6 mt-4 md:gap-8 sm:justify-end">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61556571543668"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-white transition hover:text-white/75"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/visionield_realty?igsh=MThmNGpqd296MTN3"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-white transition hover:text-white/75"
                        >
                          <span className="sr-only">Instagram</span>
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/visionield-realty/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-white transition hover:text-white/75"
                        >
                          <span className="sr-only">Linkedin</span>
                          <img className="w-6 h-6" src={linkedinLogo} />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-4 border-t border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>
                <a
                  className="inline-block text-white underline transition hover:text-white/75"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
                <span>·</span>
                <a
                  className="inline-block text-white underline transition hover:text-white/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                © 2024 Visionield
              </p>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}
