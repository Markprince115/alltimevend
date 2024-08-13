const contact = () => {
  return (
    <section className="w-full contact">
      <div className="w-full h-[70dvh] pt-[15rem] contact">
        <h2 className="text-4xl font-bold text-center text-white">Contact</h2>
      </div>

      <section className=" bg-[#fffaf5]">
        <div className="w-full pt-10 text-center text-3xl">
          <h2> For more information contact us</h2>
        </div>
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col items-center justify-center gap-4 p-4"
            action=""
          >
            <input
              type="text"
              className="w-full rounded-sm border placeholder:text-neutral-500 p-3"
              placeholder="Enter Name"
              required
            />
            <input
              type="email"
              className="w-full rounded-sm border placeholder:text-neutral-500 p-3"
              placeholder="Enter email"
              required
            />
            <textarea
              placeholder="Enter Text"
              className="border p-3 h-[100%]"
            />
            <button className="bg-orange-500 text-white px-10 py-3 mt-4">
              {" "}
              Send
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default contact;
