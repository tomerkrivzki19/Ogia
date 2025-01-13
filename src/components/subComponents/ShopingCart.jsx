import { useEffect, useState } from "react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
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
export default function ShoppingCart({
  products,
  totalQuantity,
  checkoutLink,
  subTotal,
  handleRemoveItem,
  isCartOpen,
  setIsCartOpen,
}) {
  const [open, setOpen] = useState(isCartOpen); // State to control the Dialog

  useEffect(() => {
    setOpen(isCartOpen);
  }, [isCartOpen]);
  return (
    <>
      {/* Shopping Cart Icon */}
      <div className="flow-root">
        <button
          onClick={() => setOpen(true)} // Open Dialog on click
          className="group -m-2 flex items-center p-2"
        >
          <ShoppingCartIcon
            aria-hidden="true"
            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {totalQuantity}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>

      {/* Shopping Cart Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden" dir="rtl">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              {/* Sliding panel */}
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        עגלת קניות
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.length === 0 ? (
                            <h1 className="pt-5">אין מוצרים בעגלת הקניות.</h1>
                          ) : (
                            <>
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.variant.image.src}
                                      alt={product.variant.imageAlt}
                                      className="size-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900 pr-2">
                                        <h3>
                                          <a
                                            //   href={product.href}
                                            // FIXME: fix the path with sort of a fuction or find the handeler inside the object
                                            href={`/product/:handle/${product.handle}`}
                                          >
                                            {product.title}
                                          </a>
                                        </h3>
                                        <p className="ml-4" dir="ltr">
                                          ₪{product.variant.price.amount}
                                        </p>
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm pr-2">
                                      <p className="text-gray-500">
                                        כמות: {product.quantity}
                                      </p>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            handleRemoveItem(product.id)
                                          }
                                        >
                                          הסר
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>סכום ביניים </p>
                      <p>₪{subTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      משלוח ומיסים מחושבים בקופה.{" "}
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => checkoutLink()}
                        type="submit"
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        לקופה
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        או{" "}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          המשך בקניות <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
