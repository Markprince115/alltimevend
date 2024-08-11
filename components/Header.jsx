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
          ? "fixed w-full flex items-center justify-between bg-black shadow-md p-5 z-10 transition-all ease-in-out duration-300"
          : "fixed w-full flex items-center justify-between bg-transparent p-5 z-10 transition-all ease-in-out duration-300"
      }
    >
      {/* logo icon */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500">
          AllTimeVend
        </h2>
      </div>

      {/* nav list */}
      <nav>
        <ul
          className={`hidden md:flex items-center justify-center ${
            scrolled ? "text-neutral-50" : "text-neutral-200"
          } gap-10 cursor-pointer`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* nav toggle */}
      <div
        onClick={handleNav}
        className={`md:hidden text-3xl font-bold ${
          scrolled ? "text-neutral-700" : "text-neutral-200"
        } cursor-pointer`}
      >
        {!nav ? <RiMenu3Line /> : <LiaTimesSolid />}
      </div>

      {/* mobile nav toggle */}
      {!nav ? (
        <nav className="hidden">
          <ul>
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
        <nav className="md:hidden max-w-[50%] bg-white absolute top-0 left-0 right-0">
          <ul className="text-white text-center">
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
      )}
    </header>
  );
};

export default Header;
