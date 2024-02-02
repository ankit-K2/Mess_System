import React, { useState } from "react";
import AttendanceSuccess from "./AttedanceSuccess";
import FingerPrint from "../../Assests/FingerPrintGif.gif";

const AddHelper = () => {
  const [showAttendanceSuccess, setShowAttendanceSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAttendanceSuccess(true);
  };

  return (
    <div className="relative ml-10 mt-5">
      <div className="mb-5 flex flex-row gap-1">
        <input type="checkbox" class="accent-yellow-400 h-5 w-5" />
        <label
          className="bg-yellow-300 px-9 py-0 border border-black rounded-md  
               font-semibold"
        >
          Attendance
        </label>
      </div>
      {showAttendanceSuccess ? (
        <AttendanceSuccess onClose={() => setShowAttendanceSuccess(false)} />
      ) : null}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row gap-24">
          <div className="w-[50%]">
            <label>Name :</label>
            <br />
            <input className="bg-zinc-200 w-full  border border-black outline-8" />
            <br />
            <label>Mobile Number :</label>
            <br />
            <input className="bg-zinc-200 w-full border border-black outline-8" />
          </div>

          <div className="w-[50%]  mx-28">
            <div className="px-4 mb-5">FingerPrint/ Biometric Details:</div>
            <div
              className="relative  w-[90%] h-[10rem] 
            flex justify-center items-center border border-black z-2"
            >
              <img
                className="object-contain h-36 w-96 "
                src={FingerPrint}
                alt="Fingerprint"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            className="absolute left-8 bottom-5 bg-yellow-300 px-9 py-0 border border-black rounded-md  
            font-semibold"
          >
            Attendance
          </button>
        </div>
      </form>

      {showAttendanceSuccess ? (
        <AttendanceSuccess onClose={() => setShowAttendanceSuccess(false)} />
      ) : null}
    </div>
  );
};

export default AddHelper;
