import React from "react";

function NavCommercialHeader() {
  return (
    <div className="bg-[#A69F97]  fixed w-full z-10">
      {/* Main container */}
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Centered message */}
        <p className="text-center text-sm font-medium text-black flex-1">
          קבל משלוח חינם בהזמנות מעל ₪100
        </p>

        {/* Right-aligned button */}
        <div className="flex items-center justify-end">
          <a
            href="tel:555-666-7777"
            className="rounded-full bg-[#8F8479] px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-[#776F66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#776F66]"

            // className="rounded-full bg-green-400 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            התקשרו אליי
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavCommercialHeader;
