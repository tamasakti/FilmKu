import Link from "next/link";
import React from "react";

interface PropsHeader {
  title: string;
  icon: JSX.Element;
  address: string;
}

const MenuItem = ({ title, address, icon }: PropsHeader) => {
  return (
    <div>
      <Link href={address} className="mx-3 lg:mx-6 hover:text-amber-600">
        {icon}
        <p className="hidden my-2 text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
