import React, { memo } from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import { Autoplay } from "swiper/modules"; // Updated import for Autoplay

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function TiktokFrame() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%", // Ensure full width for smaller screens
        margin: "0 auto",
      }}
    >
      <Swiper
        spaceBetween={10} // Spacing between slides
        slidesPerView={1} // Default show one slide at a time
        breakpoints={{
          // Adjust for different screen sizes
          640: { slidesPerView: 2, spaceBetween: 20 }, // Show two slides on screens >= 640px
          768: { slidesPerView: 3, spaceBetween: 30 }, // Show three slides on screens >= 768px
          1024: { slidesPerView: 3, spaceBetween: 40 }, // Show four slides on screens >= 1024px
        }}
        loop={true} // Enable looping
        // navigation={true} // Enable navigation arrows (next/prev buttons)
        // pagination={{ clickable: true }} // Enable pagination (dots)
        autoplay={{
          delay: 3000, // Automatically slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        slidesPerGroup={1} // Slide one item per transition
      >
        {/* Add each TikTokEmbed as a SwiperSlide */}
        <SwiperSlide>
          <TikTokEmbed
            // url="https://www.tiktok.com/@dorincohen440/video/7398130198887124242?is_from_webapp=1&sender_device=pc&web_id=7403007581662922247"
            url="https://www.tiktok.com/@tati_ch4/video/7097265847529475329?is_from_webapp=1&sender_device=pc&web_id=7403007581662922247

"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TikTokEmbed
            // url="https://www.tiktok.com/@dorincohen440/video/7413021250412432648?is_from_webapp=1&sender_device=pc&web_id=7403007581662922247"
            url="https://www.tiktok.com/@tati_ch4/video/7427103922218634514?is_from_webapp=1&sender_device=pc&web_id=7403007581662922247

"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TikTokEmbed
            // url="https://www.tiktok.com/@dorincohen440/video/7457896687776845074?is_from_webapp=1&sender_device=pc"
            url="https://www.tiktok.com/@tati_ch4/video/6873123354447023362?is_from_webapp=1&sender_device=pc&web_id=7403007581662922247"
            width="100%"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default memo(TiktokFrame);
