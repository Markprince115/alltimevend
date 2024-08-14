import Image from "next/image";
import TEAM from "../../assets/team.avif";
import ENGINEER from "../../assets/engineer.webp";

const services = () => {
  return (
    <section className="pb-10">
      <div className="w-full h-[80dvh] service">
        <h2 className="text-3xl font-bold text-center pt-[15rem] text-white">
          {" "}
          Our Services
        </h2>
      </div>
      <section className="w-full">
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 place-items-center p-4">
            {/* first Col */}
            <div className="">
              <h2 className="text-3xl text-neutral-800 font-bold">
                AllTimeVend
              </h2>

              <p className="mt-5">
                We offer comprehensive services for managing retail operations,
                including sales record, <br />
                inventory level monitoring, tracking of sales and sales support.{" "}
              </p>
              <p className="mt-5">
                Let us optimize your retail operations for maximum efficiency
                and profitability.
              </p>
            </div>

            {/* second col */}
            <div className="flex items-center justify-center">
              <Image src={TEAM} width={500} alt="team" />
            </div>

            {/* third col */}
            <div className="flex items-center justify-center pt-10">
              <Image src={ENGINEER} width={500} alt="engineer" />
            </div>

            {/* forth col */}
            <div className="mr-5 pt-10">
              <p>
                We also Offer hardware operations and installations services
                forn automated nanostores, kiosks, ATG syatems, fuel pump,{" "}
                <br />
                smart Lockers and proprietary hybrid-powered machines and
                solutions.
              </p>
              <p className="mt-5">
                We also ensure seamless integration and optimal performance of
                retail automation texchnologies for your business.
              </p>
              <button className="bg-orange-500 text-white px-7 py-3 mt-5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default services;
