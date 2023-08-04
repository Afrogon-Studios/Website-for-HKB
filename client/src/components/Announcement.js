import React, { useState } from "react";

function Announcement() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className="bg-[#4B0150] h-[40px] pr-4 px-5 "
      style={open ? { display: "grid" } : { display: "none" }}
    >
      <div className="grid grid-cols-2 ">
        <h1 className="text-white ml-auto mt-auto mb-auto whitespace-nowrap">
          70% off storewide — Limited time{" "}
        </h1>
        <h1
          className="text-white font-medium ml-auto mt-auto mb-auto cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          X
        </h1>
      </div>
    </div>
  );
}

export default Announcement;
