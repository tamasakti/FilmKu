"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: any) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <div className="w-full min-h-screen  mt-10 space-y-3">
        <h1 className="flex justify-center">Something Went Wrong</h1>
        <div className="flex justify-center hover:text-amber-600">
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </div>
    </>
  );
};

export default Error;
