import React from "react";

function NavCommercialHeader() {
  return (
    <div className="bg-gray-900">
      {/* Main container */}
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Centered message */}
        <p className="text-center text-sm font-medium text-white flex-1">
          קבל משלוח חינם בהזמנות מעל $100
        </p>

        {/* Right-aligned button */}
        <div className="flex items-center justify-end">
          <a
            href="tel:555-666-7777"
            className="rounded-full bg-green-400 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ההתקשרו אליי
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavCommercialHeader;
