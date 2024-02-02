import React from "react";
import Scanner from "../../Assests/QRScanner.png";

function Online() {
  return (
    <div className=" flex flex-row gap-20">
      <div className=" w-[80%]  m-10 flex flex-col gap-3 font-medium">
        <p> Category Payment = Tiffin</p>
        <p> Selected Plan = Standard Plan</p>
        <h2> Total Payment = 2000/- RS.</h2>
      </div>

      <div className="w-[30%]  m-36 mt-2 mb-2  ">
        <img
          src={Scanner}
          className="bg-no-repeat object-cover h-[30vh]
  w-[60vw] "
          alt="Scanner"
        ></img>
      </div>
    </div>
  );
}

export default Online;
