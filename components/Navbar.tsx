"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Battery,
  Zap,
  ChevronDown,
  Droplet,
  Lightbulb,
  Thermometer,
} from "lucide-react";
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

interface SolutionItem {
  title: string;
  href: string;
  description: string;
  iconName: "sun" | "battery" | "zap" | "droplet" | "lightbulb" | "thermometer";
}

const solutions: SolutionItem[] = [
  {
    title: "All Solar Solutions",
    href: "/solar-products/",
    description: "Explore all our solar solutions.",
    iconName: "sun",
  },
  {
    title: "On-Grid Solar System",
    href: "/solar-products/on-grid-systems/",
    description: "Maximum savings with utility grid connection.",
    iconName: "sun",
  },
  {
    title: "Off-Grid Solar System",
    href: "/solar-products/off-grid-systems/",
    description: "Battery backup for complete power independence.",
    iconName: "battery",
  },
  {
    title: "Hybrid Solar System",
    href: "/solar-products/hybrid-systems/",
    description: "Grid-tie reliability combined with battery security.",
    iconName: "zap",
  },
  {
    title: "Solar Water Pumps",
    href: "/solar-products/solar-water-pumps/",
    description: "Solar pumping solution for agriculture and irrigation.",
    iconName: "droplet",
  },
  {
    title: "Solar Street Lights",
    href: "/solar-products/solar-street-lights/",
    description: "Autonomous dusk-to-dawn street lighting systems.",
    iconName: "lightbulb",
  },
  {
    title: "Solar Water Heaters",
    href: "/solar-products/solar-water-heaters/",
    description: "Efficient solar water heating for homes and industries.",
    iconName: "thermometer",
  },
];

const iconMap = {
  sun: <Sun className="w-4 h-4 shrink-0" />,
  battery: <Battery className="w-4 h-4 shrink-0" />,
  zap: <Zap className="w-4 h-4 shrink-0" />,
  droplet: <Droplet className="w-4 h-4 shrink-0" />,
  lightbulb: <Lightbulb className="w-4 h-4 shrink-0" />,
  thermometer: <Thermometer className="w-4 h-4 shrink-0" />,
};

function SolutionsDropdown({
  isActive,
  // isScrolled,
}: {
  isActive: boolean;
  isScrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);

  // Close when focus leaves the container
  const handleBlur = (e: React.FocusEvent) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  // Keyboard navigation inside dropdown menu items
  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
      e.preventDefault();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const items = Array.from(
        containerRef.current?.querySelectorAll<HTMLAnchorElement>(
          '[role="menuitem"]',
        ) || [],
      );
      if (items.length === 0) return;
      const currentIndex = items.indexOf(
        document.activeElement as HTMLAnchorElement,
      );
      let nextIndex = currentIndex;
      if (e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % items.length;
      } else if (e.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      }
      items[nextIndex]?.focus();
    }
  };

  // const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     setIsOpen(true);
  //     setTimeout(() => {
  //       const firstItem =
  //         containerRef.current?.querySelector<HTMLAnchorElement>(
  //           '[role="menuitem"]',
  //         );
  //       firstItem?.focus();
  //     }, 50);
  //   }
  // };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={handleBlur}
      className="relative py-2 flex items-center"
    >
      <Link
        href="/solar-products/"
        ref={triggerRef}
        className={`flex items-center gap-1 text-md font-medium transition-colors duration-300 ${
          isActive ? "text-brand-red" : "text-gray-950 hover:text-brand-red"
        }`}
      >
        <span>Solutions</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      {/* Dropdown Menu Overlay with Hover Bridge */}
      <div
        role="menu"
        aria-labelledby="solutions-menu-trigger"
        aria-hidden={!isOpen}
        onKeyDown={handleMenuKeyDown}
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3.5 w-80 z-50 transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white border border-gray-150 rounded-2xl shadow-xl shadow-gray-250/20 p-3">
          <div className="flex flex-col space-y-1">
            {solutions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                role="menuitem"
                className="group flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-red-50/40 transition-all duration-200 focus:outline-none focus:bg-red-50/40"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-2 rounded-lg bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white! transition-colors duration-200 shrink-0">
                  {iconMap[item.iconName]}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm text-gray-900 group-hover:text-brand-red transition-colors duration-200">
                    {item.title}
                  </h4>
                  {/* <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] =
    useState<boolean>(false);
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

  // Reset mobile submenu state when hamburger toggles
  useEffect(() => {
    if (!isOpen) {
      setIsMobileSolutionsOpen(false);
    }
  }, [isOpen]);

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
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 mt-1.5 h-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.name === "Solutions") {
                return (
                  <SolutionsDropdown
                    key={link.name}
                    isActive={isActive}
                    isScrolled={isScrolled}
                  />
                );
              }

              return (
                <div
                  key={link.name}
                  className="h-8 overflow-hidden inline-flex items-center"
                >
                  <Link
                    href={link.href}
                    className={`${
                      isActive ? "text-brand-red" : "text-gray-950"
                    } text-md flex flex-col translate-y-3 hover:-translate-y-4 duration-300 transition-all font-medium`}
                  >
                    <span>{link.name}</span>
                    <span>{link.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                size={28}
                className={isScrolled ? "text-gray-900" : "text-gray-700"}
              />
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
        } transition-all duration-300 z-50 lg:hidden fixed top-16 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto`}
      >
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          if (link.name === "Solutions") {
            return (
              <div key={link.name} className="flex flex-col">
                <button
                  onClick={() =>
                    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                  }
                  className="flex items-center justify-between text-lg font-medium text-gray-900 w-full py-1.5 text-left cursor-pointer focus:outline-none"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isMobileSolutionsOpen
                        ? "rotate-180 text-brand-red"
                        : "text-gray-500"
                    }`}
                  />
                </button>
                <div
                  className={`pl-4 flex flex-col space-y-3.5 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileSolutionsOpen
                      ? "max-h-[400px] mt-2 opacity-100 py-1"
                      : "max-h-0 opacity-0 py-0 pointer-events-none"
                  }`}
                >
                  {solutions.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="text-md text-gray-600 hover:text-brand-red font-medium flex items-center gap-2.5 py-1 focus:text-brand-red"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileSolutionsOpen(false);
                      }}
                    >
                      <span className="shrink-0 text-brand-red">
                        {iconMap[sub.iconName]}
                      </span>
                      <span>{sub.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

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
