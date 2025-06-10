import React from "react";
import { Link } from "react-router-dom";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Category data
const categories = [
  { label: "CPU", image: "cpu.jpg" },
  { label: "GPU", image: "gpu.jpg" },
  { label: "Laptop", image: "laptop.jpg" },
  { label: "Motherboard", image: "mobo.jpg" },
  { label: "Monitor", image: "monitor.jpg" },
  { label: "RAM", image: "ram.jpg" },
  { label: "Storage", image: "storage.jpg" },
  { label: "Case", image: "case.jpg" },
  { label: "Fans", image: "fans.jpg" },
  { label: "PSU", image: "psu.jpg" },
];

const CategoriesSwiper = () => {
  return (
    <>
      <section className="bg-stone-100 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Shop by Category
            </h2>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={2}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 5 },
              768: { slidesPerView: 5, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 15 },
            }}
            className="bg-white pb-2"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index} className="text-center">
                <Link to="/shop">
                  <img
                    src={`/images/categories/${cat.image}`}
                    alt={cat.label}
                    className="mb-2 h-50 w-full rounded-md object-cover"
                  />
                  <h6 className="text-lg text-gray-900">{cat.label}</h6>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CategoriesSwiper;
