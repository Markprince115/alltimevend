import Image from "next/image";
import React from "react";
import VENDIMAGE from "../assets/vendingimage.webp";

const About = () => {
  return (
    <section className="w-full bg-white pb-10">
      <div className="flex flex-col items-center justify-center">
        {/* section title */}
        <div className="text-center text-orange-600 pt-[3rem]">
          <p> WHO WE ARE</p>
        </div>

        <div className="flex items-center justify-center px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            {/* first grid */}
            <div className="pl-5">
              <h2 className="text-neutral-600 font-bold text-3xl md:text-5xl text-left">
                AllTimeVend
              </h2>
              <p className="text-neutral-700 mt-5 text-left my-3">
                At AllTimeVend, we are revolutionizing the retail industry with
                cutting-edge automated solutions tailored for modern businesses.
              </p>

              <p className="text-neutral-700 text-left">
                {" "}
                With a focus quality of innovation, efficiency, durability, and
                availability, AllTimeVend provides cutting-edge and
                uninterrupted power supply for seamless shopping experience.
              </p>

              <p className="text-neutral-700 text-left my-3">
                Explore our range of automated nanostores..
              </p>
              {/* button */}
              <div className="mt-4">
                <button className="bg-orange-600 px-7 py-5 text-white text-sm text-left transition-all ease-in-out hover:bg-transparent hover:text-neutral-800 border border-orange-500">
                  {" "}
                  Read more
                </button>
              </div>
            </div>

            {/* second grid col */}
            <div className=" flex items-center justify-center">
              <Image src={VENDIMAGE} alt="vending operator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
