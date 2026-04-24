"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="relative bg-brand-yellow/30 border-t border-gray-100 pt-20 overflow-hidden font-montserrat">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/20">
                  <span className="text-white font-bold text-xl leading-none">
                    F
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 uppercase italic">
                  Fuji Solar
                </h3>
              </div>
              <p className="text-gray-700 max-w-sm leading-relaxed">
                Empowering homes and businesses with clean, reliable, and
                sustainable solar energy solutions. Join the green revolution
                today.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/60 flex items-center justify-center text-black/60 hover:text-brand-red hover:border-brand-red transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/60 flex items-center justify-center text-black/60 hover:text-brand-red hover:border-brand-red transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-black/60 flex items-center justify-center text-black/60 hover:text-brand-red hover:border-brand-red transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2 lg:col-start-6 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Solutions
              </h4>
              <nav className="flex flex-col gap-4">
                {["Hybrid Systems", "On-Grid", "Off-Grid", "Solar Pumps"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-gray-800 hover:text-brand-red text-sm transition-colors flex items-center gap-1 group"
                    >
                      {item}{" "}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ),
                )}
              </nav>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Company
              </h4>
              <nav className="flex flex-col gap-4">
                {["About Us", "Calculator", "Testimonials", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-gray-800 hover:text-brand-red text-sm transition-colors flex items-center gap-1 group"
                    >
                      {item}{" "}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ),
                )}
              </nav>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                Office
              </h4>
              <div className="space-y-4">
                <p className="text-gray-800 text-sm leading-relaxed">
                  4th Floor, Apex Tower, <br />
                  Business District, Chennai 600001
                </p>
                <div className="pt-2">
                  <button className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-brand-red transition-all duration-300 ">
                    <MessageSquare size={16} /> Quick Support
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Huge Brand Text (Premium Element) */}
          <div className="py-10 border-t border-gray-50 select-none">
            <h2 className="text-[12vw] lg:text-[12rem] font-bold leading-none tracking-tighter uppercase italic">
              <span className="text-brand-red">Fuji</span>
              <span className="text-transparent stroke-text ml-4 opacity-50">
                Solar
              </span>
            </h2>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-black font-medium">
            <div className="flex items-center gap-6">
              <span>
                © {currentYear}{" "}
                <a
                  href="https://www.iunoware.com/"
                  className="font-bold"
                  target="_blank"
                >
                  Iunoware Pvt Ltd.
                </a>{" "}
                All rights reserved.
              </span>
              {/* <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link> */}
            </div>
            <div className="flex items-center gap-2">
              <span>Engineering a sustainable future</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .stroke-text {
            -webkit-text-stroke: 1.5px #000;
          }
          @media (max-width: 1024px) {
            .stroke-text {
              -webkit-text-stroke: 1px #000;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
