import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  return (
    <div className="container mx-auto px-8">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <img
            src="https://girorganic.com/cdn/shop/files/Pickle_Web_Banner.jpg?v=1752737841"
            alt="Honey Banner"
                className="w-full h-[500px] object-cover rounded-xl "
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://girorganic.com/cdn/shop/files/Honey_Web_Banner.jpg?v=1752737727"
            alt="Ghee Banner"
              className="w-full h-[500px] object-cover rounded-xl "
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://girorganic.com/cdn/shop/files/Pickle_Web_Banner.jpg?v=1752737841"
            alt="Milk Banner"
               className="w-full h-[500px] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
