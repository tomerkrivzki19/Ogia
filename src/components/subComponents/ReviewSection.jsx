import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Updated import for Autoplay

import "swiper/swiper-bundle.css";
// import "swiper/css"; // Ensure you include this CSS

const reviews = [
  {
    id: 1,
    title: "זה הקינוח הטוב ביותר שאכלתי אי פעם!",
    rating: 5,
    content: `
        <p>חיפשתי כל החיים שלי קינוח שמשלב את כל הטעמים שאני אוהב, ומצאתי אותו כאן. כל ביס מקרין מתיקות מושלמת שממלאת את הלב באושר. מדהים!</p>
    `,
    author: "יוסי לוי",
    avatarSrc:
      "https://eu.ui-avatars.com/api/?name=%D7%99%D7%95%D7%A1%D7%99+%D7%9C%D7%95%D7%99&size=250",
  },
  {
    id: 2,
    title: "תוספת נהדרת לכל חגיגה!",
    rating: 4,
    content: `
      <p>כשהחלטנו להביא עוגות אישיות לאירוע שלנו, לא ציפינו שהן יהיו כל כך יפות וטעימות! רק כוכב אחד פחות כי הייתי רוצה שהציפוי יהיה קצת יותר מתוק.</p>
    `,
    author: "נועה כהן",
    avatarSrc: "https://eu.ui-avatars.com/api/?name=noa+cohen&size=250",
  },
  {
    id: 3,
    title: "גלידות מעולות בכל טעם!",
    rating: 5,
    content: `
      <p>אני לא יכול להחליט מה אני אוהב יותר - השוקולד העשיר או וניל הפרימיום. פשוט מדהים! אני ממליץ בחום לכל חובב מתוקים.</p>
    `,
    author: "דוד פרץ",
    avatarSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    title: "הקאפקייקס הכי טובים שטעמתי!",
    rating: 5,
    content: `
      <p>הקאפקייקס כאן מושלמים! הבצק רך, הציפוי עשיר והעיצוב כל כך מושקע. אני לא מפסיק לקנות אותם לכל חגיגה בבית.</p>
    `,
    author: "אילן שמואלי",
    avatarSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 5,
    title: "העוגות האישיות הכי טעימות שיש!",
    rating: 4,
    content: `
      <p>אני מאוד אוהבת את העוגות האישיות כאן. הן מושלמות לכל אירוע ומרגישות כאילו נעשו במקום. רק הייתי רוצה שיהיו יותר טעמים לבחירה.</p>
    `,
    author: "רונית דגן",
    avatarSrc:
      "https://eu.ui-avatars.com/api/?name=%D7%93%D7%92%D7%9F+%D7%A8%D7%95%D7%A0%D7%99%D7%AA&size=250",
  },
  {
    id: 6,
    title: "שירות מעולה וקינוחים מושלמים!",
    rating: 5,
    content: `
      <p>הגעתי לכאן במקרה ונדהמתי מהשירות החם והאישי. הקינוחים פשוט לוקחים את הכל לשלב הבא. אני אחזור שוב, זה בטוח!</p>
    `,
    author: "מירב אביגיל",
    avatarSrc:
      "https://eu.ui-avatars.com/api/?name=%D7%9E%D7%99%D7%A8%D7%91+%D7%90%D7%91%D7%99%D7%92%D7%99%D7%9C&size=250",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ReviewSection() {
  return (
    // <div className="space-y-10 p-8 bg-pink-100">
    <div
      className="space-y-10 p-8           bg-[#fd00ec]  bg-opacity-15 
"
    >
      <h1 className="text-center text-2xl font-bold text-gray-900">
        :לקוחות ממליצים
      </h1>
      <Swiper
        modules={[Autoplay]} // Register Autoplay module here
        spaceBetween={30} // Spacing between slides
        slidesPerView={3} // Show 3 reviews at once
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Auto slide every 1 second
          disableOnInteraction: false, // Keep autoplay running even after interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // On small screens show 1 review
          },
          768: {
            slidesPerView: 2, // On medium screens show 2 reviews
          },
          1024: {
            slidesPerView: 3, // On large screens show 3 reviews
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="flex flex-col items-center sm:items-center min-h-[250px] h-full"
          >
            <div className="flex flex-col items-center sm:items-center">
              <img
                alt={`${review.author}`}
                src={review.avatarSrc}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="mt-4 text-center  ">
                <p className="text-sm font-medium text-gray-900">
                  {review.author}
                </p>
                <div
                  className="mt-2 flex justify-center sm:justify-start "
                  dir="rtl"
                >
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
            <div className="mt-6 text-center " dir="rtl">
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
