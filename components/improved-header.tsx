"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import BookingDialog from "./Cal.com";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium uppercase tracking-wide transition-colors pb-1 hover:text-secondary ${active ? "border-b-2 border-primary " : ""}`}>
      {text}
    </Link>
  );
};

const linkData = [
  {
    href: "/our-story",
    text: "Our Story",
  },
  {
    href: "/services",
    text: "Services",
  },
  {
    href: "/study-in-australia",
    text: "Storybook",
  },
  {
    href: "/contact",
    text: "Contact Us",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  console.log("Current pathname:", pathname);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full top-0 left-0 z-50 transition-all duration-300
        ${isScrolled ? "fixed bg-white text-primary shadow-md" : "absolute text-white"}
      `}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <img
            src={isScrolled ? "/images/logo4.png" : "/images/logo6.png"}
            alt="Skippy Education and Visa Services"
            className="h-14 w-auto cursor-pointer transition-all duration-300 "
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8 lg:gap-10">
          {linkData.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              text={link.text}
              active={pathname.startsWith(link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <BookingDialog isScrolled={isScrolled} />
          </div>
          <button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`container lg:hidden ${
            isScrolled ? "bg-white text-[#041e3a]" : "bg-[#202A3E91] text-white"
          } backdrop-blur-sm`}>
          <div className="flex flex-col space-y-3 py-4">
            <Link
              href="/our-story"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#041e3a]"
              onClick={() => setIsMenuOpen(false)}>
              Our Story
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#041e3a]"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link
              href="/study-in-australia"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#041e3a]"
              onClick={() => setIsMenuOpen(false)}>
              Storybook
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#041e3a]"
              onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Button asChild variant="secondary" className="mt-2 uppercase">
              <BookingDialog />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
