import Link from "next/link";
import React from "react";

const ReusuableLinkButton = ({
  text = "Learn more",
  href,
  color,
}: {
  text: string;
  href: string;
  color: "primary" | "secondary" | "white";
}) => {
  return (
    <Link
      href={href}
      className={`uppercase cursor-pointer border-b-2 border-${color} text-${color} pb-1 text-md font-medium tracking-wide hover:text-${color === "primary" ? "secondary" : "primary"}  hover:border-${color === "primary" ? "secondary" : "primary"} hover:font-bold transition`}>
      {text}
    </Link>
  );
};

export default ReusuableLinkButton;
