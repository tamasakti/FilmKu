"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

interface NavProps {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: NavProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <>
      <Link
        className={`${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </>
  );
};

export default NavbarItem;
