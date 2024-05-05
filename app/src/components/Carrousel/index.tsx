import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carrousel.scss";

const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src="src/assets/Carrosel/Frame1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/Carrosel/Frame2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/Carrosel/Frame3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrousel;
