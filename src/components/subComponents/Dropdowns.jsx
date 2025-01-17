import React, { memo } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Dropdowns({ title, category }) {
  return (
    // <Menu as="div" classNameName="relative inline-block text-left">
    //   <div>
    //     <MenuButton
    //       // classNameName="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"

    //       classNameName="font-medium text-gray-900 "
    //     >
    //       Options
    //       <ChevronDownIcon
    //         aria-hidden="true"
    //         className="-mr-1 size-5 text-gray-400"
    //       />
    //     </MenuButton>
    //   </div>

    //   <MenuItems
    //     transition
    //     className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    //   >
    //     <div className="py-1">
    //       <MenuItem>
    //         <a
    //           className="mt-6 space-y-6 text-center"
    //           href="#"
    //           //   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
    //         >
    //           Account settings
    //         </a>
    //       </MenuItem>
    //     </div>
    //   </MenuItems>
    // </Menu>

    <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative flex">
      <a
        href="javascript:void(0)"
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          className="ml-1 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
            data-name="16"
            data-original="#000000"
          />
        </svg>
      </a>
      <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-[400ms]">
        {category.map((item) => (
          <li key={item.name} className="border-b py-3">
            <a
              href={item.href}
              className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-800 text-[15px] flex items-center"
            >
              {/* Furniture Store */}

              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default memo(Dropdowns);
