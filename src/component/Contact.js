import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendMailCustomer } from "../controller/Gmail";
import { useState } from "react";

import contactPage1 from "../assets/img/contactPage1.png";
import contactPage2 from "../assets/img/contactPage2.png";
import contactPage3 from "../assets/img/contactPage3.jpg";

export default function Services() {
  const navigator = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [email, contact, fullname, message]);

  const navigate = (p) => {
    navigator(p);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async () => {
    if (!fullname || !email || !message || !contact) {
      setError(true);
      return;
    }
    try {
      await sendMailCustomer({
        fullname,
        email,
        message,
        contact,
      });
      setFullname("");
      setEmail("");
      setMessage("");
      setContact("");
      setError(false);
      navigate("/success");
    } catch (error) {
      console.log(`something went wrong`);
    }
  };

  return (
    <main>
      <div className="bg-gray-custom-2 text-white text-center pt-20 mb-20">
        <div className="text-6xl md-text-custom pb-10 px-0 sm:px-0">
          <span className="text-orange-custom">Contact</span> us
        </div>
        <div className="px-10 md:w-auto md:px-0 mx-auto font-light">
          We offer comprehensive solutions tailored to your needs.
        </div>
        <div className="px-10 md:w-auto md:px-0 mx-auto font-light pb-10">
          Contact us to explore how we can support your real estate projects.
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between md:flex-row px-6 md:px-16 md:pt-20 gap-10">
        <div className="md:w-1/2 flex flex-col pb-4 pt-5 gap-5">
          <div className="text-center md:text-left text-custom-3 md:text-7xl">
            We would be{" "}
            <span className="text-orange-custom">happy to meet you </span> and
            learn all about your business
          </div>
          <div className="md:w-3/4 text-center md:text-left pt-5">
            Kindly fill out the form with your contact details, and we'll be in
            touch shortly to schedule a call or send email and discuss your
            requirements further.
          </div>
          <div className="flex flex-col md:flex-row mt-12 md:mt-20 md:justify-between pr-5 gap-16 md:gap-0">
            <div className="flex flex-col items-center md:items-start w-1/2">
              <img className="w-auto h-10" src={contactPage1} alt="" />
              <div className="mb-5 mt-2">GIVE US A CALL OR A MESSAGE</div>
              <div>+91 6359429294</div>
              <div>contact@visionieldrealty.com</div>
            </div>
            <div className="flex flex-col items-center md:items-start w-1/2">
              <img className="w-auto h-10" src={contactPage2} alt="" />
              <div className="mb-5 mt-2">OUR LOCATION</div>
              <div>
                12, Kalpana Flats, B/H Narmada Guest House, Race Course Rd,
                Vadodara 390007.
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-stretch gap-9 py-16 px-10 rounded-5xl shadow-custom-3">
          <input
            className="text-base font-light pb-3 focus:outline-none border-b border-black"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            className="text-base font-light pb-3 focus:outline-none border-b border-black"
            type="tel"
            placeholder="Phone"
            pattern="[0-9]{10}"
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            className="text-base font-light pb-3 focus:outline-none border-b border-black"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="border-b border-black focus:outline-none text-base font-light"
            placeholder="Write us"
            name="Write Us"
            id=""
            cols={30}
            rows={7}
            defaultValue={""}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <div className="text-red-600">
              *Please fill all the required fields
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white mx-auto"
          >
            CONTACT US
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col-reverse justify-between md:flex-row px-6 md:px-10 mb-28 gap-8 md:gap-20 md:mt-48">
        <div className="md:w-7/12 flex flex-col pb-4 md:pb-40">
          <img
            className="mx-auto md:mx-0 rounded-custom-3 object-cover min-h-custom-2"
            src={contactPage3}
            alt=""
          />
        </div>
        <div className="md:w-5/12 flex flex-col pb-4 md:pb-40 pt-5 md:pt-10 gap-10">
          <div className="text-center md:text-left text-custom-3 md:text-7xl">
            Words from the Founder
          </div>
          <div className="justify-between">
            <div className="text-center md:text-left mb-0 md:mb-3">
              My journey spans 3.5 transformative years at an Ahmedabad-based
              Real Estate start-up, marked by invigorating experiences. It's not
              just about personal growth but embracing a broader vision, and
              cultivating business acumen. My mission is to prosper within the
              sector, inspire its participants, and redefine its boundaries.
            </div>
            <div className="text-center md:text-left">
              Let's meet, sip coffee, and have an inspiring REAL ESTATE TALK!
            </div>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="transition duration-200 ease-in-out border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white mx-auto md:mx-0"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </main>
  );
}
