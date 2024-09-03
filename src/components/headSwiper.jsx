import React from 'react';
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slideImages } from "../contents/slideImages";


const HeadSwiper = () => {
    return (
        <StyledSwiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 5000 }} // 5초마다 자동으로 슬라이드 전환
          loop={true} // 무한 반복 설정
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        >
          {slideImages.map((data) => (
            <SwiperSlide>
              <SlideImage key={data.id} src={data.image} alt="Slide" />
            </SwiperSlide>
          ))}
        </StyledSwiper>
    );
};

export default HeadSwiper;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%; /* Swiper의 높이를 부모에 맞게 설정 */

  /* Swiper 버튼 스타일 */
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 45px;
    font-weight: 900;
    text-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }

  /* 페이지네이션 스타일 */
  .swiper-pagination-bullet {
    background-color: white;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #d91c0b;
  }

  /* 상단 그림자 스타일 */
  .swiper-wrapper {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 1);
  }

  .swiper-slide {
    height: 100%; /* 기본 height 설정 */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide-active {
    height: 100% !important; /* 활성화된 슬라이드의 height를 100%로 설정 */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%; /* SlideImage의 높이를 부모에 맞게 설정 */
`;
