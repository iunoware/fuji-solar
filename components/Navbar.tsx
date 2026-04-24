"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/solar-products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-center items-start">
      <div
        className={`fixed w-[94%] sm:w-[96%] md:w-[97.5%] z-50 m-3 rounded-full transition-all duration-700 ${
          isScrolled
            ? "sm:w-[70%] md:w-[70%] lg:w-[70%] bg-black/60 backdrop-blur-md py-3 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]"
            : "bg-black/60 py-4"
        }`}
      >
        <div className=" px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl relative h-10 w-20 font-bold text-(--c-navy) tracking-tight"
          >
            <Image
              src="/images/logo.png"
              alt="Fuji Solar"
              fill
              className={`${
                isScrolled ? "h-12" : "h-16"
              } w-auto transition-all duration-700`}
            />
          </Link>
          {/* <h2 className="text-gray-200 text-xl">Fuji Solar</h2> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex h-7 mt-1.5 overflow-hidden items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${isActive ? "text-gray-200" : "text-gray-400"} text-gray-200 text-lg flex flex-col translate-y-2 hover:-translate-y-5 duration-400 transition-all font-medium`}
                  // className={`${isScrolled ? "text-gray-200" : "text-gray-900"}  text-lg flex flex-col translate-y-2 hover:-translate-y-5 duration-400 transition-all font-medium`}
                >
                  <span>{link.name}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${
              isScrolled ? "pointer-events-auto" : "pointer-events-none"
            } md:hidden text-(--c-navy)`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                size={28}
                className={`text-gray-200 text-lg transition-all duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <Menu
                size={28}
                className={`text-gray-200 text-lg transition-all duration-700 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      <nav className="fixed w-[94%] sm:w-[96%] md:w-[97.5%] lg:w-[98.5%] z-40 m-3 rounded-2xl transition-all duration-300">
        {/* Mobile Menu */}

        <div
          className={`${
            isOpen ? "translate-y-0" : "-translate-y-80"
          } transition-all duration-400 md:hidden absolute top-22 left-0 w-full rounded-3xl bg-black/60 text-gray-200 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] py-6 px-6 flex flex-col space-y-4`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-gray-200" : "text-gray-400"} text-black text-lg font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </nav>
  );
}
