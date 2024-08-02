import React from "react";
import { useNavigate } from "react-router-dom";

import fullLogo from "../assets/img/fullLogo.png";

export default function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    hideMenu();
  };

  const displayMenu = () => {
    const menu = document.getElementById("hamburger-menu");
    if (menu) {
      menu.style.display = "block";
      menu.style.opacity = 1;
    }
  };

  const hideMenu = () => {
    const menu = document.getElementById("hamburger-menu");
    if (menu) {
      menu.style.display = "none";
      menu.style.opacity = 0;
    }
  };

  return (
    <header
      id="head"
      className="h-24 px-6 flex justify-between items-center bg-gray-600 text-white"
    >
      <div className="">
        <img className="h-20" src={fullLogo} alt="" />
      </div>
      <div>
        <nav className="list-none hidden sm:flex space-x-10">
          <li className="cursor-pointer">
            <a onClick={() => handleNavigation("/")}>HOME</a>
          </li>
          <li className="cursor-pointer">
            <a onClick={() => handleNavigation("/about")}>ABOUT</a>
          </li>
          <li className="cursor-pointer">
            <a onClick={() => handleNavigation("/services")}>SERVICES</a>
          </li>
          {/* <li className="cursor-pointer">
            <a onClick={() => handleNavigation("/career")}>CAREERS</a>
          </li> */}
          <li className="cursor-pointer">
            <a onClick={() => handleNavigation("/contact")}>CONTACT US</a>
          </li>
        </nav>
        <div
          id="mobile-open-button"
          onClick={displayMenu}
          className="sm:hidden block focus:outline-none text-2xl cursor-pointer"
        >
          ☰
        </div>
        <div
          id="hamburger-menu"
          className="hidden fixed top-0 left-0 h-screen w-screen bg-black text-white z-50 opacity-0 transition-opacity duration-300"
        >
          <div
            id="close-btn"
            onClick={hideMenu}
            className="absolute top-6 right-10 text-xl cursor-pointer"
          >
            ✖
          </div>
          <div className="list-none flex flex-col gap-14 text-center h-full justify-center">
            <div className="cursor-pointer hover:text-slate-400 fade-down">
              <a onClick={() => handleNavigation("/")}>HOME</a>
            </div>
            <div className="cursor-pointer hover:text-slate-400 fade-down1">
              <a onClick={() => handleNavigation("/about")}>ABOUT</a>
            </div>
            <div className="cursor-pointer hover:text-slate-400 fade-down2">
              <a onClick={() => handleNavigation("/services")}>SERVICES</a>
            </div>
            {/* <div className="cursor-pointer hover:text-slate-400 fade-down3">
              <a onClick={() => handleNavigation("/career")}>CAREERS</a>
            </div> */}
            <div className="cursor-pointer hover:text-slate-400 fade-down4 delay-500">
              <a onClick={() => handleNavigation("/contact")}>CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
