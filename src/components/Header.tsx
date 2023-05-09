import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "./DarkSwitchMode";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto">
        <div className="flex space-x-9">
          <MenuItem
            title="Home"
            address="/"
            icon={<AiFillHome className="mx-4 text-2xl sm:hidden" />}
          />
          <MenuItem
            title="About"
            address="/about"
            icon={<AiFillInfoCircle className="mx-4 text-2xl sm:hidden" />}
          />
        </div>
        <div className="">
          <div className="flex items-center space-x-5">
            <DarkModeSwitch />
            <h2 className="text-2xl">
              <span className="px-2 py-1 font-bold rounded-lg bg-amber-500">
                IMDB
              </span>
              <span className="hidden text-xl sm:inline">Clone</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
