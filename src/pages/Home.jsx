import HeroSwiper from "../components/Swiper/HeroSwiper";
import BrandSwiper from "../components/Swiper/BrandSwiper";
import CategoriesSwiper from "../components/Swiper/CategoriesSwiper";
import ProductCards from "../components/UI/ProductCards";

const Home = () => {
  return (
    <>
      <HeroSwiper />
      <BrandSwiper />
      <CategoriesSwiper />
      <ProductCards />
    </>
  );
};

export default Home;
