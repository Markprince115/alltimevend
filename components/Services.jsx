import Image from "next/image";
import VENDING from "../assets/vending.webp";
import FUEL from "../assets/petrolpump.jpg";
import React from "react";
const Services = () => {
  return (
    <section className="w-full bg-neutral-50 pb-10 services">
      {/* section title */}
      <div className=" pl-5 md:pl-10 pt-20">
        <p className="text-orange-500">WHY CHOOSE US</p>
        <h2 className="text-neutral-50 text-3xl md:text-5xl font-bold mt-10">
          {" "}
          We Create Seamless Unmanned <br />
          Automated Services.
        </h2>
      </div>

      {/* content */}
      <div className="flex items-center justify-center w-full mt-7 px-5">
        {/* grid col */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-5">
          {/* first Cols */}
          <div>
            <div className="flex items-center justify-center text-center">
              <Image src={VENDING} width={300} alt="vending store" />
            </div>
            <p className="text-center text-neutral-50 p-5">
              {" "}
              Unmanned automated retail store with cutting-edge technology
            </p>
            <div className="flex items-center justify-center mt-3">
              <button className="bg-transparent border border-orange-500 px-7 py-3 text-white">
                {" "}
                Read more
              </button>
            </div>
          </div>

          {/* first Cols */}
          <div>
            <div className="flex items-center justify-center text-center">
              <Image src={FUEL} width={300} alt="vending store" />
            </div>
            <p className="text-center text-neutral-50 p-5">
              {" "}
              Unmanned automated parcel locker with cutting-edge technology
            </p>
            <div className="flex items-center justify-center mt-3">
              <button className="bg-transparent border border-orange-500 px-7 py-3 text-white">
                {" "}
                Read more
              </button>
            </div>
          </div>
          {/* first Cols */}
          <div>
            <div className="flex items-center justify-center text-center">
              <Image src={VENDING} width={300} alt="vending store" />
            </div>
            <p className="text-center text-neutral-50 p-5">
              {" "}
              Unmanned automated fuel pump with cutting-edge technology
            </p>
            <button className="bg-transparent border border-orange-500 px-7 py-3 text-white">
              {" "}
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
