import React, { memo } from "react";
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
import ReviewSection from "./subComponents/ReviewSection";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import trendingProducts from "../hooks/trendingProducts";
import ScroolingImages from "./subComponents/ScroolingImages";
import TiktokFrame from "./subComponents/TiktokFrame";
import Spinner from "./subComponents/Spinner";
import ServerError from "./subComponents/ServerError";
import Footer from "./Footer";
import userImage from "../assets/49533005_2228536600545229_6816182367221167354_n.jpg";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "חנות",
      featured: [
        { name: "מארזי כוסות", href: "#" },
        { name: "עוגות הבית", href: "#" },
        { name: "ימי הולדת", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "מארזים",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "שאלות תשובות", href: "/faq" },
    { name: "צור קשר", href: "#" },
    { name: "תקנון", href: "#" },
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

// example of trending products
// const trendingProducts = [
//   {
//     id: 1,
//     name: "Machined Pen",
//     color: "Black",
//     price: "$35",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-01.jpg",
//     imageAlt:
//       "Black machined steel pen with hexagonal grip and small white logo at top.",
//     availableColors: [
//       { name: "Black", colorBg: "#111827" },
//       { name: "Brass", colorBg: "#FDE68A" },
//       { name: "Chrome", colorBg: "#E5E7EB" },
//     ],
//   },
//   {
//     id: 1,
//     name: "Machined Pen",
//     color: "Black",
//     price: "$35",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-01.jpg",
//     imageAlt:
//       "Black machined steel pen with hexagonal grip and small white logo at top.",
//     availableColors: [
//       { name: "Black", colorBg: "#111827" },
//       { name: "Brass", colorBg: "#FDE68A" },
//       { name: "Chrome", colorBg: "#E5E7EB" },
//     ],
//   },
//   {
//     id: 1,
//     name: "Machined Pen",
//     color: "Black",
//     price: "$35",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-01.jpg",
//     imageAlt:
//       "Black machined steel pen with hexagonal grip and small white logo at top.",
//     availableColors: [
//       { name: "Black", colorBg: "#111827" },
//       { name: "Brass", colorBg: "#FDE68A" },
//       { name: "Chrome", colorBg: "#E5E7EB" },
//     ],
//   },
//   {
//     id: 1,
//     name: "Machined Pen",
//     color: "Black",
//     price: "$35",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-01.jpg",
//     imageAlt:
//       "Black machined steel pen with hexagonal grip and small white logo at top.",
//     availableColors: [
//       { name: "Black", colorBg: "#111827" },
//       { name: "Brass", colorBg: "#FDE68A" },
//       { name: "Chrome", colorBg: "#E5E7EB" },
//     ],
//   },
//   // More products...
// ];

const collections = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];

const aboutMe = [
  {
    id: 1,
    quote:
      "אני תמיד שואפת להוציא את המיטב בכל יצירה שאני מכינה. כל מאפה שאני יוצרת, הוא תוצאה של אהבה ותשוקה למלאכת הקונדיטוריה.",
    attribution: "טטיאנה צ'רוב, קונדיטורית מומחית",
  },
  {
    id: 2,
    quote:
      "כקונדיטורית, אני מאמינה שהאיכות והטריות הן המפתח להצלחה. אני שואפת להעניק ללקוחות חווית טעמים שאין כמוה, בכל פעם מחדש.",
    attribution: "טטיאנה צ'רוב, קונדיטורית מומחית",
  },
  {
    id: 3,
    quote:
      "למדתי קונדיטוריה במספר מוסדות נחשבים בארץ ובעולם, ואני גאה לשלב את הידע הקולינרי שלי עם יצירתיות אינסופית כדי להפיק מאפים מושלמים.",
    attribution: "טטיאנה צ'רוב, קונדיטורית מומחית",
  },
];

// const footerNavigation = {
//   products: [
//     { name: "Bags", href: "#" },
//     { name: "Tees", href: "#" },
//     { name: "Objects", href: "#" },
//     { name: "Home Goods", href: "#" },
//     { name: "Accessories", href: "#" },
//   ],
//   customerService: [
//     { name: "Contact", href: "#" },
//     { name: "Shipping", href: "#" },
//     { name: "Returns", href: "#" },
//     { name: "Warranty", href: "#" },
//     { name: "Secure Payments", href: "#" },
//     { name: "FAQ", href: "#" },
//     { name: "Find a store", href: "#" },
//   ],
//   company: [
//     { name: "Who we are", href: "#" },
//     { name: "Sustainability", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Careers", href: "#" },
//     { name: "Terms & Conditions", href: "#" },
//     { name: "Privacy", href: "#" },
//   ],
//   legal: [
//     { name: "Terms of Service", href: "#" },
//     { name: "Return Policy", href: "#" },
//     { name: "Privacy Policy", href: "#" },
//     { name: "Shipping Policy", href: "#" },
//   ],
//   bottomLinks: [
//     { name: "Accessibility", href: "#" },
//     { name: "Privacy", href: "#" },
//     { name: "Terms", href: "#" },
//   ],
// };

