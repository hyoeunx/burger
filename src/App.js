import styled from "styled-components";
import "./App.css";

import Header from "./components/header";
import HeadSwiper from "./components/headSwiper";
import SnsContainer from "./components/snsContainer";

function App() {
  return (
    <Container>
      <Header />
      <SwiperWrapper>
        <HeadSwiper />
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
      <SnsContainer />
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

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%; /* Swiper의 고정 높이 설정 */
  margin-top: 140px; /* Header 높이만큼 Swiper를 아래로 이동 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const YoutubeContainer = styled.div`
  width: 100%;
  height: 680px; /* YouTube 비디오의 높이 설정 */
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

