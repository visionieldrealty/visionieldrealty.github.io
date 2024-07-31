import React from "react";

export default function Services() {
  return (
    <main className="flex my-20 mx-10">
      <div className="md:w-1/2" />
      <div className="md:w-1/2 flex flex-col items-stretch gap-9 p-10 rounded-5xl shadow-custom-3">
        <input
          className="text-base font-light pb-3 focus:outline-none border-b border-black"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="text-base font-light pb-3 focus:outline-none border-b border-black"
          type="text"
          placeholder="Phone"
        />
        <input
          className="text-base font-light pb-3 focus:outline-none border-b border-black"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="border-b border-black focus:outline-none text-base font-light"
          placeholder="Write us"
          name="Write Us"
          id=""
          cols={30}
          rows={3}
          defaultValue={""}
        />
        <button className="border-solid border-2 border-black rounded-5xl px-12 py-4 w-max bg-black hover:bg-white hover:text-black text-white mx-auto">
          CONTACT US
        </button>
      </div>
    </main>
  );
}
