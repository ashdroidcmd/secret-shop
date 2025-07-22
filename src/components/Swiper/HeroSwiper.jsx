// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const heroImages = [
  "/images/hero/1.png",
  "/images/hero/2.png",
  "/images/hero/3.png",
];

const HeroSwiper = () => {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-full w-full"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index} className="w-full">
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                className="rounded-box h-auto w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroSwiper;
