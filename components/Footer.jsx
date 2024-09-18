import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10">
        {/* first grid */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 text-left pl-4">
            AllTimeVend
          </h2>
          <p className="text-neutral-400 mt-3 px-4">
            AllTimeVend an unmanned automated service and operation company for
            automated retail services.
          </p>
        </div>

        {/* second grid */}
        <div classname="px-3">
          <h3 className="text-neutral-300 font-bold text-xl text-center md:text-center">
            Quick Links
          </h3>
          <ul className="flex flex-col text-neutral-400 gap-5 mt-3 text-center">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* third cols */}
        <div className="ml-4 px-3">
          <h2 className="text-neutral-300 font-bold text-xl">Social links</h2>
          <ul className="flex gap-3 text-neutral-400 text-2xl font-bold cursor-pointer mt-3">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
