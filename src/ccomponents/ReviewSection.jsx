import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
  {
    id: 1,
    title: "This is the best white t-shirt out there",
    rating: 5,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: "Mark Edwards",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 1,
    title: "This is the best white t-shirt out there",
    rating: 5,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: "Mark Edwards",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  {
    id: 2,
    title: "Adds the perfect variety to my wardrobe",
    rating: 4,
    content: `
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    `,
    author: "Blake Reid",
    avatarSrc:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "All good things come in 6-Packs",
    rating: 5,
    content: `
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    `,
    author: "Ben Russel",
    avatarSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ReviewSection() {
  return (
    <div className="space-y-10 p-8  bg-pink-100">
      <Swiper
        spaceBetween={30} // Spacing between slides
        slidesPerView={3} // Show 3 reviews at once (you can adjust this)
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000 }} // Auto slide every 3 seconds (optional)
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1, // On small screens show 1 review at a time
          },
          768: {
            slidesPerView: 2, // On medium screens show 2 reviews at a time
          },
          1024: {
            slidesPerView: 3, // On large screens show 3 reviews at a time
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="flex flex-col items-center sm:items-center min-h-[250px] h-full"
          >
            {/* Image and Author Info */}
            <div className="flex flex-col items-center sm:items-center">
              <img
                alt={`${review.author}`}
                src={review.avatarSrc}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="mt-4 text-center sm:text-left">
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
                <div className="mt-2 flex justify-center sm:justify-start">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mt-6 text-center sm:text-left">
              <h3 className="text-sm font-medium text-gray-900">
                {review.title}
              </h3>
              <p className="sr-only">{review.rating} out of 5 stars</p>

              <div
                dangerouslySetInnerHTML={{ __html: review.content }}
                className="mt-3 space-y-6 text-sm text-gray-600"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewSection;
