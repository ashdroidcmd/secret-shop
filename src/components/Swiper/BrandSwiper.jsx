import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Brand logo sources
const brandLogos = [
  "acer",
  "asus",
  "dell",
  "lenovo",
  "logitech",
  "msi",
  "razer",
  "rog",
  "steelseries",
  "alienware",
  "coolermaster",
  "corsair",
  "hyperx",
  "sennheiser",
  "wd",
  "zowie",
];

const BrandSwiper = () => {
  return (
    <>
      <section className="bg-stone-100 px-4 py-4">
        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 10,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 14,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {brandLogos.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="my-auto flex h-[150px] w-[150px] items-center justify-center rounded-lg"
            >
              <img
                src={`/images/brands/${brand}.png`}
                alt={`${brand} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BrandSwiper;
