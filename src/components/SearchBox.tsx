"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: any) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  }
  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex flex-row  mt-5 p-3 w-[72rem] mx-auto"
      >
        <input
          placeholder="Search..."
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[90%] bg-transparent input input-bordered border-none"
        />
        <button
          type="submit"
          className="ml-5 bg-amber-600 hover:border-1 hover:bg-black cursor-pointer text-white py-2 px-5"
          disabled={!search}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
