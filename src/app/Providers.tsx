"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="min-h-screen text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
