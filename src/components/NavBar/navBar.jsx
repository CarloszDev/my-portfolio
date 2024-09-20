import React, { useState } from 'react';
import { FaRegUser, FaBook } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHomeRepairService, MdEmail } from "react-icons/md";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="bg-indigo-300 w-max block px-7 py-3 z-2 fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-4 rounded-full backdrop-blur-lg">
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={`text-black text-xl bg-transparent p-3.5 rounded-full flex hover:bg-indigo-500 ${activeNav === '#' ? 'bg-indigo-400 text-white' : ''}`}
      >
        <AiFillHome />
      </a>

      <a
        href="#aboutMe"
        onClick={() => setActiveNav('#aboutMe')}
        className={`text-black text-xl bg-transparent p-3.5 rounded-full flex hover:bg-indigo-500 ${activeNav === '#aboutMe' ? 'bg-indigo-400 text-white' : ''}`}
      >
        <FaRegUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={`text-black text-xl bg-transparent p-3.5 rounded-full flex hover:bg-indigo-500 ${activeNav === '#experience' ? 'bg-indigo-400 text-white' : ''}`}
      >
        <FaBook />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={`text-black text-xl bg-transparent p-3.5 rounded-full flex hover:bg-indigo-500 ${activeNav === '#services' ? 'bg-indigo-400 text-white' : ''}`}
      >
        <MdOutlineHomeRepairService />
      </a>

      <a
        href="#contactUs"
        onClick={() => setActiveNav('#contactUs')}
        className={`text-black text-xl bg-transparent p-3.5 rounded-full flex hover:bg-indigo-500 ${activeNav === '#contactUs' ? 'bg-indigo-400 text-white' : ''}`}
      >
        <MdEmail />
      </a>
    </nav>
  );
};

export default NavBar;
