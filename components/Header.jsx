"use client";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";

const Header = () => {
  // nav toggling
  const [nav, setNav] = useState(false);
  // handle toggling
  const handleNav = () => {
    setNav(!nav);
  };

  //   change background onScroll
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={
        scrolled
          ? "fixed w-full flex items-center justify-between bg-[#fffaf5] shadow-md p-5 z-10 transition-all ease-in-out duration-300"
          : "fixed w-full flex items-center justify-between bg-transparent p-5 z-10 transition-all ease-in-out duration-300"
      }
    >
      {/* logo icon */}
      <div>
        <Link href="/">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500">
            AllTimeVend
          </h2>
        </Link>
      </div>

      {/* nav list */}
      <nav>
        <ul
          className={`hidden md:flex items-center justify-center ${
            scrolled ? "text-neutral-800" : "text-neutral-50"
          } gap-10 cursor-pointer`}
        >
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Services</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      {/* nav toggle */}
      <div
        onClick={handleNav}
        className={`md:hidden text-3xl font-bold ${
          scrolled ? "text-neutral-700" : "text-neutral-50"
        } cursor-pointer`}
      >
        {!nav ? <RiMenu3Line /> : <LiaTimesSolid />}
      </div>

      {/* mobile nav toggle */}
      {!nav ? (
        <nav className="hidden">
          <ul className="text-neutral-800 flex flex-col items-center justify-center">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Services</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <nav className="md:hidden max-w-[50%] h-screen bg-white absolute top-0 left-0 right-0 transition-all ease-in-out duration-300">
          <ul className="text-neutral-800 flex flex-col items-center justify-center gap-5 text-center mt-20">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/">
              <li>Services</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
