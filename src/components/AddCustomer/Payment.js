import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className=" relative w-[95vw] h-[70vh]  mx-auto  bg-white">
      {" "}
      <button className="bg-yellow-400 ml-2 mt-2 border border-black px-1 w-[20vh] h-[4vh]">
        Payment
      </button>
      <footer className="absolute right-5 bottom-3 flex gap-28">
        <button
          className="bg-yellow-400 px-8 py-1 border border-black outline-none
            rounded-sm"
        >
          {" "}
          Continue
        </button>
        <Link
          to="/"
          className="bg-yellow-400 px-8 py-1 border border-black outline-none rounded-sm"
        >
          Close
        </Link>
      </footer>
    </div>
  );
};

export default Payment;
