"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Mail, SwatchBook, MessageCircleMore } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  // Determine if the link is active
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  // Define nav links based on your Header pages
  const navLinks = [
    { name: "Home", path: "/", icon: Home, isExternal: false },
    { name: "Storybook", path: "/story-book", icon: BookOpen, isExternal: false },
    { 
      name: "WhatsApp", 
      path: "https://wa.me/61433618691?text=Hello%20Skippy%20Education%2C", 
      icon: MessageCircleMore, 
      isExternal: true,
    },
    { name: "Services", path: "/services", icon: SwatchBook, isExternal: false },
    { name: "Contact", path: "/contact", icon: Mail, isExternal: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/30 backdrop-blur-lg shadow-lg">
      <div className="flex justify-around items-center h-18 px-2 py-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.path);

          return (
            <Link
              key={link.path}
              href={link.path}
              className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 group ${
                active ? "text-primary" : "text-black/70 hover:text-white"
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-lg p-2 mb-1 transition-all duration-200 ${
                  active
                    ? "bg-white/20 text-primary shadow-md scale-110"
                    : "group-hover:bg-primary/10"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    active ? "text-primary" : "text-black/70 group-hover:text-primary"
                  }`}
                />
              </div>
              <span
                className={`text-xs font-medium transition-colors duration-200 ${
                  active ? "text-primary" : "text-black/70 group-hover:text-primary"
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
