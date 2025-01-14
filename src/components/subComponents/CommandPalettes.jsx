import React, { memo, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce"; // Import debounce function
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { UsersIcon } from "@heroicons/react/24/outline";
import commandPalettes from "../../hooks/commandPalettes";

const people = [
  { id: 1, name: "Leslie Alexander", url: "#" },
  // More people...
];

function CommandPalettes({ openSearchBar, onClose }) {
  // FIXME: not good becouse it fetch all the time
  const [query, setQuery] = useState("");

  const { products, error, loading } = commandPalettes(openSearchBar);

  // Filtered people based on the query
  const filteredPeople = query
    ? products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = debounce((event) => {
    setQuery(event.target.value);
  }, 300); // 300ms debounce delay

  return (
    <Dialog
      className="relative z-10"
      open={openSearchBar}
      //   onClose={() => {
      //     setOpen(false);
      //     setQuery("");
      //   }}
      onClose={onClose}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <DialogPanel
          transition
          className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox
            onChange={(product) => {
              if (product) {
                // window.location = product.url;
                window.location = `/product/${product.handle}`;
              }
            }}
          >
            <ComboboxInput
              autoFocus
              className="w-full rounded-md bg-gray-100 px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-500 sm:text-sm"
              dir="rtl"
              placeholder="חיפוש..."
              //   onChange={(event) => setQuery(event.target.value)}
              onChange={handleSearch}
              onBlur={() => setQuery("")}
            />

            {filteredPeople.length > 0 && (
              <ComboboxOptions
                static
                className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                dir="rtl"
              >
                {filteredPeople.map((product) => (
                  <ComboboxOption
                    key={product.id}
                    value={product}
                    className="cursor-default select-none rounded-md px-4 py-2 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    {product.title}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            )}

            {query !== "" && filteredPeople.length === 0 && (
              <div className="px-4 py-14 text-center sm:px-14">
                <UsersIcon
                  className="mx-auto size-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-900">
                  לא נמצאו התאמות לחיפוש זה{" "}
                </p>
              </div>
            )}
          </Combobox>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default memo(CommandPalettes);
