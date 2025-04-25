import { useState } from "react";

import Logo from "../../assets/logo.svg";

import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

import Avatar from "../../assets/image-avatar.jpg";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className="w-screen h-20 flex flex-row justify-between bg-[#373B53] relative">
      <div className="bg-[#7C5DFA] h-full relative overflow-hidden w-20 flex justify-center items-center rounded-tr-3xl rounded-br-3xl">
        <img src={Logo} className="z-20" />
        <div className="bg-[#9277FF] h-full w-full absolute top-1/2 rounded-tl-3xl z-10"></div>
      </div>
      <div className="flex flex-row justify-around items-center mr-6">
        <img
          src={lightMode ? MoonIcon : SunIcon}
          className="w-6 mr-6"
          onClick={() => setLightMode(!lightMode)}
        ></img>
        <div className="h-full w-[1px] bg-[#494E6E] mr-6"></div>
        <img src={Avatar} className="w-8 rounded-full"></img>
      </div>
    </div>
  );
};

export default Navbar;
