import React, { useState } from 'react';
import { FaRegUser, FaBook } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHomeRepairService, MdEmail, MdWork } from "react-icons/md";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="bg-white/95 w-max block px-7 py-3 z-2 fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-4 rounded-full backdrop-blur-lg">
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={`text-xl p-3.5 rounded-full flex hover:bg-black transition-colors ${
          activeNav === '#' ? 'bg-black text-white' : 'bg-transparent text-zinc-800'
        }`}
      >
        <AiFillHome />
      </a>

      <a
        href="#aboutMe"
        onClick={() => setActiveNav('#aboutMe')}
        className={`text-xl p-3.5 rounded-full flex hover:bg-black transition-colors ${
          activeNav === '#aboutMe' ? 'bg-black text-white' : 'bg-transparent text-zinc-800'
        }`}
      >
        <FaRegUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={`text-xl p-3.5 rounded-full flex hover:bg-black transition-colors ${
          activeNav === '#experience' ? 'bg-black text-white' : 'bg-transparent text-zinc-800'
        }`}
      >
        <FaBook />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={`text-2xl p-3.5 rounded-full flex hover:bg-black transition-colors ${
          activeNav === '#projects' ? 'bg-black text-white' : 'bg-transparent text-zinc-800'
        }`}
      >
        <MdWork />
      </a>

      <a
        href="#contactUs"
        onClick={() => setActiveNav('#contactUs')}
        className={`text-2xl p-3.5 rounded-full flex hover:bg-black transition-colors ${
          activeNav === '#contactUs' ? 'bg-black text-white' : 'bg-transparent text-zinc-800'
        }`}
      >
        <MdEmail />
      </a>
    </nav>
  );
};

export default NavBar;
