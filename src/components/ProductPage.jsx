import React, { useContext } from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  StarIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/20/solid";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { cartContext } from "../contexts/CartContext";
import Toast from "../utils/tostify";
import ScroolingImages from "./subComponents/ScroolingImages";
import relatedProducts from "../hooks/relatedProducts";
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
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Flats", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Heels", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
              { name: "Accessories", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Tops", href: "#" },
              { name: "Bottoms", href: "#" },
              { name: "Swimwear", href: "#" },
              { name: "Underwear", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
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
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
        },
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
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Hoodies", href: "#" },
              { name: "Swimsuits", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
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
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
// const product = {
//   name: "Zip Tote Basket",
//   price: "$140",
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: "Angled view",
//       src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
//       alt: "Angled front view with bag zipped and handles upright.",
//     },
//     // More images...
//   ],
//   colors: [
//     {
//       name: "Washed Black",
//       bgColor: "bg-gray-700",
//       selectedColor: "ring-gray-700",
//     },
//     { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
//     {
//       name: "Washed Gray",
//       bgColor: "bg-gray-500",
//       selectedColor: "ring-gray-500",
//     },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: "Features",
//       items: [
//         "Multiple strap configurations",
//         "Spacious interior with top zip",
//         "Leather handle and tabs",
//         "Interior dividers",
//         "Stainless strap loops",
//         "Double stitched construction",
//         "Water-resistant",
//       ],
//     },
//     // More sections...
//   ],
// };
// const relatedProducts = [
//   {
//     id: 1,
//     name: "Zip Tote Basket",
//     color: "White and black",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-related-product-01.jpg",
//     imageAlt:
//       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
//     price: "$140",
//   },
//   // More products...
// ];
// const relatedProducts = [
//   {
//     id: "gid://shopify/Product/7713836138577",
//     availableForSale: true,
//     createdAt: "2025-01-10T14:39:15Z",
//     updatedAt: "2025-01-11T13:37:56Z",
//     descriptionHtml:
//       "<h3>מוס שקדים פיסטוק מעודן מפרלינה בהכנה ביתית עם קוביות בראוניז מוזהבות וקצפת. בפסח מבקשים ממני מתכונים מחומרים שיש בכל סופר ולא בחנויות מתמחות. אז הכנתי לכם מוס מרשים וקליל שיוכל לשמש קינוח לליל הסדר כי הוא פרווה. השתמשתי בשמנת צמחית של תנובה שניתן להשיג בכל סופר.</h3>\n<p> </p>\n<p><strong>פרלינה שקדים פיסטוק</strong></p>\n<p>125 גרם פיסטוק</p>\n<p>125 גרם שקדים</p>\n<p>200 גרם סוכר</p>\n<p>קורט מלח</p>",
//     description:
//       "מוס שקדים פיסטוק מעודן מפרלינה בהכנה ביתית עם קוביות בראוניז מוזהבות וקצפת. בפסח מבקשים ממני מתכונים מחומרים שיש בכל סופר ולא בחנויות מתמחות. אז הכנתי לכם מוס מרשים וקליל שיוכל לשמש קינוח לליל הסדר כי הוא פרווה. השתמשתי בשמנת צמחית של תנובה שניתן להשיג בכל סופר. פרלינה שקדים פיסטוק 125 גרם פיסטוק 125 גרם שקדים 200 גרם סוכר קורט מלח",
//     handle: "קינוחי-כוסות-copy-4",
//     productType: "מארזים",
//     title: "קינוחי כוסות (Copy 4)",
//     vendor: "OgiaStore",
//     publishedAt: "2025-01-10T14:39:15Z",
//     onlineStoreUrl: null,
//     options: [
//       {
//         id: "gid://shopify/ProductOption/9820675735633",
//         name: "Title",
//         values: [
//           {
//             value: "Default Title",
//             type: {
//               name: "String",
//               kind: "SCALAR",
//             },
//           },
//         ],
//         type: {
//           name: "ProductOption",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             name: "String",
//             values: "String",
//           },
//           implementsNode: true,
//         },
//       },
//     ],
//     images: [
//       {
//         id: "gid://shopify/ProductImage/34945957396561",
//         src: "https://cdn.shopify.com/s/files/1/0647/9426/3633/files/WhatsAppImage2025-01-10at16.36.37_6bf2f178.jpg?v=1736519804",
//         altText: null,
//         width: 900,
//         height: 1600,
//         type: {
//           name: "Image",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             altText: "String",
//             height: "Int",
//             id: "ID",
//             url: "URL",
//             width: "Int",
//           },
//           implementsNode: false,
//         },
//         hasNextPage: false,
//         hasPreviousPage: false,
//         variableValues: {
//           handle: "קינוחי-כוסות-copy-4",
//         },
//       },
//     ],
//     variants: [
//       {
//         id: "gid://shopify/ProductVariant/42157095223377",
//         title: "Default Title",
//         price: {
//           amount: "605.0",
//           currencyCode: "ILS",
//           type: {
//             name: "MoneyV2",
//             kind: "OBJECT",
//             fieldBaseTypes: {
//               amount: "Decimal",
//               currencyCode: "CurrencyCode",
//             },
//             implementsNode: false,
//           },
//         },
//         priceV2: {
//           amount: "605.0",
//           currencyCode: "ILS",
//           type: {
//             name: "MoneyV2",
//             kind: "OBJECT",
//             fieldBaseTypes: {
//               amount: "Decimal",
//               currencyCode: "CurrencyCode",
//             },
//             implementsNode: false,
//           },
//         },
//         weight: 0,
//         available: true,
//         sku: null,
//         compareAtPrice: null,
//         compareAtPriceV2: null,
//         image: {
//           id: "gid://shopify/ProductImage/34945957396561",
//           src: "https://cdn.shopify.com/s/files/1/0647/9426/3633/files/WhatsAppImage2025-01-10at16.36.37_6bf2f178.jpg?v=1736519804",
//           altText: null,
//           width: 900,
//           height: 1600,
//           type: {
//             name: "Image",
//             kind: "OBJECT",
//             fieldBaseTypes: {
//               altText: "String",
//               height: "Int",
//               id: "ID",
//               url: "URL",
//               width: "Int",
//             },
//             implementsNode: false,
//           },
//         },
//         selectedOptions: [
//           {
//             name: "Title",
//             value: "Default Title",
//             type: {
//               name: "SelectedOption",
//               kind: "OBJECT",
//               fieldBaseTypes: {
//                 name: "String",
//                 value: "String",
//               },
//               implementsNode: false,
//             },
//           },
//         ],
//         unitPrice: null,
//         unitPriceMeasurement: {
//           measuredType: null,
//           quantityUnit: null,
//           quantityValue: 0,
//           referenceUnit: null,
//           referenceValue: 0,
//           type: {
//             name: "UnitPriceMeasurement",
//             kind: "OBJECT",
//             fieldBaseTypes: {
//               measuredType: "UnitPriceMeasurementMeasuredType",
//               quantityUnit: "UnitPriceMeasurementMeasuredUnit",
//               quantityValue: "Float",
//               referenceUnit: "UnitPriceMeasurementMeasuredUnit",
//               referenceValue: "Int",
//             },
//             implementsNode: false,
//           },
//         },
//         type: {
//           name: "ProductVariant",
//           kind: "OBJECT",
//           fieldBaseTypes: {
//             availableForSale: "Boolean",
//             compareAtPrice: "MoneyV2",
//             id: "ID",
//             image: "Image",
//             price: "MoneyV2",
//             product: "Product",
//             selectedOptions: "SelectedOption",
//             sku: "String",
//             title: "String",
//             unitPrice: "MoneyV2",
//             unitPriceMeasurement: "UnitPriceMeasurement",
//             weight: "Float",
//           },
//           implementsNode: true,
//         },
//         hasNextPage: false,
//         hasPreviousPage: false,
//         variableValues: {
//           handle: "קינוחי-כוסות-copy-4",
//         },
//       },
//     ],
//     type: {
//       name: "Product",
//       kind: "OBJECT",
//       fieldBaseTypes: {
//         availableForSale: "Boolean",
//         createdAt: "DateTime",
//         description: "String",
//         descriptionHtml: "HTML",
//         handle: "String",
//         id: "ID",
//         images: "ImageConnection",
//         onlineStoreUrl: "URL",
//         options: "ProductOption",
//         productType: "String",
//         publishedAt: "DateTime",
//         title: "String",
//         updatedAt: "DateTime",
//         variants: "ProductVariantConnection",
//         vendor: "String",
//       },
//       implementsNode: true,
//     },
//   },
//   // More products...
// ];
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductPage() {
  const { handle } = useParams();
  const { addToCart } = useContext(cartContext);
  const [open, setOpen] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(true); // Manage which button is loading

  //   const { product, products, isFavorite, setIsFavorite, loading } =
  //     useProduct(handle);
  const { product, loadingProduct } = useProduct(handle);
  // TODO: add loading setup
  const { products, error, loading } = relatedProducts(handle);

  const tostify = new Toast();

  const handleAddCart = async (variantId, quantity) => {
    setLoadingIndex(false);
    console.log("1", variantId);
    console.log("2", quantity);

    try {
      await addToCart(variantId, quantity);
      // setLoadingIndex(false);

      // Show "נוסף לסל" for 6 seconds
      setTimeout(() => {
        setLoadingIndex(true); // Reset loadingIndex to show "הוסף לסל" after 6 seconds
      }, 15000);
    } catch (error) {
      tostify.createToast(
        "error",
        "הוספת הפריט לעגלת הקניות נכשלה. אנא נסה שוב"
      );
      throw new Error("err adding to cart ");

      return;
    }
  };

  // console.log("product", product);
  // console.log("product", product.descriptionHtml.split("\n"));

  //   const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // TODO: favorites part
  // const toggleFavorite = (id, name) => {
  //   if (isFavorite) {
  //     const removeFromFavorites =(id, name)=>{
  //      localStorage.removeItem(id)
  //     }
  //     removeFromFavorites(id, name); // Use the product's name for GA

  //   } else {
  //     addToFavorites(id, name); // Use the product's name for GA
  //   }
  //   setIsFavorite(!isFavorite); // Toggle favorite state
  // };

  return (
    <>
      {loadingProduct ? (
        <Spinner />
      ) : (
        <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8  pt-32 sm:pt-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            {/* Product */}
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}
              <TabGroup className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <TabList className="grid grid-cols-4 gap-6">
                    {/* {product.images.map((image) => (
                      <Tab
                        key={image.id}
                        className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                      >
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            alt=""
                            src={image.src}
                            className="size-full object-cover"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                        />
                      </Tab>
                    ))} */}
                  </TabList>
                </div>

                <TabPanels>
                  {product.images.map((image) => (
                    <TabPanel key={image.id}>
                      <img
                        alt={image.alt}
                        src={image.src}
                        className="aspect-square w-full object-cover sm:rounded-lg"
                      />
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" dir="rtl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  {product.title}
                </h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    {`₪${parseFloat(product.variants[0].price.amount)}`}
                  </p>
                </div>

                {/* Reviews */}
                {/* <div className="mt-3">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            product.rating > rating
                              ? "text-indigo-500"
                              : "text-gray-300",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                  </div>
                </div> */}

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  {/* Product Description */}
                  <p
                    className="text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml.split("\n")[0],
                    }}
                  />
                </div>

                <form className="mt-6">
                  <div className="mt-10 flex">
                    {!product.availableForSale ? (
                      <button
                        className=" cursor-not-allowed flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-indigo-600 border-indigo-600  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full "
                        disabled
                      >
                        נגמר המלאי
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddCart(product.variants[0].id, 1)}
                        type="button"
                        className="  bg-[#F2EADF] hover:bg-[#E5D6C4] text-black flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full "
                      >
                        {!loadingIndex ? (
                          <div className="flex gap-2 animate-fade-left animate-delay-300">
                            נוסף לסל
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                              />
                            </svg>
                          </div>
                        ) : (
                          "הוסף לסל"
                        )}
                      </button>
                    )}
                    {/* heart icone - disabled for now */}
                    {/* {isFavorite ? (
                        <SolidHeartIcon
                          aria-hidden="true"
                          className="h-6 w-6 flex-shrink-0 text-red-500  animate-jump-in animate-once  animate-delay-500"
                        />
                      ) : (
                        <HeartIcon
                          aria-hidden="true"
                          className="h-6 w-6 flex-shrink-0 "
                        />
                      )} */}
                    {/* <button
                      type="button"
                      className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      // onClick={() => toggleFavorite()} TODO: favorites part
                    >
                      <HeartIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 "
                      />
                      <span className="sr-only">Add to favorites</span>
                    </button> */}
                  </div>
                </form>

                <section aria-labelledby="details-heading" className="mt-12">
                  <h2 id="details-heading" className="sr-only">
                    Additional details
                  </h2>

                  <div className="divide-y divide-gray-200 border-t">
                    {[
                      {
                        name: "תאור המוצר ", // Section title

                        items:
                          product.descriptionHtml
                            .match(/<li>(.*?)<\/li>/g) // Match all <li>...</li> tags
                            ?.map((li) => li.replace(/<\/?li>/g, "").trim()) ||
                          [], // Remove the <li> tags and trim content
                      },
                    ].map((detail) => (
                      <Disclosure key={detail.name} as="div">
                        <h3>
                          <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                              />
                              <MinusIcon
                                aria-hidden="true"
                                className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                              />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pb-6">
                          <ul
                            role="list"
                            className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                          >
                            {detail.items.map((item, index) => (
                              <li key={index} className="pl-2">
                                {item}{" "}
                                {/* Render each part of the description as a list item */}
                              </li>
                            ))}
                          </ul>
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* related products section  */}
            <section
              aria-labelledby="related-heading"
              className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0"
            >
              <h2
                id="related-heading"
                className="text-xl font-bold text-gray-900 text-center"
                dir="rtl"
              >
                מוצרים נוספים{" "}
              </h2>

              {loading ? (
                <Spinner />
              ) : error ? (
                <ServerError />
              ) : (
                <ScroolingImages products={products} />
              )}
            </section>
          </div>
        </main>
      )}
    </>
  );
}

export default ProductPage;
