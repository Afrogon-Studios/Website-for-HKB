import React from "react";

function OtherCategories() {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center gap-[2rem] md:p-[52px] p-5">
      <div className="flex flex-col gap-[1.5rem] w-[100%]">
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/big%20cat3.png?alt=media&token=2a14bc22-e60a-4ffd-a62a-c9095cba95e5')] bg-no-repeat bg-center bg-[length:100%_100%] lg:w-[40.75rem] w-[100%] lg:h-[26rem] h-[20rem] flex items-end justify-center">
          <button className="bg-white w-[204px] py-3 rounded font-space font-medium text-xl mb-10">
            Donor
          </button>
        </div>
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/big%20cat2.png?alt=media&token=52b229e0-ba21-4789-a149-8d0e5817733c')] bg-no-repeat bg-center bg-[length:100%_100%] lg:w-[40.75rem] w-[100%] lg:h-[20.25rem] h-[20rem] flex items-end justify-center">
          <button className="bg-white w-[204px] py-3 rounded font-space font-medium text-xl mb-10">
            Royal
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] w-[100%]">
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/big%20cat.png?alt=media&token=62742003-5916-4957-8c2f-f753190ead52')] bg-no-repeat bg-center bg-[length:100%_100%] lg:w-[40.75rem] w-[100%] lg:h-[20.25rem] h-[20rem] flex items-end justify-center">
          <button className="bg-white w-[204px] py-3 rounded font-space font-medium text-xl mb-10">
            Everyday
          </button>
        </div>
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/hkb-ecommerce-project.appspot.com/o/big%20cat1.png?alt=media&token=47a63e34-cb64-40ef-9218-7db45eb1a45d')] bg-no-repeat bg-center bg-[length:100%_100%] lg:w-[40.75rem] w-[100%] lg:h-[26rem] h-[20rem] flex items-end justify-center">
          <button className="bg-white w-[204px] py-3 rounded font-space font-medium text-xl mb-10">
            Luxury
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtherCategories;
