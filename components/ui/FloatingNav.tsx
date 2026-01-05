"use client";

import React, { useEffect, useState, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Detect scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on scroll */
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [scrolled]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ========== FULL SCREEN BLUR OVERLAY ========== */}
      <div
        className={cn(
          "md:hidden fixed inset-0 transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto backdrop-blur-2xl bg-black/60 z-[4000]"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* ========== NAVBAR ========== */}
      <nav
        className={cn(
          "fixed z-[5000] w-full transition-all duration-500",
          scrolled
            ? "top-4 mx-auto w-[95%] md:w-fit rounded-xl shadow-2xl border border-white/30 backdrop-blur-xl bg-black/70"
            : "top-0 border-b border-white/20 bg-black/40",
          className
        )}
        style={{
          left: scrolled ? "50%" : "0",
          transform: scrolled ? "translateX(-50%)" : "none",
        }}
      >
        <div
          className={cn(
            "flex items-center w-full px-4 py-3 md:px-8 md:py-2",
            scrolled ? "justify-center" : "justify-between md:justify-end"
          )}
        >
          {!scrolled && (
            <Link href="/" className="flex items-center md:hidden">
              <Image
                src="/About/ABC_HD_White.png"
                alt="ABC Logo"
                width={35}
                height={30}
                priority
              />
            </Link>
          )}

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="px-4 py-2 text-sm font-semibold rounded-lg text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </Link>
            ))}

            {!scrolled && (
              <Image
                src="/About/ABC_HD_White.png"
                alt="ABC Logo"
                width={35}
                height={30}
                className="ml-6"
              />
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "bg-white h-0.5 w-6 rounded-full transition-all",
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "bg-white h-0.5 w-6 rounded-full transition-all my-1.5",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "bg-white h-0.5 w-6 rounded-full transition-all",
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              )}
            />
          </button>
        </div>
      </nav>

      {/* ========== MOBILE MENU ========== */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[5000] flex items-center justify-center transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-6 pt-20 px-6 w-full">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs px-6 py-4 text-xl font-semibold rounded-2xl border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all"
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
