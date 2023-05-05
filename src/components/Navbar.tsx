import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 space-x-5">
        <NavbarItem title="Trending" param="FetchTrending" />
        <NavbarItem title="Top Rated" param="FetchTopRated" />
      </div>
    </>
  );
};

export default Navbar;
