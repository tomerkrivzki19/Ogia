import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";

import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function ScroolingImages({ products }) {
  console.log(products);

  return (
    <>
      <div className="relative mt-8  ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={3} // Display 1 product on small sizes by default
          loop={true} // Enable infinite looping
          autoplay={{
            delay: 3000, // Slide change every 3 seconds
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 product on small screens (<= 640px)
            1024: { slidesPerView: 4 }, // 4 products on larger screens (>= 1024px)
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="inline-flex flex-col text-center">
                <div className="group relative">
                  {/* Product Image */}
                  <img
                    alt={product.images[0]?.altText || product.title}
                    src={product.images[0]?.src || ""}
                    className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3]"
                  />

                  {/* Product Details */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">
                      {product.vendor || "No vendor available"}
                    </p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                      <a href={`/product/${product.handle}`}>
                        <span className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-gray-900">
                      {product.variants[0]?.price?.amount
                        ? `${product.variants[0].price.amount} ${product.variants[0].price.currencyCode}`
                        : "Price not available"}
                    </p>
                  </div>
                </div>

                {/* Available Colors */}
                {product.options[0]?.name === "Color" && (
                  <h4 className="sr-only">Available colors</h4>
                )}
                <ul
                  role="list"
                  className="mt-auto flex items-center justify-center space-x-3 pt-6"
                >
                  {product.options[0]?.name === "Color" &&
                    product.options[0]?.values.map((color) => (
                      <li
                        key={color.value}
                        className="size-4 rounded-full border border-black/10"
                        style={{ backgroundColor: color.value }}
                      >
                        <span className="sr-only">{color.value}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ScroolingImages;
