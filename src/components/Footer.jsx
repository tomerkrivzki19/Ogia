import React from "react";
import logoImage from "../../public/WhatsAppImage2025-01-05at21.36.22_e3eca4b3.jpg";

function Footer() {
  const footerNavigation = {
    products: [
      { name: "עוגות", href: "/store/עוגות" },
      { name: "עוגיות", href: "/store/עוגיות" },
      { name: "טארטים", href: "/store/טארטים" },
      { name: "קינוחי כוסות", href: "/store/קינוחי-כוסות" },
      { name: "מארזים", href: "/store/מארזים" },
      { name: "גלידות", href: "/store/גלידות" },

      //   { name: "Bags", href: "#" },
      //   { name: "Tees", href: "#" },
      //   { name: "Objects", href: "#" },
      //   { name: "Home Goods", href: "#" },
      //   { name: "Accessories", href: "#" },
    ],
    customerService: [
      { name: "צור קשר", href: "/contact" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      // { name: "Warranty", href: "#" },
      { name: "תשלומים מאובטחים", href: "/faq#securePayment" },
      { name: "שאלות תשובות", href: "/faq" },
      { name: "מצא חנות", href: "/contact#location" },
    ],
    company: [
      { name: "אודות", href: "/faq#about" },
      // { name: "Sustainability", href: "#" },
      // { name: "Press", href: "#" },
      // { name: "Careers", href: "#" },
      //   { name: "Terms & Conditions", href: "#" },
      { name: "תקנון", href: "/takanon" },

      // { name: "Privacy", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      // { name: "Return Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Shipping Policy", href: "#" },
    ],
    bottomLinks: [
      { name: "Accessibility", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  return (
    // className="bg-[#fd00ec]  bg-opacity-15"

    <footer aria-labelledby="footer-heading" className="bg-[#F2EADF]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 w-full sm:px-6 lg:px-8 " dir="rtl">
        <div className="border-t border-gray-200 ">
          <div className="pb-20 pt-16 ">
            <div className="md:flex md:justify-center ">
              <img
                alt="לוגו של החנות עוגיה"
                src={logoImage}
                className="h-26 w-36"
              />
            </div>
            <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8 ">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2 ">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 ">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 ">
                      Products
                    </h3>
                    <ul role="list" className="mt-6 space-y-6 ">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className="text-sm ">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Customer Service
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.customerService.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Legal</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
              <div className="mx-auto max-w-sm">
                <h3 className="font-semibold text-gray-900">
                  הירשם לניוזלטר שלנו{" "}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  החדשות, המאמרים והמשאבים האחרונים, נשלחים לתיבת הדואר הנכנס
                  שלך מדי שבוע.{" "}
                </p>
                <form className="mt-4 sm:mt-6 sm:flex">
                  <input
                    id="email-address"
                    type="text"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                  <div className="mt-3 sm:ml-4 sm:mt-0 sm:shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#A69F97]  px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#807A72] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                    >
                      שלח{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img
                  alt="תמונה של מוצרי אלקטרוניקה ופאלפון  "
                  // src="https://tailwindui.com/plus/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                  src="https://images.pexels.com/photos/2265484/pexels-photo-2265484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="size-full object-cover saturate-0 filter"
                />
                <div className="absolute inset-0 bg-[#A69F97]/90" />
              </div>
              <div className="relative mx-auto max-w-sm text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  קבל גישה מוקדמת{" "}
                </h3>
                <p className="mt-2 text-gray-200">
                  נרשמת לניוזלטר? אם כן, השתמש במילת המפתח ששלחנו לך כדי לקבל
                  גישה.{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap font-bold text-white hover:text-gray-200"
                  >
                    הירשמו כעת
                    <span aria-hidden="true" className="pr-1">
                      &larr;
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; 2025 All Rights Reserved Tomer
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {footerNavigation.bottomLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="ml-6 border-l border-gray-200 pl-6">
              <a
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-600"
              >
                <img
                  alt="דגל ישראל"
                  src="https://flagsapi.com/IL/flat/64.png
"
                  className="h-auto w-5 shrink-0"
                />
                <span className="ml-3 text-sm">current </span>
                <span className="sr-only">location and currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
