import React, { memo, useCallback, useContext } from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavCommercialHeader from "./NavCommercialHeader";
// import logoImage from "../../public/WhatsAppImage2025-01-05at21.36.22_e3eca4b3.jpg"; FIXME: make the logo image bigger
import logoImage from "../../public/WhatsAppImage2025-01-05at21.36.22_e3eca4b31.jpg";
import { cartContext } from "../contexts/CartContext";
import ShoppingCart from "./subComponents/ShopingCart";
import Toast from "../utils/tostify";
import { redirectToCheckout } from "../services/shopify";
import CommandPalettes from "./subComponents/CommandPalettes";
import useProducts from "../hooks/useProducts";
import Dropdowns from "./subComponents/Dropdowns";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "חנות",
      BakedGoods: [
        { name: "עוגות", href: "/store/עוגות" },
        { name: "עוגיות", href: "/store/עוגיות" },
        { name: "טארטים", href: "/store/טארטים" },
      ],
      IndividualDesserts: [
        { name: "קינוחי כוסות", href: "/store/קינוחי-כוסות" },
        // { name: "Core", href: "#" },
        // { name: "New Arrivals", href: "#" },
        // { name: "Sale", href: "#" },
      ],
      GiftBoxes: [
        { name: "מארזים", href: "/store/מארזים" },
        // { name: "Artwork Tees", href: "#" },
        // { name: "Bottoms", href: "#" },
        // { name: "Underwear", href: "#" },
        // { name: "Accessories", href: "#" },
      ],
      IceCreams: [
        { name: "גלידות", href: "/store/גלידות" },
        // { name: "My Way", href: "#" },
        // { name: "Re-Arranged", href: "#" },
        // { name: "Counterfeit", href: "#" },
        // { name: "Significant Other", href: "#" },
      ],
    },
    // {
    //   name: "מארזים",
    //   IndividuaBakedGoodslDesserts: [
    //     { name: "Casual", href: "#" },
    //     { name: "Boxers", href: "#" },
    //     { name: "Outdoor", href: "#" },
    //   ],
    //   IndividualDesserts: [
    //     { name: "Everything", href: "#" },
    //     { name: "Core", href: "#" },
    //     { name: "New Arrivals", href: "#" },
    //     { name: "Sale", href: "#" },
    //   ],
    //   GiftBoxes: [
    //     { name: "Artwork Tees", href: "#" },
    //     { name: "Pants", href: "#" },
    //     { name: "Accessories", href: "#" },
    //     { name: "Boxers", href: "#" },
    //     { name: "Basic Tees", href: "#" },
    //   ],
    //   IceCreams: [
    //     { name: "Significant Other", href: "#" },
    //     { name: "My Way", href: "#" },
    //     { name: "Counterfeit", href: "#" },
    //     { name: "Re-Arranged", href: "#" },
    //     { name: "Full Nelson", href: "#" },
    //   ],
    // },
  ],
  pages: [
    { name: "שאלות תשובות", href: "/faq" },
    { name: "צור קשר", href: "/contact" },
    { name: "תקנון", href: "/takanon" },
  ],
};
const offers = [
  {
    name: "Download the app",
    description: "Get an exclusive $5 off code",
    href: "#",
  },
  {
    name: "Return when you're ready",
    description: "60 days of free returns",
    href: "#",
  },
  {
    name: "Sign up for our newsletter",
    description: "15% off your first order",
    href: "#",
  },
];

