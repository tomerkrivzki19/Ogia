import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
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
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import useProducts from "../hooks/useProducts";
import { useParams, useSearchParams } from "react-router-dom";
import StotrePageTopics from "./subComponents/StotrePageTopics";
import Spinner from "./subComponents/Spinner";
import ServerError from "./subComponents/ServerError";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
// not relevnt -but good for the padding
const breadcrumbs = [{ id: 1, name: "Men", href: "#" }];
const filters = [
  {
    id: "color",
    name: "קטגוריה",
    options: [
      { value: "all", label: "הכל", href: "/store/", isChecked: "" },
      {
        value: "cakes",
        label: "עוגות",
        href: "/store/עוגות",
        isChecked: "עוגות",
      },
      {
        value: "cookies",
        label: "עוגיות",
        href: "/store/עוגיות",
        isChecked: "עוגיות",
      },
      {
        value: "tarts",
        label: "טארטים",
        href: "/store/טארטים",
        isChecked: "טארטים",
      },
      {
        value: "gift-boxes",
        label: "מארזים",
        href: "/store/מארזים",
        isChecked: "מארזים",
      },
      {
        value: "dessert-cups",
        label: "קינוחי כוסות",
        href: "/store/קינוחי-כוסות",
        isChecked: "קינוחי-כוסות",
      },
      {
        value: "ice-creams",
        label: "גלידות",
        href: "/store/גלידות",
        isChecked: "גלידות",
      },
    ],
  },
  // {
  //   id: "category",
  //   name: "Category",
  //   options: [
  //     { value: "new-arrivals", label: "All New Arrivals" },
  //     { value: "tees", label: "Tees" },
  //     { value: "crewnecks", label: "Crewnecks" },
  //     { value: "sweatshirts", label: "Sweatshirts" },
  //     { value: "pants-shorts", label: "Pants & Shorts" },
  //   ],
  // },
  // {
  //   id: "sizes",
  //   name: "Sizes",
  //   options: [
  //     { value: "xs", label: "XS" },
  //     { value: "s", label: "S" },
  //     { value: "m", label: "M" },
  //     { value: "l", label: "L" },
  //     { value: "xl", label: "XL" },
  //     { value: "2xl", label: "2XL" },
  //   ],
  // },
];
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

const sortOptions = [
  { name: "החדשים ביותר", value: "newest" },
  { name: "הפופולריים ביותר", value: "most-popular" },
  { name: "הדירוג הגבוה ביותר", value: "best-rating" },
  { name: "מחיר: מהנמוך לגבוה", value: "price-low-to-high" },
  { name: "מחיר: מהגבוה לנמוך", value: "price-high-to-low" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function StorePage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQuery = searchParams.get("sort") || "newest";

  const { type } = useParams();

  // Normalize and decode the URL path if needed
  const normalizedType = type ? decodeURIComponent(type) : "";

  const { products, error, loading } = useProducts(type, sortQuery);
  // console.log("products", products);
  const handleSortChange = (value) => {
    setSearchParams({ sort: value });
  };

  return (
    <div>
      {/* DIALOG FOR MOBILES  */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden "
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4" dir="rtl">
              <h2 className="text-lg font-medium text-gray-900">הצג לפי</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* Filters -  small sizes*/}
            <form className="mt-4">
              {filters.map((section) => (
                <Disclosure
                  key={section.name}
                  as="div"
                  className="border-t border-gray-200 pb-4 pt-4"
                  dir="rtl"
                >
                  <fieldset>
                    <legend className="w-full px-2">
                      <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                        <span className="text-sm font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 rotate-0 transform group-data-[open]:-rotate-180"
                          />
                        </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel className="px-4 pb-2 pt-4">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => {
                          return (
                            <div
                              key={option.value}
                              className="flex gap-3 items-center"
                            >
                              {/* Label with link */}
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className={`text-sm p-1 w-1/3 ${
                                  option.isChecked === normalizedType ||
                                  (option.isChecked === "" &&
                                    normalizedType === "")
                                    ? "bg-gray-100 text-gray-900 "
                                    : "text-gray-700"
                                }`}
                              >
                                <a
                                  href={option.href}
                                  className="text-gray-600 no-underline hover:text-gray-800"
                                >
                                  {option.label}
                                </a>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="border-b border-gray-200">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4 py-4">
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-4 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                New Arrivals
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8" dir="rtl">
        <StotrePageTopics normalizedType={normalizedType} />
        {/*סינון  -sorting */}
        <div className="hidden lg:flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                סינון
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenuButton>
            </div>

            <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition-all transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <MenuItems key={option.value}>
                    {/* active doenst work  */}
                    {({ active }) => (
                      <button
                        onClick={() => handleSortChange(option.value)}
                        className={`${
                          sortQuery === option.value
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                        } block w-full px-4 py-2 text-right text-sm`}
                      >
                        {option.name}
                      </button>
                    )}
                  </MenuItems>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>

        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <div className="flex space-around ">
            <aside className="w-1/2">
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center lg:hidden"
              >
                <span className="text-sm font-medium text-gray-700">
                  הצג לפי
                </span>
                <PlusIcon
                  aria-hidden="true"
                  className="ml-1 size-5 shrink-0 text-gray-400"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => {
                            return (
                              <div key={option.value} className={`flex gap-3 `}>
                                {/* Label */}
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className={`text-sm p-1 w-60 ${
                                    option.isChecked === normalizedType ||
                                    (option.isChecked === "" &&
                                      normalizedType === "")
                                      ? "bg-gray-100 text-gray-900 "
                                      : "text-gray-700"
                                  }`}
                                >
                                  <a
                                    href={option.href} // Assuming option.value holds the category for href
                                    className="text-gray-600 no-underline hover:text-gray-800"
                                  >
                                    {option.label}
                                  </a>
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* sorting option for small sizes screens  */}
            <div className="flex items-center lg:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    סינון
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition-all transform data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItems key={option.value}>
                        {/* active doenst work  */}
                        {({ active }) => (
                          <button
                            onClick={() => handleSortChange(option.value)}
                            className={`${
                              sortQuery === option.value
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block w-full px-4 py-2 text-right text-sm`}
                          >
                            {option.name}
                          </button>
                        )}
                      </MenuItems>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <section
            aria-labelledby="product-heading"
            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
          >
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>

            <div>
              {loading ? (
                <Spinner />
              ) : error ? (
                <ServerError />
              ) : (
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      {/* Product Image */}
                      <img
                        alt={product.images[0]?.altText || product.title} // Use alt text from the data or fallback to title
                        src={product.images[0]?.src} // Get the first image's source
                        className="aspect-[3/4] bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
                      />

                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        {/* Product Title */}
                        <h3 className="text-sm font-medium text-gray-900">
                          {/* FIXME: link to the product id  */}
                          <a href={`/product/${product.handle}`}>
                            {" "}
                            {/* Use the product handle for linking */}
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title} {/* Display product title */}
                          </a>
                        </h3>

                        {/* Product Description */}
                        {/* <p
                      className="text-sm text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: product.descriptionHtml,
                      }}
                    /> */}
                        {/* Product Description */}
                        <p
                          className="text-sm text-gray-500"
                          dangerouslySetInnerHTML={{
                            __html: product.descriptionHtml.split("\n")[0],
                          }}
                        />

                        <div className="flex flex-1 flex-col justify-end">
                          {/* Product Price */}
                          <p className="text-base font-medium text-gray-900">
                            ₪
                            {parseFloat(
                              product.variants[0]?.price?.amount
                            ).toFixed(2)}{" "}
                            {/* Format price */}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default StorePage;
