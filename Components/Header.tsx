import React from "react";
import logo from "@/assets/image 1.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Logo" width={140} height={140} />
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-6 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>How it Works</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button className="text-white p-1 bg-blue-500 rounded-lg px-7">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
