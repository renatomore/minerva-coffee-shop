import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Frame1 from "../../assets/Carrosel/Frame1.png";
import Frame2 from "../../assets/Carrosel/Frame2.png";
import Frame3 from "../../assets/Carrosel/Frame3.png";
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
          <img src={Frame1} alt="Frame1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Frame2} alt="Frame2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Frame3} alt="Frame3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrousel;
