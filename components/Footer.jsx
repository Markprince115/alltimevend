import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900">
      <div className="grid grid-cols-2 md:grid-cols-2">
        {/* first grid */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 text-center">
            AllTimeVend
          </h2>
        </div>

        {/* second grid */}
        <div>
          <h3 className="text-neutral-300 font-bold text-3xl">Quick Links</h3>
          <ul className="flex flex-col items-center justify-center text-white gap-5">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