function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { products, error, loading } = trendingProducts();

  return (
    <div className="bg-white ">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-pink-100 lg:block"
            />
            <div className="relative  lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div
                  className="mx-auto max-w-2xl sm:py-24 pt-36 pb-10 lg:max-w-none lg:py-64"
                  // THE OLD ONE:
                  // className="mx-auto max-w-2xl sm:py-24 py-36 lg:max-w-none lg:py-64"
                  dir="rtl"
                >
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      מתוקים שמתאהבים בהם
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      מאפים, עוגות ושוקולדים שמביאים את הטעם הביתי והאהבה לכל
                      ביס.
                    </p>
                    <div className="mt-6">
                      <a
                        href="/store"
                        className=" bg-[#F2EADF] hover:bg-[#E5D6C4] text-black inline-block rounded-md border border-transparent  px-8 py-3 font-medium "
                      >
                        חנות המתוקים שלנו
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="h-56 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2"> */}
            <div className="h-[400px] w-full sm:h-[500px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <img
                alt="תמונה של קינוחי כוסות"
                src="https://9bqcdp1hk5hf6dhw-89317572974.shopifypreview.com/cdn/shop/files/WhatsAppImage2025-01-06at01.26.07_9d45e722.jpg?v=1736119599&width=823"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trending products */}
        {/* bg-pink-lines */}
        <section aria-labelledby="trending-heading" className="bg-white ">
          {/* lg:py-32 => -v */}
          <div className="py-14 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 ">
            <div
              dir="rtl"
              className="flex items-center justify-between px-4 sm:px-6 lg:px-0"
            >
              <h2
                id="trending-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                המפנקים ביותר
              </h2>
              <a
                href="/store"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                לראות הכל
                <span aria-hidden="true"> &larr;</span>
              </a>
            </div>

            {/* catch err for products  */}
            {loading ? (
              <Spinner />
            ) : error ? (
              <ServerError />
            ) : (
              <div className="scrooling images ">
                <ScroolingImages products={products} />
              </div>
            )}

            <div className="mt-12 px-4 sm:hidden" dir="rtl">
              <a
                href="/store"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                לראות הכל
                <span aria-hidden="true"> &larr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <ReviewSection />
        {/* Collections */}
        {/* <section aria-labelledby="collections-heading" className="bg-pink-100 "> */}
        <section
          aria-labelledby="collections-heading"
          className="bg-[#fd00ec]  bg-opacity-15 "
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              {/* devider OPTIONS FOR DEVIDER FIXME: */}
              {/* <div className="relative ">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className=" px-3 pb-3 text-base font-semibold text-gray-900">
                    Projects
                  </span>
                </div>
              </div>{" "} */}

              <h2
                id="collections-heading"
                className="text-2xl font-bold text-gray-900"
              >
                אוספים....
              </h2>
              <TiktokFrame />
            </div>
          </div>
        </section>

        {/* Sale and testimonials */}
        <div className="relative overflow-hidden">
          {/* Decorative background image and gradient FIXME: added a bg color */}
          <div aria-hidden="true" className="absolute inset-0 bg-pink-lines">
            {/* <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                className="size-full object-cover"
              />
            </div> */}
            <div className="absolute inset-0 bg-white/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
          </div>

          {/* Sale hero  */}
          <section
            aria-labelledby="sale-heading"
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="sale-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                קבלו 25% הנחה במהלך המבצע החד פעמי שלנו{" "}
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-xl text-gray-600"
                dir="rtl"
              >
                רוב המוצרים שלנו הם מהדורות מוגבלות שלא יחזרו. קבל את הפריטים
                האהובים עליך בזמן שהם במלאי.
              </p>
              <a
                href="/store"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >
                קבל גישה למכירה החד פעמית שלנו{" "}
              </a>
            </div>
          </section>

          {/* aboutME section  */}
          <section
            aria-labelledby="testimonial-heading"
            className=" relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
            dir="rtl"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="testimonial-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                קצת עליי
              </h2>
              {/* profilo */}
              {/* <div className="bg-white "> */}
              <div className="mx-auto max-w-7xl  lg:px-8">
                <ul
                  role="list"
                  className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                  <li className="flex flex-col gap-6 xl:flex-row">
                    {/* TODO: */}
                    <img
                      alt="תמונה של טטיאנה"
                      src={userImage}
                      className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                    />

                    <div className="flex-auto">
                      <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                        טטיאנה צ'רוב,
                      </h3>
                      <p className="text-base/7 text-gray-600">
                        קונדיטורית מומחית{" "}
                      </p>
                      <p className="mt-6 text-base/7 text-gray-600">
                        בוגרת מצטיינת של בית הספר לקונדיטוריה "בישולים"
                        בירושלים. לאחר סיום לימודיי, עברתי הכשרות מקצועיות עם
                        שפים מובילים וצברתי ניסיון מעשי בפיתוח מתכונים חדשניים
                        ושיטות עבודה מתקדמות בתחום האפייה והקונדיטוריה. אני
                        מאמינה בשילוב של יצירתיות, ידע ומקצועיות כדי ליצור
                        חוויות בלתי נשכחות באמצעות עולם הקונדיטוריה.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* </div> */}

              <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {aboutMe.map((testimonial) => (
                  <blockquote key={testimonial.id} className="sm:flex lg:block">
                    <svg
                      width={24}
                      height={18}
                      viewBox="0 0 24 18"
                      aria-hidden="true"
                      className="shrink-0 text-gray-300"
                    >
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                      <p className="text-lg text-gray-600">
                        {testimonial.quote}
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        {/* {testimonial.attribution} */}
                      </cite>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default memo(MainPage);
