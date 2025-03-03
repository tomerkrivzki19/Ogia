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
        {/* whatsapp icon  */}
        {/* <a
          href="https://wa.me/+972544962675?text=שלום!%20אני%20מעוניין%20במוצרים%20שלכם."
          target="_blank"
          className="z-40 fixed bottom-10 right-2 sm:right-5"
        >
          <button class="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              class="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                fill=""
              />
            </svg>
            <div
              class="absolute top-full left-0 w-full h-full rounded-full
              bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"
            ></div>
          </button>

          <button class="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
            <svg
              class="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 51 51"
              fill="none"
            >
              <path
                d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                fill=""
              />
              <path
                d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                fill=""
              />
              <defs>
                <radialGradient
                  id="paint0_radial_7092_54404"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)"
                >
                  <stop offset="0.09" stop-color="#FA8F21" />
                  <stop offset="0.78" stop-color="#D82D7E" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_7092_54404"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)"
                >
                  <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
                  <stop offset="1" stop-color="#8C3AAA" />
                </radialGradient>
              </defs>
            </svg>
            <div
              class="absolute top-full left-0 w-full h-full rounded-full
              bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0
              transition-all duration-500 group-hover:top-0"
            ></div>
          </button>

          <button class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
            <svg
              class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 71 72"
              fill="none"
            >
              <path
                d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                fill=""
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                fill=""
              />
            </svg>
            <div
              class="absolute top-full left-0 w-full h-full rounded-full
              bg-green-400 z-0 transition-all duration-500 group-hover:top-0"
            ></div>
          </button>
        </a> */}

        {/* social media links */}
        <div className="z-40 fixed bottom-10 right-2 sm:right-5 flex flex-col gap-1">
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/tati_cherov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
              <svg
                class="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                  fill=""
                />
                <path
                  d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                  fill=""
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_7092_54404"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)"
                  >
                    <stop offset="0.09" stop-color="#FA8F21" />
                    <stop offset="0.78" stop-color="#D82D7E" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_7092_54404"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)"
                  >
                    <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
                    <stop offset="1" stop-color="#8C3AAA" />
                  </radialGradient>
                </defs>
              </svg>
              <div
                class="absolute top-full left-0 w-full h-full rounded-full
              bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0
              transition-all duration-500 group-hover:top-0"
              ></div>{" "}
            </button>
          </a>
          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/profile.php?id=1365789241&ref=ig_profile_ac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500">
              <svg
                className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 72 72"
                fill="none"
              >
                <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+972544962675?text=שלום!%20אני%20מעוניין%20במוצרים%20שלכם."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <svg
                class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 71 72"
                fill="none"
              >
                <path
                  d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z"
                  fill=""
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z"
                  fill=""
                />
              </svg>
              <div
                class="absolute top-full left-0 w-full h-full rounded-full
              bg-green-400 z-0 transition-all duration-500 group-hover:top-0"
              ></div>{" "}
            </button>
          </a>
        </div>

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
