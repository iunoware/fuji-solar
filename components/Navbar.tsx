"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Solutions", href: "/solar-products/" },
  { name: "Installation", href: "/installation-process/" },
  { name: "Blogs", href: "/blogs/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      if (scrolled) setIsOpen(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md py-1`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative h-15 w-50">
            <Image
              src="/images/logo.png"
              alt="Fuji Solar"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex h-6 mt-1.5 overflow-hidden items-center space-x-8">
            {navLinks.map((link) => {
              // const isActive = pathname === link.href;
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-brand-red"
                      : isScrolled
                        ? "text-gray-950"
                        : "text-gray-950"
                  } text-md flex flex-col translate-y-2 hover:-translate-y-5 duration-300 transition-all font-medium`}
                >
                  <span>{link.name}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={28} className={isScrolled ? "text-gray-900" : "text-gray-700"} />
            ) : (
              <Menu
                size={28}
                className={isScrolled ? "text-gray-900" : "text-gray-700"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-80 opacity-0 pointer-events-none"
        } transition-all duration-300 z-50 lg:hidden fixed top-16 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm py-6 px-6 flex flex-col space-y-4`}
      >
        {navLinks.map((link) => {
          // const isActive = pathname === link.href;
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${
                isActive ? "text-brand-red" : "text-gray-900"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
