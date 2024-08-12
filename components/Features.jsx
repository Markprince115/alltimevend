import React from "react";
import { IoIosTimer } from "react-icons/io";
import { GiPowerGenerator } from "react-icons/gi";
import { FaClockRotateLeft, FaChartLine, FaTruckMoving } from "react-icons/fa6";
import { MdEnergySavingsLeaf } from "react-icons/md";

const Features = () => {
  return (
    <section className="w-full bg-[#fcfaf7] pb-10">
      <div className="pt-20 text-center">
        <p className="text-center text-sm text-orange-500">WHAT WE OFFER</p>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols1 md:grid-cols-3 gap-4 text-center text-neutral-800 p-5">
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500  p-5">
              <IoIosTimer />
            </div>
            <p>Real-time eventory and data-driven insights.</p>
          </div>
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 p-5">
              <GiPowerGenerator />
            </div>
            <p>
              Energy efficient solutions and <br />
              backup power solutions.
            </p>
          </div>
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 p-5">
              <FaClockRotateLeft />
            </div>
            <p>
              24/7 sales capability, freeing up <br />
              business owners to focus on growth.
            </p>
          </div>
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 p-5">
              <MdEnergySavingsLeaf />
            </div>
            <p>
              Stand-alone off-grid functionality <br />
              powered by solar energy.
            </p>
          </div>
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 p-5">
              <FaChartLine />
            </div>
            <p>Reduce capital expenditures.</p>
          </div>
          {/* first cols */}
          <div className="shadow-md p-4">
            {/* icon */}
            <div className="flex items-center justify-center text-4xl text-orange-500 p-5">
              <FaTruckMoving />
            </div>
            <p>
              Increased flexibility: easily o relocate <br />
              or expand your retail presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
