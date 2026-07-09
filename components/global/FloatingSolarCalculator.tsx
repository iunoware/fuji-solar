"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator } from "lucide-react";
import SolarCalculatorCard from "./SolarCalculatorCard";

export default function FloatingSolarCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Prevent background scrolling and prevent layout shifting when modal opens
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Escape key handler to close the modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus restoration when modal closes
  useEffect(() => {
    if (!isOpen) {
      buttonRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trapping within the modal
  useEffect(() => {
    if (!isOpen) return;

    const getFocusableElements = () => {
      if (!modalRef.current) return [];
      return Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("tabindex") !== "-1"
      );
    };

    // Set initial focus to the first focusable element (typically the close button in SolarCalculatorCard)
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      focusable[0].focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const elements = getFocusableElements();
      if (elements.length === 0) return;

      const firstEl = elements[0];
      const lastEl = elements[elements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: wrap from first to last
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        // Tab: wrap from last to first
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    return () => window.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6 z-40 group flex flex-col items-end">
        {/* Hover Tooltip (desktop only) */}
        <div
          className="mb-2 px-3.5 py-2 bg-gray-900 text-white font-bold text-xs rounded-xl shadow-lg border border-gray-800 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-205 ease-out hidden md:block transform translate-y-1 group-hover:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none"
          role="tooltip"
          id="calculator-fab-tooltip"
        >
          Solar Calculator
        </div>

        {/* Circular Floating Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/20 hover:shadow-xl hover:shadow-brand-red/35 active:scale-95 hover:scale-105 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-red/30 z-40"
          aria-label="Open Solar Calculator"
          aria-describedby="calculator-fab-tooltip"
        >
          <Calculator className="w-6 h-6 shrink-0" />
        </button>
      </div>

      {/* Modal Dialog overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 cursor-default animate-fade-in"
          onClick={handleBackdropClick}
          role="presentation"
        >
          {/* Modal Container */}
          <div
            ref={modalRef}
            className="relative animate-slide-up motion-reduce:animate-none flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <span id="modal-title" className="sr-only">
              Solar Calculator
            </span>
            <SolarCalculatorCard isModal={true} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}

      {/* Embedded CSS animations for overlay transitions */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
