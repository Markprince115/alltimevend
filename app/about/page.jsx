import React from "react";

const about = () => {
  return (
    <section className="w-full">
      <div className="text-center text-3xl md:text-3xl font-bold w-full h-[70dvh] md:h-[80vh] about">
        <h2 className="text-white text-center font-bold md:text-3xl pt-[15rem]">
          {" "}
          About Us{" "}
        </h2>
      </div>

      <section className="w-full pt-10 pb-10">
        <div className="ml-4">
          <h2 className="text-neutral-800 text-3xl md:text-4xl">
            {" "}
            AllTimeVend
          </h2>
          <p className="mt-4">
            We offer a pioneering solution for new business owners, providing a
            long-term cost-effective alternative to traditional brick-and-mortar
            stores.
          </p>
          <p className="mt-4">
            Our automated smart retail shelves enables entrepreneurs to invest
            in a scalable, 24/7 retail presence, eliminating rental costs and
            maximizing return.
          </p>
        </div>
      </section>

      <section className="bg-[#ff8000] w-full pb-10">
        <div className="pt-10 pl-4">
          <h2 classname="text-4xl text-neutral-800 font-bold">
            {" "}
            Our Target Audience
          </h2>
          <p className="mt-4 text-white">
            {" "}
            Our primary target market is new business owners seeking to
            establish a retail presence without the burden of high recuring and
            ongoing rental expenses, and posses a flexibility in moving to
            thriving locations.{" "}
          </p>
        </div>
      </section>
    </section>
  );
};

export default about;