function NavContainer() {
  const { cart, subTotal, handleRemoveItem, isCartOpen, setIsCartOpen } =
    useContext(cartContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const tostify = new Toast();

  // Toggle the search bar
  const toggleSearchBar = useCallback(() => {
    setOpenSearchBar((prev) => !prev);
  }, []);

  // Close the search bar (passed to child)
  const closeSearchBar = useCallback(() => {
    setOpenSearchBar(false);
  }, []);

  // Cart quantity TODO: add toFix propartie
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const checkoutLink = () => {
    try {
      if (cart.length === 0)
        return tostify.createToast("warning", "אנא מלא/י את הסל קודם ");

      redirectToCheckout();
    } catch (error) {
      tostify.createToast("warning", " שגיעה במעבר אנא נסה במועד מאוחר יותר ");
    }
  };

  return (
    <div>
      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex" dir="rtl">
          <DialogPanel
            transition
            // className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 pb-6 pt-10"
                  >
                    <div
                      className="grid grid-cols-1 items-start gap-x-6 gap-y-10 "
                      dir="rtl"
                    >
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 ">
                        <div>
                          <a id="mobile-brand-heading" href="/store">
                            מעבר לכל המוצרים
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </div>
                        {/* TESTING */}
                        {/* <div>
                          <p
                            id={`mobile-IndividuaBakedGoodslDesserts-heading-${categoryIdx}`}
                            className="font-medium text-gray-900 "
                          >
                            מאפים
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-IndividuaBakedGoodslDesserts-heading-${categoryIdx}`}
                            className="mt-6 space-y-6 text-center"
                          >
                            {category.BakedGoods.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                        {/*  TODO:*/}
                        <Dropdowns
                          title={"מאפים"}
                          category={category.BakedGoods}
                        />
                        {/* <div>
                          <p
                            id="mobile-GiftBoxes-heading"
                            className="font-medium text-gray-900"
                          >
                            מארזים
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-GiftBoxes-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.GiftBoxes.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                        <Dropdowns
                          title={"מארזים"}
                          category={category.GiftBoxes}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        {/* <div>
                          <p
                            id="mobile-IndividualDesserts-heading"
                            className="font-medium text-gray-900"
                          >
                            קינוחים אישיים
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-IndividualDesserts-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.IndividualDesserts.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                        <Dropdowns
                          title={"קינוחים אישיים"}
                          category={category.IndividualDesserts}
                        />
                        {/* <div>
                          <p
                            id="mobile-brand-heading"
                            className="font-medium text-gray-900"
                          >
                            גלידות
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.IceCreams.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                        <Dropdowns
                          title={"גלידות"}
                          category={category.IceCreams}
                        />
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 px-4 py-6" dir="rtl">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <NavCommercialHeader />

          {/* Secondary navigation */}
          <div className="bg-[#F2EADF] pt-10 fixed w-full z-1">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className="flex h-16 items-center justify-between"
                  dir="rtl"
                >
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center ">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="לוגו של החנות עוגייה"
                        src={logoImage}
                        className="h-16 w-auto "
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <PopoverGroup className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className=" px-8 relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                {category.name}
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:text-sm"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 top-1/2 bg-white shadow"
                              />
                              {/* TODO: ADDON DIR  */}
                              <div className="relative bg-white " dir="rtl">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-5 gap-x-8 gap-y-10 pb-12 pt-10">
                                    {/* Section 2 */}
                                    <div>
                                      <p
                                        id={`desktop-IndividuaBakedGoodslDesserts-heading-${categoryIdx}`}
                                        className="font-medium text-gray-900"
                                      >
                                        מאפים
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`desktop-IndividuaBakedGoodslDesserts-heading-${categoryIdx}`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.BakedGoods.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Section 3 */}
                                    <div>
                                      <p
                                        id="desktop-GiftBoxes-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        מארזים
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-GiftBoxes-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.GiftBoxes.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* Section 4 */}
                                    <div>
                                      <p
                                        id="desktop-IndividualDesserts-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        קינוחים אישיים
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-IndividualDesserts-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.IndividualDesserts.map(
                                          (item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>

                                    {/* Section 5 */}
                                    <div>
                                      <p
                                        id="desktop-brand-heading"
                                        className="font-medium text-gray-900"
                                      >
                                        גלידות
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-brand-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.IceCreams.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    {/* Section 1 */}
                                    <div>
                                      <p
                                        id="desktop-brand-heading"
                                        className="font-medium text-gray-900"
                                      ></p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-brand-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {category.IceCreams.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={"/store"}
                                              className="hover:text-gray-800"
                                            >
                                              מעבר להכל
                                              <span aria-hidden="true">
                                                {" "}
                                                &rarr;
                                              </span>
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Search - small sizes*/}
                    <button
                      onClick={toggleSearchBar}
                      // href="#"
                      className="ml-2 p-2 text-gray-400 hover:text-gray-500 pr-8"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />{" "}
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  {/* TODO:FIXME: fix the logo on iphone sm screens  */}
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="לוגו של החנות עוגייה"
                      src={logoImage}
                      className="h-16 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <button
                            onClick={toggleSearchBar}
                            // onClick={() => openSearchBar()}
                            // href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon
                              aria-hidden="true"
                              className="size-6"
                            />
                          </button>
                          {/* need to add to types of props - TODO:
                          -the first one is all the data names
                          -the seconed is the open state that will be controlled by the click on the serch-bar
                          */}
                          <CommandPalettes
                            openSearchBar={openSearchBar}
                            onClose={closeSearchBar}
                          />
                        </div>

                        {/* <div className="flex">
                          <a
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Account</span>
                            <UserIcon aria-hidden="true" className="size-6" />
                          </a>
                        </div> */}
                      </div>

                      {/* <span
                        aria-hidden="true"
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      /> */}

                      <span
                        aria-hidden="true"
                        className="mx-4 h-6 w-px  lg:mx-6"
                      />

                      <ShoppingCart
                        totalQuantity={totalQuantity}
                        products={cart}
                        checkoutLink={checkoutLink}
                        subTotal={subTotal}
                        handleRemoveItem={handleRemoveItem}
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default memo(NavContainer);
