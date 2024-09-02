import styled from "styled-components";
import "./App.css";

import { BiSolidLike } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
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
import { slideImages } from "./contents/slideImages";

function App() {
  return (
    <Container>
      <Header>
        <BurgerKingLogo src="https://www.burgerking.co.kr/dist/favicon_bkr.ico" />
        <Menu>
          <div>메뉴소개</div>
          <div>매장소개</div>
          <div>이벤트</div>
          <div>브랜드스토리</div>
        </Menu>
        <Service>
          <Shop>가맹점 문의</Shop>
          <Order>딜리버리 주문</Order>
        </Service>
      </Header>
      <SwiperWrapper>
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
      </SwiperWrapper>
      <YoutubeContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nnOQcq-XWww?si=BkKlKwL1DPm-fa1D"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </YoutubeContainer>
      <WebContainer>
        <WebCont>
          <a href="https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured">
            <img src="https://www.burgerking.co.kr/dist/img/ico_home_sns_youtube1.ff45a855.png" />
          </a>
          <Cont>
            <span>YOUTUBE</span>
            <WebStatus>
              <FaYoutube size="20" />
              <div>구독 4.9만</div>
            </WebStatus>
          </Cont>
        </WebCont>
        <WebCont>
          <a href="https://www.instagram.com/burgerkingkorea">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ZTM4YjQ5OS0wMzNkLTQ0ODItYjNmMi0xMjhjNGZlMGE3YzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUE2MUUwMUMwQTdBMTFFOTk0NjNBNEZBRjJCMDVBNzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUE2MUUwMUIwQTdBMTFFOTk0NjNBNEZBRjJCMDVBNzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTg0MzFkOC1kYzgyLTQ2MmYtOWE5Mi0xMWE3MGNiMTUxZGIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYmRlOGE0Mi05Zjc1LTRjNDQtOTI2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" />
          </a>
          <Cont>
            <span>FACEBOOK</span>
            <WebStatus>
              <BiSolidLike size="20" />
              <div>좋아요 47.8만</div>
            </WebStatus>
          </Cont>
        </WebCont>
        <WebCont>
          <a href="https://www.instagram.com/burgerkingkorea">
            <img src="https://www.burgerking.co.kr/dist/img/ico_home_sns_insta1.5e20069c.png" />
          </a>
          <Cont>
            <span>INSTAGRAM</span>
            <WebStatus>
              <IoPerson size="20" />
              <div>팔로워 74.9K</div>
            </WebStatus>
          </Cont>
        </WebCont>
      </WebContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  background-color: #f4ebdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BurgerKingLogo = styled.img`
  height: 80px;
  margin: 0 40px 0 0;
`;

const Header = styled.div`
  width: 100%;
  height: 140px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  font-family: "SBAggroB", sans-serif; /* 폰트 적용 */
`;

const Menu = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 90px;
  justify-content: center;
  color: #592316;
  font-weight: 900;
  margin-top: 23px;
  font-family: "SBAggroB", sans-serif; /* 폰트 적용 */
`;

const Service = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 23px 0 0 60px;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-family: "SBAggroB", sans-serif; /* 폰트 적용 */
`;

const Shop = styled.div`
  background-color: #592316;
  border-radius: 30px;
  width: 180px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Order = styled.div`
  background-color: #d91c0b;
  border-radius: 30px;
  width: 180px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%; /* Swiper의 고정 높이 설정 */
  margin-top: 140px; /* Header 높이만큼 Swiper를 아래로 이동 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

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

const YoutubeContainer = styled.div`
  width: 100%;
  height: 680px; /* YouTube 비디오의 높이 설정 */
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const WebContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #683a30;
  position: static;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 105px;
  gap: 200px;
`;

const WebCont = styled.div`
  font-family: "FalmeSans";
  font-weight: bold;
  font-size: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center; /* Centering content vertically */
  gap: 10px;
  justify-content: center; /* Centering content horizontally */
`;

const WebStatus = styled.strong`
  height: 26px;
  margin-top: 5px;
  font-size: 0.9rem;
  color: #2e2e2e;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Cont = styled.div`
  span {
    font-size: 25px;
  }
`;
