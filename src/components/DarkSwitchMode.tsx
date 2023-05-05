"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <BsFillMoonFill
          className="text-xl hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdLightMode
          className="text-xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
